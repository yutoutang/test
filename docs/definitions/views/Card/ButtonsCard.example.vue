<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-card-content>
          <sui-card-header>小明</sui-card-header>
          <sui-card-meta>朋友</sui-card-meta>
          <sui-card-description
          >小明是一位生活在北京的前端攻城狮。.</sui-card-description
          >
        </sui-card-content>
        <sui-button attached="bottom">
          <sui-icon name="add" /> 关注
        </sui-button>
      </sui-card>
      <sui-card>
        <sui-card-content>
          <sui-card-header>小萌</sui-card-header>
          <sui-card-meta>朋友</sui-card-meta>
          <sui-card-description>
            小萌是一位生活在上海的设计师。
          </sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom">
          <sui-icon name="add" /> 关注
        </sui-button>
      </sui-card>
      <sui-card>
        <sui-card-content>
          <sui-card-header>小艾</sui-card-header>
          <sui-card-meta>朋友</sui-card-meta>
          <sui-card-description>
            小艾是来自北京的算法研究员。
          </sui-card-description>
        </sui-card-content>
        <sui-button attached="bottom">
          <sui-icon name="add" /> 关注
        </sui-button>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsCardExample',
};
</script>
