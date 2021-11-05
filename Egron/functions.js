const tbody = document.querySelector('tbody');
let persons = [
  {
    fName: "Daniel Eitan",
    lName: "Kalfa",
    ID: "318448032",
    city: "Jerusalem",
    birthDate: "07/06/1997",
    ParentID: "318448033"
  },
  {
    fName: "Michael",
    lName: "Curi",
    ID: "218432793",
    city: "Bnei Brak",
    birthDate: "21/05/1996",
    ParentID: ""
  },
  {
    fName: "Yosef",
    lName: "Kenig",
    ID: "20944657",
    city: "Beitar",
    birthDate: "06/08/1997",
    ParentID: ""
  },
  {
    fName: "Shira",
    lName: "Zaltsman",
    ID: "209349299",
    city: "Jerusalem",
    birthDate: "26/12/1997",
    ParentID: ""
  },
  {
    fName: "David",
    lName: "Griber",
    ID: "33776543",
    city: "Beit Shemesh",
    birthDate: "12/03/1992",
    ParentID: "22845312"
  },
  {
    fName: "Eldad",
    lName: "Bardugo",
    ID: "3314654",
    city: "Jerusalem",
    birthDate: "09/07/1998",
    ParentID: ""
  },
  {
    fName: "Yosef",
    lName: "Grinveld",
    ID: "3297887",
    city: "Jerusalem",
    birthDate: "03/12/1992",
    ParentID: ""
  },
  {
    fName: "Avraham",
    lName: "Livnat",
    ID: "5432987",
    city: "Jerusalem",
    birthDate: "22/11/1998",
    ParentID: ""
  },
  {
    fName: "Binyomin",
    lName: "Aistenstark",
    ID: "33195443",
    city: "Jerusalem",
    birthDate: "01/07/1989",
    ParentID: ""
  },
  {
    fName: "Ezra",
    lName: "Shapiro",
    ID: "3215494",
    city: "Tel Aviv",
    birthDate: "09/11/1974",
    ParentID: ""
  },
  {
    fName: "Avigail",
    lName: "Smith",
    ID: "31944883",
    city: "Haifa",
    birthDate: "02/10/1994",
    ParentID: ""
  },
  {
    fName: "Reuven",
    lName: "Mayer",
    ID: "30264245",
    city: "Natanya",
    birthDate: "27/06/1997",
    ParentID: ""
  },
  {
    fName: "Emanuel",
    lName: "Hababou",
    ID: "32148722",
    city: "Jerusalem",
    birthDate: "04/11/1997",
    ParentID: ""
  },
  {
    fName: "Yonatan",
    lName: "Cohen",
    ID: "208642801",
    city: "Petach Tikva",
    birthDate: "18/04/1998",
    ParentID: ""
  },
  {
    fName: "Zeev",
    lName: "katzanelabogen",
    ID: "39228302",
    city: "Jerusalem",
    birthDate: "06/09/1969",
    ParentID: ""
  },
  {
    fName: "Aviad",
    lName: "Darli",
    ID: "12385308",
    city: "Maale Adumim",
    birthDate: "27/09/1990",
    ParentID: ""
  },
  {
    fName: "Moshe",
    lName: "Bachar",
    ID: "3798294",
    city: "Jerusalem",
    birthDate: "19/07/1992",
    ParentID: ""
  },
  {
    fName: "Daniel",
    lName: "Yativ",
    ID: "12364267",
    city: "Raanana",
    birthDate: "27/05/1997",
    ParentID: ""
  },
  {
    fName: "Dad",
    lName: "kalf",
    ID: "33664492",
    city: "Jerusalem",
    birthDate: "04/11/1990",
    ParentID: ""
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
  for (let index = 0; index < childs.length; index++) {
    childs[index].innerHTML = `<input type = "text" value = "${childs[index].textContent}"></input>`
  }
}

initialTable()