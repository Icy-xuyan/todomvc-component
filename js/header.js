//头部组件
Vue.component('todo-header', {
	// bb修改herder
	template: `
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="content">
		</header>
	`,
	data() {
		return {
			content: ""
		}
	},
	methods: {
		addTodo() {
			if (this.content == '') return
			this.$emit('add-todo', this.content)
			this.content = ""
		}
	}
})
