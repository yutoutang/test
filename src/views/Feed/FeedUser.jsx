import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiFeedUser',
  mixins: [SemanticUIVueMixin],
  description: 'feed包含的用户元素',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
  },
  render() {
    const ElementType = this.getElementType('a');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('user')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
