<script>
import { Breadcrumb, Icon } from "ant-design-vue";
export default {
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    AIcon: Icon,
    ABreadcrumbSeparator:Breadcrumb.Separator
  },
  created(){
     
  },
  render() {
    return (
      <div>
        <h3>基本用法</h3>
        <a-breadcrumb>
          <a-breadcrumb-item>11</a-breadcrumb-item>
          <a-breadcrumb-item>2222</a-breadcrumb-item>
          <a-breadcrumb-item>333</a-breadcrumb-item>
        </a-breadcrumb>
        <h3>带图标</h3>
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home"></a-icon>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <a-icon type="user"></a-icon>
            <span>用户列表</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>Application</a-breadcrumb-item>
        </a-breadcrumb>
        <h3>自定义分隔符</h3>
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>11</a-breadcrumb-item>
          <a-breadcrumb-item>2222</a-breadcrumb-item>
          <a-breadcrumb-item>333</a-breadcrumb-item>
        </a-breadcrumb>
        <a-breadcrumb>
          <span slot="separator">-----</span>
          <a-breadcrumb-item>11</a-breadcrumb-item>
          <a-breadcrumb-item>2222</a-breadcrumb-item>
          <a-breadcrumb-item>333</a-breadcrumb-item>
        </a-breadcrumb>
        <h3>使用 Breadcrumb.Separator 可以自定义分隔符。</h3>
         <a-breadcrumb separator="">
          <a-breadcrumb-item>11</a-breadcrumb-item>
          <a-breadcrumb-separator>****</a-breadcrumb-separator>
          <a-breadcrumb-item>2222</a-breadcrumb-item>
          <a-breadcrumb-item>333</a-breadcrumb-item>
        </a-breadcrumb>
        <h3>和vue-router结合使用</h3>
      </div>
    );
  }
};
</script>