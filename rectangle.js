/* global Rectangle, validate: true */
$(function() {
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'), 
        $perimeter=$('#perimeter'),
        $area=$('#area'),
        $widthValidate = $('#width-validate'),
        $heightValidate = $('#height-validate'),
        isPassValidate = false;

    $width.focusout(function() {
      var result = validate($width.val());
          isPassValidate = result.isOK;
          if(!result.isOK) {
              $widthValidate.html('宽度' + result.reason);
              $width.select();                           
          } else {
              $widthValidate.html('');                      
          }           
    });

    $height.focusout(function() {
      var result = validate($height.val());
          isPassValidate = result.isOK;
          if(!result.isOK) {
              $heightValidate.html('高度' + result.reason);
              $height.select();                  
          } else {
              $heightValidate.html('');                 
          }
    });

    $btnCal.click(function(){
          if(!isPassValidate) return;
          var w = $width.val(),
              h = $height.val();
          var r = new Rectangle(w,h);
          $perimeter.val(r.perimeter());
          $area.val(r.area());
              
    });


    function validate(field){
      var $data = $(field),
          $message = $(field + '-validate'),
          label = $(field).attr('data-label');
      if(!/^-?(0|[1-9]\d*)(\.\d)?([eE][+-]?\d+)?$/.test($data.val())){
        $message.html(label+'必须是数值');
        $data.select();
        result false;
      }
      if(window.Number($data.val())<0){
        $message.html(label+'必须大于0');
        $data.select();
        return false;
      }
      $message.html('');
      return true;
    }

});
