import React, { Component } from 'react';
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Button
} from '@material-ui/core';

export class Tradeform extends Component {
  state = {
    action: "buy",
    orderType: "market-order"
  }

  changeAction = (event: any, value: string) => {
    // console.log(event);
    // console.log(value);
    this.setState({
      action: value
    });
  }

  changeOrderType = (event: any) => {
    // console.log(event.target.value);
    this.setState({
      orderType: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Typography variant="h5">Stock Name</Typography>
        <BottomNavigation
          showLabels
          value={this.state.action}
          onChange={this.changeAction}
        >
          <BottomNavigationAction label="Buy" value="buy"></BottomNavigationAction>
          <BottomNavigationAction label="Sell" value="sell"></BottomNavigationAction>
        </BottomNavigation>
        <form>
          <FormControl style={{ width: "45%", minWidth: 120, marginRight: "10%" }}>
            <InputLabel id="order-type-label">Order Type</InputLabel>
            <Select
              labelId="order-type-label"
              id="order-type"
              value={this.state.orderType}
              onChange={this.changeOrderType}
            >
              <MenuItem value="market-order">Market Order</MenuItem>
              <MenuItem value="limit-order">Limit Order</MenuItem>
              <MenuItem value="trailing-stop-order">Trailing Stop Order</MenuItem>
              <MenuItem value="stop-order">Stop Order</MenuItem>
              <MenuItem value="stop-limit-order">Stop Limit Order</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "45%", minWidth: 120 }}>
            <InputLabel htmlFor="order-size">Order Size</InputLabel>
            <Input id="order-size" />
          </FormControl>
        </form>
      </div>
    )
  }
}

export default Tradeform
