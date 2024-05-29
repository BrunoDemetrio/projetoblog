<script setup>
</script>

<template>
  <main>
    <h4>Todos os posts</h4>

    <div class="col-md-12">
      <div class="card mb-3" v-for="(post, index) in posts" :key="index">
        <div class="card-header">
          {{ post.title }}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{ post.body }}</p>
          </blockquote>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "list-posts",
  data(){
    return {
      posts: []
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
      .then(response =>{
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch(e => {
        console.log(e);
      });
    }    
  },
  mounted() {
    this.retrievePosts();
  },
}
</script>
