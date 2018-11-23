import axios from 'axios';

export function loadCurrencyData() {
    return(dispatch) => {
        return axios.get('https://min-api.cryptocompare.com/data/all/coinlist').then((response) => {
            let result = [];
            let counter = 0;
            for (let i in response.data.Data) {
                counter++;
                result.push({
                    nbr: counter,
                    name: response.data.Data[i].CoinName,
                    logo: 'https://www.cryptocompare.com' + response.data.Data[i].ImageUrl
                });
            }
            dispatch(getCurrency(result));
            return result;
        })
        .then((data) => {
            dispatch(loadCurrencyToShow(data));
        })
    }
}

export function getCurrency(data) {
    return {
        type: 'GET_ALL_CURRENCY',
        currencyAll: data
    }
}

export function loadCurrencyToShow(data, page = 1) {
    return {
        type: 'LOAD_DATA_TO_SHOW',
        toShow: data,
        page: page
    }
}