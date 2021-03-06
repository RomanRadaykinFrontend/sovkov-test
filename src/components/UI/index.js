import Vue from 'vue';
import Alert from './Alert.vue';
import Button from './Button.vue';
import Money from './Money.vue';
import Pagination from './Pagination.vue';
import Spinner from './Spinner.vue';
import DataTableRow from './DataTableRow.vue';
import DataTableCell from './DataTableCell.vue';
import MobileDataTableRow from './MobileDataTableRow.vue';

Vue.component('ui-alert', Alert);
Vue.component('ui-button', Button);
Vue.component('ui-money', Money);
Vue.component('ui-pagination', Pagination);
Vue.component('ui-spinner', Spinner);
Vue.component('data-table-row', DataTableRow);
Vue.component('data-table-cell', DataTableCell);
Vue.component('mobile-data-table-row', MobileDataTableRow);
