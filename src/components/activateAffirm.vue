<template>
  <div class="packageManage">
    <h1 class="page-header"><span class="page-header-icon"></span>激活管理 > 激活确认</h1>

    <div class="sub-header">
      <h2>配送批次信息</h2>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>申请编号</th>
          <th>物资类型</th>
          <th>物资名称</th>
          <th>二维码数量（万）</th>
          <th>出库商标条盒出库数量（万）</th>
          <th>质检报告</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>012017100002</td>
          <td>卷烟材料</td>
          <td>玉溪（软）-条盒</td>
          <td>300</td>
          <td>350</td>
          <td>CJYY2017100060.pdf</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="sub-header">
      <h2>二维码数量与出库商标条盒数量对比情况明</h2>
    </div>
      <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th style="text-align: left">二维码数量<span class="big">小于</span>出库商标条盒数量数量</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style="text-align: left">
            <br>
            二维码质量批次：01-玉溪（软）-条盒-201710-001    对应实物存在拆分， 50万实物在01-201710-001配送批次下已出库，该质量批次下所有二维码都已激活。
            <br><br>
          </td>
        </tr>
        </tbody>
      </table>
      </div>
    <div class="form-inline j-form textCenter">
      <div class="form-group">
        <button type="button" class="btn btn-info" ><router-link to="/activateManage">立即激活</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {
        msg: 'Welcome'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.big {font-size: 18px;font-weight: bold;}
</style>
