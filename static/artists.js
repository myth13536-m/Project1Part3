var callOnLoad = function() {
    var container_div = "<div class='container'>"
    var row_div = "<div class='row'>"
    var column_div = "<div class='col-md-12'>"
    var table_div = "<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>Artist</th></tr></thead><tbody>"
    $.each(artists, function(index, artist){
        var tr_tag = "<tr><th scope='row'>"+artist["user_id"]+"</th>"
        var link = "<div><a href='/artist/"+artist["user_id"]+"'</a>"+artist["name"]+"</div>"
        var name_tag = "<td>"+link+"</td>"
        var tr_end = "</tr>"
        var table_element_tag = tr_tag + name_tag + tr_end
        table_div = table_div + table_element_tag
    })
    var end_tags = "</tbody></table></div></div></div>"
    var whole_html = container_div + row_div + column_div + table_div + end_tags
    $("#title").append(whole_html)
}

$(document).ready(function() {
    callOnLoad()
})