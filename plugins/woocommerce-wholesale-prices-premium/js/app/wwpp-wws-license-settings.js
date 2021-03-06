jQuery( document ).ready( function ( $ ) {

    var $wws_settings_wwpp = $( "#wws_settings_wwpp" ),
        $wws_wwpp_license_email = $wws_settings_wwpp.find( "#wws_wwpp_license_email" ),
        $wws_wwpp_license_key = $wws_settings_wwpp.find( "#wws_wwpp_license_key" ),
        $wws_save_btn = $wws_settings_wwpp.find( "#wws_save_btn"),
        errorMessageDuration = '10000',
        successMessageDuration = '5000';

    $wws_save_btn.click( function () {

        var $this = $( this );

        $this
            .attr( "disabled" , "disabled" )
            .siblings( ".spinner" )
                .css( {
                        display : 'inline-block',
                        visibility : 'visible'
                    } );

        var $licenseDetails = {
            'license_email' :   $.trim( $wws_wwpp_license_email.val() ),
            'license_key'   :   $.trim( $wws_wwpp_license_key.val() )
        };

        wwppBackendAjaxServices.saveWWPPLicenseDetails( $licenseDetails )
            .done( function ( data , textStatus , jqXHR ) {

                if ( data.status == "success" ) {

                    toastr.success( '' , 'Wholesale Prices License Details Successfully Saved' , { "closeButton" : true , "showDuration" : successMessageDuration } );

                } else {

                    toastr.error( '' , 'Failed To Save Wholesale Prices License Details' , { "closeButton" : true , "showDuration" : errorMessageDuration } );

                    console.log( 'Failed To Save Wholesale Prices License Details' );
                    console.log( data );
                    console.log( '----------' );

                }

            } )
            .fail( function ( jqXHR , textStatus , errorThrown ) {

                toastr.error( jqXHR.responseText , 'Failed To Save Wholesale Prices License Details' , { "closeButton" : true , "showDuration" : errorMessageDuration } );

                console.log( 'Failed To Save Wholesale Prices License Details' );
                console.log( jqXHR );
                console.log( '----------' );

            } )
            .always( function () {

                $this
                    .removeAttr( "disabled" )
                    .siblings( ".spinner" )
                    .css( {
                        display : 'none',
                        visibility : 'hidden'
                    } );

            } );

    } );

} );