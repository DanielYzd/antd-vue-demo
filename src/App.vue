<template>
  <div id="app">
    <div id="nav">
      <a-affix :offset-top="top">
        <router-link to="/">
          <a-icon type="home" theme="twoTone"></a-icon>
        </router-link>
      </a-affix>
    </div>
    <router-view />
  </div>
</template>
<script>
import { Icon, Affix } from "ant-design-vue";
export default {
  components: {
    AIcon: Icon,
    AAffix: Affix
  },
  data() {
    return {
      top: 10
    };
  }
};
</script>
<style lang="scss"></style>
