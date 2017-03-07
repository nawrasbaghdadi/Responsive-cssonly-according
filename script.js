(function(){
  
  var root = 'http://jsonplaceholder.typicode.com';
  var id =1;
  $('input').on('click',function(){
    id = this.id.split("option-")[1];
    feed (id);
  })
  temp = function(data){
    if(typeof(data) !== "object"){
      data = JSON.parse(data);  
      }
    var bdy= "<h3>"+data.title+"</h3>";
      bdy +="<p>"+data.body+"</p>";
    $("#option-"+id+"-panel").html(bdy);  
  }
  feed = function(id){
    if(localStorage.getItem("postData-"+id)){
      temp(localStorage.getItem("postData-"+id));
      console.log('cached');
    }else{
      $.getJSON({
        url: root + '/posts/'+id,
        method: 'GET'
      }).then(function(data) {
            temp(data);
            console.log('json');
            localStorage.setItem("postData-"+id, JSON.stringify(data));           
            });
        }

    }
feed(id);
})();