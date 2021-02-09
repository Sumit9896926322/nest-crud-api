import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Req, Res, SetMetadata, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import  {CatService}  from './cat.service';
import catModel from './cat.model';
import Request from 'express';
import catdto from './dto/cat.dto';
import catValidationPipes from './pipes/cat.validation.pipes';
import { CatGuard } from './guards/cat.guard';
import catEntity from './cat.entity';
import catDto from './dto/cat.dto';


@Controller('')
// @UseGuards(CatGuard)
export class CatController {
    constructor(private catService:CatService){};

    @Get()
    // @SetMetadata('user',['admin']) Not a good approach,use a custome decorator
   // @HttpCode(210) put http status
    async getCats():Promise<catEntity[]>{
    
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return this.catService.getCats();;
    }

    @Get('/:id')
    getCat(@Param('id',ParseIntPipe) id:number):Promise<catEntity>{
        console.log(id);
        return this.catService.getCat(id);
    }

    @Post('add')
    addCat(@Body(ValidationPipe) body:catdto){
        return this.catService.addCat(body);
    }

    @UsePipes(catValidationPipes)
    @Delete('/:id')
    deletCat(@Param('id') id:number):Promise<catEntity[]>{
        return this.catService.deleteCat(id);
    }

    @Put('/:id')
    updateCat(@Body() catData:catDto,@Param('id') id):Promise<catEntity[]>{
        return this.catService.updateCat(id,catData);
    }
}
