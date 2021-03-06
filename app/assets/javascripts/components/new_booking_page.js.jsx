global.NewBookingPage = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  submitForm: function(booking) {
    var self = this,
        data = {booking: booking};

    this.setState({isLoading: true});

    $.post('/bookings', data).done(function(response) {
      if (response.success == true) {
        window.location.href = '/'
      } else {
        self.setState({isLoading: false});
        alert('Something went wrong')
      }
    }).complete(function() {
      // Problem!
    });
  },

  render: function() {
    return (
      <div>
        <PrimaryNavigation showBackHome={true} extraClasses="" />
        <LoadingOverlay isVisible={this.state.isLoading} />

        <div className="container">
          <h2 className="page-subtitle">Schedule a new booking</h2>

          <div className="card list-page-content">
            <BookingForm onSubmit={this.submitForm} />
          </div>
        </div>
      </div>
    )
  }
});
