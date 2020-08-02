export default [
  {
    name: '种类',
    examples: [
      {
        name: '评论列表（Comments）',
        description: '一个基础的评论列表A basic list of comments',
        file: 'Comment',
      },
    ],
  },
  {
    name: '状态',
    examples: [
      {
        name: '隐藏 (Collapsed)',
        description: '添加collapsed属性，实现评论列表可以在视图里隐藏 Comments can be collapsed, or hidden from view',
        file: 'Collapsed',
      },
    ],
  },
  {
    name: '更多功能',
    examples: [
      // {
      //   name: 'Threaded',
      //   description:
      //     '添加threaded元素，展示评论之间的关系 A comment list can be threaded to showing the relationship between conversations',
      //   file: 'Threaded',
      // },
      {
        name: '交互（Minimal）',
        description:
          '用户通过交互来显示隐藏信息 Comments can hide extra information unless a user shows intent to interact with a comment',
        file: 'Minimal',
      },
      {
        name: '尺寸（Size）',
        description: '评论列表有不同尺寸 Comments can have different sizes',
        file: 'Size',
      },
    ],
  },
];
