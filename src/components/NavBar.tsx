import React from "react";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

type Prop = {
  checked: boolean;
  handleChangeup: any;
};
export default function NavBar({ handleChangeup, checked }: Prop) {
  const [value, setValue] = React.useState(0);
 
  const favoriteList = useSelector(
    (state: RootState) => state.products.favoriteList
  );
  const CartItems = useSelector((state: RootState) => state.products.cartItems);
  const favoritesLength = favoriteList.length;
  const cartItems = CartItems.length;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <Navbar bg="secondary" variant="dark">
          <Container>
            <div className="text-white">
              <p>Customer Service +46768526619</p>
            </div>

            <div>
              <button className="bg-success">Send gift</button>
              <button className="bg-warning">Buy for you</button>
            </div>
            <div>
              <Link to="/LoginPage" className="text-white  underline-none">
                LOGIN / BECOME MEMBER
              </Link>
            </div>
          </Container>
        </Navbar>
      </div>

      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/category">Pricing</Link>
              </Nav.Link>
              <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    ProductList
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/product"> All Products</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">others</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">furnitures</Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Electronic"> Electronics</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
            <div>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
              >
                <Link to="/cart">
                  <Tab
                    icon={
                      <Badge badgeContent={cartItems} color="success">
                        <ShoppingCartIcon />
                      </Badge>
                    }
                    label="CARTS"
                  />
                </Link>
                <Link to="/favorite">
                  <Tab
                    icon={
                      <Badge badgeContent={favoritesLength} color="success">
                        <FavoriteIcon />
                      </Badge>
                    }
                    label="FAVORITES"
                  />
                </Link>
                <Tab icon={<PersonPinIcon />} label="NEARBY" />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={checked} onChange={handleChangeup} />
                    }
                    label="Show"
                  />
                </FormGroup>
              </Tabs>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
