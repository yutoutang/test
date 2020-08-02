<template lang="html">
  <div>
    <sui-card>
      <sui-reveal animated="move">
        <sui-reveal-content visible>
          <sui-image src="static/images/avatar/large/jenny.jpg" />
        </sui-reveal-content>
        <sui-reveal-content hidden>
          <sui-image src="static/images/avatar/large/elliot.jpg" />
        </sui-reveal-content>
      </sui-reveal>
      <sui-card-content>
        <sui-card-header>芋团队</sui-card-header>
        <sui-card-meta>2020年7月创建</sui-card-meta>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="users" />
        2名成员
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'ImageCard1Example',
};
</script>
