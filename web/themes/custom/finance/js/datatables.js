/**
* Datatables.
**/

(function ($, Drupal) {
  Drupal.behaviors.dataTables = {
    attach: function attach(context) {

      $('.view-expenses table').DataTable();

    }
  };
})(jQuery, Drupal);
