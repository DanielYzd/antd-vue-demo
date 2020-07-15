<script>
import Pagination from './Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      pageSize: 20,
      current: 4
    }
  },
  name: 'UsePagination',
  render() {
    return (
      <Pagination
        pageSize={this.pageSize}
        current={this.current}
        total={500}
        {...{
          on: { 'update:pageSize': val => (this.pageSize = val) }
        }}
      ></Pagination>
    )
  }
}
</script>
