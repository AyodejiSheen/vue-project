<template>
  <div>
    <p class="text-center text-info lead"><u>TASK LIST</u></p>
    <!-- <div
      v-for="(task, index) in this.tasks"
      :key="index"
      :id="index" @click="gettaskid"
      class="ml-5 p-1"
    >
      <input type="checkbox"  :id="index" @click="getid"/>  <span class="eachtask">{{ task}}</span> <span :id="index+'check'" class="completed ml-3">Task Completed</span>
    </div> -->

    <div>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(task, index) in this.tasks" :key="index" >
          <v-expansion-panel-header>
            <div >
              <input type="checkbox" :id="index" @click="getid" />
            <span class="eachtask ml-3" :id="index" @click="gettaskid(index)">{{ task.newtask }} </span>
            <span :id="index + 'check'" class="completed p-1 rounded ml-3"
              >Task Completed</span>
            </div>
              </v-expansion-panel-header>
          <v-expansion-panel-content>
           
            <div v-for="(subtask, index) in task.subtask" :key="index" class="mt-3">
            {{subtask}}
            </div>
            <input class="form-control mb-1 mt-2" type="text" v-model="inputsubtask" />
            <button class="btn btn-primary btn-sm d-block ml-auto" @click="creatingsubtask">Add subtasks</button>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: "Display",

  // props: {
  //   tasks: Array,
  // },

  data() {
    return {
      theid: 0,
      completedTask: 0,
      checker: false,
      tasks: this.$store.state.MyTasks,
      // tasking : this.$store.state.MyTasks,
      inputsubtask:"",
      taskid:0
    };
  },


  methods: {
    getid(e) {
      this.theid = e.target.id;
      console.log(this.theid);
      this.$store.state.completed++;
      this.checker = true;
      document.getElementById(this.theid + "check").style.display = "inline";
      document.getElementById(this.theid).disabled = "true";
      // if(this.$store.state.completed <= this.tasks.length){
      //     // this.$emit('clickedTask', this.completedTask)
      //     console.log(this.completedTask)
      // }else{
      //     console.log("you can oly accept once")
      // }
    },

  creatingsubtask(){
    //  console.log(this.taskid);
    //  console.log()
     this.$store.commit({type: "createSubtask", load: {taskid:this.taskid, subtask:this.inputsubtask} });
   
    //  console.log(this.taskid);
    // this.$store.state.MyTasks[this.taskid].subtask.push(this.inputsubtask);
    // console.log(this.$store.state.MyTasks[this.taskid]);
    this.inputsubtask="";
  },


  gettaskid(e){
      this.taskid = e;
      console.log('tasking: ' + this.taskid)
  }


  },















};
</script>

<style scoped>
.eachtask {
  font-size: 18px;
  /* text-align: left!important; */
  padding-right: 300px!important;
  z-index: 300;
}

.completed {
  color: white;
  background-color: green;
  padding: 1px 3px 1px 3px;
  font-size: 12px;
  display: none;
}

.v-expansion-panel-header__icon {
  margin-left: 300px !important;
  display: none !important;
}

.v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}


    @media (min-width:300px) and (max-width:450px) {
        .eachtask{
            padding-right: 45px!important;
        }
    }
</style>
