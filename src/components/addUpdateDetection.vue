<template>
  <div class="addUpdateDistribution">
    <h1 class="page-header"><span class="page-header-icon"></span>二维码检测 > 商标条盒入库检测 > 抽检任务</h1>
    <div class="col-sm-12 col-md-12 main" >
      <div class="form-horizontal j-form">
        <div class="form-group"><span style="width:100px;display:inline-block;"></span>（标注 <span class="red">*</span> 表示必填选项）</div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"> 抽检方：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="昭通卷烟厂" >
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 抽检部门：</label>
          <div class="col-sm-6">
            <select class="form-control"  name='monitorRole' >
              <option value="">质量监督监测站</option>
              <option value="">技术监督科</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 抽检类型：</label>
          <div class="col-sm-6">
            <select class="form-control"  name='monitorRole' >
              <option value="">卷烟材料</option>
              <option value="">卷烟产品</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 抽检物资：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="玉溪（软）-条盒" >
          </div>
          <div class="col-sm-2">
            <button class=" btn btn-info" >选择抽奖物资</button>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 供应方：</label>
          <div class="col-sm-6">
            <select class="form-control" >
              <option value="">云南侨通</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label  class="col-sm-2 control-label"><span class="red">*</span> 配送批次编号：：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" value="08-201710-0010" >
          </div>
          <div class="col-sm-2">
            <button class="btn-long  btn btn-info" @click="modal1=true"  >选择配送批次编号</button>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-info" ><router-link to="/detection"  >保 存</router-link></button>
            <button class="btn-long btn btn-info" ><router-link to="/detection"  >保存并开始抽检</router-link></button>
            <button class="btn btn-info" ><router-link to="/detection"  >取 消</router-link></button>
          </div>
        </div>
      </div>
    </div>

    <i-modal title="选择配送批次编号"
             v-model="modal1" width="55%"
             class-name="vertical-center-modal">
      <div class="col-sm-12 col-md-12">
        <div class="form-inline j-form">

          <div class="form-group">
            <label>配送批次编号：</label>
            <input type="text" class="form-control" value="08-201710">
          </div>

          <div class="form-group">
            <label>配送批次状态：</label>
            <select class="form-control" >
              <option value='all' >全部</option>
              <option value=''>已配送出库</option>
              <option value=''>已确定收货</option>
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
              <th>配送批次编号</th>
              <th>物资名称</th>
              <th>物资数量（万）</th>
              <th>配送批次状态</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><input type="radio" name="tt"></td>
              <td>08-201710-0011</td>
              <td>玉溪（硬）-条盒</td>
              <td>300</td>
              <td>已收货确认</td>
            </tr>
            <tr>
              <td><input type="radio" name="tt" disabled ></td>
              <td>08-201710-0010</td>
              <td>玉溪（硬）-条盒</td>
              <td>300</td>
              <td>已配送出库</td>
            </tr>
            <tr>
              <td><input type="radio" name="tt"></td>
              <td>08-201710-0012</td>
              <td>玉溪（硬）-条盒</td>
              <td>300</td>
              <td>已收货确认</td>
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
      modal1: false
    }
  }
}
</script>

<style>

</style>
