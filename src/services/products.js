import {HTTP} from './config'

export  default{
    list: () => {
        return HTTP.get('produtos')
    }
}