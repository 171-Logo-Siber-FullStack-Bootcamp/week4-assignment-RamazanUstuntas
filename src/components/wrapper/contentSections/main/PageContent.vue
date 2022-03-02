<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="col-md-12 mb-3">
      <button
        type="button"
        class="btn btn-primary ml-3"
        v-if="!isTodoEnabled"
        v-on:click="showTodosData()"
      >
        Get Todo Data
      </button>
    </div>
    <div class="row">
      <!-- Get ToDo Data -->
      <div class="offset-1 col-12 col-md-5" v-if="isTodoEnabled">
        <div class="alert alert-light" role="alert" v-if="todosData.length > 0">
          Completed
        </div>
        <div class="row" v-for="todo in todosData" :key="todo.id">
          <div v-if="todo.completed">
            <div class="col-md-12">
              <div class="alert alert-success" role="alert">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offset-1 col-12 col-md-5" v-if="isTodoEnabled">
        <div
          class="alert alert-primary"
          role="alert"
          v-if="todosData.length > 0"
        >
          Not Completed
        </div>
        <div class="row" v-for="todo in todosData" :key="todo.id">
          <div v-if="!todo.completed">
            <div class="col-md-12">
              <div class="alert alert-danger" role="alert">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  data: function () {
    return {
      todosData: [],
      isTodoEnabled: false,
    };
  },
  methods: {
    showTodosData() {
      this.isTodoEnabled = true;
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((responseJSON) => (this.todosData = responseJSON));
    },
  },
};
</script>