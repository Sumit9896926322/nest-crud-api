import { Body, Controller, Delete, Get, Patch, Post, Put, Req } from '@nestjs/common';
import  {CatService}  from './cat.service';
import catModel from './cat.model';
import Request from 'express';

@Controller('')
export class CatController {
    constructor(private catService:CatService){};

    @Get()
    getCats():catModel[]{
        return  this.catService.getCats();
    }

    @Get('/:id')
    getCat(@Req() req):catModel{
        return this.catService.getCat(req.params.id);
    }

    @Post('add')
    addCat(@Req() req){
        return this.catService.addCat(req.body);
    }

    @Delete('/:id')
    deletCat(@Req() req){
        return this.catService.deleteCat(req.params.id);
    }

    @Put('/:id')
    updateCat(@Req() req){
        return this.catService.updateCat(req.params.id,req.body);
    }
}
