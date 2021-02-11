import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Req, Res, SetMetadata, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import  {CatService}  from './cat.service';
import catModel from './cat.model';
import Request from 'express';
import catdto from './dto/cat.dto';
import catValidationPipes from './pipes/cat.validation.pipes';
import { CatGuard } from './guards/cat.guard';
import catEntity from './cat.entity';
import catDto from './dto/cat.dto';
import { jwtauthguard } from 'src/user/guard/jwtauthguard';
import { User } from 'src/user/user.decorator';
import { UserDto } from 'src/user/user.dto';


@Controller('')
@UseGuards(jwtauthguard)
export class CatController {
    constructor(private catService:CatService){}

    @Get()
    // @SetMetadata('user',['admin']) Not a good approach,use a custome decorator
   // @HttpCode(210) put http status
    async getCats(@User() user:UserDto):Promise<catEntity[]>{
        console.log(user);
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return this.catService.getCats(user);
    }

    @Get('/:id')
    getCat(@Param('id',ParseIntPipe) id:number):Promise<catEntity>{
       
        return this.catService.getCat(id);
    }

    @Post('add')
    addCat(@Body(ValidationPipe) body:catdto,@User() user:UserDto){
        return this.catService.addCat(body,user);
    }

    @Delete('/:id')
    // @UsePipes(catValidationPipes)//Not working as
    deletCat(@Param('id',ParseIntPipe) id:number,@User() user:UserDto):Promise<catEntity[]>{
        
        return this.catService.deleteCat(id,user);
    }

    @Put('/:id')
    updateCat(@Body() catData:catDto,@Param('id') id,@User() user:UserDto):Promise<catEntity[]>{
        return this.catService.updateCat(id,catData,user);
    }
}
