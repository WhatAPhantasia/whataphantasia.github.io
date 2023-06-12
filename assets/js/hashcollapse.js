//i hate stackoverflow but it does have its moments
//https://stackoverflow.com/questions/22564399/how-to-use-location-hash-to-open-bootstrap-panel-tab
jQuery(document).ready(function($) {

    // open panel when linked from an external link
        location.hash && $(location.hash + '.collapse').collapse('show');

    // open panel when link is on the same page
        $("a").on("click", function() {
            this.hash && $(this.hash + '.collapse').collapse('show');
        });

    // ensure any open panels are closed before showing selected
        $on('show.bs.collapse', function () {
            $('.collapse').classList.remove('show');
        });

    }); 