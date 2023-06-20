import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { usePost } from "crud";
import { get } from "lodash";
import { useState } from "react";

const upload = ({ field: { value, name }, form: { setFieldValue } }) => {
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    item: {},
  });
  const { mutate } = usePost();
  const newData =
    value?.length > 0 &&
    value.map((item) => {
      const url = get(item, "domain") + get(item, "folder") + get(item, "file");
      return {
        ...item,
        uid: get(item, "id"),
        name: get(item, "title"),
        url,
      };
    });
  const [fileList, setFileList] = useState(newData || []);

  const onRemove = (file) => {
    mutate({
      url: `/filemanager/${get(file, "id")}`,
      method: "delete",
      onSuccess: () => {
        setFileList(fileList.filter((item) => get(item, "id") !== get(file, "id")));
      }
    });
  };

  const onPreview = (file) => {
    setPreviewModal({
      isOpen: true,
      item: {
        title: get(file, "title"),
        src: get(file, "thumbnails.normal.src"),
      },
    });
  };

  const onDrop = (file) => {
    const formData = new FormData();
    formData.append(`files[0]`, file);
    mutate({
      url: "/filemanager/uploads",
      method: "post",
      data: formData,
      onSuccess: (data) => {
        setFileList([
          ...fileList,
          ...get(data, "data").map((item) => {
            const url =
              get(item, "domain") + get(item, "folder") + get(item, "file");
            return {
              ...item,
              uid: get(item, "id"),
              name: get(item, "title"),
              url,
            };
          }),
        ]);
        setFieldValue(name, [...value, ...get(data, "data")]);
      },
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      Upload
    </div>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        data={onDrop}
        onPreview={onPreview}
        onRemove={onRemove}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        width={1000}
        open={get(previewModal, "isOpen")}
        title={get(previewModal, "item.title")}
        footer={false}
        onCancel={() => setPreviewModal({ isOpen: false, item: null })}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={get(previewModal, "item.src")}
        />
      </Modal>
    </>
  );
};
export default upload;
