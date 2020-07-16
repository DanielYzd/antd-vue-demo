<script>
import { Form, Input, Button, Checkbox } from 'ant-design-vue'
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}
export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    ACheckbox: Checkbox
  },
  data() {
    return {
      form: Form.createForm(this, { name: 'dynamic_rule' }),
      checkNick: false
    }
  },
  methods: {
    handleChange(e) {
      console.log(e)
      this.checkNick = e.target.checked
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true })
      })
    },
    check() {
      this.form.validateFields((err, value) => {
        if (!err) {
          console.log(value)
        }
      })
    }
  },
  render() {
    const { getFieldDecorator } = this.form
    return (
      <div>
        <a-form form={this.form}>
          <a-form-item
            label-col={formItemLayout.labelCol}
            wrapper-col={formItemLayout.wrapperCol}
            label="Name"
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your name' }]
            })(<a-input placeholder="Please input your name"></a-input>)}
          </a-form-item>
          <a-form-item
            label-col={formItemLayout.labelCol}
            wrapper-col={formItemLayout.wrapperCol}
            label="NickName"
          >
            {getFieldDecorator('nickname', {
              rules: [
                {
                  required: this.checkNick,
                  message: 'Please input your nickname'
                }
              ]
            })(<a-input placeholder="Please input your nickname"></a-input>)}
          </a-form-item>
          <a-form-item
            label-col={formTailLayout.labelCol}
            wrapper-col={formTailLayout.wrapperCol}
          >
            <a-checkbox checked={this.checkNick} onChange={this.handleChange}>
              Nickname is required
            </a-checkbox>
          </a-form-item>
          <a-form-item
            label-col={formTailLayout.labelCol}
            wrapper-col={formTailLayout.wrapperCol}
          >
            <a-button type="primary" onClick={this.check}>
              Check
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    )
  }
}
</script>
