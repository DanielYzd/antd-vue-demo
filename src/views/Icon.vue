<script>
import { Icon } from 'ant-design-vue'
import HeartSvg from '@/components/icon/HeartSvg'
import PandaSvg from '@/components/icon/PandaSvg'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})
export default {
  data() {
    return {
      icons: 'icons-list'
    }
  },
  components: {
    AIcon: Icon,
    HeartSvg,
    PandaSvg,
    IconFont
  },

  render() {
    return (
      <div class={this.icons}>
        <h3>
          使用 <Icon /> 标签声明组件，指定图标对应的 type 属性。可以通过 theme
          属性来设置不同的主题风格的图标，也可以通过设置 spin
          属性来实现动画旋转效果。
          <br />
          可以通过设置 theme 属性为 twoTone 来渲染双色图标，并且可以设置主题色。
        </h3>
        <a-icon type="home" theme="twoTone" two-tone-color="#eb2f96"></a-icon>
        <a-icon type="setting" theme="filled" />
        <a-icon type="smile" theme="outlined" />
        <a-icon type="sync" spin />
        <a-icon type="smile" rotate={180} />
        <a-icon type="loading" />
        <h3>自定义图标 </h3>
        <HeartSvg style={'color:hotpink;fontSize:50px;'}></HeartSvg>
        <panda-svg style={'fontSize:50px'}></panda-svg>
        <h3>
          对于使用 iconfont.cn 的用户，通过设置 createFromIconfontCN
          方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。
        </h3>
        <div class="icons-list">
          <icon-font type="icon-tuichu" />
          <icon-font type="icon-facebook" />
          <icon-font type="icon-twitter" />
        </div>
      </div>
    )
  }
}
</script>

<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
