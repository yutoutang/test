<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/helen.jpg" />
      <sui-feed-content>
        <sui-feed-date>3天前</sui-feed-date>
        <sui-feed-summary> <a>小梦</a> 更新了两张照片</sui-feed-summary>
        <sui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </sui-feed-extra>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesExample',
};
</script>
