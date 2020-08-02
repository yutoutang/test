<template lang="html">
  <div>
    <sui-card>
      <sui-card-content>
        <sui-card-header>
          公告
        </sui-card-header>
      </sui-card-content>
      <sui-card-content>
        <sui-header size="tiny">项目人员</sui-header>
        <!--
          sui-feed is not available yet, therefore base semantic ui has been substituted for now
        -->
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>小明</a>邀请 <a>小梦</a> 加入该项目
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>小斯</a> 被任命为 <a>项目总监</a>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary"><a>小马</a>设计了两张图片</div>
            </div>
          </div>
        </div>
        <!-- end of base semantic ui, to be updated in the future with sui-feed -->
      </sui-card-content>
      <sui-card-content extra>
        <sui-button>加入该项目</sui-button>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'ContentBlockExample',
};
</script>
