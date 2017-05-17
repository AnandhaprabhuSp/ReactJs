  </div>


    <!-- /container -->
 
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 

<!-- react js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
 
<!-- main react components -->
<script type="text/babel" src="libs/js/react/main.js"></script>
 
<!-- jQuery library -->
<script src="libs/js/jquery.min.js"></script>
<script src="libs/viewportchecker.js"></script>

<script type="text/javascript">
    jQuery(document).ready(function() {
        jQuery('.post').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
            offset: 100    
           });   
        
         $("div").fadeOut("slow");
            $("div").fadeIn("slow");
    });  
    

</script>


<!-- bootstrap JavaScript -->
<script src="libs/css/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="libs/css/bootstrap/docs-assets/js/holder.js"></script>
 <script src="libs/js/jsFunctions.js"></script>

<script src="libs/js/aos.js"></script>
    <script>
      AOS.init({
        easing: 'ease-in-out-sine'
      });
    </script>
 
</body>
</html>