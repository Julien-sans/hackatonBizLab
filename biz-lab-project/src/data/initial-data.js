const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Project #1', image: 'https://via.placeholder.com/'},
    'task-2': {id: 'task-2', content: 'Project #2', image: 'https://via.placeholder.com/'},
    'task-3': {id: 'task-3', content: 'Project #3', image: 'https://via.placeholder.com/'},
    'task-4': {id: 'task-4', content: 'Project #4', image: 'https://via.placeholder.com/'},
    'task-5': {id: 'task-5', content: 'Project #5', image: 'https://via.placeholder.com/'},
    'task-6': {id: 'task-6', content: 'Project #6', image: 'https://via.placeholder.com/'},
    'task-7': {id: 'task-7', content: 'Project #7', image: 'https://via.placeholder.com/'},
    'task-8': {id: 'task-8', content: 'Project #8', image: 'https://via.placeholder.com/'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TODO',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7'],
    }, 
    'column-2': {
      id: 'column-2',
      title: 'DOING',
      taskIds: [],
    }, 
    'column-3': {
      id: 'column-3',
      title: 'DONE',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;