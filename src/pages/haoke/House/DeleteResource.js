import React, {PureComponent} from 'react';
import { Modal, Button } from 'antd';
const { confirm } = Modal;
import {connect} from "dva";
@connect()
class DeleteResource extends React.Component {

  constructor(props) {
    super(props);
  }

  showConfirmDelete = () => {
    const { dispatch, form, record } = this.props;
    confirm(
      {
        title: '删除',
        content: '确定删除该房源信息吗？',
        onOk() {
          return new Promise((resolve, reject) => {
            dispatch({
              type: 'house/DeleteHouse',
              payload: record
            });
            setTimeout(()=>{
              resolve()
              dispatch({
                type: 'houseResource/fetch'
              });
            },500)
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <a onClick={() => {this.showConfirmDelete()}}>删除</a>
      </React.Fragment>
    )
  }
}
export default DeleteResource;
