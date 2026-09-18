import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

import { CssVarsProvider } from "@mui/joy/styles";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

const activeUsers = [
  { memberNick: "Martin", mamberImage: "/img/martin.webp" },
  { memberNick: "Justin", mamberImage: "/img/justin.webp" },
  { memberNick: "Rose", mamberImage: "/img/rose.webp" },
  { memberNick: "Nusret", mamberImage: "/img/nusret.webp" },
];
export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} className={"card"} variant="solid">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.mamberImage} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardContent className={"member-nickname"}>
                        <Typography>{ele.memberNick}</Typography>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New Active Users! </Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
