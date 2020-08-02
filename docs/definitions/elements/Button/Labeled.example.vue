<template lang="html">
  <div>
    <sui-button content="喜欢" icon="heart">
      <a is="sui-label" slot="label" basic>9,999</a>
    </sui-button>

    <sui-button content="喜欢" icon="heart" label-position="left">
      <a is="sui-label" slot="label" basic pointing="right">
        9,999
      </a>
    </sui-button>

    <sui-button icon="fork" label-position="left">
      <a is="sui-label" slot="label" basic>2,048</a>
    </sui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonLabeledExample',
};
</script>
