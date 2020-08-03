<template lang="html">
  <sui-item-group divided>
    <sui-item>
      <sui-item-image size="small" src="static/images/wireframes/image.png" />
      <sui-item-content>
        <sui-item-header>前端工程师</sui-item-header>
        <sui-item-meta>
          <span class="price">8000</span>
          <span class="stay">每月</span>
        </sui-item-meta>
        <sui-item-description>
          <p>
            要求熟悉并掌握javascript、html5、css3
          </p>
        </sui-item-description>
      </sui-item-content>
    </sui-item>
    <sui-item>
      <sui-item-image size="small" src="static/images/wireframes/image.png" />
      <sui-item-content>
        <sui-item-header>NLP算法工程师</sui-item-header>
        <sui-item-meta>
          <span class="price">100000</span>
          <span class="stay">每月</span>
        </sui-item-meta>
        <sui-item-description>
          <p>
           要求熟悉机器学习、深度学习等相关算法
          </p>
        </sui-item-description>
      </sui-item-content>
    </sui-item>
  </sui-item-group>
</template>

<script>
export default {
  name: 'ContentHeaderExample',
};
</script>
