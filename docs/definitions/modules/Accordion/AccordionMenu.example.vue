<template lang="html">
  <div>
    <sui-accordion is="sui-menu" :active-index="1" vertical exclusive styled>
      <sui-accordion-title is="sui-menu-header" active>
        <sui-icon name="dropdown" />
        尺寸
      </sui-accordion-title>
      <sui-accordion-content active>
        <sui-form>
          <sui-form-field>
            <sui-checkbox label="S" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="M" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="L" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="XL" />
          </sui-form-field>
        </sui-form>
      </sui-accordion-content>
      <sui-accordion-title is="sui-menu-header">
        <sui-icon name="dropdown" />
        颜色
      </sui-accordion-title>
      <sui-accordion-content>
        <sui-form>
          <sui-form-field>
            <sui-checkbox label="Red" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Orange" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Green" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Blue" />
          </sui-form-field>
        </sui-form>
      </sui-accordion-content>
    </sui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionMenu',
};
</script>
