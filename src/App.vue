<template>
  <div id="app">
    <p class="text-danger display-4 text-center">TASK APP</p>
    <div class=" container shadow ">
      <p class="lead completed  text-center pt-2 pb-2">
        {{getcomplete}} of {{ this.$store.state.MyTasks.length }} completed
      </p>
      <div class="row">
        <div class="col-md-6 shadow">
          <Input />
        </div>

        <div class="col-md-6 shadow pt-4 pb-4">
          <Display />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./components/input.vue";
import Display from "./components/display.vue";

export default {
  name: "App",

  components: {
    Input,
    Display,
  },

  data() {
    return {
      taskName:"",
      tasks:[],
      complete:0

    }
  },

  methods: {

      //   taskAdd(value){
      //     this.tasks = value;
      // },

      // clickedTask (value){
      //   this.complete = value;
      // }


  },

    computed:{
        getcomplete(){
            return this.$store.state.completed;
        }
    }

}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.completed {
  width: 200px;
}
</style>
