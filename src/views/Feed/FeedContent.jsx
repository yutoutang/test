import { SemanticUIVueMixin } from '../../lib';
import { FeedDate, FeedSummary, FeedExtra, FeedMeta } from './';

export default {
  name: 'SuiFeedContent',
  mixins: [SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: '简写主要内容',
    },
    date: {
      type: String,
      description: '简写SuiFeedDate组件',
    },
    summary: {
      type: String,
      description: '简写SuiFeedSummary组件',
    },
    extraImages: {
      type: Array,
      description: '简写SuiFeedExtra-images属性',
    },
    extraText: {
      type: String,
      description: '简写SuiFeedExtra-text属性',
    },
    meta: {
      type: String,
      description: '简写SuiFeedMeta属性',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('content')}
      >
        {this.$slots.default || [
          this.date && <FeedDate content={this.date} />,
          this.content,
          this.summary && <FeedSummary content={this.summary} />,
          this.extraText && <FeedExtra text={true} content={this.extraText} />,
          this.extraImages && <FeedExtra images={this.extraImages} />,
          this.meta && <FeedMeta content={this.meta} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
