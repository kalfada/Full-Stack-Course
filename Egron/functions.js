const tbody = document.querySelector('tbody');

const keys = ['fName','lName', 'ID', 'city', 'birthDate', 'parentID'];
let persons = [
  {
    fName: "Daniel Eitan",
    lName: "Kalfa",
    ID: "318448032",
    city: "Jerusalem",
    birthDate: "07/06/1997",
    parentID: "318448033"
  },
  {
    fName: "Michael",
    lName: "Curi",
    ID: "218432793",
    city: "Bnei Brak",
    birthDate: "21/05/1996",
    parentID: ""
  },
  {
    fName: "Yosef",
    lName: "Kenig",
    ID: "20944657",
    city: "Beitar",
    birthDate: "06/08/1997",
    parentID: ""
  },
  {
    fName: "Shira",
    lName: "Zaltsman",
    ID: "209349299",
    city: "Jerusalem",
    birthDate: "26/12/1997",
    parentID: ""
  },
  {
    fName: "David",
    lName: "Griber",
    ID: "33776543",
    city: "Beit Shemesh",
    birthDate: "12/03/1992",
    parentID: "22845312"
  },
  {
    fName: "Eldad",
    lName: "Bardugo",
    ID: "3314654",
    city: "Jerusalem",
    birthDate: "09/07/1998",
    parentID: ""
  },
  {
    fName: "Yosef",
    lName: "Grinveld",
    ID: "3297887",
    city: "Jerusalem",
    birthDate: "03/12/1992",
    parentID: ""
  },
  {
    fName: "Avraham",
    lName: "Livnat",
    ID: "5432987",
    city: "Jerusalem",
    birthDate: "22/11/1998",
    parentID: ""
  },
  {
    fName: "Binyomin",
    lName: "Aistenstark",
    ID: "33195443",
    city: "Jerusalem",
    birthDate: "01/07/1989",
    parentID: ""
  },
  {
    fName: "Ezra",
    lName: "Shapiro",
    ID: "3215494",
    city: "Tel Aviv",
    birthDate: "09/11/1974",
    parentID: ""
  },
  {
    fName: "Avigail",
    lName: "Smith",
    ID: "31944883",
    city: "Haifa",
    birthDate: "02/10/1994",
    parentID: ""
  },
  {
    fName: "Reuven",
    lName: "Mayer",
    ID: "30264245",
    city: "Natanya",
    birthDate: "27/06/1997",
    parentID: ""
  },
  {
    fName: "Emanuel",
    lName: "Hababou",
    ID: "32148722",
    city: "Jerusalem",
    birthDate: "04/11/1997",
    parentID: ""
  },
  {
    fName: "Yonatan",
    lName: "Cohen",
    ID: "208642801",
    city: "Petach Tikva",
    birthDate: "18/04/1998",
    parentID: ""
  },
  {
    fName: "Zeev",
    lName: "katzanelabogen",
    ID: "39228302",
    city: "Jerusalem",
    birthDate: "06/09/1969",
    parentID: ""
  },
  {
    fName: "Aviad",
    lName: "Darli",
    ID: "12385308",
    city: "Maale Adumim",
    birthDate: "27/09/1990",
    parentID: ""
  },
  {
    fName: "Moshe",
    lName: "Bachar",
    ID: "3798294",
    city: "Jerusalem",
    birthDate: "19/07/1992",
    parentID: ""
  },
  {
    fName: "Daniel",
    lName: "Yativ",
    ID: "12364267",
    city: "Raanana",
    birthDate: "27/05/1997",
    parentID: ""
  },
  {
    fName: "Dad",
    lName: "kalf",
    ID: "33664492",
    city: "Jerusalem",
    birthDate: "04/11/1990",
    parentID: ""
  }
];

function initialTable() {
  for (const person of persons) {
    addPersonNew(person);
  }
}

function addPersonNew(person) {
  let tr = document.createElement('tr');

  for (const key in person) {
    if (typeof (person[key]) != 'function') {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(person[key]));
      tr.appendChild(td);
    }
  }
  let i = document.createElement('i');
  i.className = "fas fa-pen edit";
  i.onclick = (event) => editPersonNew(event);
  let td2 = document.createElement('td')
  td2.appendChild(i);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}

function editPersonNew(event) {
  let tr = event.target.parentElement.parentElement;
  let childs = tr.children;
  for (let index = 0; index < childs.length - 1; index++) {
    if (index != 2 || childs[index].innerText == '') {
      childs[index].setAttribute('contenteditable', 'true');
    }
  }
  childs[childs.length - 1].firstChild.className = 'fas fa-check edit';
  let i = document.createElement('i');
  i.className = 'fas fa-times';
  i.onclick = (event) => deletePerson(event);
  childs[childs.length - 1].prepend(i);
  childs[childs.length - 1].lastChild.onclick = (event) => finishEditPerson(event);
}

function finishEditPerson(event) {
  let tr = event.target.parentElement.parentElement;
  let childs = tr.children;
  for (let index = 0; index < childs.length - 1; index++) {
    childs[index].setAttribute('contenteditable', 'false');
    persons[Array.from(tr.parentNode.children).indexOf(tr)][keys[index]] = childs[index].innerText;
  }
  childs[childs.length - 1].removeChild(childs[childs.length - 1].firstChild)
  childs[childs.length - 1].firstChild.className = 'fas fa-pen edit';
  childs[childs.length - 1].firstChild.onclick = (event) => editPersonNew(event);
}

function updateTable() {
  tbody.innerHTML = '';
  initialTable();
}

function addColumn() {
  let newtr = document.createElement('tr');
  newtr.innerHTML = '<tr><td></td><td></td><td contentediable = "true"></td><td></td><td></td><td></td><td><i onclick = "editPersonNew(event)" class="fas fa-pen edit"></i></td></tr>';
  tbody.prepend(newtr);
  persons.unshift({});
}

function deletePerson(event) {
  let tr = event.target.parentElement.parentElement;
  if (confirm('are you sure you want to delete?')) {
    persons.splice(Array.from(tr.parentNode.children), 1);
    tr.remove();
  }
}
///////////////////////sorting table functions////////////////////////////////
function sortByfName() {
  persons.sort((a, b) => a.fName.toLowerCase() < b.fName.toLowerCase() ? -1 : a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : 0);
  updateTable();
}

function sortBylName() {
  persons.sort((a, b) => a.lName.toLowerCase() < b.lName.toLowerCase() ? -1 : a.lName.toLowerCase() > b.lName.toLowerCase() ? 1 : 0);
  updateTable();
}

function sortByCity() {
  persons.sort((a, b) => a.city.toLowerCase() < b.city.toLowerCase() ? -1 : a.city.toLowerCase() > b.city.toLowerCase() ? 1 : 0);
  updateTable();
}



initialTable()