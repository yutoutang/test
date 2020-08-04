<template lang="html">
  <div>
    <sui-button animated>
      <sui-button-content visible>下一步</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="right arrow" />
      </sui-button-content>
    </sui-button>

    <sui-button animated="vertical">
      <sui-button-content hidden>购物车</sui-button-content>
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
    </sui-button>

    <sui-button animated="fade">
      <sui-button-content visible>
        购买会员
      </sui-button-content>
      <sui-button-content hidden>
        ￥15/月
      </sui-button-content>
    </sui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAnimatedExample',
};
</script>
