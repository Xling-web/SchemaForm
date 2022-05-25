<template>
  <div class="newForm">
    <es-form ref="form">
      <template v-slot:btns="ctx">
        <el-col :span="8">
            <el-form-item>
              <el-button type="primary" @click="submitForm(ctx.ruleForm)">查询</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-col>
      </template>
    </es-form>
  </div>
</template>

<script>
import esForm from './components/esForm'
export default{
  data() {
    return {
      
    }
  },
  components:{esForm},
  methods: {
      async submitForm(formName) {
        try{
          await this.$refs.form.$refs.ruleForm.validate()
          console.log(formName)
        }catch(e){
          return false;
        }
      },
      resetForm() {
        this.$refs.form.$refs.ruleForm.resetFields()
      }
  },
}

</script>
