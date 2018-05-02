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
          :open-names="openNames"
          :active-name="activeName"
          theme="dark"
          width="auto"
          @on-select="navTo"
        >
          <Submenu
            v-for="(menu, i) in sidebarMenus"
            :name="`${i}`"
            :key="i"
          >
            <template slot="title">
              <Icon :type="menu.icon" />
              <span>{{ menu.name }}</span>
            </template>
            <MenuItem
              v-for="(submenu, k) in menu.items"
              :name="`${i}-${k}`"
              :key="k"
            >
            <Icon :type="submenu.icon" />
            <span>{{ submenu.name }}</span>
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
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
        <Content>
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { SIDEBARMENUS, SIDEBARSUBMENUS } from '@/constant'

export default {
  name: 'Index',
  data () {
    return {
      isCollapsed: false,
      userName: 'Te Yu',
      openNames: ['0'],
      activeName: '0-0',
      sidebarMenus: SIDEBARMENUS,
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
    },
  },
  created () {
    const activeName = SIDEBARSUBMENUS[this.$route.path]
    this.activeName = activeName
    this.openNames = [activeName[0]]
  },
  methods: {
    collapsedSider () {
      this.$refs.sidebar.toggleCollapse()
    },
    navTo (name) {
      const [menu, submenu] = name.split`-`
      const navToUrl = this.sidebarMenus[menu].items[submenu].url
      this.$router.push(navToUrl)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.index {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;

  .ivu-layout-content {
    position: relative;
    background: #fff;
    min-height: 260px;

    > div {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      padding: 10px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;

      .ivu-form {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .sidebar {
    overflow: auto;
    height: 100vh;
  }

  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    padding: 0;
    border-bottom: 1px solid #dddee1;
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
