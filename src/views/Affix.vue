<script>
import { Affix, Button } from "ant-design-vue";
export default {
  components: {
    AAffix: Affix,
    AButton: Button
  },
  data() {
    return {
      top: 10
    };
  },
  methods: {},
  render() {
    return (
      <div class="affix-demo">
        <a-affix offset-top={this.top}>
          <a-button type="primary" onClick={() => (this.top += 10)}>
            Affix top
          </a-button>
        </a-affix>
      </div>
    );
  }
};
</script>
<style scoped>
.affix-demo {
  height: 1500px;
  overflow: auto;
}
</style>
