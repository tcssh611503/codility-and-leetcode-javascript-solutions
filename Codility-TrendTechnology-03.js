//select nested ul/ol list
function TrendSolutio3() {
  var alllistcount = $("ul,ol").length;
  var parentscount = 0;
  var parentsarray = [];
  var result;
  
  if (alllistcount) {
    for (i=0; i < alllistcount; i++) {
      parentscount = $("ul,ol").eq(i).parents("ul,ol").length + 1;
      parentsarray.push(parentscount)
    }
    result = Math.max.apply(null ,parentsarray)
  }else{
    result = 0;
  }
  
  return result;
}