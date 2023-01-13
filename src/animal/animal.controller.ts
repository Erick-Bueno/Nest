import { Body, Controller, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { AnimalService } from './animal.service';
import { CreateAnimalDTO } from './dto/createAnimalDTO';

@Controller('animal')
export class AnimalController {
    constructor(private readonly animalService: AnimalService){}
    @Post()
    AdicionarAnimal(@Body()createAnimalDTO: CreateAnimalDTO, @Res() response){
       var dados =  this.animalService.CreateAnimal(createAnimalDTO)
       return response.status(200).send({msg: 'animal adicionado com sucesso'})
    }
}
