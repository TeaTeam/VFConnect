let jsonUrl = "../JSON/sensor_data.json"

function loadJson(file){
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
          xhr.overrideMimeType("application/json");
        }
      }
      })
    $.getJSON(file, function(json){
        //var toPrintJson = JSON.stringify(json);
        //$('body').html(toPrintJson);
    })
    //PENDING: Add business logic to manage JSON data
}
document.addEventListener("DOMContentLoaded",function(event){
    //loadJson(jsonUrl)
})