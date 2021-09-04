
type Env = 'real' | 'simulate'
export function getEnv(): Env {
    if(process.env.VDES_REQ_ENV == null || process.env.VDES_REQ_ENV == 'real') {
        // 默认为真实环境(即真实的去请求微信后端服务器)
        return 'real'
    }
    if (process.env.VDES_REQ_ENV == 'simulate') {
        // 模拟返回数据（不会去真实请求微信后端服务器）
        return 'simulate'
    }

}
