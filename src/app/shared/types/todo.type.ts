export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  isFavorited: boolean;
  description: string;
}

export interface TodoListItem extends Todo {
  isSaving: boolean;
}


export interface TodoState {
  loading: boolean,
  todo: Todo | null
}
