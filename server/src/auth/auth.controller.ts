import { Controller,Post, Body, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { Req } from '@nestjs/common/decorators';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signup')
    singup(@Body() dto:AuthDto) {
        console.log({dto,});
        return this.authService.singup(dto);
    }

    @Post('signin')
    singin(@Body() dto:AuthDto){
    
        return this.authService.singin(dto);

    }

}
