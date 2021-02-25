

const mutations = {

  createTask(state, payload){
    // let newTask = Object.assign({}, state.task.newTask);
    let newTask = {newtask: payload.taskname, subtask: []}
    // newTask.newtask = payload.taskname
    state.MyTasks.push(newTask);
    // console.log(state.MyTasks);
    // console.log(state.MyTasks.);
  },

  completedTask(state){
    state.completedTask++;
    state.checker = true;
    if(this.completedTask <= this.tasks.length){
      state.completed = state.completedTask;
      console.log(this.completedTask)
  }else{
      console.log("you can oly accept once")
  }
  },


  createSubtask(state, {load}){
    // console.log(state.MyTasks, load.taskid)
    state.MyTasks[load.taskid].subtask.push(load.subtask);
  }

  
}
export default mutations;