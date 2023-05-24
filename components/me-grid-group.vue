<template>
  <div class='me-grid-group grid'>
    <header class="grid-header">
      <h1>Learn to code SVG</h1>
      <p>Click a tile to reveal an image and its source code</p>
    </header>
    <div class="block" v-for="group in 5" :key="group">
      <div class="day" v-for="item in 5">
        <div class="cover">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>	
<style lang="less" scoped>
.grid-header {
  height: 120px;
  margin: 0;
  grid-row: 1;
  grid-column: 1/4;

  h1 {
    font-family: "Fredoka One", cursive;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(12, auto);
  gap: 10px;
  padding: 50px;

  .block {
    &:nth-child(1) {
      grid-row: 2/4;
      grid-column: 1/4;
    }

    &:nth-child(2) {
      grid-row: 4/6;
      grid-column: 1/4;
    }

    &:nth-child(3) {
      grid-row: 6/8;
      grid-column: 1/4;
    }

    &:nth-child(4) {
      grid-row: 8/11;
      grid-column: 1/4;
    }

    &:nth-child(5) {
      grid-row: 11;
      grid-column: 1/4;
    }

  }



  .day {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    background: white;
    border-radius: 10px;
    perspective: 500px;
  }

  .day .cover {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Fredoka One", cursive;
    font-size: 3em;
    transform-origin: left top;
    transition: 1s ease-in-out;
  }
}

@media (min-width: 770px) {
  .grid {
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(6, auto);
  }

  .grid .block:nth-of-type(1) {
    grid-row: 2/4;
    grid-column: 1/4;
  }

  .grid .block:nth-of-type(2) {
    grid-row: 4/6;
    grid-column: 1/4;
  }

  .grid .block:nth-of-type(3) {
    grid-row: 1/3;
    grid-column: 4/7;
  }

  .grid .big-block {
    grid-row: 3/6;
    grid-column: 4/7;
  }

  .grid .small-block {
    grid-row: 6;
    grid-column: 1/6;
  }
}

.block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: inherit;
}

.big-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: inherit;
}

.small-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: inherit;
}

@media (min-width: 770px) {
  .small-block {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}

.day:hover {
  z-index: 10;
}

.day .cover {
  background-color: #2f3029;
  color: #f5eed7;
}
</style>	
