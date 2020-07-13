<script>
import { Breadcrumb, Icon } from "ant-design-vue";
export default {
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    AIcon: Icon
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
      </div>
    );
  }
};
</script>