<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-image src="static/images/avatar/large/matthew.png" />
        <sui-card-content>
          <sui-card-header>小明</sui-card-header>
          <sui-card-meta>朋友</sui-card-meta>
          <sui-card-description>
            小明是一位生活在北京的前端攻城狮。
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 关注：75
          <span slot="right">2020年加入</span>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/molly.png" />
        <sui-card-content>
          <sui-card-header>小萌</sui-card-header>
          <sui-card-meta>同事</sui-card-meta>
          <sui-card-description>
            小萌是一位生活在上海的设计师
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 关注：35
          <span slot="right">2011年加入</span>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/elyse.png" />
        <sui-card-content>
          <sui-card-header>小艾</sui-card-header>
          <sui-card-meta>同事</sui-card-meta>
          <sui-card-description>
            小艾是来自北京的算法研究员
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 关注：151
          <span slot="right">2019年加入</span>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'Card1Example',
};
</script>
