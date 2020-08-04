export default [
  {
    name: '种类',
    examples: [
      {
        name: '统计标识（Statistic）',
        description:
          '统计标识的文字标签可以放置数值的上方或下方 A statistic can display a value with a label above or below it',
        file: 'Statistic',
      },
      {
        name: '统计标识组（Statistic Group）',
        description: '一组统计标识 A group of statistics',
        file: 'StatisticGroup',
      },
    ],
  },
  {
    name: '内容',
    examples: [
      {
        name: '属性（Value）',
        description:
          '一个统计标识可以包含数字、图标、图片或文本 A statistic can contain a numeric, icon, image, or text value',
        file: 'StatisticContentValue',
      },
      {
        name: '标签（Label）',
        description:
          '一个统计标识可以包含一个标签，用来解释数值的含义 A statistic can contain a label to help provide context for the presented value',
        file: 'StatisticContentLabel',
      },
    ],
  },
  {
    name: '更多',
    examples: [
      {
        name: '垂直排列 Horizontal Statistic',
        description: '通过添加horizontal属性，垂直排列多个标识 A statistic can present its measurement horizontally',
        file: 'StatisticHorizontal',
      },
      {
        name: '颜色（Colored）',
        description: '统计标识可以设置多种颜色 A statistic can be formatted to be different colors',
        file: 'StatisticColored',
      },
      {
        name: '反色（Inverted）',
        description: '通过添加inverted属性，可在黑色页面显示颜色 A statistic can be formatted to fit on a dark background',
        file: 'StatisticInverted',
      },
      {
        name: '平均排列（Evenly Divided）',
        description: '通过添加column属性，并绑定元素个数，可以横向排列一组统计标识 A statistic group can have its items divided evenly',
        file: 'StatisticEvenlyDivided',
      },
      {
        name: '浮动（Floated）',
        description:
          '一个统计标识可以浮动在内容的左方或右方 An statistic can sit to the left or right of other content',
        file: 'StatisticFloated',
      },
      {
        name: '尺寸（Size）',
        description: '一个统计标识，可以设置不同的尺寸 A statistic can vary in size',
        file: 'StatisticSize',
      },
    ],
  },
];
