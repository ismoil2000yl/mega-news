import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';;

const ckeditor = ({field:{name, value}, form: {setFieldValue}}) => {
  return (
    <div className="mb-5 [&_.ck-rounded-corners]:min-h-[400px]">
    <p>CKeditor</p>
      <CKEditor

        editor={ClassicEditor}
        // config={editorConfiguration}
        // data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFieldValue(name, data)
        }}

        config={{
          placeholder: 'Your text...',
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default ckeditor;
