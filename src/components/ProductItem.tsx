import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { productActions } from "../Redux/slices/Product";
import { Product } from "../types/types";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Alert from "@mui/material/Alert";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "@mui/material/Button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const [expanded, setExpanded] = React.useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite((prevIsFavorite: any) => !prevIsFavorite);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();
  function addOrRemoveFromFavorite(product: Product) {
    dispatch(productActions.addOrRemoveFromFavorite(product));
  }
  function addToCart(product: Product) {
    dispatch(productActions.addToCart(product));
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.title.charAt(0)}
          </Avatar>
        }
        title={item.title}
      />
      <Link to={`/product/${item.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={item.category.image}
          alt={item.title}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => addOrRemoveFromFavorite(item)}
        >
          {isFavorite ? (
            <FavoriteIcon color="secondary" onClick={handleFavoriteToggle} />
          ) : (
            <FavoriteIcon color="success" onClick={handleFavoriteToggle} />
          )}
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />

          <Button
            variant="contained"
            color="success"
            onClick={() => addToCart(item)}
          >
            Buy now
          </Button>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <Alert severity="success">
              {item.title} was added with success
            </Alert>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
