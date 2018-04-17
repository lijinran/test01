<template>
  <div class="distributionManage">
    <h1 class="page-header"><span class="page-header-icon"></span>激活管理</h1>
    <div class="col-sm-12 col-md-12">
      <div class="form-inline j-form">
        <div class="form-group">
          <label>申请编号：</label>
          <input type="text" class="form-control" value="YT201710001">
        </div>
        <div class="form-group">
          <label>配送批次编号：</label>
          <input type="text" class="form-control" value="">
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
          <label>物资名称：</label>
          <input type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label>激活时间：</label>
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
            <th>申请编号</th>
            <th>印刷厂</th>
            <th>物资名称</th>
            <th>物资类型</th>
            <th>配送批次编号</th>
            <th>二维码数量（万）</th>
            <th>实物验标数量（万）</th>
            <th>配送批次质检报告</th>
            <th>激活状态</th>
            <th>申请时间</th>
            <th>激活时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>012017100002</td>
            <td>深圳裕同</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>卷烟材料</td>
            <td>04-201709-0001</td>
            <td>300</td>
            <td>350</td>
            <td>CJYY2017100060.pdf</td>
            <td>待激活确认</td>
            <td>2017-10-11 11:12:23</td>
            <td></td>
            <td class="pointer">
              <router-link to="/activateAffirm">确定激活</router-link>
              <a>查看详情</a>
            </td>
          </tr>
          <tr>
            <td>012017100002</td>
            <td>红塔彩印</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>卷烟材料</td>
            <td>04-201709-0001</td>
            <td>300</td>
            <td>350</td>
            <td>CJYY2017100060.pdf</td>
            <td>待激活</td>
            <td>2017-10-11 11:12:23</td>
            <td></td>
            <td class="pointer">
              <router-link to="/activateAffirm">确定激活</router-link>
              <a>查看详情</a>
            </td>
          </tr>
          <tr>
            <td>012017100002</td>
            <td>云南侨通</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>卷烟材料</td>
            <td>04-201709-0001</td>
            <td>300</td>
            <td>350</td>
            <td>CJYY2017100060.pdf</td>
            <td>激活中</td>
            <td>2017-10-11 11:12:23</td>
            <td></td>
            <td class="pointer">
              <router-link to="/activateAffirm">确定激活</router-link>
              <a>查看详情</a>
            </td>
          </tr>
          <tr>
            <td>012017100002</td>
            <td>云南侨通</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>卷烟材料</td>
            <td>04-201709-0001</td>
            <td>300</td>
            <td>350</td>
            <td>CJYY2017100060.pdf</td>
            <td>已激活</td>
            <td>2017-10-11 11:12:23</td>
            <td>2017-10-10 11:12:20</td>
            <td class="pointer">
              <a>查看详情</a>
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
