import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import JoyStack from "@mui/joy/Stack";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AspectRadio from "@mui/joy/AspectRatio";
import Divider from "../../components/divider";

const newDishes = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];
export default function NewDishes() {
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className="main">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <div className="product-sale">Normal size</div>
                        <AspectRadio ratio="1">
                          <img src={ele.imagePath} alt="" />
                        </AspectRadio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <JoyStack className="info">
                          <JoyStack
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            <Typography className={"title"}>
                              {ele.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className={"price"}>$12</Typography>
                          </JoyStack>

                          <JoyStack>
                            <Typography className={"views"}>
                              20
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
