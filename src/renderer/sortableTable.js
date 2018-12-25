import React from 'react';
import { Table } from 'antd';
import 'antd/lib/table/style/css';

const dataSource = [
  {
    key: '1',
    userId: 'kanade',
    itemCount: '2',
    likeCount: '10',
  },
  {
    key: '2',
    userId: 'asuka',
    itemCount: '1',
    likeCount: '3',
  },
  {
    key: '3',
    userId: 'karen',
    itemCount: '5',
    likeCount: '120',
  },
];

const columns = [
  {
    title: 'ユーザーID',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '投稿数',
    dataIndex: 'itemCount',
    key: 'itemCount',
    sorter: (a, b) => a.itemCount - b.itemCount,
  },
  {
    title: 'いいね数',
    dataIndex: 'likeCount',
    key: 'likeCount',
    sorter: (a, b) => a.itemCount - b.itemCount,
  },
];

export default () => (
  <Table columns={columns} dataSource={dataSource} />
);
