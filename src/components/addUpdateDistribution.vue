<template>
  <div class="addUpdateDistribution">
    <h1 class="page-header"><span class="page-header-icon"></span>配送管理 > {{add?"创建":"修改"}}配送批次</h1>
    <div class="col-sm-12 col-md-12 main" >
      <div class="form-horizontal j-form">
        <div class="form-group"><span style="width:100px;display:inline-block;"></span>（标注 <span class="red">*</span> 表示必填选项）</div>
        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 印刷厂内部配送编号：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="YT201710001" >
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 物资名称：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="玉溪（软）-条盒" >
          </div>
          <div class="col-sm-2">
            <button class=" btn btn-info" >选择物资</button>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 配送批次对应的二维码质量批次：</label>
          <div class="col-sm-6">
            <button class="btn-long  btn btn-info" @click="modal1=true" >选择二维码质量批次信息</button>
            <span style="font-size: 16px;margin-left: 15px">已选择<span class="red">4个</span>二维码质量批次</span>
          </div>

        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"></label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="00-玉溪（软）-条盒-201709-001" >
          </div>
          <div class="col-sm-2">
            <button class="btn-long btn btn-info" >删除该质量批次</button>
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label"></label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="00-玉溪（软）-条盒-201709-002" >
          </div>
          <div class="col-sm-2">
            <button class="btn-long btn btn-info" >删除该质量批次</button>
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label"></label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="00-玉溪（软）-条盒-201709-003" >
          </div>
          <div class="col-sm-2">
            <button class="btn-long btn btn-info" >删除该质量批次</button>
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label"></label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="00-玉溪（软）-条盒-201709-004" >
          </div>
          <div class="col-sm-2">
            <button class="btn-long btn btn-info" >删除该质量批次</button>
          </div>
        </div>




        <div class="form-group">
          <label  class="col-sm-2 control-label">备注说明：</label>
          <div class="col-sm-6">
            <textarea class="form-control"  >00-玉溪（软）-条盒-201709-003 为上一个配送批次下遗留的库存</textarea>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-info" ><router-link to="/distributionManage">保存</router-link></button>
          </div>
        </div>
      </div>
    </div>


    <i-modal title="选择二维码质量批次"
             v-model="modal1" width="55%"
             class-name="vertical-center-modal">
      <div class="col-sm-12 col-md-12">
        <div class="form-inline j-form">

          <div class="form-group">
            <label>二维码质量批次编号：</label>
            <input type="text" class="form-control" value="YT201710001">
          </div>

          <div class="form-group">
            <label>配送批次状态：</label>
            <select class="form-control" >
              <option value='all' >全部</option>
              <option value=''>未关联配送批次</option>
              <option value=''>部分实物已配送</option>
            </select>
          </div>

        </div>
        <div class="form-inline j-form textCenter">
          <div class="form-group">
            <button type="button" class="btn btn-info" >信息查询</button>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-info" >清空查询条件</button>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th></th>
              <th>二维码质量批次编号</th>
              <th>质量批次状态</th>
              <th>二维码数量（万）</th>
              <th>烟标数量（万）</th>
              <th>当前可出库烟标数量（万）</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><i-checkbox></i-checkbox></td>
              <td>08-玉溪（软）-条盒-201710-001</td>
              <td>未关联配送信息</td>
              <td>300</td>
              <td>298</td>
              <td>298</td>
            </tr>
            <tr>
              <td><i-checkbox></i-checkbox></td>
              <td>08-玉溪（软）-条盒-201710-002</td>
              <td>未关联配送信息</td>
              <td>300</td>
              <td>298</td>
              <td>150</td>
            </tr>
            <tr>
              <td><i-checkbox></i-checkbox></td>
              <td>08-玉溪（软）-条盒-201710-003</td>
              <td>部分实物已配送</td>
              <td>300</td>
              <td>300</td>
              <td>298</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="clearfix"></div>
      <template >
        <i-page :total="100" class="right"></i-page>
      </template>
      <div class="clearfix"></div>
      <div slot="footer" class="form-group">
        <button type="button" class="btn btn-info" @click="modal1=false" >确定</button>
      </div>

    </i-modal>



  </div>
</template>

<script>
export default {
  data () {
    return {
      modal1: false,
      add:''
    }
  }
}
</script>

<style>

</style>
