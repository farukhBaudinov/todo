import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document

@Schema()
export class Task {
    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    endTime: string

    @Prop()
    endDate: string

    @Prop()
    tags: string[]

    @Prop()
    status: string

    @Prop()
    isImportant: boolean
}

export const TaskSchema = SchemaFactory.createForClass(Task)