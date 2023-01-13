import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { conexao } from './ormconfig';
import {TypeOrmModule} from '@nestjs/typeorm'


@Module({
  imports: [AnimalModule, TypeOrmModule.forRoot(conexao) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
