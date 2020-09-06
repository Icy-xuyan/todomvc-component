	'use strict'; // --- b1  daqingzaode1  ceshi1222
	const router = new VueRouter({
		linkActiveClass: 'selected',
		linkExactActiveClass: 'selected'
	})
	const vm = new Vue({
	el: '.todoapp',
	data: {
		todos: [{
				id: 1,
				content: 'vue',
				done: false
			},
			{
				id: 2,
				content: 'react',
				done: false
			},
			{
				id: 3,
				content: 'angular',
				done: false
			},
			{
				id: 4,
				content: 'node',
				done: true
			}
		],
		//是否全选
		isCheckAll: ''
	},
	methods: {
		addTodo(content) {
			this.todos.unshift({
				id: +new Date,
				content,
				done: false
			})
		},
		delTodo(id) {
			this.todos = this.todos.filter(item => item.id !== id)
		},
		clearTodos() {
			this.todos = this.todos.filter(item => !item.done)
		}
	},
	computed: {
		showList() {
			let path = this.$route.path
			if (path === '/') {
				return this.todos
			} else if (path === '/active') {
				return this.todos.filter(item => !item.done)
			} else if (path === '/completed') {
				return this.todos.filter(item => item.done)
			}
		}
	},
	router
	})

	})(window);
