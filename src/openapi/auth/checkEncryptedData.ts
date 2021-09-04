import { getEnv } from "../common/env"
import server from "../common/server"


interface ReqObj {
    access_token?: string,
    encrypted_msg_hash?: string
}

interface RespObj {
    vaild?: string,
    create_time?: number,
}

const url = '/wxa/business/checkencryptedmsg'

export function checkEncryptedData(obj: ReqObj): Promise<RespObj> {
    if (getEnv() == 'real') {
        return server.request({
            method: 'post',
            params: {
                access_token: obj.access_token
            },
            data: {
                encrypted_msg_hash: obj.encrypted_msg_hash
            }

        })
    }

    if ( getEnv() == 'simulate') {
        const data: RespObj = {
            vaild: '11',
            create_time: 11
        }

        return Promise.resolve(data)
    }
}