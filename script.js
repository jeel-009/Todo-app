//Acess Dom Elements

let inp=document.querySelector('#todo-input');
let addbtn=document.querySelector('#add-btn');
let list=document.querySelector('.todo-list');


addbtn.addEventListener('click',()=>{
    //if user black task add
    if(inp.value.trim()===""){
      alert('please type a task!!')
      return;
    }

    let lis=document.createElement('li');
    //lis text=inpvalue
    lis.innerText=inp.value
    list.appendChild(lis);
    inp.value=' ';
    
    //create delete btn
    let delbtn=document.createElement('button');
    delbtn.innerText='delete';
    lis.appendChild(delbtn);

    //give delete btn class
    delbtn.classList.add('btn', 'btn-outline-danger' , 'btn-sm','m-1','delbtn');
    
    delbtn.addEventListener('click',(e)=>{
        lis.remove();
        //for stop event bubbling
        e.stopPropagation();
    })

    lis.addEventListener('click',(e)=>{
        // for class toggle
        lis.classList.toggle('completed');
    
        
    })
});
