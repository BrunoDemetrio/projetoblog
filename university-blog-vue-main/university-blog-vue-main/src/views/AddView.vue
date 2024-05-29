<script setup>
</script>

<template>
  <main>
    <h4>Novo Post</h4>
    <div class="col-md-6">
      <div class="form">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="title">Título</label>
            <input type="text" id="title" name="title"  class="form-control" v-model="post.title" required>
          </div>
          <div class="form-group mt-3">
            <label for="body">Conteúdo</label>
            <input type="text" id="body" name="body" class="form-control" v-model="post.body" required/>
          </div>
          <button class="btn btn-primary mt-3" @click="savePost">Publicar</button>
        </div>
        <div v-else>
          <h4>Post publicado com sucesso</h4>
          <button class="btn btn-primary" @click="newPost">Novo Post</button>
        </div>  
      </div>
    </div>
  </main>
</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "new-post",
  data() {
    return {
      submitted: false,
      post: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    savePost(){
      var data = {
        title: this.post.title,
        body: this.post.body,
        userId: 1
      }

      PostDataService.create(data)
      .then(response => {
        this.submitted = true;
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>