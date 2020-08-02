export default [
  {
    name: '种类',
    examples: [
      {
        name: '按钮（Button）',
        description: '标准按钮',
        file: 'Button',
      },
      {
        name: '强调（Emphasis）',
        description:
          '按钮可以利用通过一些参数来区分级别 A button can be formatted to show different levels of emphasis',
        file: 'Emphasis',
      },
      {
        name: '动画（Animated）',
        description: '按钮可以通过动画显示隐藏信息 A button can animate to show hidden content',
        file: 'Animated',
      },
      {
        name: '标签（Labeled）',
        description: '按钮的两次可以添加标签 A button can appear alongside a label',
        file: 'Labeled',
      },
      {
        file: 'Labeled2',
      },
      {
        name: '图标（Icons）',
        description: '一个按钮只能包含一个标签 A button can have only an icon',
        file: 'Icon',
      },
      {
        name: '标签图标（LabeledIcon）',
        description: '按钮A button can use an icon as a label',
        file: 'LabeledIcon',
      },
      {
        name: '基础形式（Basic）',
        description: 'A basic button is less pronounced',
        file: 'Basic',
      },
      {
        file: 'Basic2',
      },
      {
        file: 'Basic3',
      },
      {
        name: '反色（Inverted）',
        description: 'A button can be formatted to appear on dark backgrounds',
        file: 'Inverted',
      },
      {
        file: 'Inverted2',
      },
    ],
  },
  {
    name: '分组',
    examples: [
      {
        name: '按钮组（Buttons）',
        description: 'Buttons can exist together as a group',
        file: 'Buttons',
      },
      {
        name: '图标按钮组（IconButtons）',
        description: 'Button groups can show groups of icons',
        file: 'IconButtons',
      },
    ],
  },
  {
    name: '内容',
    examples: [
      {
        name: '条件（Conditional）',
        description: 'Button groups can contain conditionals',
        file: 'Conditional',
      },
      {
        description:
          'Or buttons can have their text localized, or adjusted by using the text prop',
        info:
          'Or buttons can have their text localized, or adjusted by using the `text` attribute. ' +
          'If the size of the conditional changes you will need to adjust `@orCircleSize`',
        file: 'Conditional2',
      },
    ],
  },
  {
    name: '状态',
    examples: [
      {
        name: '激活（Active）',
        description:
          'A button can show it is currently the active user selection',
        file: 'Active',
      },
      {
        name: '禁止（Disabled）',
        description:
          'A button can show it is currently unable to be interacted with',
        file: 'Disabled',
      },
      {
        name: '加载（Loading）',
        description: 'A button can show a loading indicator',
        file: 'Loading',
      },
    ],
  },
  {
    name: '变量',
    examples: [
      {
        name: '社交网络图标（Social）',
        description: 'A button can be formatted to link to a social websiten',
        file: 'Social',
      },
      {
        name: '尺寸 Size',
        description: 'A button can have different sizes',
        file: 'Size',
      },
      {
        name: '浮动 Floated',
        description:
          'A button can be aligned to the left or right of its container',
        file: 'Floated',
      },
      {
        name: '颜色 Colored',
        description: 'A button can have different colors',
        file: 'Colored',
      },
      {
        name: '紧凑 Compact',
        description:
          'A button can reduce its padding to fit into tighter spaces',
        file: 'Compact',
      },
      {
        name: '触发 Toggle',
        description: 'A button can be formatted to toggle on and off',
        file: 'Toggle',
      },
      {
        name: '确定 Positive',
        description: 'A button can hint towards a positive consequence',
        file: 'Positive',
      },
      {
        name: '否定 Negative',
        description: 'A button can hint towards a negative consequence',
        file: 'Negative',
      },
      {
        name: '流体 Fluid',
        description: 'A button can take the width of its container',
        file: 'Fluid',
      },
      {
        name: '环状 Circular',
        description: 'A button can be circular',
        file: 'Circular',
      },
      {
        name: '环状图标 CircularSocial',
        file: 'CircularSocial',
      },
      {
        name: '垂直布局 Vertically Attached',
        description:
          'A button can be attached to the top or bottom of other content',
        info:
          'You should use `<div is="sui-button">...</div>` to make button attachable',
        file: 'Attached',
      },
      {
        file: 'AttachedGroup',
      },
      {
        name: '横向布局 Horizontally Attached',
        description:
          'A button can be attached to the left or right of other content',
        file: 'AttachedHorizontally',
      },
    ],
  },
  {
    name: '更多的按钮组 Group Variations',
    examples: [
      {
        name: '垂直按钮组 Vertical Buttons',
        description: 'Groups can be formatted to appear vertically',
        file: 'ButtonsVertical',
      },
      {
        name: '图标按钮组 Icon Buttons',
        description: 'Groups can be formatted as icons',
        file: 'ButtonsIcon',
      },
      {
        name: '标签按钮组 Labeled Icon Buttons',
        description: 'Groups can be formatted as labeled icons',
        file: 'ButtonsIconLabeled',
      },
      {
        name: '混合按钮组 Mixed Group',
        description:
          'Groups can be formatted to use multiple button types together',
        file: 'ButtonsMixed',
      },
      {
        name: '等宽 Equal Width',
        description: 'Groups can have their widths divided evenly',
        file: 'ButtonsEqualWidth',
      },
      {
        name: '颜色按钮组 Colored Buttons',
        description: 'Groups can have a shared color',
        file: 'ButtonsColored',
      },
      {
        name: '基础按钮组 Basic Buttons',
        description: 'A button group can be less pronounced',
        file: 'ButtonsBasic',
      },
      {
        info:
          'You have to specify `basic` attribute to each button in basic group if you need to use colorful buttons',
        file: 'ButtonsBasicColored',
      },
      {
        name: '按钮组尺寸 Group Sizes',
        description: 'Groups can have a shared size',
        file: 'ButtonsSizes',
      },
    ],
  },
];
