let moment = require('moment')
export const requestData = () => {
    return { type: 'REQUESTED_DATA' }
};

export const delAC = (item) => {
    return {type: 'DELETE_ITEM', itemToDelete: item}
}

export const requestDataSuccess = (data) => {
    let date = moment(new Date()).format('LTS');
    return { 
        type: 'REQUESTED_DATA_SUCCEEDED', 
        url: data.message,
        payload: {url: data.message, date}  }
};

export const requestDataError = () => {
    return { type: 'REQUESTED_DATA_FAILED' }
};

export const fetchData = () => {
    return { type: 'FETCHED_DATA' }
};
