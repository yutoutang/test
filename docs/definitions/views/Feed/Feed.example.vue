<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label>
        <img src="static/images/avatar/small/elliot.jpg" />
      </sui-feed-label>
      <sui-feed-content>
        <sui-feed-summary>
          <sui-feed-user>小明</sui-feed-user> 关注了你
          <sui-feed-date>1小时前</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            4 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/helen.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>小梦</a> 更新了 <a>1 条动态</a>
          <sui-feed-date>两天前</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            1 Like
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/jenny.jpg" />
      <sui-feed-content>
        <sui-feed-summary
          date="四天前"
          user="小刚"
          content="关注了你"
        />
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            8 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'FeedExample',
};
</script>
