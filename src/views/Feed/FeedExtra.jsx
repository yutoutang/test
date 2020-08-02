import { SemanticUIVueMixin } from '../../lib';
import { Image } from '../../elements';

export default {
  name: 'SuiFeedExtra',
  mixins: [SemanticUIVueMixin],
  description: 'feed中包含的补充内容',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
    images: {
      type: [Array, Boolean],
      description:
        '事件中包含补充图片属性',
    },
    text: {
      type: Boolean,
      description: '事件是否需要补充文本（仍需测试）',
    },
  },
  render() {
    const ElementType = this.getElementType();

    const defaultContentImage =
      Array.isArray(this.images) &&
      this.images.map(image => <Image src={image} />);

    const defaultContent = [this.content, defaultContentImage];

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.images && 'images',
          (this.text || this.content) && 'text',
          'extra',
        )}
      >
        {this.$slots.default || defaultContent}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
