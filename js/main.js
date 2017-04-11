/* global $ */

function init () {
  $('#hide-nav button').click(function hideShowNavBar () {
    if ($('#hide-nav button').html() === 'Hide Nav') {
      $('.nav-menu').fadeOut('slow')
      $('#hide-nav button').html('Show Nav')
    } else {
      $('.nav-menu').fadeIn('slow')
      $('#hide-nav button').html('Hide Nav')
    }
  })

  $('#guest-input').keypress(function addGuestToList (evt) {
    var newGuest = $('#guest-input').val()
    if (evt.which === 13 && this.value !== '') {
      $('#add-guest ul.guest').append('<li class="guest">' + newGuest + '</li>')
      this.value = ''
      return false
    }
  })

  $('#guest-input-2').keypress(function addGuestWithButton (evt) {
    var newGuest = $('#guest-input-2').val()
    if (evt.which === 13 && this.value !== '') {
      $('#add-guest-bonus ul.guest').append('<li class="guest">' + newGuest + '<button>x</button></li>')
      this.value = ''
      return false
    }
    $('#add-guest-bonus').on('click', 'li', function removeGuestEntry (evt) {
      $(this).remove()
    })
  })
}

$(document).ready(init)
