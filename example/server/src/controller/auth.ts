import { Config, Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { WxminiConfig } from '../config/types/WxminiConfig';
import { Context } from 'egg';
import wxserver from "../../../../src/index"
import { global } from '../utils/global';
@Provide()
@Controller('/auth')
export class AuthController {

  @Config('wxminiConfig')
  wxminiConfig: WxminiConfig
  
  @Inject()
  ctx: Context

  @Get('/code2Session')
  async code2Session() {
    console.log(this.ctx.query.code)
    const data = await wxserver.openapi.auth.code2Session({
      appid: this.wxminiConfig.appId,
      secret: this.wxminiConfig.appSecret,
      js_code: this.ctx.query.code
    })

    return data as any;
  }

  @Get("/getAccessToken")
  async getAccessToken() {

    const data = await wxserver.openapi.auth.getAccessToken({
      appid: this.wxminiConfig.appId,
      secret: this.wxminiConfig.appSecret,

    })
    global.access_token = data.access_token;

    return data as any;
  }

  @Get("/checkEncryptedData")
  async checkEncryptedData() {
    
  }
}
