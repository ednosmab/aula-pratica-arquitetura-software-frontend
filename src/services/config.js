import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'https://aula-pratica-arquitetura-software.vercel.app/'
})