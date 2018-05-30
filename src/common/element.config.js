import Vue from 'vue';
import {
  Button,
  DatePicker,
  Table,
  TableColumn
} from 'element-ui';

const ElementComponents = {
  Button,
  DatePicker,
  Table,
  TableColumn
};

Object.keys(ElementComponents).forEach(key => {
  Vue.use(ElementComponents[key]);
});
