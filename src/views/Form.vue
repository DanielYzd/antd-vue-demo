<script>
import { Form, Input, Select, Button } from 'ant-design-vue'
export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    ASelect: Select,
    ASelectOption: Select.Option,
    AButton: Button
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: Form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit(e) {
      //阻止表单提交
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  },
  render() {
    const { getFieldDecorator } = this.form
    return (
      <div>
        <h3>使用 setFieldsValue 来动态设置其他控件的值。</h3>
        <a-form
          layout={this.formLayout}
          form={this.form}
          label-col={{ span: 5 }}
          wrapper-col={{ span: 12 }}
          onSubmit={this.handleSubmit}
        >
          <a-form-item label="Note">
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }]
            })(<a-input></a-input>)}
          </a-form-item>
          <a-form-item label="Gender">
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }]
            })(
              <a-select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <a-select-option value="male">male</a-select-option>
                <a-select-option value="female">female</a-select-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item wrapper-col={{ span: 12, offset: 5 }}>
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    )
  }
}
</script>
