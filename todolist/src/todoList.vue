<template>
	<div id="app">
		<input v-model="newItem" @keyup.enter="addItem" />
		<button @click="addItem">添加</button>
		<ul>
			<li v-for="(todo,index) in todoList" :key="index" @click="removeItem(index)">{{ todo.content }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newItem : "",
				todoList: [
					{content: 'first job'},
					{content: 'second job'}
				]
			}
		},
		methods: {
			addItem() {
				let content = this.newItem.trim();
				if(content.length>0) {
					this.todoList.push({content : content});
					this.newItem = "";
				}
			},
			removeItem(index) {
				this.todoList.splice(index, 1);
			}
		}
	}
</script>
<style>
	#app input{
		height: 17px;
	}
	#app button{
		vertical-align: top;
	}
	#app li{
		font-size: 25px;
		cursor: -webkit-zoom-out;
	}
</style>