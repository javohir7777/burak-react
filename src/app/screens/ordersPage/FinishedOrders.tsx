import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {[].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className={"orders-name-price"}>
                      <img
                        src={"/img/kebab-fresh.webp"}
                        className={"order-dish-img"}
                        alt="No img?"
                      />
                      <p className={"title-dish"}>Kebab</p>
                      <Box className={"price-box"}>
                        <p>$12</p>
                        <img src={"/icons/close.svg"} alt="No img?" />
                        <p>2</p>
                        <img src={"/icons/pause.svg"} alt="No img?" />
                        <p style={{ marginLeft: "15px" }}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>$24</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="No img?"
                  />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="No img?"
                  />
                  <p>Total</p>
                  <p>$26</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {true && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
              alt="No img"
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
