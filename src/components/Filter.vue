<template>
  <div id="filter-item">
    <span class="title">{{title}}</span>
    <ul>
      <li v-for="index in data" v-bind:key="index.id" @click="clickItem(index)" class="normal" v-bind:class="{'active': index.isActive}">{{index.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  date() {
    return{
    }
  },
  props: ['title', 'data', 'isActive'],
  methods: {
    clickItem: function (val) {
      this.$emit('changeBg', val)
    }
  }
  
}
</script>

<style scoped>
/* @import '../style/body' */
#filter-item {
  padding: 1px 26px;
  font-size: 13px;
}
#filter-item .title {
  display: inline-block;
  width: 100px;
  height: 32px;
  line-height: 32px;
}
#filter-item ul {
  display: inline-block;
}
#filter-item ul li {
  list-style: none;
  display: inline-block;
  padding: 3px 10px;
  margin-left: 5px;
}
#filter-item ul li:hover {
  cursor: pointer;
}
.textcolor {
  color: blue;
}
.active {
  background-color: #777;
  color: #fff;
  border-radius: 2px;
}
</style>