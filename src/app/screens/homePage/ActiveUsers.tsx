import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import { CssVarsProvider } from "@mui/joy/styles";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveTopUsers } from "./selector";
import { useSelector } from "react-redux";
import { Member } from "../../../lib/types/member";
import { serverApi } from "../../../lib/config";

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((ele: Member) => {
                  console.log(ele.memberImage);
                  const imagePath = `${ele.memberImage ? `${serverApi}/${ele.memberImage}` : "/icons/restaurant.svg"}`;
                  return (
                    <Card key={ele._id} className={"card"} variant="solid">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
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
