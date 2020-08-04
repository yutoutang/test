<template lang="html">
  <div>
    <div class="single-example">
      <sui-statistic horizontal>
        <sui-statistic-value>2,204</sui-statistic-value>
        <sui-statistic-label>浏览</sui-statistic-label>
      </sui-statistic>
    </div>
    <div class="single-example">
      <sui-statistics-group horizontal>
        <sui-statistic in-group>
          <sui-statistic-value>22</sui-statistic-value>
          <sui-statistic-label>动态</sui-statistic-label>
        </sui-statistic>
        <sui-statistic in-group>
          <sui-statistic-value>60</sui-statistic-value>
          <sui-statistic-label>关注</sui-statistic-label>
        </sui-statistic>
        <sui-statistic in-group>
          <sui-statistic-value>31200</sui-statistic-value>
          <sui-statistic-label>粉丝</sui-statistic-label>
        </sui-statistic>
      </sui-statistics-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticHorizontalExample',
};
</script>

<style>
.single-example {
  padding: 20px 0;
}
</style>
