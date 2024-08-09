import {takeEvery,call,put} from 'redux-saga/effects';

function productFecth(){
    return fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
}
function *fetchProducts(){
    const products=yield call(productFecth);
    yield put({type:'FECTH_SUCCESS',payload:products});
}

function *fetchAllTProducts() {
    yield takeEvery('FETCH_PRODUCTS', fetchProducts);
  }

export default fetchAllTProducts;