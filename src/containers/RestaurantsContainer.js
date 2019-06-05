import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import {
  addRestaurant,
  deleteRestaurant
} from '../actions'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput 
          addRestaurant={this.props.addRestaurant}
<<<<<<< HEAD
        />
        <Restaurants 
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
=======
          />
        <Restaurants 
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
          />
>>>>>>> bb97587d59480d0ef14185f32708677f446dcc91
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: (name) => dispatch(addRestaurant(name)),
  deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
})
<<<<<<< HEAD

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
=======
export default connect (mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
>>>>>>> bb97587d59480d0ef14185f32708677f446dcc91
