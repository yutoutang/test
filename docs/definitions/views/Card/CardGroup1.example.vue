<template lang="html">
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card>
        <sui-card-content>
          <sui-image
            src="static/images/avatar/small/elliot.jpg"
            class="right floated"
          />
          <sui-card-header>桐人</sui-card-header>
          <sui-card-meta>爱丽丝的朋友</sui-card-meta>
          <sui-card-description>
            请大家脑补内容
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-container text-align="center">
            <sui-button-group>
              <sui-button basic positive>同意</sui-button>
              <sui-button basic negative>拒绝</sui-button>
            </sui-button-group>
          </sui-container>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-card-content>
          <sui-image
            src="static/images/avatar/small/jenny.jpg"
            class="right floated"
          />
          <sui-card-header>亚斯娜</sui-card-header>
          <sui-card-meta>新成员</sui-card-meta>
          <sui-card-description>
            亚斯娜向加入讨论组
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-container text-align="center">
            <sui-button-group>
              <sui-button basic positive>同意</sui-button>
              <sui-button basic negative>拒绝</sui-button>
            </sui-button-group>
          </sui-container>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'CardGroup1Example',
};
</script>
