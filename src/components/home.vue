<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>

    <el-container>
      <el-header style="text-align: right">
        <el-dropdown type="medium">
          <span class="el-dropdown-link">
            账号<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
    
         </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple" style="background-color: #ee706e">今日任务</div>
                      
          </el-col>
          <el-col :span="8"><div class="grid-content bg-purple">未完成任务</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">已完成任务</div></el-col>
        </el-row>



      </el-main>

      <el-footer>Footer</el-footer>

  </el-container>
</el-container>




</template>

<script>
  export default {
    data() {
     
    }, 
    methods: {
      
    }   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: rgb(68, 126, 255);
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: rgb(68, 126, 255);
    text-align: center;
    line-height: 400px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
/*设置头部设置样式 */
  .el-dropdown-link {      
    cursor: pointer;
    color: #ffffff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
/*设置main设置样式 */
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
  .bg-purple {
    background: #d3dce6;
  }
  /* .bg-purple-light {
    background: #e5e9f2;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
</style>
