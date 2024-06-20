import axios from 'axios';

var baseUrl = "https://666a98a37013419182cff848.mockapi.io/api/ptav1/ptaStudent";

export async function getDataFromMockApi() {
    const reponse = await axios.get(baseUrl)
    return reponse.data;
}

export async function ptaCreateStudent(ptaStudent) {
    await axios.post(baseUrl, ptaStudent)
}

export async function ptaGetStudentById(ptaId) {
    const response = await axios.get(`${baseUrl}/${ptaId}`)
    return response.data;
}

export async function ptaUpdateStudent(ptaId,studentInfo) {
    await axios.put(`${baseUrl}/${ptaId}`,studentInfo)
}

export async function ptaDeleteStudent(ptaId) {
    await axios.delete(`${baseUrl}/${ptaId}`)
}