import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimalDTO } from './dto/createAnimalDTO';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
    constructor( 
        @InjectRepository(Animal)
        private AnimalRepository: Repository<Animal>
    ){}
    CreateAnimal(createanimaldto: CreateAnimalDTO){
        return this.AnimalRepository.save(createanimaldto)
    }
}
