export default {
  title: "Features",
  type: "object",
  name: "features",
  fields: [
    {
      title: "Label",
      name: "label",
      description:
        "Used to label the module in the cms-no affect on the actual module",
      type: "string"
    },
    {
      title: "Heading",
      name: "heading",
      type: "string"
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "string"
    },
    {
      title: "Features List",
      name: "features",
      type: "array",
      of: [{ type: "feature" }]
    }
  ]
};
