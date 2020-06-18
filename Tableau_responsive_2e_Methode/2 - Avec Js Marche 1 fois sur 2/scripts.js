
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('table').forEach(function (table) {
      var labels = Array.from(table.querySelectorAll('th')).map(function (th) {
        return th.innerText;
      });
      table.querySelectorAll('td').forEach(function (td, i) {
        td.setAttribute("data-headers", labels[i % labels.length]);
      });
    });
  });



  