<template>
  <div id="noticeable-newspage-embed" style="width: 100%"></div>
</template>

<script>
import {config} from '../config'

export default {
  mounted() {
    this.$nextTick(function () {
      window.noticeable.render('widget', config.noticeable.newspageEmbedWidgetId, {selector: '#noticeable-newspage-embed'});
    })
  },
  unmounted() {
    window.noticeable.destroy('widget', config.noticeable.newspageEmbedWidgetId);
  }
}
</script>

<style scoped>
</style>
