<template>
  <div id="app">
    <div id="nav">
     
      <router-link to="/">
        <a-icon type="home" theme="twoTone"></a-icon>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import {Icon} from 'ant-design-vue'
export default {
components:{
  AIcon:Icon
}
};
</script>
<style lang="scss"></style>
