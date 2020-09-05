Vue.component('todo-footer', {
	// aa修改footer
	template: `
	<footer class="footer" v-show="isShowFooter">
	<span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
		<ul class="filters">
			<li>
				<router-link exact to="/">All</router-link>
			</li>
			<li>
				<router-link to="/active">Active</router-link>
			</li>
			<li>
				<router-link to="/completed">Completed</router-link>
			</li>
		</ul>
		<button class="clear-completed" @click="clear" v-show="isShowClearBtn">Clear completed</button>
	</footer>
	`,
	props: ['todos'],
	computed: {
		isShowFooter() {
			return this.todos.length
		},
		leftCount() {
			return this.todos.filter(item => !item.done).length
		},
		isShowClearBtn() {
			return this.todos.some(item => item.done)
		}
	},
	methods: {
		clear() {
			this.$emit('clear-todos')
		}
	}
})
