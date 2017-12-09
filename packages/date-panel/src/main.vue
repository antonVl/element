<template>
  <div class="el-date-panel">
      <date-panel
          style="display: block"

      ></date-panel>
  </div>
</template>

<script>
import DatePanel from '../../date-picker/src/panel/date';

export default {
  name: 'ElDatePanel',
  components: {
    DatePanel
  }
};
</script>
