import axios from 'axios'
const TEST_URL ='http://localhost:80/api/curriculums';
export const CHANGE_CURRICULUMS = 'change_curriculums';
export const FETCH_CURRICULUMS = 'fetch_curriculums';


export function changeCurriculums(value) {
  console.log(value);
  return {
    type:CHANGE_CURRICULUMS,
    payload:value
  }
}
//read
export  function  fetchCurriculums(){
  const response =  axios.get(`${TEST_URL}`);
  return {
    type:FETCH_CURRICULUMS,
    payload:response
  }

}
export function createCurriculums(value) {
  const response = axios.post(`${TEST_URL}`,value);
  return {
    type:FETCH_CURRICULUMS,
    payload:response
  }

}

export function deleteCurriculums(id) {
  const response = axios.delete(`${TEST_URL}/${id}`);
    return{
      type:FETCH_CURRICULUMS,
      payload:response
    }

}

export function updateCurriculums(id,payload) {
  const response = axios.put(`${TEST_URL}/${id}`,payload)
  return {
    type:FETCH_CURRICULUMS,
    payload:response
  }

}
