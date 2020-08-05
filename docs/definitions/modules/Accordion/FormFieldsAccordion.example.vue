<template lang="html">
  <div>
    <sui-segment>
      <sui-form>
        <sui-form-field>
          <label>用户名</label>
          <input placeholder="用户名" />
        </sui-form-field>
        <sui-form-field>
          <label>密码</label>
          <input placeholder="密码" />
        </sui-form-field>
        <sui-form-field>
          <sui-accordion>
            <a is="sui-accordion-title">
              <sui-icon name="dropdown" />
              其他
            </a>
            <sui-accordion-content>
              <label>验证码</label>
              <input placeholder="验证码" />
            </sui-accordion-content>
          </sui-accordion>
        </sui-form-field>
        <sui-button type="submit">提交</sui-button>
      </sui-form>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'FormFieldsAccordion',
};
</script>
