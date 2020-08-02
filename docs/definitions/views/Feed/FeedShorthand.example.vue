<template lang="html">
  <sui-feed :events="events" />
</template>

<script>
export default {
  name: 'FeedShorthandExample',
  data() {
    return {
      events: [
        {
          date: '1小时前',
          image: 'static/images/avatar/small/elliot.jpg',
          meta: '4 Likes',
          summary: '小明关注了你呀',
        },
        {
          date: '两天前',
          image: 'static/images/avatar/small/helen.jpg',
          meta: '1 Like',
          summary: '小萌更了1条动态',
          extraImages: [
            'static/images/wireframes/image.png',
            'static/images/wireframes/image-text.png',
          ],
        },
        {
          date:"四天前",
          image: "static/images/avatar/small/jenny.jpg",
          meta:"8 Likes",
          summary: "小刚关注了你"
        }

      ],
    };
  },
};
</script>
