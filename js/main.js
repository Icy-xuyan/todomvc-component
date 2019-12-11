//内容组件
Vue.component('todo-main', {
	template: `
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" v-model="isCheckAll">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				<li :class="{completed: item.done, editing:isEdit === item.id}" v-for="item in todos" :key="item.id">
					<div class="view">
						<input class="toggle" type="checkbox" v-model="item.done">
						<label @dblclick="showEdit(item.id)">{{item.content}}</label>
						<button class="destroy" @click="delTodo(item.id)"></button>
					</div>
					<input class="edit" v-model="item.content" @keyup.enter="showEdit">
				</li>
			</ul>
		</section>
	`,
	props: ['todos', 'list'],
	data() {
		return {
			isEdit: -1
		}
	},
	methods: {
		delTodo(id) {
			this.$emit('del-todo', id)
		},
		showEdit(id = -1) {
			console.log(id)
			this.isEdit = id
		}
	},
	computed: {
		isCheckAll: {
			get() {
				return this.list.every(item => item.done)
			},
			set(value) {
				console.log(value)
				this.list.forEach(item => {
					item.done = value
				})
			}
		}
	}
})
