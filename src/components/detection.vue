<template>
  <div class="distributionManage">
    <h1 class="page-header"><span class="page-header-icon"></span>二维码检测 > 商标条盒入库检测</h1>
    <div class="col-sm-12 col-md-12">
      <div class="form-inline j-form">
        <div class="form-group">
          <label>抽检方：</label>
          <input type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label>抽检类型：</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>卷烟材料</option>
            <option value=''>卷烟产品</option>
          </select>
        </div>
        <div class="form-group">
          <label>抽检物资：</label>
          <input type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label>抽检状态：</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>未开始</option>
            <option value=''>抽检中</option>
            <option value=''>已完成</option>
            <option value=''>质检报告已出</option>
          </select>
        </div>

        <div class="form-group">
          <label>供应方：</label>
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
          <button type="button" class="btn btn-info"><router-link to="/addUpdateDetection">新增抽检任务</router-link></button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>抽检编号</th>
            <th>抽检方</th>
            <th>抽检类型</th>
            <th>抽检物资</th>
            <th>配送批次编号</th>
            <th>供应方</th>
            <th>样品编号</th>
            <th>抽检状态</th>
            <th>质检报告状态</th>
            <th>抽检时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>CJYY2017100060</td>
            <td>玉溪卷烟厂</td>
            <td>卷烟材料</td>
            <td>玉溪（软）-条盒</td>
            <td>04-201709-0001</td>
            <td>红塔彩印</td>
            <td>SAP-010000083507</td>
            <td>质检报告已出</td>
            <td>CJYY2017100060.pdf</td>
            <td>2017-10-10 14:20:01</td>
            <td class="pointer">
              <a>详情</a>
            </td>
          </tr>

          </tbody>
        </table>
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


</style>
