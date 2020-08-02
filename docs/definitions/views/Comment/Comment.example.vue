<template lang="html">
  <sui-comment-group>
    <h3 is="sui-header" dividing>评论（3）</h3>

    <sui-comment>
      <sui-comment-avatar src="static/images/avatar/small/matt.jpg" />
      <sui-comment-content>
        <a is="sui-comment-author">小马</a>
        <sui-comment-metadata>
          <div>早上9点</div>
        </sui-comment-metadata>
        <sui-comment-text>How artistic!</sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>回复</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>

    <sui-comment>
      <sui-comment-avatar src="static/images/avatar/small/elliot.jpg" />
      <sui-comment-content>
        <a is="sui-comment-author">小艾</a>
        <sui-comment-metadata>
          <div>中午12点</div>
        </sui-comment-metadata>
        <sui-comment-text>
          <p>今天下午要排练了！</p>
        </sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>回复</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group>
        <sui-comment>
          <sui-comment-avatar src="static/images/avatar/small/jenny.jpg" />
          <sui-comment-content>
            <a is="sui-comment-author">小芋</a>
            <sui-comment-metadata>
              <div>刚刚</div>
            </sui-comment-metadata>
            <sui-comment-text>
              下午排练别迟到啊 :)
            </sui-comment-text>
            <sui-comment-actions>
              <sui-comment-action>回复</sui-comment-action>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>
    <br/>
    <form reply>
      <sui-button
        content="回复"
        label-position="left"
        icon="edit"
        primary
      />
    </form>
  </sui-comment-group>
</template>

<script>
export default {
  name: 'CommentExample',
};
</script>
