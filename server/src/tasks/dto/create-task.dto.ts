export class CreateTaskDto {
    name: string
    description: string
    endTime: string
    endDate: string
    tags: string[]
    status: string
    isImportant: boolean
}
