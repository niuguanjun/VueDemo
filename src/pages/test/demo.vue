<template>
	<div class="filter-item" v-if="!hideV">
		<div class="title" v-if="!hidetitle">{{title}}：</div>
		<ul>
	    	<li class="normal" v-for="(item,index) in dataV" v-bind:class="{active: item.active || (!item.id && !backValue)}" @click="itemEvt(item,index)">
          {{item.name}}
        </li>
	    </ul>
	</div>
</template>

<script>
	/*
	 * 列表上方查询条件：客户类型：不限   XXXX
	 *
	 */
	import Clone from 'clone';
  // import { mapState } from 'vuex'

	export default {
		data() {
			return {
				dataV: [],
				hideV: this.hide,
				backValue: '',
				isFirst: true
			}
		},
		props: ['data','title','name','hide','single','defaultValue','hidetitle'],
		beforeMount() {
			this.dataInit()
		},
		mounted() {

		},
		methods: {
			dataInit() {
				if(!this.data) return;

				this.dataV = Clone(this.data)
				this.dataV.unshift({
					id: '',
					name: '不限',
					active: true
				})
			},
			itemEvt(obj,index) {
				// 如果是单选，则初始化
				if(this.single != undefined) {
					this.dataV = Clone(this.data)
					this.dataV.unshift({
						id: '',
						name: '不限',
					})
				}

				// 判断是不是点击的不限
				if(index) {
					obj.active = !obj.active;
					this.dataV.splice(index,1,obj)
					// 取消不限的active
					let o = this.dataV[0];
					o.active = false;
					this.dataV.splice(0,1,o)
				} else {
					// 如果点击的是不限
//					this.dataV = JSON.parse(JSON.stringify(this.data))
					this.dataInit()
				}
				this.dataOp()

			},
			// 数据处理
			dataOp() {
				var obj = this.dataV
				var arr = []

				obj.forEach(item => {
					if(item.active) {
						arr.push(item.id)
					}
				})

				this.backValue = arr.join(',')

				// 返回数据
				this.$emit('filter-return-evt',{
					name: this.name,
					data: this.backValue
				})

			},
			makeActiveInit() {
				if(!this.isFirst) return;

				this.backValue = this.defaultValue
				let iarr = this.defaultValue.split(',')

				let bak = Clone(this.dataV)
				if(iarr.length) {
					// 初始化
					bak.map(item => {
						item.active = false;

						if(iarr.indexOf(item.id) != -1 || iarr.indexOf(item.id+'') != -1) {
							item.active = true
						}
					})
					this.dataV = Clone(bak)
				}

				this.isFirst = false
			}

		},
    // computed: {
    //   // 将store中的变量绑定到this对象上
    // ...mapState([
    //     'unreadNum'
    //   ])
    // },
		watch: {
			data: {
				handler(newValue, oldValue) {
		            this.dataInit()
		　　　　},
		　　　　deep: true
			},
          hide(val) {
              this.hideV = val;
          },
          defaultValue(val) {
          	this.makeActiveInit()
          }

		}
	}
</script>
<style scoped>
.filter-item ul {
	width: 85% ! important;
}

.filter-item title {
	vertical-align: top ! important;
}
</style>

// WEBPACK FOOTER //
// src/components/Filter.vue