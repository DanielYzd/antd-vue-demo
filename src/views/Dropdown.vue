<script>
import { Dropdown, Menu, Icon } from 'ant-design-vue'
export default {
  components: {
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AIcon: Icon
  },
  data() {
    return {}
  },
  render() {
    return (
      <a-dropdown>
        <a class="ant-dropdown-link">
          Hover me
          <a-icon type="down" onClick={e => e.preventDefault()}></a-icon>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>11</a-menu-item>
          <a-menu-item>22</a-menu-item>
          <a-menu-item>33</a-menu-item>
        </a-menu>
      </a-dropdown>
    )
  }
}
</script>
