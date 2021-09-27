const todoinput = document.querySelector('.todoinput')
const addButton = document.querySelector('#add-btn')
const todoUl = document.querySelector('.todoul')

addButton.addEventListener('click',addToDoList)
todoUl.addEventListener('click',checkDeleteBtn)

function addToDoList(event){
    event.preventDefault()

    const tododiv = document.createElement('div')
    tododiv.classList.add('tododiv')

    const todolist = document.createElement('li')
    todolist.innerText = todoinput.value
    todolist.classList.add('todolist')
    tododiv.appendChild(todolist)

    const checkButton = document.createElement('button')
    checkButton.innerHTML = '✔'
    checkButton.classList.add('check-btn')
    tododiv.appendChild(checkButton)

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '❌'
    deleteButton.classList.add('delete-btn')
    tododiv.appendChild(deleteButton)

    todoUl.appendChild(tododiv)

    todoinput.value = ''
    
}

function checkDeleteBtn(e){
    
    const item = e.target;
    console.log(item)
    if(item.classList[0] === 'delete-btn'){
        const deletes = item.parentElement;
        deletes.classList.add('fall')
        deletes.addEventListener('transitionend',()=>{
            deletes.remove();
        }) 
        console.log(deletes);
    };

    if(item.classList[0] === 'check-btn')
        var check = item.parentElement;
        check.classList.toggle('checked');
        console.log(check);

}