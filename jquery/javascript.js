
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//image upload view admin
var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};


//ajax tambah produk
$(document).ready(function(){
  $("#load").click(function(){
    $.ajax({
      type: 'GET',
      url: 'https://raw.githubusercontent.com/HafizArdi/HafizArdi.github.io/master/views/data.json',
      data: { get_param: 'value' },
      dataType: 'json',
      success: function (data) {
        $.each(data, function(index, elem) {
          console.log('product '+elem['product']+' - description '+elem['description']+' - price '+elem['price']+' - stock '+elem['stock']+' - image '+elem['image'])
          $('#destination').prepend('  <section><a href="singleProduct.html"><img src="img/'+elem['image']+'" /></a><h2>'+elem['product']+'</h2><p>'+elem['description']+'</p><aside><ul><li>Price: '+elem['price']+'</li><li>'+elem['stock']+'</li></ul><button>Add to Cart</button></aside></section>');
        });
      }
    });
  });
})
