import axios from 'axios';

var baseUrl = "https://666a98a37013419182cff848.mockapi.io/api/ptav1/ptaStudent";

export async function getDataFromMockApi() {
    const reponse = await axios.get(baseUrl)
    return reponse.data;
}

export async function ptaCreateStudent(ptaStudent) {
    await axios.post(baseUrl, ptaStudent)
}