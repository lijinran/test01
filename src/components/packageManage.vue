<template>
  <div class="packageManage">
    <h1 class="page-header"><span class="page-header-icon"></span>码包管理</h1>
    <div class="col-sm-12 col-md-12">
      <div class="form-inline j-form">
        <div class="form-group">
          <label>二维码质量批次</label>
          <input type="text" class="form-control" placeholder="">
        </div>
        <div class="form-group">
          <label>供应方</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>XX</option>
          </select>
        </div>
        <div class="form-group">
          <label>物资名称</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>XX</option>
          </select>
        </div>
        <div class="form-group">
          <label>批次状态</label>
          <select class="form-control" >
            <option value='all' >全部</option>
            <option value=''>未关联配送批次</option>
            <option value=''>已关联配送批次</option>
            <option value=''>实物完全配送</option>
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


      <div class="sub-header">
        <h2></h2>
        <div class="table-btn">
          <button type="button" class="btn btn-info">上传码包</button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>二维码质量批次编号</th>
            <th>印刷厂</th>
            <th>物资类型</th>
            <th>物资名称</th>
            <th>二维码数量（万）</th>
            <th>烟标数量（万）</th>
            <th>二维码质量批次状态</th>
            <th>码包状态</th>
            <th>码包更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>01-玉溪（软）-条盒-非卖品-201710-001</td>
            <td>深圳裕同</td>
            <td>卷烟材料</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>400</td>
            <td>350</td>
            <td>未关联配送批次</td>
            <td>未上传</td>
            <td>2017-10-11 20:01:20 </td>
            <td class="pointer">
              <a>删除</a>
              <a>上传码包</a>
              <a>详情</a>
            </td>
          </tr>
          <tr>
            <td>01-玉溪（软）-条盒-非卖品-201710-001</td>
            <td>深圳裕同</td>
            <td>卷烟材料</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>400</td>
            <td>350</td>
            <td>未关联配送批次</td>
            <td>未上传</td>
            <td>2017-10-11 20:01:20 </td>
            <td class="pointer">
              <a>上传码包</a>
              <a>详情</a>
            </td>
          </tr>
          <tr>
            <td>01-玉溪（软）-条盒-非卖品-201710-001</td>
            <td>云南侨通</td>
            <td>卷烟材料</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>400.1</td>
            <td>350</td>
            <td>未关联配送批次</td>
            <td>未上传</td>
            <td>2017-10-11 20:01:20 </td>
            <td class="pointer">
              <a>详情</a>
            </td>
          </tr>
          <tr>
            <td>01-玉溪（软）-条盒-非卖品-201710-001</td>
            <td>红塔彩印</td>
            <td>卷烟材料</td>
            <td>玉溪（软）-条盒-非卖品</td>
            <td>400</td>
            <td>350</td>
            <td>未关联配送批次</td>
            <td>未上传</td>
            <td>2017-10-11 20:01:20 </td>
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
  .page-header-icon {
    background: url(../../static/images/ads.png) no-repeat;
    display: inline-block;
    margin-right: 10px;
    background-size: 100% 100%;
    width: 11px;
    height: 14px;
  }
</style>
