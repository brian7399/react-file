import { useState } from "react";

function CreateForm(addTodo) {

  const [content,setContent] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault()
    addTodo(content)
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入代辦事項" 
      value={content} onChange={(e) => {setContent(e.target.value)}}/> {/* 雙向綁定 */}
      <button type="submit">加入</button>
    </form>
  );
}
export default CreateForm;