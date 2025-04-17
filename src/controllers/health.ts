import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/health')
  health(): string {
    return 'okay';
  }
}
