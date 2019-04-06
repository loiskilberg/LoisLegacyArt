$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Lois Footer');
        comp_comp1.code = '<div class="footer-basic">\
    <footer>\
        <div class="social" data-pg-collapsed>\
            <a href="https://www.instagram.com/loislegacyart/"><i class="fab fa-instagram"></i></a>\
            <a href="http://www.facebook.com/pages/Lois-Mitchell-Illustrator-and-Artist/337490288938"><i class="fab fa-facebook"></i></a>\
            <a href="https://twitter.com/loislegacyart"><i class="fab fa-twitter"></i></a>\
            <a href="https://www.pinterest.com/loislegacyart/"><i class="fab fa-pinterest"></i></a>\
            <a href="http://patreon.com/loislegacyart"><i class="fab fa-patreon"></i></a>\
            <a href="https://www.etsy.com/shop/LoisLegacyArt"><i class="fab fa-etsy"></i></a>\
        </div>\
        <div class="newsletter" data-pg-collapsed>\
            <form class="newsletter-signup" method="post" action="signup.php">\
                <label>Newsletter Sign-up</label>\
                <input type="text" id="field_email" name="sender_email" placeholder="Enter email address" required/>\
                <input type="submit" name="send_message" value="Submit" class="submit-button btn btn-primary"/>\
            </form>\
        </div>\
        <p class="copyright" data-pg-collapsed>Lois Mitchell © 2018 | Website by <a href="http://www.pearlmarketingdesign.com">Pearl Marketing</a></p>\
        <div data-pg-collapsed class="text-center">\
            <div class="container">\
                <div class="row">\
                    <div class="col-md-12">                          \
\
                        <a href="http://www.nashuachamber.com/"><img src="assets/img/Chamber-Logo-R.png" width="135px" alt="A Proud Member of Greater Nashua Chamber of Commerce" border="0"></a>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </footer>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Lois Header');
        comp_comp2.code = '<section id="masthead">\
    <nav class="navbar navbar-light navbar-expand-lg navigation-clean">\
        <div class="container">\
            <a href="index.html" class="navbar-brand">\
                <img src="assets/img/Lois-Legacy-Art-Logo-Web.png" height="100px" alt="Lois Legacy Art"/>\
            </a>\
            <button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler">\
                <span class="sr-only">Toggle navigation</span>\
                <span class="navbar-toggler-icon"></span>\
            </button>\
            <div class="collapse navbar-collapse" id="navcol-1">\
                <ul class="nav navbar-nav ml-auto">\
                    <li role="presentation" class="nav-item">\
                        <a href="index.html" class="nav-link"><strong><img src="assets/img/Menu/HomeButton.png" style="height:32px;" alt="Home"></strong></a>\
                    </li>\
                    <li role="presentation" class="nav-item">\
                        <a href="watercolors.html" class="nav-link"><strong><img src="assets/img/Menu/PaintingsButton.png" style="height:32px;" alt="Paintings"></strong></a>\
                    </li>\
                    <li role="presentation" class="nav-item">\
                        <a href="3D-maps.html" class="nav-link"><strong><img src="assets/img/Menu/3DMapsButton.png" style="height:32px;" alt="Maps"></strong></a>\
                    </li>\
                    <li role="presentation" class="nav-item">\
                        <a href="shop.html" class="nav-link"><strong><img src="assets/img/Menu/ShopButton.png" style="height:32px;" alt="Shop"></strong></a>\
                    </li>\
                    <li role="presentation" class="nav-item">\
                        <a href="about.html" class="nav-link"><strong><img src="assets/img/Menu/AboutButton.png" style="height:32px;" alt="About"></strong></a>\
                    </li>\
                    <li role="presentation" class="nav-item">\
                        <a href="contact.html" class="nav-link"><strong><img src="assets/img/Menu/ContactButton.png" style="height:32px;" alt="Contact"></strong></a>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>\
</section>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});