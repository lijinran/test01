<template>
  <div class="addUpdateDistribution">
    <h1 class="page-header"><span class="page-header-icon"></span>收货确认管理 > 质检结果确认</h1>
    <div class="col-sm-12 col-md-12 main" >
      <div class="form-horizontal j-form">
        <div class="form-group">
          <label  class="col-sm-2 control-label"> 配送批次编号：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="YT201710001" disabled >
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 物资名称：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" disabled value="玉溪（软）-条盒" >
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 抽检任务编号：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="" disabled >
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label"> 配送批次抽检结果：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="合格" disabled >
          </div>
          <div class="col-sm-2">
            <button class="btn-long btn btn-info" >点击查看质检报告</button>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 质检抽检结果确认：</label>
          <div class="col-sm-6">
            <select class="form-control"  name='monitorRole' >
              <option value="">质检结果无异常</option>
              <option value="">质检结果异常</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-info" ><router-link to="/ReceivingManage">确定</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>
