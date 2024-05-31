   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   document.addEventListener('DOMContentLoaded',() =>{
    const form =document.getElementById('todo-form');
    const tasklist =document.getElementById('task-list');
    const newTaskInput =document.getElementById('new-task');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value='';
    });
    tasklist.addEventListener('click',(e)=>{
        if(e.target.targetName ==='BUTTON') {
            deleteTask(e.target.parentElement);
    }else if (e.target.targetName === 'LI'){
        togglecomplete(e.target);
    }
    });
    function addTask(task){
        const li = document.createElement('li');
        li.textContent = task;
        const deletebutton = documentElement('button');
        deletebutton.textContent = 'Delete';
        li.appendChild(deletebutton);
        tasklist.appendChild(li);
        saveTask();
    }
    function deleteTask(taskElement) {
        taskElement.remove();
        saveTask();

    }
    function togglecomplete(taskElement){
        taskElement.classList.toggle('completed');
        saveTask();
    }
    function saveTask() {
        const tasks = [];
        tasklist.querySelectorAll('li').forEach(taskElement =>{
            task.push({ 
                text: taskElement.firstchild.textContent,
                completed: taskElement.classList.contains('completed')

            });
        });
        localStorage.setItem('task'.json.string(tasks));
    }
    function LoadTask() {
        const task = JSON.parse(localStorage.getItem('task'));
        if(task){
            task.forEach(task => {
                const li = document.createElement('li');
                li.textContent =task.text;
                if (task.completed){
                    li.classList.add('completed');

            }
            const deletebutton = document.createElement('button');
            deletebutton.textContent='Delete';
            li.appendChild(deleteButton);
            tasklist.appendChild(li);

            });
        }
    }
    LoadTask();
});
   