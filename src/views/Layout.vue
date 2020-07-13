<script>
import { Layout, Menu, Icon } from "ant-design-vue";

export default {
  components: {
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    ALayoutFooter: Layout.Footer,
    ALayoutSider: Layout.Sider,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AIcon: Icon
  },
  data() {
    return {
      collapsed: false
    };
  },
  render() {
    return (
      // menuitem中的span不能省略
      <div>
        <div id="components-layout-demo-basic">
          <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>

          <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout>
              <a-layout-sider>Sider</a-layout-sider>
              <a-layout-content>Content</a-layout-content>
            </a-layout>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>

          <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout>
              <a-layout-content>Content</a-layout-content>
              <a-layout-sider>Sider</a-layout-sider>
            </a-layout>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>

          <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout>
              <a-layout-header>Header</a-layout-header>
              <a-layout-content>Content</a-layout-content>
              <a-layout-footer>Footer</a-layout-footer>
            </a-layout>
          </a-layout>
        </div>
        <h3>要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定。</h3>
        <div id="components-layout-demo-custom-trigger">
          <a-layout>
            <a-layout-sider v-model={this.collapsed} trigger={null} collapsible>
              <div class="logo" />
              <a-menu theme="dark" mode="inline" default-selected-keys={["1"]}>
                <a-menu-item key="1">
                  <a-icon type="user"></a-icon>
                  <span>nav1</span>
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="video-camera"></a-icon>
                  <span>nav2</span>
                </a-menu-item>
                <a-menu-item key="3">
                  <a-icon type="upload"></a-icon>
                  <span>nav3</span>
                </a-menu-item>
              </a-menu>
            </a-layout-sider>
            <a-layout>
              <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                  class="trigger"
                  type={this.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={() => {
                    this.collapsed = !this.collapsed;
                  }}
                ></a-icon>
              </a-layout-header>
              <a-layout-content style=" margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' ">
                content
              </a-layout-content>
            </a-layout>
          </a-layout>
        </div>
        <a href="https://www.antdv.com/components/layout-cn/">其他布局参考</a>
      </div>
    );
  }
};
</script>
<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>