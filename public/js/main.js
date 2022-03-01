window.addEventListener("load", () => {
  new Vue({
    el: "#wrapper",
    data: {
      pageConfig: {
        showFooter: true,
      },
      todoData:[],
      reactiveValue: "Deneme"
    },
    methods: {
       showAlert(id){
         var item = this.todoData.find(x=>x.id == id);
         item.completed= !item.completed;
       },
       removeTodo(id){
          var filtered = this.todoData.filter(x=>x.id != id);
          this.todoData = filtered;
       }
    },
    created(){
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then((res)=>{return res.json()})
       .then((jsonResponse)=>{
          this.todoData = jsonResponse;
       })
    }
  });
});
