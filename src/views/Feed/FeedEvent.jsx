import { SemanticUIVueMixin } from '../../lib';
import { FeedLabel, FeedContent } from './';

export default {
  name: 'SuiFeedEvent',
  mixins: [SemanticUIVueMixin],
  description: 'feed中的事件元素',
  props: {
    content: {
      type: String,
      description: '简写SuiFeedContent组件',
    },
    image: {
      type: String,
      description: '图片属性',
    },
    icon: {
      type: String,
      description: '图标属性',
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
      description: '简写SuiFeedMeta组件',
    },
  },
  render() {
    const ElementType = this.getElementType();
    const hasContent =
      this.content ||
      this.date ||
      this.summary ||
      this.extraImages ||
      this.extraText ||
      this.meta;
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('event')}
      >
        {this.image && <FeedLabel image={this.image} />}
        {this.icon && <FeedLabel icon={this.icon} />}
        {hasContent && (
          <FeedContent
            content={this.content}
            date={this.date}
            summary={this.summary}
            extraImages={this.extraImages}
            extraText={this.extraText}
            meta={this.meta}
          />
        )}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
