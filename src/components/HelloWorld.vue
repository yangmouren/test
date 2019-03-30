<template>
  <el-row :gutter="300">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple-dark">
        <el-form ref="form" label-position="top" :model="form" :rules="rules" label-width="80px">
          <el-form-item prop="name">
            <el-input placeholder="请输入账号" id="form.name" v-model="form.name">
              <template slot="prepend">账号</template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" v-model="form.password"  show-password>
              <template slot="prepend">密码</template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary">注册</el-button>
      </div>
    </el-col>
  </el-row>  
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    }, 
    methods: {
      login(){
        let formObj = {};
        formObj.name=this.form.name;
        formObj.password=this.form.password;
        if(formObj.name == '' ||formObj.password == '' ){
        this.$message.error(
          '用户名或密码不能为空！'
          );
        }else
        {
          // alert(formObj.name);
          this.$axios.post('http://localhost:3000/users/login', formObj)				//其中‘/user’为post目标地址，formObj内容为post的内容
            .then(function (response) {		    //post发送成功，则返回函数
              if(response.data === '收到'){
                alert('用户名正确');
              }
              // alert(response.data);
              })
            .catch(function (error) {			    //post发送失败，则返回错误函数
              alert(error);
              });
        }

      }      
    }   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 10px;
    /* &:last-child {
      margin-bottom: 0;
    } */
   
  }
  .el-col {
    border-radius: 4px;
    background: #d3dce6;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
  /* .bg-purple {
    background: #d3dce6;
  }   */
  .grid-content {
    border-radius: 4px;
    min-height: 10px;
    
  }
</style>
