import { SemanticUIVueMixin } from '../../lib';
import { Icon } from '../../elements';

export default {
  name: 'SuiFeedLike',
  mixins: [SemanticUIVueMixin],
  description: '事件中的点赞元素',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
    icon: {
      type: String,
      description: '图标属性的简写，与子组件（sui-icon）互斥（测试）',
    },
  },
  render() {
    const ElementType = this.getElementType('a');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('like')}
      >
        {this.$slots.default || [
          this.icon && <Icon name={this.icon} />,
          this.content,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
