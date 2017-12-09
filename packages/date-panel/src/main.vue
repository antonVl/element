<template>
  <div class="el-date-panel">
      <date-panel
          style="display: block"
          @pick="log"

      ></date-panel>
  </div>
</template>

<script>
import DatePanel from '../../date-picker/src/panel/date';

export default {
  name: 'ElDatePanel',
  components: {
    DatePanel
  },
  methods: {
    log(val) {
      console.log(val);
    }
  }
};
</script>
