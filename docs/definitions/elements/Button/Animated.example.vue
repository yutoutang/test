<template lang="html">
  <div>
    <sui-button animated>
      <sui-button-content visible>下一步</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="right arrow" />
      </sui-button-content>
    </sui-button>

    <sui-button animated="vertical">
      <sui-button-content hidden>商店</sui-button-content>
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
    </sui-button>

    <sui-button animated="fade">
      <sui-button-content visible>
        支付VIP账户
      </sui-button-content>
      <sui-button-content hidden>
        每月100元
      </sui-button-content>
    </sui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAnimatedExample',
};
</script>
