<template>
  <div>
    <el-form :inline="true" :model="formInline" ref="form" class="demo-form-inline">
      <el-form-item name="user" label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item name="region" label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      formInline: {
        user: '',
        region: ''
      },
      preForm: {},
      changedForms: {}
    }
  },
  mounted(){
    //深度克隆原表单
    this.preForm = JSON.parse(JSON.stringify(this.formInline))
    const formFields = this.$refs["form"].$children
    for(let i =0, iLen = formFields.length; i < iLen; i++) {
      const temp = formFields[i];
      console.log(temp.$attrs.name + "," + temp.label )
    }
    // console.log(formFields) 
  },
  watch: {
    formInline : {
      deep: true,
      handler: function(newValue, oldValue) {
        const originForm = this.formInline;
        for(let item in originForm){
          if(newValue[item] != this.preForm[item]) {
            this.changedForms[item] = newValue[item]
          }
        }
        // console.log(this.changedForms)
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style>

</style>