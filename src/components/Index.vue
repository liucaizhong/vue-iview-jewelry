<template>
  <div class="index">
    <Layout>
      <Sider
        ref="sidebar"
        v-model="isCollapsed"
        :collapsed-width="78"
        class="sidebar"
        hide-trigger
        collapsible
        breakpoint="sm"
      >
        <Menu
          :class="menuitemClasses"
          :open-names="['1']"
          active-name="1-1"
          theme="dark"
          width="auto"
          @on-select="navTo"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-people" />
              <span>会员管理</span>
            </template>
            <MenuItem name="1-1">
            <Icon type="search" />
            <span>信息管理</span>
            </MenuItem>
            <MenuItem name="1-2">
            <Icon type="ios-list" />
            <span>预约管理</span>
            </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              <span>门店管理</span>
            </template>
            <MenuItem name="2-1">
            <Icon type="search" />
            <span>信息管理</span>
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          :style="{padding: 0}"
          class="layout-header-bar"
        >
          <Icon
            :class="rotateIcon"
            :style="{margin: '20px 20px 0'}"
            type="navicon-round"
            size="24"
            @click.native="collapsedSider"
          />
          <div class="header-bar">
            <Dropdown class="user-dropdown" placement="bottom-end">
              <a href="javascript:void(0)">
                <Avatar
                  shape="circle"
                  icon="person"
                />
                <span class="user-name">{{ userName }}</span>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <Icon type="android-person" />
                  个人中心
                </DropdownItem>
                <DropdownItem divided>
                  <Icon type="log-out" />
                  退出登录
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      isCollapsed: false,
      userName: 'Te Yu',
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.sidebar.toggleCollapse()
    },
    navTo (name) {
      const paths = {
        '1-1': 'member',
        '1-2': 'booking',
        '2-1': 'shop',
      }
      this.$router.push(paths[name])
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.index {
  /* border: 1px solid #d7dde4; */
  background: #f5f7f9;
  position: relative;
  /* border-radius: 4px; */
  overflow: hidden;

  .ivu-layout-content {
    display: flex;
  }

  .sidebar {
    overflow: auto;
    height: 100vh;
  }

  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item {
    span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    i {
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
  }
  .collapsed-menu {
    .ivu-menu-item {
      padding-left: 25px !important;
    }

    .ivu-menu-submenu-title {
      line-height: .4;
    }

    span {
      width: 0px;
      transition: width .2s ease;
    }

    i {
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;

      &.ivu-menu-submenu-title-icon {
        font-size: 16px;
        display: none;
      }
    }
  }

  .header-bar {
    float: right;
    height: 100%;
    margin-right: 10px;

    .user-dropdown {

      &:hover{
        background: #d0ecf9;
      }

      a:first-child {
        padding-left: 10px;
      }

      .user-name {
        color: rgba(0,0,0,.6);
        font-size: 16px;
        padding: 0 10px 0 5px;
        vertical-align: middle;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .user-dropdown {
      a:first-child {
        padding-right: 10px;
      }
      .user-name {
        display: none;
      }
    }
  }
}

</style>
