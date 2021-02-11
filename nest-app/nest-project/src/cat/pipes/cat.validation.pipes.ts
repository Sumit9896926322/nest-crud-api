import { ArgumentMetadata, BadRequestException, ExecutionContext, HttpException, HttpStatus, Injectable, Param, PipeTransform } from "@nestjs/common";
import catDto from "../dto/cat.dto";


@Injectable()
export default class catValidationPipes implements PipeTransform{
     transform(data:any,metadata:ArgumentMetadata){
   
       // only work when id is sent,not with user also
         if(isNaN(data))
            throw new HttpException('id should be integer only',HttpStatus.BAD_REQUEST);
         return data;
     }
   // custom pipe  
   // transform(cat:catDto){
   //     if(!(cat.age && cat.breed && cat.name))
   //        throw new BadRequestException('Some of the body parameters are empty');
        
            
   // }
}