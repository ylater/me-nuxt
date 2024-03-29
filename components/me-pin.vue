<template>
  <div class="me-pin">
    <div class="pin-digit" :class="{ focusedIdx: index === focusedIdx, 'error': showError }" :key="index"
      v-for="(item, index) in digits">
      <div class="pin-digit-inner">{{ digits[index] }}</div>
    </div>
    <div class="digit-keyboard" v-if="showKeyboard">
      <div class="digit-keyboard-row" v-for="(row, index) in keyboard" :key="index">
        <div class="digit-keyboard-item" v-for="(item, index) in row" :key="index" @click="handleClick(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { useEventListener } from '@vueuse/core'
const props = defineProps({
  length: {
    type: Number,
    default: 4
  },
  pin: {
    type: String,
    default: '1234'
  },
  showKeyboard: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['complete', 'error'])
const { length, pin } = toRefs(props)
const focusedIdx = ref(0) //当前输入的索引
const showError = ref(false) //错误提示
//定义一个长度为四的数组
const digits = ref(new Array(length.value).fill(''))
//校验pincode
const checkPin = () => {
  const code = digits.value.join('')
  return code === pin.value
}
useEventListener('keydown', e => {
  //數字鍵
  if (e.key >= '0' && e.key <= '9') {
    digits.value[focusedIdx.value] = e.key
    //输入4位pincode 后立即校验
    if (focusedIdx.value >= length.value - 1) {
      digits.value[focusedIdx.value] = e.key
      if (checkPin()) {
        emit('complete')
      } else {
        emit('error')
        showError.value = true
        setTimeout(() => {
          //清空输入
          focusedIdx.value = 0
          digits.value = new Array(length.value).fill('')
        }, 1000)
      }
    } else {
      showError.value = false
      focusedIdx.value = Math.min(focusedIdx.value + 1, length.value - 1)
    }

  } else if (e.key === 'Backspace') {
    focusedIdx.value = Math.max(focusedIdx.value - 1, 0)
    digits.value[focusedIdx.value] = ''
  }

})
//键盘
const keyboard = ref([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['', 0, '']
])
const handleClick = (item: number | string) => {
  if (item === '') return
  if (focusedIdx.value >= length.value - 1) {
    digits.value[focusedIdx.value] = item
    if (checkPin()) {
      emit('complete')
    } else {
      emit('error')
      showError.value = true
      setTimeout(() => {
        //清空输入
        focusedIdx.value = 0
        digits.value = new Array(length.value).fill('')
      }, 1000)
    }
  } else {
    showError.value = false
    digits.value[focusedIdx.value] = item
    focusedIdx.value = Math.min(focusedIdx.value + 1, length.value - 1)
  }
}
</script>
<style lang="less" scoped>
.me-pin {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 16px;
  --me-pin-size: 80px;

  .pin-digit {
    position: relative;
    width: var(--me-pin-size);
    height: var(--me-pin-size);
    margin: 8px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 2px, 2px, 2px, rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:before {
      position: absolute;
      content: '';
      background-color: whitesmoke;
      border-radius: 10px;
      bottom: 0px;
      height: 3px;
      left: 15%;
      opacity: 0;
      transform: translateY(0px);
      width: 70%;
    }

    &.focusedIdx {
      &:before {
        animation: blink 2s ease-in-out infinite;
        opacity: 1;
        transform: translateY(-10px);
      }
    }

    &.error {
      background: rgba(255, 0, 0, 0.05);
      border: 1px solid rgba(255, 0, 0, 0.2);
    }

    .pin-digit-inner {
      font-size: 48px;
      font-weight: 500;
      color: whitesmoke;
      transition: opacity 250ms, transform 250ms;
      outline: none;
    }
  }
}

.digit-keyboard {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .digit-keyboard-row {
    display: flex;
    align-items: center;
    justify-content: center;

    .digit-keyboard-item {
      width: var(--me-pin-size);
      height: var(--me-pin-size);
      margin: 8px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 2px, 2px, 2px, rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: 500;
      color: whitesmoke;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

//移动端样式
@media (max-width:750px) {
  .me-pin {
    --me-pin-size: 60px;
  }
}
</style>