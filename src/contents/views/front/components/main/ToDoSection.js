import React, {useState} from 'react';
//img
import IconDel from '../../assets/img/btn_close.png'
import IconEdit from '../../assets/img/btn_edit.png'
//scss
import chkOn from '../../assets/img/chk_on.png'; 
import MainStyle from '../../assets/scss/Main.module.scss';
import styled from "styled-components";
function ToDoSection({ title, todos, toggleTodo, icon, addTodo, deleteTodo, editingId, editText, setEditText, startEdit, confirmEdit}) {
  const [value, setValue] = useState('');
  const handleAdd = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue('');
  };
  
  return (
    <div className={MainStyle.todo__box}>
      <p className={MainStyle.tit}><span className={MainStyle.icon}><img src={icon} alt=''/></span> {title}</p>
      <ul className={MainStyle.todo__list}>
        {todos.map(todo => (
          <ToDoItem 
            key={todo.id} 
            item={todo} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo}     
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            startEdit={startEdit}
            confirmEdit={confirmEdit}     
          />
        ))}
      </ul>
      <form onSubmit={handleAdd} className={MainStyle.add}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit" className={MainStyle.btn}>추가</button>
      </form>
    </div>
  );
}

const  ToDoItem = ({ item, onToggle, onDelete, editingId, editText, setEditText, startEdit, confirmEdit}) => {
  const isEditing = editingId === item.id;
  return (
    <li key={item.id}>      
        {isEditing ? (
          <>
            <EditInput
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <OkButton onClick={() => confirmEdit()}>확인</OkButton>
          </>
        ) : (
          <>
            <StyledLabel>
              <HiddenCheckbox
              type="checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
              />
              <CustomCheckbox />
            <Text checked={item.done}>{item.text}</Text>
            </StyledLabel>
            <EditButton onClick={() => startEdit(item.id, item.text)}>수정</EditButton>
            <DelButton onClick={() => onDelete(item.id)}>삭제</DelButton>
          </>
        )}
        
      
    </li>
  );
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  background: #fff;
  position: relative;
  @media only screen and (max-width: 1023.9px) {
    width:18px;
    height: 18px;
  }

  ${HiddenCheckbox}:checked + & {
    background: #fff url(${chkOn}) no-repeat center/13px auto;
    border-color: #5144C3; 
    @media only screen and (max-width: 1023.9px) {
      background-size: 13px;
    }
  }
`;

const Text = styled.span`
 @media only screen and (max-width: 1023.9px) {
  font-size:14px;
 }
  ${({ checked }) => checked && `
    text-decoration: line-through;
    opacity: 0.5;
  `}
`;

const DelButton = styled.button`
  margin-left:0px;
  font-size:0;
  background-image: url(${IconDel});
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
  width:20px;
  height: 20px;
  opacity: 0.8;
  border:1px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  margin-left:2px;
`
const EditButton = styled.button`
  font-size:0;
  background-image: url(${IconEdit});
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
  width:20px;
  height: 20px;
  opacity: 0.8;
  background-color: #eee;
  border:1px solid #ccc;
  border-radius: 5px;
  margin-left:auto;
`
const OkButton = styled.button`
  height: 35px;
  width: 100%;
  font-size:11px;
  border-radius:0 5px 5px 0;
  background-color: #222;
  color:#fff;
  font-size:13px;
`

const EditInput = styled.input`
  border:1px solid #ddd;
  border-right:none;
  height: 35px;
  border-radius: 5px 0 0 5px;
  padding-inline: 5px;
`

export default ToDoSection;
