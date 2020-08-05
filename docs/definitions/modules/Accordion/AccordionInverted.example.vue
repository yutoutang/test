<template lang="html">
  <div is="sui-segment" inverted>
    <sui-accordion exclusive inverted>
      <sui-accordion-title active>
        <sui-icon name="dropdown" />
        Semantic UI
      </sui-accordion-title>
      <sui-accordion-content active>
        <p>
          Semantic UI是一款沉浸式的前端UI组件库。
        </p>
      </sui-accordion-content>
      <sui-accordion-title>
        <sui-icon name="dropdown" />
        Element UI
      </sui-accordion-title>
      <sui-accordion-content>
        <p>
          Element UI是一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
        </p>
      </sui-accordion-content>
      <sui-accordion-title>
        <sui-icon name="dropdown" />
        Vant
      </sui-accordion-title>
      <sui-accordion-content>
        <p>
          Vant是有赞开源的一套基于 vue 2.0 的 Mobile 组件库
        </p>
      </sui-accordion-content>
    </sui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionInverted',
};
</script>
