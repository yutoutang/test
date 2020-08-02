import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiFeedDate',
  mixins: [SemanticUIVueMixin],
  description: '事件中的时间元素',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('date')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
