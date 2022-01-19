<template>
  <div class="loginForm">
    <a-form
      name="loginForm"
      ref="formRef"
      :model="formState"
      :rules="rules"
      v-bind="formItemLayout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item has-feedback label="用户名" name="username">
        <a-input v-model:value="formState.username" type="input" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="密码" name="pass">
        <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">提交</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
  
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "Login",
  setup() {
    const state = reactive({
      usename: '',
      pass: ''
    })
    const rules = {
      pass: [{ required: true, message: '请填写密码',trigger: 'blur' }],
      username: [{ required: true, message: '请填写用户名',trigger: 'blur' }]
    };
    const formItemLayout= {
      labelCol: { span: 6 }
    }
    const handleFinish = async (values)=> {
      console.log(values)
    }
    const handleFinishFailed = async()=> {

    }
    const submit = ()=> {

    }
    const resetForm =()=> {

    }

    return {
      formState : state,
      rules,
      submit,
      formItemLayout,
      resetForm,
      handleFinish,
      handleFinishFailed
    }
  }
}
</script>

<style>
  .loginForm {
    margin: 0 auto;
    width: 30%;
  }
</style>