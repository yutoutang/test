import { SemanticUIVueMixin } from '../../lib';
import { FeedDate, FeedUser } from './';

export default {
  name: 'SuiFeedSummary',
  mixins: [SemanticUIVueMixin],
  description: 'A feed can contain a summary',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
    date: {
      type: String,
      description: '简写SuiFeedDate组件',
    },
    user: {
      type: String,
      description: '简写SuiFeedUser组件',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('summary')}
      >
        {this.$slots.default || [
          this.user && <FeedUser content={this.user} />,
          this.content,
          this.date && <FeedDate content={this.date} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
