<script>
import { Form, Input, Button, Icon } from 'ant-design-vue'
export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    AIcon: Icon
  },
  data() {
    return {
      form: Form.createForm(this, { name: 'inlineForm' })
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    hasErrors(fieldsError) {
      console.log(fieldsError)
      return Object.keys(fieldsError).some(field => fieldsError[field])
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      console.log(isFieldTouched('userName') && getFieldError('userName'))
      return isFieldTouched('userName') && getFieldError('userName')
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    }
  },
  render() {
    const { getFieldDecorator } = this.form
    return (
      <div>
        <a-form from={this.form} layout="inline" onSubmit={this.handleSubmit}>
          <a-form-item
            label="UserName"
            validateStatus={this.userNameError() ? 'error' : ''}
            help={this.userNameError || ''}
          >
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <a-input placeholder="Username">
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color:rgba(0,0,0,.25)"
                />
              </a-input>
            )}
          </a-form-item>
          <a-form-item
            label="Password"
            validateStatus={this.passwordError() ? 'error' : ''}
            help={this.passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <a-input type="password" placeholder="Password">
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color:rgba(0,0,0,.25)"
                />
              </a-input>
            )}
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              disabled={this.hasErrors(this.form.getFieldsError())}
            >
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    )
  }
}
</script>
