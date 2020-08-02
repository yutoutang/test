import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import FeedEvent from './FeedEvent';

export default {
  name: 'SuiFeed',
  mixins: [SemanticUIVueMixin],
  description: 'A feed presents user activity chronologically',
  props: {
    size: Enum(['small', 'large'], {
      description: 'feed有big和small两种尺寸',
    }),
    events: {
      type: Array,
      description: '动态绑定事件数组简化页面编写',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.size, 'feed')}
      >
        {this.$slots.default ||
          (this.events &&
            this.events.map(event => <FeedEvent {...{ props: event }} />))}
      </ElementType>
    );
  },
};
