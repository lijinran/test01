<template>
  <div class="distributionManage">
    <h1 class="page-header"><span class="page-header-icon"></span>配送管理</h1>
    <div class="col-sm-12 col-md-12">
      <div class="form-inline j-form">
        <div class="form-group">
          <label>配送批次编号：</label>
          <input type="text" class="form-control" value="YT201710001">
        </div>
        <div class="form-group">
          <label>物资名称：</label>
          <input type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label>配送批次状态：</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>未配送出库</option>
            <option value=''>已配送出库</option>
            <option value=''>已收货确认</option>
            <option value=''>收货确认异常</option>
            <option value=''>质检报告已出</option>
            <option value=''>质检结果异常</option>
          </select>
        </div>
        <div class="form-group">
          <label>激活状态：</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>未申请</option>
            <option value=''>未激活确认</option>
            <option value=''>待激活</option>
            <option value=''>激活中</option>
            <option value=''>已激活</option>
          </select>
        </div>
        <div class="form-group">
          <label>印刷厂：</label>
          <input type="text" class="form-control" value="">
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


      <div class="sub-header">
        <h2></h2>
        <div class="table-btn">
          <button type="button" class="btn btn-info"><router-link to="/addUpdateDistribution">新增配送批次</router-link></button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>配送批次编号</th>
            <th>印刷厂</th>
            <th>物资名称</th>
            <th>物资数量（万）</th>
            <th>配送批次状态</th>
            <th>实物配送日期</th>
            <th>配送地点</th>
            <th>激活状态</th>
            <th>激活时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>04-201709-0001</td>
            <td>深圳裕同</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>405.1</td>
            <td>未配送出库</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="pointer">
              <a>修改</a>
              <a>删除</a>
              <router-link to="/takeDelivery">确定出库</router-link>
              <a @click="modal1=true">查看二维码质量批次</a>
            </td>
          </tr>
          <tr>
            <td>11-201709-1001</td>
            <td>红塔彩印</td>
            <td>卷烟材料</td>
            <td>玉溪（软）-条盒</td>
            <td>600</td>
            <td>质检结果无异常</td>
            <td>2017-09-10</td>
            <td>玉溪卷烟厂</td>
            <td>未申请</td>
            <td class="pointer">
              <a @click="modal2=true">申请激活</a>
              <a @click="modal1=true" >查看二维码质量批次</a>
              <a>查看质检报告</a>
            </td>
          </tr>
          <tr>
            <td>08-201710-0001</td>
            <td>云南侨通</td>
            <td>玉溪（硬）</td>
            <td>1000</td>
            <td>收货确认异常</td>
            <td>2017-10-01</td>
            <td>昭通卷烟厂</td>
            <td></td>
            <td></td>
            <td class="pointer">
              <a @click="modal1=true">查看二维码质量批次</a>
              <a>查看异常说明</a>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>

    <i-modal title="配送批次：11-201709-1001，关联 8个二维码质量批次批次。"
             v-model="modal1"
             class-name="vertical-center-modal">
      <p>00-玉溪（软）-条盒-201709-001  &nbsp;&nbsp;&nbsp; 00-玉溪（软）-条盒-201709-001</p><br>
      <p>00-玉溪（软）-条盒-201709-001  &nbsp;&nbsp;&nbsp; 00-玉溪（软）-条盒-201709-001</p><br>
      <p>00-玉溪（软）-条盒-201709-001  &nbsp;&nbsp;&nbsp; 00-玉溪（软）-条盒-201709-001</p><br>
      <p>00-玉溪（软）-条盒-201709-001  &nbsp;&nbsp;&nbsp; 00-玉溪（软）-条盒-201709-001</p>
      <div slot="footer" class="form-group">
        <button type="button" class="btn btn-info" @click="modal1=false" >确定</button>
      </div>
    </i-modal>

    <i-modal title="激活申请确认"
             v-model="modal2"
             class-name="vertical-center-modal">
      <p>配送批次：11-201709-1001</p><br>
      <p>对应二维码数据提交激活申请</p><br>
    </i-modal>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        modal1: false,
        modal2: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
