function FormData() {
  document.getElementById('importContact').style.display = "none"
  document.getElementById("formData").style.display = "block";
  document.getElementById("tableContainer").style.display = "none";
  document.getElementById('paginationContainer').style.display = "none"
}
var formSValue;
function closeForm(formData) {
  document.getElementById('importContact').style.display = "block"
  document.getElementById("formData").style.display = "none";
  document.getElementById("tableContainer").style.display = "block";
  document.getElementById('paginationContainer').style.display = "block"
}

var formData = [];

document.getElementById("myForm").addEventListener("click", function (event) {
  event.preventDefault();


  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;

  let PhoneNo = document.getElementById("PhoneNo").value;
  let category = document.getElementById("category").value;
  let source = document.getElementById("source").value;
  let company = document.getElementById("comapany").value;
  let Date = document.getElementById("Date").value;

  let formDataObject = {
    fname: fname,
    lname: lname,
    email: email,
    PhoneNo: PhoneNo,
    category: category,
    // source: source,
    // company: company,
    Date: Date,
  };
  console.log("Hboob", formData.length);
  formData.push(formDataObject);

  displayTableData(1);
  closeForm()
});


function displayTableData(pageNumber) {
  let startIndex = (pageNumber - 1) * 10;
  let endIndex = startIndex + 10;

  let tableHTML = "<table><thead><tr>";

  // Add table header cells
  tableHTML += `<th>${"Email Address"}</th>`;
  tableHTML += `<th>${"First Name"}</th>`;
  tableHTML += `<th>${"Last Name"}</th>`;
  tableHTML += `<th>${"Phone no."}</th>`;
  tableHTML += `<th>${"Email Category"}</th>`;
  tableHTML += `<th>${"Register Date"}</th>`;

  tableHTML += "</tr></thead><tbody>";

  for (let i = startIndex; i < endIndex && i < formData.length; i++) {
    let data = formData[i];
    tableHTML += "<tr>";
    for (let prop in data) {
      tableHTML += "<td>";
      if (prop === "checkbox") {
        tableHTML += "<input type='checkbox'>";
      } else {
        tableHTML += data[prop];
      }
      tableHTML += "</td>";
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</tbody></table>";

  document.getElementById("tableContainer").innerHTML = tableHTML;

  // Display pagination links
  displayPaginationLinks(pageNumber);
}

function displayPaginationLinks(currentPage) {
  let totalPages = Math.ceil(formData.length / 10);
  let paginationHTML = "<div class='pagination'>";

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<span class='active'>${i}</span>`;
    } else {
      paginationHTML += `<a href='javascript:void(0);' onclick='displayTableData(${i});'>${i}</a>`;
    }
  }

  paginationHTML += "</div>";

  document.getElementById("paginationContainer").innerHTML = paginationHTML;
}

function hamburOnOff() {
  var sideBar = document.getElementById('sideBar');
  console.log(sideBar.style.display)
  if (sideBar.style.display == 'inline-block') {
    sideBar.style.display = "none";
    document.getElementById('contentSection').style.marginLeft = "25%"
    document.getElementById('contentSection').style.width = "74%"

  }
  else {
    sideBar.style.display = 'inline-block'
    document.getElementById('contentSection').style.width = "74%"
    document.getElementById('contentSection').style.marginLeft = "0%"
  }

}