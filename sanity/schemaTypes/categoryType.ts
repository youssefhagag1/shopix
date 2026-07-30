import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
        name : "slug",
        type : "slug",
        options : {
        source : "title",
            maxLength : 96
        },
        validation : (Rule) => Rule.required()
      }),
      defineField({
        name : "image",
        title : "category image",
        type : "image",
        options : {
            hotspot : true,
        },
      }),
      defineField({
        name : "description",
        type : "text",
      }),
      defineField({
        name : "range",
        type : "number",
        description :"starting from ",
      }),
      defineField({
        name : "featured",
        type : "boolean",
        initialValue : false,
      }),
    ],
    preview : {
      select : {
          title : "title",
          subtitle : "description",
          media : "image"
      }
    }
});
