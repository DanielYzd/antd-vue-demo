<script>
import { Pagination } from 'ant-design-vue'
export default {
  props: {
    pageSize: {
      type: Number
    },
    current: {
      type: Number
    },
    total: {
      type: Number
    }
  },
  name: 'Pagination',
  components: {
    APagination: Pagination
  },
  data() {
    return {
      newcurrent: this.current
    }
  },
  methods: {
    onShowSizeChange(newcurrent, pageSize) {
      console.log(newcurrent, pageSize)
      // this.pageSize = pageSize
      this.$emit('update:pageSize', pageSize)
    },
    onChangeCurrent(page, pageSize) {
      console.log(page, pageSize)
    }
  },
  created() {
    console.log(this.pageSize)
  },
  render() {
    return (
      <div>
        <a-pagination
          v-model={this.newcurrent}
          show-size-changer
          page-size={this.pageSize}
          total={this.total}
          onChange={this.onChangeCurrent}
          onShowSizeChange={this.onShowSizeChange}
        />
      </div>
    )
  }
}
</script>
