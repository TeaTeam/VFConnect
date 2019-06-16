var jsdom = require("jsdom")
const { JSDOM } = jsdom
const { window } = new JSDOM()
const { document } = (new JSDOM('')).window
global.document = document
var $ = jQuery = require('jquery')(window)
const util = require('util')
var url = 'https://raw.githubusercontent.com/TeaTeam/VFConnect/master/resources/json/sensor_data.json'

function loadJson(){
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType){
          xhr.overrideMimeType("application/json")
        }
      }
    })
    $.getJSON(url, function(json){
        var toPrintJson = JSON.stringify(json)
        $('#rjson').html(toPrintJson)
        $.each(JSON.parse(toPrintJson), function(i, item){
            console.log(item)
        })
        //console.log(util.inspect(JSON.parse(toPrintJson.toString()), { colors: true }))
    })
}
loadJson()