import {takeEvery,call,put} from 'redux-saga/effects';

function productFecth(){
    return fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
}
function *fetchProducts(){
    const products=yield call(productFecth);
    yield put({type:'fetch_success',payload:products});
}

function *fetchAllTProducts() {
    yield takeEvery('Fecth_Products', fetchProducts);
  }
  
export default fetchAllTProducts;