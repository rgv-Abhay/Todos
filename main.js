let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-btn');
let task = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    }
    else {
        addBtn.classList.remove('active')
    }
});

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
      <div class="item-btn">
         <i class='bx bxs-edit mark'></i>
         <i class='bx bx-x delete'></i>
      </div>
        `
        task.appendChild(newItem);
        input.value = '';
    }
    else {
        alert('Please enter task first')
    }
});

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){ 
        e.target.parentElement.parentElement.remove()
    }
});
task.addEventListener('click', (e) => {
    if (e.target.classList.contains('mark')) {
        e.target.parentElement.parentElement.classList.toggle('complete')
    }
});