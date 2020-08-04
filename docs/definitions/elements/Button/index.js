export default [
  {
    name: '种类',
    examples: [
      {
        name: '按钮',
        description: '标准按钮',
        file: 'Button',
      },
      {
        name: '强调按钮',
        description: '按钮可以利用一些参数以区分级别',
        file: 'Emphasis',
      },
      {
        name: '动画按钮',
        description: '按钮可以通过动画显示隐藏信息',
        file: 'Animated',
      },
      {
        name: '标签按钮',
        description: '按钮旁边可以添加标签',
        file: 'Labeled',
      },
      {
        file: 'Labeled2',
      },
      {
        name: '图标按钮',
        description: '一个按钮仅可以拥有一个图标',
        file: 'Icon',
      },
      {
        name: '标签图标按钮',
        description: '按钮可以使用图标作为标签',
        file: 'LabeledIcon',
      },
      {
        name: '基本款按钮',
        description: '基本款看起来简单且朴素',
        file: 'Basic',
      },
      {
        description: '四种色彩，简约设计必备',
        file: 'Basic2',
      },
      {
        description: '多种色彩，总有一款合你心意',
        file: 'Basic3',
      },
      {
        name: '反色按钮',
        description: '标准款',
        file: 'Inverted',
      },
      {
        description: '基本款',
        file: 'Inverted2',
      },
    ],
  },
  {
    name: '按钮组',
    examples: [
      {
        name: '基本款按钮组',
        description: '由多个基本款按钮组合而成',
        file: 'Buttons',
      },
      {
        name: '图标按钮组',
        description: '多个图标按钮组合而成',
        file: 'IconButtons',
      },
    ],
  },
  {
    name: '附带内容的按钮组',
    examples: [
      {
        name: '条件语句按钮组',
        description: '按钮组可以包含条件语句，以引导用户做一个选择',
        file: 'Conditional',
      },
      {
        description: '按钮组中间的文本可以通过text属性进行个性化定制',
        info:
          'Or buttons can have their text localized, or adjusted by using the `text` attribute. ' +
          'If the size of the conditional changes you will need to adjust `@orCircleSize`',
        file: 'Conditional2',
      },
    ],
  },
  {
    name: '按钮的不同状态',
    examples: [
      {
        name: '激活状态',
        description: '表现为可以被点击',
        file: 'Active',
      },
      {
        name: '禁用状态',
        description: '表现为不可以被点击',
        file: 'Disabled',
      },
      {
        name: '加载状态',
        description: '表现为正在加载一些内容',
        file: 'Loading',
      },
    ],
  },
  {
    name: '按钮的更多玩法',
    examples: [
      {
        name: '社交平台按钮',
        description:
          '如果你希望用户通过点击一个按钮跳转至某个社交平台，那么这些按钮将会非常实用',
        file: 'Social',
      },
      {
        name: '各种尺寸的按钮',
        description: '你没看错，想要多大的这里都有',
        file: 'Size',
      },
      {
        name: '自带浮动的按钮',
        description: '你可以随心所欲地让按钮浮动到容器的最左或是最右',
        file: 'Floated',
      },
      {
        name: '各种颜色的按钮',
        description: '比七色彩虹的颜色还要多',
        file: 'Colored',
      },
      {
        name: '紧凑型的按钮',
        description: '内边距比常规按钮更小，如果空间有限的话，用它更合适一些',
        file: 'Compact',
      },
      {
        name: '开关按钮',
        description: '什么？你想用按钮做个开关？这还不简单！',
        file: 'Toggle',
      },
      {
        name: '确定型按钮',
        description: '在用户的印象中，这种按钮通常寓意着 “确定” 操作',
        file: 'Positive',
      },
      {
        name: '否定型按钮',
        description: '在用户的印象中，这种按钮通常寓意着 “取消” 操作',
        file: 'Negative',
      },
      {
        name: '流式按钮',
        description: '按钮可以占满整个容器',
        file: 'Fluid',
      },
      {
        name: '圆形按钮',
        description: '谁说按钮都是圆角矩形的',
        file: 'Circular',
      },
      {
        name: '圆形社交平台按钮',
        file: 'CircularSocial',
      },
      {
        name: '竖直吸附的按钮',
        description: '按钮可以吸附至内容的顶部或底部',
        info: '可以通过 `<div is="sui-button">...</div>` 使得按钮变得可吸附',
        file: 'Attached',
      },
      {
        file: 'AttachedGroup',
      },
      {
        name: '水平吸附的按钮',
        description: '按钮可以吸附至内容的左侧或右侧',
        file: 'AttachedHorizontally',
      },
    ],
  },
  {
    name: '按钮组的更多玩法',
    examples: [
      {
        name: '竖直排列的按钮组',
        description: '将按钮在竖直方向上依次排列',
        file: 'ButtonsVertical',
      },
      {
        name: '图标按钮组',
        description: '眼熟吗？我想你已经学会制作音乐播放器了！',
        file: 'ButtonsIcon',
      },
      {
        name: '标签图标按钮组',
        description: '有时候，你得为你的图标做点说明～',
        file: 'ButtonsIconLabeled',
      },
      {
        name: '混合按钮组',
        description: '排列组合几下，还有啥功能是咱做不出来的',
        file: 'ButtonsMixed',
      },
      {
        name: '等宽按钮组',
        description: '按钮组可以将宽度等分给几个按钮',
        file: 'ButtonsEqualWidth',
      },
      {
        name: '同色按钮组',
        description: '组中的按钮可以共用同一种色彩',
        file: 'ButtonsColored',
      },
      {
        name: '基本款按钮组',
        description: '基本款按钮组看起来简单且朴素',
        file: 'ButtonsBasic',
      },
      {
        info: '想要绘制多种色彩的按钮，必须为每个按钮指明`basic`属性',
        file: 'ButtonsBasicColored',
      },
      {
        name: '同尺寸按钮组',
        description: '组中的按钮可以共用同一尺寸',
        file: 'ButtonsSizes',
      },
    ],
  },
];
