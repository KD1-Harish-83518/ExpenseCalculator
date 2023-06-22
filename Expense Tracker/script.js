
window.onload = function() {
    var storedObj = localStorage.getItem('myObj');
    var myList = document.getElementById('myList');
  
    if (storedObj) {
      var parsedObj = JSON.parse(storedObj);
  
      var newLi = document.createElement('li');
      newLi.setAttribute('class', 'item');
      newLi.textContent = 'amount: ' + parsedObj.amount + ' description: ' + parsedObj.description + ' category: ' + parsedObj.category;
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      deleteButton.addEventListener('click', function() {
        myList.removeChild(newLi);
      });
  
      newLi.appendChild(deleteButton);
      myList.appendChild(newLi);
  
      var editButton = document.createElement('input');
      editButton.type = 'button';
      editButton.value = 'Edit';
      editButton.onclick = function() {
        localStorage.removeItem('myObj');
  
        myList.removeChild(newLi);
        document.getElementById('amount').value = parsedObj.amount;
        document.getElementById('description').value = parsedObj.description;
        document.getElementById('category').value = parsedObj.category;
      };
  
      newLi.appendChild(editButton);
      myList.appendChild(newLi);
    }
  }

document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var expenseAmount = document.getElementById('amount').value;
    var expenseDescription = document.getElementById('description').value;
    var expenseCategory = document.getElementById('category').value;
    var myList = document.getElementById('myList')
    let myObj = {
        amount: `${expenseAmount}`,
        description: `${expenseDescription}`,
        category: `${expenseCategory}`
      }
    
      let myObj_serialized = JSON.stringify(myObj);
      localStorage.setItem('myObj',myObj_serialized);
      var outputText = 'amount: ' + expenseAmount + 'description: ' + expenseDescription + ' category: ' + expenseCategory;

    
      var newLi = document.createElement('li');
      newLi.setAttribute('class', 'item');
      newLi.textContent = outputText;
      myList.appendChild(newLi);

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      deleteButton.addEventListener('click', function() {
        myList.removeChild(newLi);
      });
      newLi.appendChild(deleteButton);
      myList.appendChild(newLi);


      var editButton =document.createElement('input')
      editButton.type = "button"
      editButton.value = 'Edit'
      editButton.onclick = () => {
        localStorage.removeItem(myObj.expenseAmount);
        
        myList.removeChild(newLi)
        document.getElementById('amount').value = myObj.amount
        document.getElementById('description').value = myObj.description
        document.getElementById('category').value = myObj.category
      }
        

      
      newLi.appendChild(editButton);
      myList.appendChild(newLi);
    });