let input = document.querySelector('#input');
        let Work = document.querySelector('#Work');
        function WriteToDo() {
            let inputValue = input.value;
            let newElement = document.createElement('li');
            newElement.innerText = input.value;
            Work.appendChild(newElement)
            input.value = ''
        }

        function saveTasks() {
            
        }

        function DeleteAll() {
            Work.innerHTML = '';
            localStorage.clear();
        }