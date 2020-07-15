<script>
import { Menu, Icon, Button, Switch } from 'ant-design-vue'
export default {
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AIcon: Icon,
    ASubMenu: Menu.SubMenu,
    AMenuItemGroup: Menu.ItemGroup,
    AButton: Button,
    ASwitch: Switch
  },
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      collapsed: false,
      theme: 'dark'
    }
  },
  methods: {
    handleClick(e) {
      console.log('click', e)
    },
    titleClick(e) {
      console.log('titleClick', e)
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light'
    }
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val)
    }
  },
  render() {
    return (
      <div>
        <h3>顶部导航菜单</h3>
        <a-menu v-model={this.current} mode="horizontal">
          <a-menu-item key="mail">
            <a-icon type="mail" />
            Navigation One
          </a-menu-item>
          <a-menu-item key="app" disabled>
            <a-icon type="appstore" />
            Navigation Two
          </a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">
              <a-icon type="setting" />
              Navigation Three - Submenu
            </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1">Option 1</a-menu-item>
              <a-menu-item key="setting:2">Option 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
              <a-menu-item key="setting:3">Option 3</a-menu-item>
              <a-menu-item key="setting:4">Option 4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-menu-item key="alipay">
            <a
              href="https://antdv.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </a-menu-item>
        </a-menu>
        <h3>垂直内嵌菜单</h3>
        <a-menu
          style="width: 256px"
          default-selected-keys={['1']}
          open-keys={this.openKeys}
          {...{
            on: { 'update:open-keys': val => (this.openKeys = [val]) }
          }}
          mode="inline"
          onClick={this.handleClick}
        >
          <a-sub-menu key="sub1" onTitleClick={this.titleClick}>
            <span slot="title">
              <a-icon type="mail" />
              <span>Navigation One</span>
            </span>
            <a-menu-item-group key="g1">
              <template slot="title">
                <a-icon type="qq" />
                <span>Item 1</span>
              </template>
              <a-menu-item key="1">Option 1</a-menu-item>
              <a-menu-item key="2">Option 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="g2" title="Item 2">
              <a-menu-item key="3">Option 3</a-menu-item>
              <a-menu-item key="4">Option 4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub2" onTitleClick={this.titleClick}>
            <span slot="title">
              <a-icon type="appstore" />
              <span>Navigation Two</span>
            </span>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="7">Option 7</a-menu-item>
              <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="setting" />
              <span>Navigation Three</span>
            </span>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
          </a-sub-menu>
        </a-menu>
        <h3>缩起内嵌菜单</h3>
        <a-switch
          default-checked
          checked-children="dark"
          un-checked-children="light"
          onChange={this.changeTheme}
        />
        <div style="width: 256px">
          <a-button
            type="primary"
            style="margin-bottom: 16px"
            onClick={this.toggleCollapsed}
          >
            <a-icon type={this.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </a-button>
          <a-menu
            default-selected-keys={['1']}
            default-open-keys={['sub1']}
            mode="inline"
            theme={this.theme}
            inline-collapsed={this.collapsed}
          >
            <a-menu-item key="1">
              <a-icon type="pie-chart" />
              <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="desktop" />
              <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="inbox" />
              <span>Option 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title">
                <a-icon type="mail" />
                <span>Navigation One</span>
              </span>
              <a-menu-item key="5">Option 5</a-menu-item>
              <a-menu-item key="6">Option 6</a-menu-item>
              <a-menu-item key="7">Option 7</a-menu-item>
              <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title">
                <a-icon type="appstore" />
                <span>Navigation Two</span>
              </span>
              <a-menu-item key="9">Option 9</a-menu-item>
              <a-menu-item key="10">Option 10</a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
    )
  }
}
</script>
