<script>
import { Row, Col } from "ant-design-vue";
export default {
  components: {
    ARow: Row,
    ACol: Col
  },
  data() {
    return {
      height100: "height-100",
      height50: "height-50",
      height120: "height-120",
      height80: "height-80"
    };
  },
  render() {
    return (
      <div>
        <a-row style={"height:100px;"}>
          <a-col span={12} style={"backgroundColor:red;height:100%;"}>
            col12
          </a-col>
          <a-col span={12} style={"backgroundColor:yellow;height:100%;"}>
            col12
          </a-col>
        </a-row>
        <h3>垂直靠上，水平居中</h3>
        <a-row type="flex" justify="center" align="top">
          <a-col span={4} class={this.height100}>
            Col4
          </a-col>
          <a-col span={4} class={this.height50}>
            Col4
          </a-col>
          <a-col span={4} class={this.height120}>
            Col4
          </a-col>
          <a-col span={4} class={this.height80}>
            Col4
          </a-col>
        </a-row>
        <h3>垂直居中，水平around</h3>
        <a-row type="flex" justify="space-around" align="middle">
          <a-col span={4} class={this.height100}>
            Col4
          </a-col>
          <a-col span={4} class={this.height50}>
            Col4
          </a-col>
          <a-col span={4} class={this.height120}>
            Col4
          </a-col>
          <a-col span={4} class={this.height80}>
            Col4
          </a-col>
        </a-row>
        <h3>垂直靠下，水平between</h3>
        <a-row type="flex" justify="space-between" align="bottom">
          <a-col span={4} class={this.height100}>
            Col4
          </a-col>
          <a-col span={4} class={this.height50}>
            Col4
          </a-col>
          <a-col span={4} class={this.height120}>
            Col4
          </a-col>
          <a-col span={4} class={this.height80}>
            Col4
          </a-col>
        </a-row>
        <h3>可以通过Flex布局的order来改变顺序</h3>
        <a-row type="flex">
          <a-col span={6} order={4}>
            1
          </a-col>
          <a-col span={6} order={3}>
            2
          </a-col>
          <a-col span={6} order={2}>
            3
          </a-col>
          <a-col span={6} order={1}>
            4
          </a-col>
        </a-row>
        <h3>
          使用 row-flex 定义 flex 布局，其子元素根据不同的值
          start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。
        </h3>
        <a-row type="flex" justify="start">
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
        </a-row>
        <a-row type="flex" justify="center">
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
        </a-row>
        <a-row type="flex" justify="end">
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
        </a-row>
        <a-row type="flex" justify="space-between">
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
        </a-row>
        <a-row type="flex" justify="space-around">
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
          <a-col span={4}>col-4</a-col>
        </a-row>
        <h3>
          栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter
          属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)
          如果要支持响应式，可以写成xs: 8, sm: 16, md: 24, lg: 32 。
          如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距] [16, xs: 8,
          sm: 16, md: 24, lg: 32 ]
        </h3>
        <h3>其他属性参考antdvue官网</h3>
        <a href="https://www.antdv.com/components/grid-cn/">栅格</a>
      </div>
    );
  }
};
</script>
<style scoped>
.height-100 {
  height: 100px;
  background-color: aqua;
}
.height-50 {
  height: 50px;
  background-color: rgb(50, 78, 78);
}
.height-120 {
  height: 120px;
  background-color: rgb(151, 194, 194);
}
.height-80 {
  height: 80px;
  background-color: rgb(210, 241, 241);
}
</style>
