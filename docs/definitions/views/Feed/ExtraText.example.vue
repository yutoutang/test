<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/laura.jpg" />
      <sui-feed-content>
        <sui-feed-date>刚刚</sui-feed-date>
        <sui-feed-summary>
          <a>小芋</a> 下班打卡成功
        </sui-feed-summary>
        <sui-feed-extra text>
          小芋已经连续5周没有加班啦！
        </sui-feed-extra>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ExtraTextExample',
};
</script>
