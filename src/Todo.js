import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons';
import { TiEdit } from 'react-icons/ti';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector>
            <TimelineContent>
              <TimelineDot>
                <div
                  className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                  key={index}
                  >
                  <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                  {todo.text}
                  </div>
                  <div className='icons'>
                  <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                          />
                          <TiEdit
                            onClick={() => setEdit({ id: todo.id, value: todo.text })}
                            className='edit-icon'
                            />
                              </div>
                              </div>
              </TimelineDot>
            </TimelineContent>
          </TimelineConnector>
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  ));
};

export default Todo;