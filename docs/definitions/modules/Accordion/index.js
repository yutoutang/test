export default [
  {
    name: '种类',
    examples: [
      {
        name: '折叠组件',
        description: '标准样式 A standard accordion',
        file: 'Accordion',
      },
      {
        name: '样式',
        description: '通过添加styled属性，给折叠组件添加基本样式 A styled accordion adds basic formatting',
        file: 'AccordionStyled',
      },
    ],
  },
  {
    name: '更多',
    examples: [
      {
        name: '反色',
        description:
          '通过添加inverted属性，使折叠组件内部适应深色背景',
        file: 'AccordionInverted',
      },
    ],
  },
  {
    name: '样例',
    examples: [
      {
        name: '嵌套',
        description:
          '折叠组件内部可以嵌套标签、标题、内容 An accordion can have multiple levels of nested content. This content can either be in a nested accordion or simply another level of title and content',
        file: 'NestedAccordions',
      },
      {
        name: '表单',
        description:
          '折叠组件可以添加至表单中，方便输入框的显示与隐藏 An accordion can be used anywhere where content can be shown or hidden. For example, to show optional form fields',
        file: 'FormFieldsAccordion',
      },
      {
        name: '折叠菜单',
        description:
          '折叠组件可以用于菜单中 An accordion can be used to create content drawers inside a menu',
        file: 'AccordionMenu',
      },
    ],
  },
];
