<script>
import { Button, Icon, Dropdown, Menu } from 'ant-design-vue'
export default {
  components: {
    AButton: Button,
    AButtonGroup: Button.Group,
    AIcon: Icon,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  data() {
    return {
      disabled: false,
      back: 'backgroundColor:#ccc',
      iconLoading: false
    }
  },
  methods: {
    click() {
      console.log(11111)
      console.log(Button.Group)
    },
    handleMenuClick(e) {
      console.log(e)
    },
    enterIconLoading() {
      this.iconLoading = true
    }
  },
  render() {
    return (
      <div>
        <a-button type="primary" onClick={this.click}>
          primary
        </a-button>
        <a-button type="default" onClick={this.click}>
          default
        </a-button>
        <a-button type="dashed" onClick={this.click}>
          dashed
        </a-button>
        <a-button type="danger" onClick={this.click}>
          danger
        </a-button>
        <a-button type="link">Link</a-button>
        <br />
        <a-button-group>
          <a-button>Cancel</a-button>
          <a-button type="primary">OK</a-button>
        </a-button-group>
        <br />
        <a-button-group>
          <a-button disabled={this.disabled}>L</a-button>
          <a-button disabled>M</a-button>
          <a-button disabled>R</a-button>
        </a-button-group>
        <br />
        <h3>设置按钮组size大小</h3>
        <a-button-group size={'large'}>
          <a-button type="primary">L</a-button>
          <a-button>M</a-button>
          <a-button>M</a-button>
          <a-button type="dashed">R</a-button>
        </a-button-group>
        <br />
        <h4>With Icon</h4>
        <a-button-group>
          <a-button type="primary">
            {' '}
            <a-icon type="left" />
            Go back{' '}
          </a-button>
          <a-button type="primary">
            {' '}
            Go forward
            <a-icon type="right" />{' '}
          </a-button>
        </a-button-group>
        <a-button-group>
          <a-button type="primary" icon="cloud" />
          <a-button type="primary" icon="cloud-download" />
        </a-button-group>
        <h3>幽灵按钮,将背景色设置为透明，常用在有色背景上面</h3>
        <div style={this.back}>
          <a-button type="primary" ghost>
            Primary
          </a-button>
        </div>
        <h3>
          按钮组合使用时，推荐使用1个主操作 + n
          个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。
        </h3>
        <a-dropdown>
          <a-menu slot="overlay" onClick={this.handleMenuClick}>
            <a-menu-item key="1">1st item</a-menu-item>
            <a-menu-item key="2">2nd item</a-menu-item>
            <a-menu-item key="3">3rd item</a-menu-item>
          </a-menu>
          <a-button>
            {' '}
            Actions <a-icon type="down" />{' '}
          </a-button>
        </a-dropdown>
        <h3>block属性将使按钮适合其父宽度。</h3>
        <div style={'width:400px;'}>
          <a-button type="primary" block>
            hahaha
          </a-button>
        </div>
        <h3>
          添加 loading
          属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
        </h3>
        <a-button type="primary" loading>
          Loading
        </a-button>
        <a-button
          type="primary"
          icon="poweroff"
          loading={this.iconLoading}
          onclick={this.enterIconLoading}
        >
          点击加载
        </a-button>
        <h3>形状按钮</h3>
        <a-button type="primary" loading />
        <a-button type="primary" shape="circle" loading />
        <a-button type="danger" shape="round" loading />
      </div>
    )
  }
}
</script>
