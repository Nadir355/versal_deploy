"use client";

import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Description({ data, handleData }) {
  const [editorData, setEditorData] = useState(data?.description || "Enter your description here...");

  useEffect(() => {
    // Update editor data if data changes
    if (data?.description) {
      setEditorData(data.description);
    }
  }, [data]);

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    handleData("description", data); // Handle the change in value
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleChange}
        config={{
          placeholder: "Enter your description here...",
          toolbar: [
            "heading",
            "fontSize",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "blockQuote",
            "|",
            "numberedList",
            "bulletedList",
            "|",
            "fontColor", 
            "fontBackgroundColor",
            "|",
            "link",
            "insertTable",
            "|",
            "undo",
            "redo",
          ],
          fontSize: {
            options: [
              8,
              9,
              10,
              'default',
              12,
              14,
              16,
              18,
              20,
              24,
              30,
              36,
              40,
              48,
              60,
              72,
            ],
            supportAllValues: true,
          },
          // Optional: configure colors
          colorPicker: {
            colors: [
              '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
              '#000000', '#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333',
            ],
          },
        }}
      />
    </section>
  );
}
