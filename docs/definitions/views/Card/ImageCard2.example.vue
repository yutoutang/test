<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-dimmer-dimmable
          @mouseenter.native="cardOneActive = true"
          @mouseleave.native="cardOneActive = false"
        >
          <sui-image src="static/images/avatar/large/elliot.jpg" />
          <sui-dimmer blurring :active="cardOneActive">
            <sui-button inverted>关注</sui-button>
          </sui-dimmer>
        </sui-dimmer-dimmable>
        <sui-card-content>
          <sui-card-header>芋经理</sui-card-header>
          <sui-card-meta>2020年7月加入</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="users" /> 2名成员
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-dimmer-dimmable
          @mouseenter.native="cardTwoActive = true"
          @mouseleave.native="cardTwoActive = false"
        >
          <sui-image src="static/images/avatar/large/jenny.jpg" />
          <sui-dimmer blurring inverted :active="cardTwoActive">
            <sui-button primary>关注</sui-button>
          </sui-dimmer>
        </sui-dimmer-dimmable>
        <sui-card-content>
          <sui-card-header>艾经理</sui-card-header>
          <sui-card-meta>2020年7月加入</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="users" />2名成员
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ImageCard2Example',
  data() {
    return {
      cardOneActive: false,
      cardTwoActive: false,
    };
  },
};
</script>
