<template>
  <div class="ai-page">
    <div class="ai-main">
      <div class="ai-aside">
        <ul class="nav">
          <li
            v-for="nav in navList"
            :key="nav.name"
            :class="{ active: nav.model === model }"
          >
            {{ nav.name }}
          </li>
        </ul>
      </div>
      <div class="ai-main">
        <!-- <router-view></router-view> -->
        <div class="records">
          <a-scrollbar>
            <div class="chat" v-for="(item, index) in chatRecods" :key="index">
              <div class="caht-q">
                <div class="caht-q-text">{{ item.inputs }}</div>
              </div>
              <div class="caht-a">
                <a-image :src="item.result" width="200" height="200"></a-image>
              </div>
            </div>
          </a-scrollbar>
        </div>
        <div class="input">
          <a-input v-model="query" @press-enter="getImg" :loading="isLoading">
            <template #button-icon>
              <icon name="ep:search" />
            </template>
          </a-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  key: "ai",
  title: "AI",
});
type ChatType = "TextToImage" | "ImageToText" | "ImageToTmage";
const navList = [
  {
    name: "TextToImage",
    model: "prompthero/openjourney",
  },
  {
    name: "GPT2",
    model: "gpt2",
  },
  {
    name: "ImageToText",
    model: "stabilityai/stable-diffusion-2-1",
  },
];
const model = ref("prompthero/openjourney");
const chatRecods = ref<any>([]);
const query = ref("");
const imgUrl = ref("");
const isLoading = ref(false);
function getImg() {
  const params = {
    inputs: query.value + " , mdjrny-v4 style",
  };
  isLoading.value = true;
  getImgByQuery(params).then((res) => {
    const url = URL.createObjectURL(res);
    chatRecods.value.push({
      type: "text to image",
      inputs: query.value,
      result: url,
    });
    isLoading.value = false;
    query.value = "";
  });
}
//text to image
async function getImgByQuery(data: any) {
  const response = await fetch(
    `https://api-inference.huggingface.co/models/${model.value}`,
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  // return console.log(JSON.stringify(response));

  const result = await response.blob();
  return result;
}
</script>
<style lang="less" scoped>
.ai-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .ai-main {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .ai-aside {
      width: 200px;
      .nav {
        display: flex;
        flex-direction: column;
        li {
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 20px;
          margin-bottom: 10px;
          color: #fff;
          background-color: #000;
          transition: all 0.3s;
          &.active {
            background-color: #fff;
            color: #000;
          }
          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
    }
    .ai-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: #222327;
      border-radius: 28px;
      padding: 30px;
      .records {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          margin: 10px;
        }
        .chat {
          display: flex;
          flex-direction: column;
          margin: 10px;
          .caht-q {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .caht-q-text {
              position: relative;
              background-color: #000;
              padding: 10px 20px;
              border-radius: 20px;
              margin-bottom: 10px;
              max-width: 400px;
              word-break: break-all;
              font-size: 16px;
              line-height: 1.2;
              ::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-right: 10px solid #000;
              }
            }
          }
          .caht-a {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .caht-a-text {
              background-color: #fff;
              padding: 10px 20px;
              border-radius: 20px;
              margin-bottom: 10px;
              max-width: 400px;
              word-break: break-all;
            }
          }
        }
      }
      .input {
        margin-top: 20px;
        height: 60px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        .arco-input-wrapper {
          height: 100%;
          width: 100%;
          border-radius: 30px;
          flex: 1;
          margin-right: 20px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          font-size: 15px;
          .arco-input {
            font-size: 16px;
            &.arco-input-size-medium {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
