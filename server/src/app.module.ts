import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.uhduzik.mongodb.net/db'),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}