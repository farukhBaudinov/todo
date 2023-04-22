import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(dto: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel(dto)
    return newTask.save()
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec()
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id)
  }

  async findByStatus(status: string) :Promise<Task[]> {
    return this.taskModel.find({ status })
  }

  async update(id: string, dto: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, dto, { new: true })
  }

  async remove(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id)
  }
}
