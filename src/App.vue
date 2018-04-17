<template>
  <div id="app" :style="{ height: inheight + 'px' }">
    <header class="header-main ">
      <div class="company-name left">
        <span>云南中烟工业有限责任公司</span> <span class="shuxian">|</span> <span>物联网管理平台</span>
      </div>
      <div class="user-information right">
        <ul>
          <li class="left"><span class="user"></span>admin <span class="shuxian">|</span> </li>
          <li class="left"><span class="update-pwd"></span>修改密码 <span class="shuxian">|</span> </li>
          <li class="left"><span class="login-out"></span>退出</li>
        </ul>
      </div>
    </header>
    <aside class="menu-mian sidebar">
      <nav class="sidebar-nav">
      <i-row>
      <i-col span="8">
      <i-menu :theme="theme2" :open-names="['1']" accordion>
        <i-submenu name="1">
          <template slot="title">
            <!--<i-icon type="ios-paper"></i-icon>-->
            码包管理
          </template>
          <router-link to="/" ><i-menu-item name="1-1">码包管理</i-menu-item></router-link>
        </i-submenu>
        <i-submenu name="2">
          <template slot="title">
            配送管理
          </template>
          <router-link to="/distributionManage"><i-menu-item name="2-1">配送管理</i-menu-item></router-link>
          <router-link to="/addUpdateDistribution"><i-menu-item name="2-2">创建配送批次</i-menu-item></router-link>
          <router-link to="/theOutbound"><i-menu-item name="2-3">确认出库</i-menu-item></router-link>
        </i-submenu>
        <i-submenu name="3">
          <template slot="title">
            收货确认管理
          </template>
          <router-link to="/ReceivingManage"><i-menu-item name="3-1">收货确认管理</i-menu-item></router-link>
          <router-link to="/takeDelivery"><i-menu-item name="3-2">收货确认</i-menu-item></router-link>
          <router-link to="/qcAffirm"><i-menu-item name="3-3">质检结果确认</i-menu-item></router-link>
        </i-submenu>
        <i-submenu name="4">
          <template slot="title">
            商标条盒入库检测
          </template>
          <router-link to="/detection"  ><i-menu-item name="4-1">商标条盒入库检测</i-menu-item></router-link>
          <router-link to="/addUpdateDetection"><i-menu-item name="4-2">创建抽检任务</i-menu-item></router-link>
        </i-submenu>
        <i-submenu name="5">
          <template slot="title">
            激活管理
          </template>
          <router-link to="/activateManage"><i-menu-item name="5-1">激活管理</i-menu-item></router-link>
          <router-link to="/activateAffirm"><i-menu-item name="5-2">激活确认</i-menu-item></router-link>
        </i-submenu>
      </i-menu>
      </i-col>
      </i-row>

      </nav>
    </aside>
    <div class="content-main">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      inheight:window.innerHeight > 0 ? window.innerHeight-56 : document.documentElement.clientHeight-56,
      theme2: 'dark'
    }
  },
  methods:{}
}
</script>

<style  scoped lang="scss">
#app {
width: 100%;
}
%topText {color :#fff;height: 55px; line-height: 55px;}

.header-main {
  width: 100%;
  height: 55px;
  background: #3A4F72;
  position: fixed;
  top:0;
  z-index: 100;
}
.company-name {
  margin-left: 15px;
  @extend %topText;
  span:first-child {font-size: 20px;}
  span:last-child {font-size: 16px;}
}
.shuxian {
  display: inline-block;
  padding: 0 15px;
}
.user-information {
  ul li {cursor: pointer;}
  margin-right: 15px;
  @extend %topText;
  .user, .update-pwd, .login-out {
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
  .user {
    background: url(../static/images/user.png) no-repeat;
    background-size: 100% 100%;
    width: 17px;
    height: 20px;
  }
  .update-pwd {
    background: url(../static/images/password.png) no-repeat;
    background-size: 100% 100%;
    width: 14px;
    height: 20px;
  }
  .login-out {
    background: url(../static/images/out.png) no-repeat;
    background-size: 100% 100%;
    width: 20px;
    height: 19px;
  }
}

.menu-mian {
  z-index: 100;
  position: fixed;
  width: 240px;
  top: 56px;
  left: 0;
  bottom: 0;
  overflow: auto;
  background: #495060;
  a,a:hover,a:link,a:visited,a:active {color: #fff!important;text-decoration: none!important; }
}

a:hover{background-color:transparent!important;text-decoration : none;}
.content-main {
  width: calc(100% - 241px);height: calc(100% - 111px); margin-left: 241px;margin-top: 56px;
}

</style>
