import DatePanel from './src/main';

/* istanbul ignore next */
DatePanel.install = function(Vue) {
  Vue.component(DatePanel.name, DatePanel);
};

export default DatePanel;
