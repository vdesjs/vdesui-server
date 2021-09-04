import { Config, Controller, Get, Provide } from '@midwayjs/decorator';
import { WxminiConfig } from '../config/types/WxminiConfig';

@Provide()
@Controller('/')
export class HomeController {

  @Config('wxminiConfig')
  wxminiConfig: WxminiConfig

  @Get('/')
  async home() {
    console.log(this.wxminiConfig)
    return 'Hello Midwayjs!';
  }
}
