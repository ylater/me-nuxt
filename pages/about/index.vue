<template>
  <div class="about-me">
    <me-particles></me-particles>
    <div class="about">
      <div class="avatar">
        <img src="@/assets/avatar.png" />
      </div>
      <div>
        <h1><span class="copy">Intro about me</span></h1>
        <h2>Hello!</h2>
        <h2>I’m Murphy</h2>
        <p><span class="text-gradient">Front-end Developer</span></p>
        <!--
        <p>
          I combine the best of our skills and ideas to present you products
          really worth your attention that will change the way you think about
          design, structure, color and website itself.
        </p>
        <p>
          Some of my skills include Web and mobile application design, front-end
          development, creative design,
        </p> -->
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.about-me {
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 100px 0 0 0;
  top: 0;
  display: flex;
  .about {
    position: relative;
    z-index: 10;
    width: 80%;
    height: 80%;
    margin: 0 10%;
    padding: 20px 48px;
    border-radius: 28px;
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-start;
    // background-color: #343338;
    .avatar {
      border-radius: 100%;
      float: left;
      width: 20vw;
      overflow: hidden;
      margin: 0 2vmax 2vmax 0;
      border: 1vw solid #343338;
      shape-outside: circle(51% at 50% 46.5%);
    }
    h1 {
      position: relative;
      padding: 8px;
      // background-color: #000;
      .copy {
        text-transform: uppercase;
        width: 2rem;
        display: block;
        font-size: 1rem;
        line-height: 1;
        margin-bottom: 4rem;
        font-weight: 500;
        background-color: #000;
      }
    }
    h2 {
      font-size: 3em;
      font-weight: 700;
      line-height: 1;
      color: #fff;
    }
    p {
      margin-top: 20px;
      font-size: 1.5em;
      color: #7b8591;
    }
  }
  .me {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    img {
      width: 80%;
      object-fit: cover;
      object-position: center;
      opacity: 0.5;
    }
  }
}
</style>
