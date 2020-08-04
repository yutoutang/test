<template lang="html">
  <sui-statistics-group :columns="4">
    <sui-statistic in-group>
      <sui-statistic-value>
        22
      </sui-statistic-value>
      <sui-statistic-label>
        动态
      </sui-statistic-label>
    </sui-statistic>
    <sui-statistic in-group>
      <sui-statistic-value text>
        Three<br />
        Thousand
      </sui-statistic-value>
      <sui-statistic-label>
        浏览量
      </sui-statistic-label>
    </sui-statistic>
    <sui-statistic in-group>
      <sui-statistic-value> <i class="plane icon"></i> 5 </sui-statistic-value>
      <sui-statistic-label>
        航班
      </sui-statistic-label>
    </sui-statistic>
    <sui-statistic in-group>
      <sui-statistic-value>
        <img
          src="static/images/avatar/small/joe.jpg"
          class="ui circular inline image"
        />
        42
      </sui-statistic-value>
      <sui-statistic-label>
        团队成员
      </sui-statistic-label>
    </sui-statistic>
  </sui-statistics-group>
</template>

<script>
export default {
  name: 'StatisticEvenlyDividedExample',
};
</script>
