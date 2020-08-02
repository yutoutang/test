export default [
  {
    name: '种类',
    examples: [
      {
        name: 'Feed',
        description: '普通的feed',
        file: 'Feed',
      },

    ],
  },
  {
    name: '内容',
    examples: [
      {
        name: '头像（Image Label）',
        description: '动态可以包含一张头像属性 An event can contain an image label',
        file: 'ImageLabel',
      },
      {
        name: '图标（Icon Label）',
        description: '动态可以包含一个图标属性 An event can contain an icon label',
        file: 'IconLabel',
      },
      {
        name: '时间（Content Date）',
        description: '动态可包含时间属性 Event content can contain a date',
        file: 'ContentDate',
      },
      {
        name: '图片（Extra Images）',
        description: '动态可以包含一些图片 An event can contain extra images.',
        file: 'ExtraImages',
      },
      {
        name: '补充文本 Extra Text',
        description: '动态中添加补充文本 An event can contain extra text.',
        file: 'ExtraText',
      },
      {
        name: '事件组渲染',
        description:
          '上面的属性，通过传递事件数组，来简化页面的编写 You can also pass an array of events to generate the markup',
        file: 'FeedShorthand',
      },
    ],
  },
  {
    name: '更多',
    examples: [
      {
        name: '尺寸（Size）',
        description: '可以选择不同的尺寸（big or small）以适应你的页面 A feed can have different sizes',
        file: 'SizeLarge',
      },
      // {
      //   name: "测试",
      //   description: "",
      //   file: "ExtraText"
      // },
    ],
  },
];
