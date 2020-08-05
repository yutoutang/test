<template lang="html">
  <div>
    <sui-accordion exclusive>
      <sui-accordion-title active>
        <sui-icon name="dropdown" />
        小明今年多大了？
      </sui-accordion-title>
      <sui-accordion-content active>
        <p>
          小明今年23岁了。
        </p>
      </sui-accordion-content>
      <sui-accordion-title>
        <sui-icon name="dropdown" />
        小明的父亲是谁？
      </sui-accordion-title>
      <sui-accordion-content>
        <p>
         小明的父亲是老王。
        </p>
      </sui-accordion-content>
      <sui-accordion-title>
        <sui-icon name="dropdown" />
        小明的母亲是谁？
      </sui-accordion-title>
      <sui-accordion-content>
        <p>
          小明的母亲是小红。
        </p>
      </sui-accordion-content>
    </sui-accordion>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
};
</script>
