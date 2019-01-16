const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Project #1', image: 'https://via.placeholder.com/'},
    'task-2': {id: 'task-2', content: 'Project #2', image: 'https://via.placeholder.com/'},
    'task-3': {id: 'task-3', content: 'Project #3', image: 'https://via.placeholder.com/'},
    'task-4': {id: 'task-4', content: 'Project #4', image: 'https://via.placeholder.com/'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TODO',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
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