
const initialState = {
  url: '',
  loading: false,
  error: false,
  historyArr: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUESTED_DATA':
      return {
        url: '',
        loading: true,
        error: false,
        historyArr: [...state.historyArr]
      };
    case 'REQUESTED_DATA_SUCCEEDED':
      return {
        url: action.url,
        loading: false,
        error: false,
        historyArr: [...state.historyArr, action.payload]
      };
    case 'REQUESTED_DATA_FAILED':
      return {
        url: '',
        loading: false,
        error: true,
        historyArr: [...state.historyArr]
      };
    case 'DELETE_ITEM':
      return {
        url: '',
        loading: false,
        error: false,
        historyArr: state.historyArr.filter((item) => item !== action.itemToDelete)
      }
    default:
      return state;
  }
};