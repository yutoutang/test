<template lang="html">
  <sui-item-group divided>
    <sui-item>
      <sui-item-image size="tiny" src="static/images/wireframes/image.png" />
      <sui-item-content vertical-align="middle">
        <sui-item-header href="javascript:void(0)"
          >今天的计划</sui-item-header
        >
      </sui-item-content>
    </sui-item>
    <sui-item>
      <sui-item-image size="tiny" src="static/images/wireframes/image.png" />
      <sui-item-content vertical-align="middle">
        <sui-item-header href="javascript:void(0)"
          >明天的计划</sui-item-header
        >
      </sui-item-content>
    </sui-item>
    <sui-item>
      <sui-item-image size="tiny" src="static/images/wireframes/image.png" />
      <sui-item-content vertical-align="middle">
        <sui-item-header href="javascript:void(0)">下周的计划</sui-item-header>
      </sui-item-content>
    </sui-item>
  </sui-item-group>
</template>

<script>
export default {
  name: 'ContentHeaderExample',
};
</script>
