<template>
  <div class="container">
    <h1>Welcome to WG~!</h1>
    <div class="create-post">
      <label for="create-post">Latest News!?</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      <button v-on:click="createPost">Post</button>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        <div class="post-header">
          <span class="created-at">{{ formatDate(post.createdAt) }}</span>
        </div>
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    formatDate(date) {
      return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
  div.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
  }

  h1 {
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
  }

  .create-post {
    margin-bottom: 20px;
    display: flex; 
    align-items: center; 
  }

  label {
    margin-right: 10px;
    font-weight: bold; 
  }

  input {
    padding: 8px;
    margin-right: 10px;
    flex: 1; 
  }

  button {
    padding: 8px 16px;
    background-color: #007bff; 
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3; 
  }

  p.error {
    border: 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
    color: #d9534f;
  }

  .post {
    position: relative;
    border: 1px solid #0d5097;
    background-color: rgb(208, 245, 248);
    padding: 10px;
    margin-bottom: 15px;
  }

  .post-header {
    background-color: rgba(0, 10, 100, 0.623);
    color: white;
    padding: 5px;
    font-size: 13px;
    margin-bottom: 10px;
  }

  p.text {
    font-size: 16px;
    margin-bottom: 0;
  }
</style>

