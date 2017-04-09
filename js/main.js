/* global $ */

$(document).ready(function () {
  $('#hide-nav button').click(function hideShowNavBar () {
    if (document.querySelector('#hide-nav button').innerHTML === 'Hide Nav') {
    // if ($('#hide-nav button').html ('Hide Nav')) { ... Why doesn't this work?
      $('.nav-menu').hide()
      $('#hide-nav button').html('Show Nav')
    } else {
      $('.nav-menu').show()
      $('#hide-nav button').html('Hide Nav')
    }
  })

// I have designated the ul as class='guest', but it will not pick up the tomato background from css.
// Also, how to get the red buttons inline with list items?
  $('#guest-input').keypress(function addGuestToList (_evt) {
    var newGuest = $('#guest-input').val()
    if (_evt.which === 13 && this.value !== '') {
      $('#add-guest ul.guest').append('<li>' + newGuest + '</li>')
      this.value = ''
      return false
    }
  })

  $('#guest-input-2').keypress(function addGuestWithButton (_evt) {
    var newGuest = $('#guest-input-2').val()
    if (_evt.which === 13 && this.value !== '') {
      $('#add-guest-bonus ul.guest').append('<li>' + newGuest + '<input type="button" class="button" value="x"></li>')
      this.value = ''
      return false
    }
    $('.button').click(function removeGuestEntry (_evt) {
      $(this).parent().remove()
        // How to remove the first entry?
    })
  })
})
