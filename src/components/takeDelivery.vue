<template>
  <div class="addUpdateDistribution">
    <h1 class="page-header"><span class="page-header-icon"></span>收货确认管理 > 收货确认</h1>
    <div class="title-take">系统内显示的配送批次信息</div>
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
          <label  class="col-sm-2 control-label"> 当前配送批次出库的商标条盒数量：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="660" disabled >
          </div>万
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label">收货时间：</label>
          <row style="display: inline-block;vertical-align: middle;    padding-left: 15px;">
            <i-col span="12">
              <date-picker type="date" placeholder="选择日期" style="width: 300px"></date-picker>
              <!--<date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></date-picker>-->
            </i-col>
          </row>
        </div>


        <div class="table-responsive" style="width: 60%;margin-left: 10%">
          <div class="sub-header">
            <h2>配送批次共关联4个二维码质量批次</h2>
          </div>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>序号</th>
              <th>二维码质量批次</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>00-玉溪（软）-条盒-201709-001</td>
            </tr>
            <tr>
              <td>2</td>
              <td>00-玉溪（软）-条盒-201709-002</td>
            </tr>
            <tr>
              <td>3</td>
              <td>00-玉溪（软）-条盒-201709-003</td>
            </tr>
            <tr>
              <td>4</td>
              <td>00-玉溪（软）-条盒-201709-004</td>
            </tr>
            </tbody>
          </table>
          <i-page :total="100" class="right"></i-page>
        </div>

        <div class="title-take">与印刷厂实际配结果比对结果</div>

        <div class="table-responsive" style="width: 60%;margin-left: 10%">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>比对项目</th>
              <th>比对结果</th>
              <th>说明</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>到货商标/条盒数据（万）</td>
              <td>
                <span class="red">*</span>
                <select class="form-control th-select"    >
                  <option value='' >一致</option>
                  <option value=''>不一致</option>
                </select>
              </td>
              <td>
                <input type="text" class="form-control" value="680" >
              </td>
            </tr>
            <tr>
              <td>配送批次编号</td>
              <td>
                <span class="red">*</span>
                <select class="form-control th-select"    >
                  <option value='' >一致</option>
                  <option value=''>不一致</option>
                </select>
              </td>
              <td>
                <input type="text" class="form-control" value="4" >
              </td>
            </tr>
            <tr>
              <td>二维码质量批次数量（个）</td>
              <td>
                <span class="red">*</span>
                <select class="form-control th-select"    >
                  <option value='' >一致</option>
                  <option value=''>不一致</option>
                </select>
              </td>
              <td>
                <input type="text" class="form-control" value="" >
              </td>
            </tr>
            <tr>
              <td>二维码质量批次名称</td>
              <td>
                <span class="red">*</span>
                <select class="form-control th-select"    >
                  <option value='' >部分一致</option>
                  <option value='' >完全一致</option>
                  <option value=''>不一致</option>
                </select>
              </td>
              <td>
                实物配送单上未显示二维码质量批次:00-玉溪（软）-条盒-201709-004
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 确认结果：</label>
          <div class="col-sm-6">
            <select class="form-control"  name='monitorRole' >
              <option value="">确定收货</option>
              <option value="">送货异常</option>
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
.title-take {
  font-size: 18px;background: #DCDFE7;
  display: inline-block;
  height: 40px;line-height: 40px;
  padding: 0 15px;
  border-radius: 4px;
  margin: 10px 50px;
}
  .th-select {
    width: auto!important;
    display: inline-block!important;
  }
</style>
