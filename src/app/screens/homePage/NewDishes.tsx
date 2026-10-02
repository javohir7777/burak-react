import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import JoyStack from "@mui/joy/Stack";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AspectRadio from "@mui/joy/AspectRatio";
import Divider from "../../components/divider";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveNewDishes } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";

const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));
export default function NewDishes() {
  const { newDishes } = useSelector(newDishesRetriever);
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className="main">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " l"
                      : product.productSize + " size";
                  return (
                    <Card
                      key={product._id}
                      variant="outlined"
                      className={"card"}
                    >
                      <CardOverflow>
                        <div className="product-sale">{sizeVolume}</div>
                        <AspectRadio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRadio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <JoyStack className="info">
                          <JoyStack
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            <Typography className={"title"}>
                              {product.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className={"price"}>$12</Typography>
                          </JoyStack>

                          <JoyStack>
                            <Typography className={"views"}>
                              {product.productViwes}
                              <VisibilityIcon
                                style={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </JoyStack>
                        </JoyStack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New porducts are not available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
