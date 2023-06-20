import React from "react";
import { Pagination, Popconfirm, Table, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import qs from "qs";
import { get } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

const index = ({
  items,
  isLoading,
  columns,
  meta,
  hasUpdate = false,
  hasDelete = false,
  hasPagination = true,
  customPagination = false,
  updateAction = () => {},
  deleteAction = () => {},
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const newColumns =
    hasUpdate || hasDelete
      ? [
          ...columns,
          {
            title: "Action",
            dataIndex: "id",
            render: (_, row) => {
              return (
                <div className="flex gap-5">
                  {hasDelete ? (
                    <Tooltip title="Delete">
                      <Popconfirm
                        placement="topRight"
                        description={"Delete"}
                        onConfirm={() => deleteAction(row)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteOutlined className="text-red-500 cursor-pointer text-lg" />
                      </Popconfirm>
                    </Tooltip>
                  ) : null}
                  {hasUpdate ? (
                    <Tooltip title="Edit">
                      <EditOutlined
                        className="text-blue-500 cursor-pointer text-lg"
                        onClick={() => updateAction(row)}
                      />
                    </Tooltip>
                  ) : null}
                </div>
              );
            },
          },
        ]
      : columns;
  return (
    <>
      <Table
        rowKey={"id"}
        className="overflow-x-auto"
        dataSource={items}
        loading={isLoading}
        columns={newColumns}
        pagination={
          hasPagination
            ? {
                total: get(meta, "total"),
                current: +get(params, "page", 1),
                pageSize: get(meta, "perPage", 1),
              }
            : false
        }
        onChange={(page) => {
          navigate({
            search: qs.stringify({
              page: page.current,
            }),
          });
        }}
      />
      {!hasPagination && customPagination ? (
        <div className="flex justify-end">
          <Pagination
            total={get(meta, "total")}
            current={+get(params, "page", 1)}
            pageSize={get(meta, "perPage", 1)}
            onChange={(page) => {
              navigate({
                search: qs.stringify({
                  page: page,
                }),
              });
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default index;
