export default [
  {
    name: '种类',
    examples: [
      {
        name: '卡片（Card）',
        description: '单一卡片 A single card',
        file: 'Card1',
      },
      {
        name: '',
        description: '',
        file: 'Card2',
      },
      {
        name: '卡片组（Cards）',
        description: '一组卡片 A group of cards',
        file: 'CardGroup1',
      },
      {
        name: '',
        description: '',
        file: 'CardGroup2',
      },
    ],
  },
  {
    name: '内容',
    examples: [
      {
        name: '内容框（Content Block）',
        description: '一张卡片可以包含多个内容块 A card can contain blocks of content',
        file: 'ContentBlock',
      },
      {
        name: '图片（Image）',
        description: '一张卡片可以包含一张图片 A card can contain an image',
        file: 'ImageCard1',
      },
      {
        name: '',
        description: '',
        file: 'ImageCard2',
      },
      {
        name: '标题（Header）',
        description: '一张卡片可以包含一个简单的标题 A card can contain a header',
        file: 'HeaderCard',
      },
      {
        name: '副标题（Metadata）',
        description: '一张卡片也可以包含一个副标题 A card can contain content metadata',
        file: 'MetadataCard',
      },
      {
        name: '卡片链接（Link）',
        description:
          '一张卡片可以在图片、标题、内容部分设置链接 A card can contain links as images, headers, or inside content',
        file: 'LinkCard',
      },
      {
        name: '按钮组（Buttons）',
        description: '一张卡片可以设置一些按钮 A card can contain buttons',
        file: 'ButtonsCard',
      },
      {
        name: '点赞（Approval）',
        description: '一张卡片可以插入点赞或者收藏的图标 A card can contain a like or star action',
        file: 'ApprovalCard',
      },
      {
        name: '描述（Description）',
        description:
          '一张卡片可以包含一段或多段的描述 A card can contain a description with one or more paragraphs',
        file: 'DescriptionCard',
      },
      {
        name: '额外内容（Extra Content）',
        description:
          '一张卡片可以包含和主要内容分离的额外信息 A card can contain extra content meant to be formatted separately from the main content',
        file: 'ExtraContentCard',
      },
    ],
  },
  {
    name: '更多功能 Variations',
    examples: [
      {
        name: '流式卡片（Fluid Card）',
        description: '流式卡片自适应包含在容器中 A fluid card takes up the width of its container',
        file: 'FluidCard',
      },
      {
        name: '中心卡片（Centered Card）',
        description: '一张开发可以设置在容器中央 A card can center itself inside its container',
        file: 'CenteredCard',
      },
      {
        name: '置顶卡片（Raised Card）',
        description: '一张卡片可以置顶在页面顶部 A card may be formatted to raise above the page',
        file: 'RaisedCard',
      },
      {
        name: '',
        description: '',
        file: 'RaisedLinkCard',
      },
      {
        name: '链接卡片（Link Card）',
        description:
          '一张卡片可以作为一个链接的载体 A card can be formatted so that the entire contents link to another page',
        file: 'LinkCard1',
      },
      {
        name: '',
        description: '',
        file: 'LinkCard2',
      },
      {
        name: '浮动内容（Floated Content）',
        description: '卡片中的内容可以设置向左或右的浮动 Any content element can be floated left  or right',
        file: 'FloatedContentCard',
      },
      {
        name: '文本对齐（Text Alignment）',
        description:
          '卡片中的任意元素可以指定其对齐方式 Any element inside a card can have its text alignment specified',
        file: 'TextAlignmentCard',
      },
      {
        name: '颜色（Colored）',
        description: '一张卡片可以指定其颜色 A card can specify a color',
        file: 'ColoredCard',
      },
      {
        name: '排列（Column Count）',
        description:
          '一行中可以设置多张卡片 A group of cards can set how many cards should exist in a row',
        file: 'ColumnCountCard',
      },
      {
        name: '堆叠（Stackable）',
        description:
          '在移动设备中，一组多行卡片可以自适应的排成一列 A group of cards can automatically stack rows to a single column on mobile devices',
        file: 'StackableCard',
      },
      {
        name: '倍增（Doubling）',
        description: '在移动设备中，一组卡片可以成倍的完成堆放 A group of cards can double its column width for mobile',
        file: 'DoublingCard',
      },
    ],
  },
];
