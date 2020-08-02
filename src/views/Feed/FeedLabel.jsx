import { SemanticUIVueMixin } from '../../lib';
import { Icon, Image } from '../../elements';

export default {
  name: 'SuiFeedLabel',
  mixins: [SemanticUIVueMixin],
  description: '事件包含的用户头像（图片&图标）',
  props: {
    content: {
      type: String,
      description: '主要内容属性',
    },
    image: {
      type: String,
      description: '图片属性',
    },
    icon: {
      type: String,
      description: '图标属性',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('label')}
      >
        {this.$slots.default || [
          this.content,
          this.icon && <Icon name={this.icon} />,
          this.image && <Image src={this.image} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
