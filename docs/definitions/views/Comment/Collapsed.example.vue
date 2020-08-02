<template lang="html">
  <sui-comment-group>
    <sui-comment>
      <sui-comment-avatar src="static/images/avatar/small/christian.jpg" />
      <sui-comment-content>
        <a is="sui-comment-author">小明</a>
        <sui-comment-metadata>
          <div>两天前</div>
        </sui-comment-metadata>
        <sui-comment-text
          >你今天晚饭吃了吗?</sui-comment-text
        >
        <sui-comment-actions>
          <sui-comment-action>回复</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group collapsed>
        <sui-comment>
          <sui-comment-avatar src="static/images/avatar/small/elliot.jpg" />
          <sui-comment-content>
            <a is="sui-comment-author">Elliot Fu</a>
            <sui-comment-metadata>
              <div>1 day ago</div>
            </sui-comment-metadata>
            <sui-comment-text>
              No it won't.
            </sui-comment-text>
            <sui-comment-actions>
              <sui-comment-action>Reply</sui-comment-action>
            </sui-comment-actions>
          </sui-comment-content>
          <sui-comment-group>
            <sui-comment>
              <sui-comment-avatar src="static/images/avatar/small/jenny.jpg" />
              <sui-comment-content>
                <a is="sui-comment-author">Jenny Hess</a>
                <sui-comment-metadata>
                  <div>20 minutes ago</div>
                </sui-comment-metadata>
                <sui-comment-text>
                  Maybe it would.
                </sui-comment-text>
                <sui-comment-actions>
                  <sui-comment-action>Reply</sui-comment-action>
                </sui-comment-actions>
              </sui-comment-content>
            </sui-comment>
          </sui-comment-group>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>
  </sui-comment-group>
</template>

<script>
export default {
  name: 'CollapsedExample',
};
</script>
