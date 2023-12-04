<template>
  <dev id = 'App'>
  <img alt="Vue logo" src="./assets/logo2.jpg" class="logo">
  <PostComponent />
</dev>
</template>

<script>
import PostComponent from './components/PostComponent.vue'

export default {
  name: 'App',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#App {
  text-align: center;
}

.logo {
  max-width: 200px; /* 设置最大宽度 */
  max-height: 200px; /* 设置最大高度 */
  width: auto; /* 保持宽高比例 */
  height: auto; /* 保持宽高比例 */
}

#App::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('./assets/logo2.jpg') center/cover no-repeat; /* 设置背景图 */
  opacity: 0.5; /* 设置半透明度 */
  z-index: -1; /* 将背景图放在最底层 */
}
</style>
