




function taskFunction(e) {
    const table_data = document.getElementById('table_data');
    const mynumber = document.getElementById('number').value;
    const name = document.getElementById('name').value;
    const English = document.getElementById('English').value;
    const Physics = document.getElementById('Physics').value;
    const History = document.getElementById('History').value;
    const Math = document.getElementById('Math').value;
    const Chemistry = document.getElementById('Chemistry').value;
  const Total  = parseInt(English) + parseInt(Physics) + parseInt(History) + parseInt(Math)  + parseInt(Chemistry);
  
 const percentage = Total*100/500;
    table_data.innerHTML = table_data.innerHTML + `<tr>
                                                        <td>${mynumber}</td>
                                                        <td>${name}</td>
                                                        <td>${English}</td>
                                                        <td>${Physics}</td>
                                                        <td>${History}</td>
                                                        <td>${Math}</td>
                                                        <td>${Chemistry}</td>
                                                        <td>${Total}</td>
                                                        <td>${percentage}</td>
                                                    </tr>`;
    e.preventDefault();

};