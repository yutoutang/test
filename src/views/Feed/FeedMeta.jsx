import { SemanticUIVueMixin } from '../../lib';
import { FeedLike } from './';

export default {
  name: 'SuiFeedMeta',
  mixins: [SemanticUIVueMixin],
  description: 'A feed can contain a meta',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
    like: {
      type: String,
      description: '简写SuiFeedLike组件',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('meta')}
      >
        {this.$slots.default || [
          this.like && <FeedLike content={this.like} />,
          this.content,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
