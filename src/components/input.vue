<template >
    <div class="mt-5 mb-5 text-center">
        <input @keyup.enter="creatingTask" type="text"  class="form-control mx-auto" placeholder="Input the task title" v-model="taskname" autofocus>
        <!-- <input type="time"  class="form-control mb-2" placeholder="Input the task time" v-model="newTime"> -->
        <!-- <input type="time"  class="form-control" placeholder="Input the task title" v-model="newTask.newtime"> -->
        <button class="btn btn-info mt-3 p-3 shadow" @click="creatingTask">Add Task</button>
    </div>
</template>


<script>
export default {
    name:'Input',


    data() {
        return {
           taskname:"",  
        }
    },

    methods:{

        creatingTask(){
            this.$store.commit({type: "createTask", taskname:this.taskname});
            // console.log(this.$store.state.task.newtask);
            this.taskname = "";
        },
    }

}


</script>


<style scoped>
    .form-control{
        width: 400px!important;
        height: 60px;
        margin: auto;
        display: block;

    }

    .btn{
        border-radius: 0px!important;
    }

    @media (min-width:300px) and (max-width:450px) {
        .form-control{
            width: 250px!important;
        }
    }
</style>