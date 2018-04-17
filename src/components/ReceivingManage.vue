<template>
  <div class="distributionManage">
    <h1 class="page-header"><span class="page-header-icon"></span>收货确认管理</h1>
    <div class="col-sm-12 col-md-12">
      <div class="form-inline j-form">
        <div class="form-group">
          <label>配送批次编号：</label>
          <input type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label>物资名称：</label>
          <input type="text" class="form-control" value="">
        </div>

        <div class="form-group">
          <label>配送批次确认状态：</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>待收货确认</option>
            <option value=''>已确认收货</option>
            <option value=''>送货异常</option>
            <option value=''>质检结果无异常</option>
            <option value=''>质检结果异常</option>
          </select>
        </div>
        <div class="form-group">
          <label>印刷厂：</label>
          <input type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label>到货日期：</label>
          <row style="display: inline-block;vertical-align: middle">
            <i-col span="12">
              <!--<date-picker type="date" placeholder="选择日期" style="width: 200px"></date-picker>-->
              <date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></date-picker>
            </i-col>
          </row>

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
            <th>配送批次编号</th>
            <th>印刷厂</th>
            <th>物资名称</th>
            <th>送货数量（万）</th>
            <th>到货地点</th>
            <th>到货日期</th>
            <th>确认状态</th>
            <th>配送批次质检报告</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>04-201709-0001</td>
            <td>深圳裕同</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>405.1</td>
            <td>玉溪卷烟厂</td>
            <td>2017-10-03</td>
            <td>待收货确认</td>
            <td></td>
            <td class="pointer">
              <router-link to="/takeDelivery">收货确认</router-link>
              <a @click="modal1=true">查看二维码质量批次</a>
            </td>
          </tr>

          <tr>
            <td>11-201709-1001</td>
            <td>红塔彩印</td>
            <td>玉溪（软）-条盒</td>
            <td>600</td>
            <td>玉溪卷烟厂</td>
            <td>2017-10-03</td>
            <td>已收货确认</td>
            <td>CJYY2017100060.pdf</td>
            <td class="pointer">
              <router-link to="/qcAffirm">质检结果确认</router-link>
              <a @click="modal1=true">查看二维码质量批次</a>
            </td>
          </tr>

          <tr>
            <td>11-201709-1001</td>
            <td>云南侨通</td>
            <td>玉溪（软）-条盒</td>
            <td>600</td>
            <td>昭通卷烟厂</td>
            <td>2017-10-03</td>
            <td>质检结果无异常</td>
            <td>CJYY2017100060.pdf</td>
            <td class="pointer">
              <a @click="modal1=true">查看二维码质量批次</a>
            </td>
          </tr>

          <tr>
            <td>11-201709-1001</td>
            <td>云南侨通</td>
            <td>玉溪（软）-条盒</td>
            <td>600</td>
            <td>昭通卷烟厂</td>
            <td>2017-10-03</td>
            <td>质检结果异常</td>
            <td>CJYY2017100060.pdf</td>
            <td class="pointer">
              <a @click="modal1=true">查看二维码质量批次</a>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
    <template>
      <Page :total="100" class="right"></Page>
    </template>

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

  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {
        modal1: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
