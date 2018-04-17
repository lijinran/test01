<template>
  <div class="addUpdateDistribution">
    <h1 class="page-header"><span class="page-header-icon"></span>配送管理 > 出库信息确认</h1>
    <div class="col-sm-12 col-md-12 main" >
      <div class="form-horizontal j-form">
        <div class="form-group"><span style="width:100px;display:inline-block;"></span>（标注 <span class="red">*</span> 表示必填选项）</div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 印刷厂内部配送编号：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="YT201710001" >
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 到货地点：</label>
          <div class="col-sm-6">
            <select class="form-control"  name='monitorRole' >
              <option value="">玉溪卷烟厂</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 物资名称：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="玉溪（软）-条盒" >
          </div>
        </div>


        <div class="table-responsive" style="width: 60%;margin: 20px 0 20px 10%">
          <div class="sub-header">
            <h2>配送批次对应的二维码质量批次信息</h2>
          </div>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>序号</th>
              <th>二维码质量批次</th>
              <th>商标条盒数量（万）</th>
              <th>本次商标条盒出库数量（万）</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>00-玉溪（软）-条盒-201709-001</td>
              <td>300</td>
              <td>
                <span class="red">*</span>
                <input type="text" class="form-control th-input" value="680" >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>00-玉溪（软）-条盒-201709-002</td>
              <td>350</td>
              <td>
                <span class="red">*</span>
                <input type="text" class="form-control th-input" value="600" >
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>00-玉溪（软）-条盒-201709-003</td>
              <td>500</td>
              <td>
                <span class="red">*</span>
                <input type="text" class="form-control th-input" value="500" >
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>00-玉溪（软）-条盒-201709-004</td>
              <td>200</td>
              <td>
                <span class="red">*</span>
                <input type="text" class="form-control th-input" value="280" >
              </td>
            </tr>
            </tbody>
          </table>
          <i-page :total="100" class="right"></i-page>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 当前配送批次出库的商标条盒数量：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="660" >
          </div>万
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 商标条盒出库时间：</label>
          <row style="display: inline-block;vertical-align: middle;    padding-left: 15px;">
            <i-col span="12">
              <date-picker type="date" placeholder="选择日期" style="width: 300px"></date-picker>
              <!--<date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></date-picker>-->
            </i-col>
          </row>

        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-info" ><router-link to="/distributionManage">保 存</router-link></button>
            <button class="btn-long btn btn-info" ><router-link to="/distributionManage">保存并确定出库</router-link></button>
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
  .th-input {
    width: auto!important;
    display: inline-block!important;
  }
</style>
