var h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var deleted = []
var completed = []

var active = [{uuid: '1', task: '20 minutes of meditation', date: '02/06/18', category: "active"},
              {uuid: '2', task: 'Make 15 minutes of exercise', date: '02/06/18', category: "active"},
              {uuid: '3', task: 'Build a web app', date: '02/06/18', category: "deletedf"},
              {uuid: '4', task: 'Make make the homework', date: '02/06/18', category: "active"},
              {uuid: '5', task: 'Cook a dinner', date: '02/06/18', category: "active"}]

Vue.component('demo-grid', {
  template: '#grid-template',
  replace: true,
  props: {
    data: Array,
    columns: Array,
    st: String,
  },
  computed: {    
    filteredData: function (i) {

      if(i == 'active') {
        return this.active
      } else if (i == 'completed') {
        return this
      }
      if (typeof this.data === 'object') return this.data
    },
  },
  methods: {
    addTask (a) {
      console.log(a)
      var position = 0
      for (var i = 0; i <= active.length - 1; i++) {
        var task = active[i]['task']
        if(task == a) {
          position = i
        }
      }
      completed.push(this.data[position])
      this.data.splice(position , 1)
    },
    rmTask (a) {
      console.log(this.data)
      var position = 0
      for (var i = 0; i <= active.length - 1; i++) {
        var task = active[i]['task']
        if(task == a) {
          position = i
        }
      }
      this.data[position].category = 'dasd'
      deleted.push(this.data[position])
      this.data.splice(position , 1)
    },
    restoreCompleted (a) {
      var position = 0;
      for (var i = 0; i <= completed.length - 1; i++) {
        if (completed[i].task == a.task) {
          position = i
        }
        completed.splice(position,1)
      }
    },
    active () {
      this.data = active
    },
    showAllCompletedTask () {
      console.log(this.data)
      this.data = completed
    },
    showAllDeletedTask () {      
      
      this.data = deleted
    }
}
})

var demo = new Vue({
  el: '#demo', // This makr our target (html tag)
  data: {      // This set up our varliabes and data
    newTask: '',
    gridColumns: ['uuid', 'task', 'date'],
    gridData: active,
    status: 'active'
  }, 
})

var buttons = new Vue({
  el: '#bt',
  props: {
    data: Array,
    newTask: '',
  },
  data: {
    items: active,
    deletedItems: deleted,
    completedItems: completed
  },
  methods: {
    insert () {      
      var numberOfItems = (this.items.length + 1).toString()
      if(this.newTask !== undefined && numberOfItems <= 10) {        
        this.items.push({uuid: numberOfItems, task: this.newTask, date: '02-06-18', status: 'Yet work'})
        this.newTask = ''
      }
    },
    remove () {
      var lastTask = this.items.length - 1
      var deletedTask = this.items[lastTask]
      deleted.push(deletedTask)
      this.items.pop()
    },
    reset () {
      console.log('reset')
      deleted = []
      completed = []

      var h = this.items
      var active = [{uuid: '1', task: '20 minutes of meditation', date: '02/06/18', category: "active"},
                    {uuid: '2', task: 'Make 15 minutes of exercise', date: '02/06/18', category: "active"},
                    {uuid: '3', task: 'Build a web app', date: '02/06/18', category: "deletedf"},
                    {uuid: '4', task: 'Make make the homework', date: '02/06/18', category: "active"},
                    {uuid: '5', task: 'Cook a dinner', date: '02/06/18', category: "active"}]

      var limit = h.length - 1    

      for (var i = 0; i <= limit; i++) {
       this.items.splice(0, 1)
        if (i == limit) {
          for (var i = 0; i <= arTe.length - 1; i++) {
           console.log()
           h.push(arTe[i])
          }
        }
      }        
      if (h.length <= 0) {

        for (var i = 0; i <= arTe.length - 1; i++) {
          h.push(arTe[i])
        }      
      }  
    },
  }
})