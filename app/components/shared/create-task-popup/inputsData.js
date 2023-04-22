export const inputsData = [
    {
        type: 'text',
        title: 'Название',
        name: 'name',
        placeholder: 'Названия задачи',
        options: {
            required: {
                value: true,
                message: 'Введите название'
            }
        }
    },
    {
        type: 'date',
        title: 'Дата завершения задачи',
        name: 'endDate',
        placeholder: '--.--.----',
        options: {
            required: {
                value: true,
                message: 'Введите дату'
            }
        }
    },
    {
        type: 'checkbox',
        title: 'Важная задача',
    },
    {
        type: 'text',
        title: 'Время завершения задачи',
        name: 'endTime',
        placeholder: '--:--',
        options: {
            required: {
                value: true,
                message: 'Введите дату'
            }
        }
    },
    {
        type: 'textarea',
        title: 'Описание задачи',
        name: 'description',
        placeholder: 'Описание задачи',
        options: {
            required: {
                value: true,
                message: 'Введите описание'
            }
        }
    },
]