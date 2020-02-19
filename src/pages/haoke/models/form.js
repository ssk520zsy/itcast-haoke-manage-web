import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { addHouseResource,updateHouseResource,deleteHouseResource } from '@/services/haoke';
export default {
  namespace: 'house',
  state: {
  },
  effects: {
    *submitHouseForm({ payload }, { call }) {
      yield call(addHouseResource, payload);
      message.success('提交成功');
    },
    *updateHouseForm({ payload }, { call }) {
      yield call(updateHouseResource, payload);
      message.success('提交成功');
    },
    *DeleteHouse({ payload }, { call }) {
      yield call(deleteHouseResource, payload);
      message.success('删除成功');
    }
  },
  reducers: {
    saveStepFormData(state, { payload }) {
      return {
        ...state
      };
    },
  },
};
