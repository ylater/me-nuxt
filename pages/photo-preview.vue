<template>
  <div>
    <a-input v-model="query"></a-input>
    <a-button type="primary" @click="getImg">getImg</a-button>
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { $fetch } from "ofetch";
const query = ref(
  "Giant robots fighting in a futuristic city, with buildings falling and explosions all around, intense, fast-paced, dramatic, stylized, futuristic"
);
const imgUrl = ref("");
const getImg = () => {
  const params = {
    inputs: query.value,
  };
  getImgByQuery(params).then((res) => {
    imgUrl.value = URL.createObjectURL(res);
  });
};

const getImgByQuery = async (data: any) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1-base",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
};
</script>
