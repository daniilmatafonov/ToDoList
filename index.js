const $ = require('jquery');
require('./app.scss');

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task == ''){
      alert('Enter value');
    } else {
      var todos = get_todos();
      console.log(todos);
      todos.push(task);
      localStorage.setItem('todo', JSON.stringify(todos));
      show();
      document.getElementById('task').value = '';
    }

    return false;
}


function mark() {
    var id = this.getAttribute('id');
    if($("#" + id).parent().hasClass("red")){
      $("#" + id).parent().removeClass("red");
    } else {
      $("#" + id).parent().addClass("red");
    }
    var todos = get_todos();
    return false;
}


function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li><div>' + todos[i] + '<button class="btn btn btn-primary mark btn-aligner" id="' + i  + '"> Make priority</button></div></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('mark');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', mark);
    };
}

document.addEventListener("DOMContentLoaded", function(){
     document.getElementById("Add").addEventListener("click",add);
show();
}, true);
