/**
 * A function implementing the revealing module pattern to house all ajax request. It implements the ajax promise methodology
 * @return {Ajax Promise} promise it returns a promise, I promise that #lamejoke
 *
 * Info:
 * ajaxurl points to admin ajax url for ajax call purposes. Added by wp when script is wp enqueued
 */
var wwppBackendAjaxServices = function() {

    var getAllRegisteredWholesaleRoles = function () {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   {action:"wwppGetAllRegisteredWholesaleRoles"},
                dataType    :   "json"
            });

        },
        addNewWholesaleRole = function( newRole ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   {action:"wwppAddNewWholesaleRole",newRole:newRole},
                dataType    :   "json"
            });

        },
        editWholesaleRole = function( role ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   {action:"wwppEditWholesaleRole",role:role},
                dataType    :   "json"
            });

        },
        deleteWholesaleRole = function( roleKey ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   {action:"wwpDeleteWholesaleRole",roleKey:roleKey},
                dataType    :   "json"
            });

        },
        saveWWPPLicenseDetails = function( licenseDetails ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppSaveLicenseDetails" , licenseDetails : licenseDetails },
                dataType    :   "json"
            });

        },
        addWholesaleRoleShippingMapping = function ( mapping ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppAddWholesaleRoleShippingMethodMapping" , mapping : mapping },
                dataType    :   "json"
            });

        },
        editWholesaleRoleShippingMapping = function ( index , mapping ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppEditWholesaleRoleShippingMethodMapping" , index : index , mapping : mapping },
                dataType    :   "json"
            });

        },
        deleteWholesaleRoleShippingMapping = function ( index ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppDeleteWholesaleRoleShippingMethodMapping" , index : index },
                dataType    :   "json"
            });

        },
        addWholesaleRoleGeneralDiscount = function ( discountMapping ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppAddWholesaleRoleGeneralDiscountMapping" , discountMapping : discountMapping },
                dataType    :   "json"
            });

        },
        editWholesaleRoleGeneralDiscount = function ( discountMapping ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppEditWholesaleRoleGeneralDiscountMapping" , discountMapping : discountMapping },
                dataType    :   "json"
            });

        },
        deleteWholesaleRoleGeneralDiscount = function ( wholesaleRole ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppDeleteWholesaleRoleGeneralDiscountMapping" , wholesaleRole : wholesaleRole },
                dataType    :   "json"
            });

        },
        addPaymentGatewaySurcharge = function ( surchargeData ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppAddPaymentGatewaySurcharge" , surchargeData : surchargeData },
                dataType    :   "json"
            });

        },
        updatePaymentGatewaySurcharge = function ( idx , surchargeData ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppUpdatePaymentGatewaySurcharge" , idx : idx , surchargeData : surchargeData },
                dataType    :   "json"
            });

        },
        deletePaymentGatewaySurcharge = function ( idx ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppDeletePaymentGatewaySurcharge" ,  idx : idx },
                dataType    :   "json"
            });

        },
        addWholesaleRolePaymentGatewayMapping = function ( mapping ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppAddWholesaleRolePaymentGatewayMapping" ,  mapping : mapping },
                dataType    :   "json"
            });

        },
        updateWholesaleRolePaymentGatewayMapping = function ( mapping ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppUpdateWholesaleRolePaymentGatewayMapping" ,  mapping : mapping },
                dataType    :   "json"
            });

        },
        deleteWholesaleRolePaymentGatewayMapping = function ( wholesaleRoleKey ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppDeleteWholesaleRolePaymentGatewayMapping" ,  wholesaleRoleKey : wholesaleRoleKey },
                dataType    :   "json"
            });

        },
        getAllShippingZones = function() {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppGetAllShippingZones" },
                dataType    :   "json"
            });

        },
        getAllShippingZoneMethods = function ( shippingZoneID ) {

            return jQuery.ajax({
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppGetAllShippingZoneMethods" , shippingZoneID : shippingZoneID },
                dataType    :   "json"
            });

        },
        GetAllShippingZoneTableRates = function( shippingZoneID ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppGetAllShippingZoneTableRates" , shippingZoneID : shippingZoneID },
                dataType    :   "json"
            } );

        },
        add_wholesale_role_order_requirement = function( mapping ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_add_wholesale_role_order_requirement" , mapping : mapping },
                dataType    :   "json"
            } );

        },
        edit_wholesale_role_order_requirement = function( mapping ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_edit_wholesale_role_order_requirement" , mapping : mapping },
                dataType    :   "json"
            } );

        },
        delete_wholesale_role_order_requirement = function( wholesale_role ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_delete_wholesale_role_order_requirement" , wholesale_role : wholesale_role },
                dataType    :   "json"
            } );

        },
        add_wholesale_role_tax_option = function( mapping ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_add_wholesale_role_tax_option" , mapping : mapping },
                dataType    :   "json"
            } );

        },
        edit_wholesale_role_tax_option = function( mapping ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_edit_wholesale_role_tax_option" , mapping : mapping },
                dataType    :   "json"
            } );

        },
        delete_wholesale_role_tax_option = function( wholesale_role ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_delete_wholesale_role_tax_option" , wholesale_role : wholesale_role },
                dataType    :   "json"
            } );

        },
        initialize_product_visibility_meta = function() {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwpp_initialize_product_visibility_meta" },
                dataType    :   "json"
            } );

        },
        toggle_product_quantity_based_wholesale_pricing = function( post_id , enable ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppToggleProductQuantityBasedWholesalePricing" , post_id : post_id , enable : enable },
                dataType    :   "json"
            } );

        },
        addQuantityDiscountRule = function( post_id , rule ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppAddQuantityDiscountRule" , post_id : post_id , rule : rule },
                dataType    :   "json"
            } );

        },
        saveQuantityDiscountRule = function( post_id , index , rule ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppSaveQuantityDiscountRule" , post_id : post_id , index : index , rule : rule },
                dataType    :   "json"
            } );

        },
        deleteQuantityDiscountRule = function( post_id , index ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppDeleteQuantityDiscountRule" , post_id : post_id , index : index },
                dataType    :   "json"
            } );

        },
        toggleProductQuantityBasedWholesalePricingMappingView = function( post_id , view ) {

            return jQuery.ajax( {
                url         :   ajaxurl,
                type        :   "POST",
                data        :   { action : "wwppToggleProductQuantityBasedWholesalePricingMappingView" , post_id : post_id , view : view },
                dataType    :   "json"
            } );

        };

    return {
        getAllRegisteredWholesaleRoles                          :   getAllRegisteredWholesaleRoles,
        addNewWholesaleRole                                     :   addNewWholesaleRole,
        editWholesaleRole                                       :   editWholesaleRole,
        deleteWholesaleRole                                     :   deleteWholesaleRole,
        saveWWPPLicenseDetails                                  :   saveWWPPLicenseDetails,
        addWholesaleRoleShippingMapping                         :   addWholesaleRoleShippingMapping,
        editWholesaleRoleShippingMapping                        :   editWholesaleRoleShippingMapping,
        deleteWholesaleRoleShippingMapping                      :   deleteWholesaleRoleShippingMapping,
        addWholesaleRoleGeneralDiscount                         :   addWholesaleRoleGeneralDiscount,
        editWholesaleRoleGeneralDiscount                        :   editWholesaleRoleGeneralDiscount,
        deleteWholesaleRoleGeneralDiscount                      :   deleteWholesaleRoleGeneralDiscount,
        addPaymentGatewaySurcharge                              :   addPaymentGatewaySurcharge,
        updatePaymentGatewaySurcharge                           :   updatePaymentGatewaySurcharge,
        deletePaymentGatewaySurcharge                           :   deletePaymentGatewaySurcharge,
        addWholesaleRolePaymentGatewayMapping                   :   addWholesaleRolePaymentGatewayMapping,
        updateWholesaleRolePaymentGatewayMapping                :   updateWholesaleRolePaymentGatewayMapping,
        deleteWholesaleRolePaymentGatewayMapping                :   deleteWholesaleRolePaymentGatewayMapping,
        getAllShippingZones                                     :   getAllShippingZones,
        getAllShippingZoneMethods                               :   getAllShippingZoneMethods,
        GetAllShippingZoneTableRates                            :   GetAllShippingZoneTableRates,
        add_wholesale_role_order_requirement                    :   add_wholesale_role_order_requirement,
        edit_wholesale_role_order_requirement                   :   edit_wholesale_role_order_requirement,
        delete_wholesale_role_order_requirement                 :   delete_wholesale_role_order_requirement,
        add_wholesale_role_tax_option                           :   add_wholesale_role_tax_option,
        edit_wholesale_role_tax_option                          :   edit_wholesale_role_tax_option,
        delete_wholesale_role_tax_option                        :   delete_wholesale_role_tax_option,
        initialize_product_visibility_meta                      :   initialize_product_visibility_meta,
        toggle_product_quantity_based_wholesale_pricing         :   toggle_product_quantity_based_wholesale_pricing,
        addQuantityDiscountRule                                 :   addQuantityDiscountRule,
        saveQuantityDiscountRule                                :   saveQuantityDiscountRule,
        deleteQuantityDiscountRule                              :   deleteQuantityDiscountRule,
        toggleProductQuantityBasedWholesalePricingMappingView   :   toggleProductQuantityBasedWholesalePricingMappingView
    };

}();
