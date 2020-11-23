$('#Mostrar').click(function(){

    $('#titulouno').addClass('slideLeft');
    
       var nombre = $('#nombre1').val();
       var cargo = $('#cargo1').val();

       var txt = $("#inefect option:selected").text();
       var val = $("#inefect option:selected").val();
    
    
    $('#titulouno').html('<h1 class="card-title tlt text-light" style="font-size: 2.4vw" > '+nombre+'</h1>');
   
    
    $('.tlt').textillate({
        selector: '.texts',
        loop: false,      
        minDisplayTime: 2000,      
        initialDelay: 0,      
        autoStart: true,      
        inEffects: [],      
        outEffects: [ 'hinge' ],
        in: {
          effect: val,
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },
        out: {
          effect: 'hinge',
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },
        callback: function () {},
        type: 'char'
      });

    setTimeout(
        function() 
        {
            $('#titulodos').html('<h4 class="card-title tltl text-light" style="font-size: 1.2vw" > '+cargo + '</h4> ');
            $('.tltl').textillate({
                selector: '.texts',
                loop: false,
                minDisplayTime: 2000,
                initialDelay: 0,
                autoStart: true,
                inEffects: [],
                outEffects: [ 'hinge' ],
              
                in: {
                  effect: val,
                  delayScale: 1.5,
                  delay: 50,
                  sync: false,
                  shuffle: false,
                  reverse: false,
                  callback: function () {}
                },
              
                out: {
                  effect: 'hinge',
                  delayScale: 1.5,
                  delay: 50,
                  sync: false,
                  shuffle: false,
                  reverse: false,
                  callback: function () {}
                },
        
                callback: function () {},
                type: 'char'
              });
        }, 500);

});

$('#Mostrar2').click(function(){

    $('#titulouno').addClass('slideLeft');
    
       var nombre = $('#nombre2').val();
       var cargo = $('#cargo2').val();

       var txt = $("#inefect2 option:selected").text();
       var val = $("#inefect2 option:selected").val();
    
    
    $('#titulouno').html('<h1 class="card-title tlt text-light"  style="font-size: 2.4vw"> '+nombre+'</h1>');
   
    
    $('.tlt').textillate({
        selector: '.texts',
        loop: false,      
        minDisplayTime: 2000,      
        initialDelay: 0,      
        autoStart: true,      
        inEffects: [],      
        outEffects: [ 'hinge' ],
        in: {
          effect: val,
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },
        out: {
          effect: 'hinge',
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },
        callback: function () {},
        type: 'char'
      });

    setTimeout(
        function() 
        {
            $('#titulodos').html('<h4 class="card-title tltl text-light"  style="font-size: 1.2vw" > '+cargo + '</h4> ');
            $('.tltl').textillate({
                selector: '.texts',
                loop: false,
                minDisplayTime: 2000,
                initialDelay: 0,
                autoStart: true,
                inEffects: [],
                outEffects: [ 'hinge' ],
              
                in: {
                  effect: val,
                  delayScale: 1.5,
                  delay: 50,
                  sync: false,
                  shuffle: false,
                  reverse: false,
                  callback: function () {}
                },
              
                out: {
                  effect: 'hinge',
                  delayScale: 1.5,
                  delay: 50,
                  sync: false,
                  shuffle: false,
                  reverse: false,
                  callback: function () {}
                },
        
                callback: function () {},
                type: 'char'
              });
        }, 500);

});
$('#Ocultar').click(function(){
    $('.tlt').hide(1000);
    $('.tltl').hide(1000);  
});
$('#Ocultar2').click(function(){
    $('.tlt').hide(1000);
    $('.tltl').hide(1000);  
});


$("a[rel='pop-up']").click(function () {
    var caracteristicas = "height=700,width=800,scrollTo,resizable=1,scrollbars=1,location=0";
    nueva=window.open(this.href, 'Popup', caracteristicas);
    return false;
});






