export default {
  title: "Socials",
  name: "socials",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string"
    },
    {
      title: "Social List",
      name: "socialList",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "social"
            }
          ]
        }
      ]
    }
  ]
};
