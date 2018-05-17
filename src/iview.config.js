import { Layout, Sider, Menu, Submenu, Icon, MenuItem, Header, LoadingBar,
  Dropdown, Avatar, DropdownMenu, DropdownItem, Content, Form, FormItem,
  Select, Option, Table, Page, Modal, Row, Col, Upload, Progress, Notice,
  Collapse, Panel, Button, Input, Badge, AutoComplete, Message, Cascader,
  DatePicker, Steps, Step,
} from 'iview'

export default {
  initComponents (Vue) {
    Vue.prototype.$Message = Message
    Vue.prototype.$Notice = Notice
    Vue.prototype.$Loading = LoadingBar
    Vue.component('Layout', Layout)
    Vue.component('Sider', Sider)
    Vue.component('Menu', Menu)
    Vue.component('Submenu', Submenu)
    Vue.component('Icon', Icon)
    Vue.component('MenuItem', MenuItem)
    Vue.component('Header', Header)
    Vue.component('Dropdown', Dropdown)
    Vue.component('Avatar', Avatar)
    Vue.component('DropdownMenu', DropdownMenu)
    Vue.component('DropdownItem', DropdownItem)
    Vue.component('Content', Content)
    Vue.component('Form', Form)
    Vue.component('FormItem', FormItem)
    Vue.component('Select', Select)
    Vue.component('Option', Option)
    Vue.component('Table', Table)
    Vue.component('Page', Page)
    Vue.component('Modal', Modal)
    Vue.component('Row', Row)
    Vue.component('Col', Col)
    Vue.component('Upload', Upload)
    Vue.component('Progress', Progress)
    Vue.component('Collapse', Collapse)
    Vue.component('Panel', Panel)
    Vue.component('Button', Button)
    Vue.component('Input', Input)
    Vue.component('AutoComplete', AutoComplete)
    Vue.component('Badge', Badge)
    Vue.component('Cascader', Cascader)
    Vue.component('DatePicker', DatePicker)
    Vue.component('Steps', Steps)
    Vue.component('Step', Step)
  }
}
