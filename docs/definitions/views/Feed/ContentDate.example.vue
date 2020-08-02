<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label>
        <sui-image :src="imageSrc" />
      </sui-feed-label>
      <sui-feed-content>
        <sui-feed-date>3天前</sui-feed-date>
        <sui-feed-summary>
          你邀请了小明加入了同事群
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ContentDateExample',
  data() {
    return {
      imageSrc: 'static/images/avatar/small/jenny.jpg',
    };
  },
};
</script>
