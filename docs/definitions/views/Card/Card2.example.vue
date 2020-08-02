<template lang="html">
  <div>
    <sui-card>
      <sui-card-content>
        <sui-image
          src="static/images/avatar/small/elliot.jpg"
          shape="circular"
          size="mini"
        />
        艾利特
        <sui-card-meta slot="right">14点</sui-card-meta>
      </sui-card-content>
      <sui-image src="static/images/wireframes/image.png" />
      <sui-card-content>
        <span slot="right"> <sui-icon name="heart outline" /> 1 </span>
        <sui-icon name="comment" /> 3
      </sui-card-content>
      <sui-card-content extra>
        <sui-input
          placeholder="添加新评论"
          icon="heart outline"
          icon-position="left"
          transparent
        />
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'Card2Example',
};
</script>
