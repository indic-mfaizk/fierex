import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";
import React from "react";
import bg from "../assets/LandingPageAssets/bg.svg";
import NavBar from "../components/NavBar";
import heroImage from "../assets/LandingPageAssets/heroImage.png";
import fLogo from "../assets/LandingPageAssets/fieresLogo.png";
import divider from "../assets/LandingPageAssets/divider.svg";
import line from "../assets/LandingPageAssets/line.png";
import sec3code from "../assets/LandingPageAssets/sec3code.svg";
import sec3retry from "../assets/LandingPageAssets/sec3retry.svg";
import sec3roc from "../assets/LandingPageAssets/sec3roc.svg";
import arrow from "../assets/LandingPageAssets/arrow.svg";
const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#0d0109",
          width: "100vw",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Container
          maxWidth="xl"
          sx={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Grid container spacing={2} columns={{ sm: 1, md: 12 }}>
            <Grid
              item
              md={4}
              container
              alignItems={"center"}
              justifyContent={{ xs: "center", md: "flex-start" }}
              order={{ xs: 2, sm: 2, md: 1 }}
              //   sx={{ bgcolor: "green" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"15px"}
                sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
              >
                <Typography
                  variant="h3"
                  fontWeight={"500"}
                  fontFamily={"inter"}
                  color={"white"}
                  fontSize={{ xs: "25px", md: "40px" }}
                >
                  FIERES
                </Typography>
                <Typography
                  variant="h5"
                  fontFamily={"inter"}
                  fontWeight={"600"}
                  color={"white"}
                  sx={{
                    width: { xs: "auto", sm: "450px" },
                    textAlign: { xs: "center", sm: "center", md: "left" },
                  }}
                  fontSize={{ xs: "15px", md: "20px" }}
                >
                  Blockchain Redefined - Simplifying Digital Asset Ownership
                  with the most scalable blockchain economy
                </Typography>
                <Typography
                  variant="body"
                  sx={{ width: { xs: "auto", sm: "450px" }, textAlign: "left" }}
                  fontFamily={"sora"}
                  fontWeight={"300"}
                  color={"white"}
                >
                  Experience the unparalleled power of Fieres chain - the
                  trailblazing crypto engineering organisation transforming the
                  digital asset landscape. Our super- fast blockchain can handle
                  over 3500 transactions per second with Web 3.0 capabilities,
                  metaverse integration, cutting-edge technology, finance
                  solutions, and Play 2 Earn gaming. Join us in revolutionising
                  the digital asset ecosystem and discovering the most scalable
                  blockchain economy.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    background:
                      "linear-gradient(90deg,#FF6F37, #FF2676, #B801AA, #7101BC)",
                    color: "white",
                    width: "170px",
                    borderRadius: "30px",
                    alignSelf: { xs: "center", md: "flex-start" },
                  }}
                >
                  White Paper
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              md={8}
              alignItems={"center"}
              justifyContent={"center"}
              container
              order={{ xs: 1, sm: 1, md: 2 }}
              position={{ xs: "static", md: "relative" }}
              sx={{
                height: { xs: "300px", md: "700px" },
              }}
            >
              <Box
                component={"img"}
                sx={{
                  height: { xs: "300px", md: "750px" },
                }}
                src={heroImage}
                position={{ xs: "absolute", md: "static" }}
                left={{ md: "0px" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, md: 12 }}
            color={"#fff"}
            sx={{
              bgcolor: { xs: "none", md: "rgba(255, 255, 255, 0.03)" },
              padding: "10px",
              borderRadius: "20px",

              mt: {
                xs: "50px",
                md: "0px",
              },
            }}
          >
            <Grid
              container
              item
              md={6}
              direction={"column"}
              //   columnSpacing={}
              rowSpacing={1}
              sx={{
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                // ml: "10px",
              }}
            >
              <Grid item>
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"600"}
                  color={"#fff"}
                  width={{ xs: "auto", md: "400px" }}
                  textAlign={{ xs: "center", md: "inherit" }}
                  fontSize={"30px"}
                >
                  FIERO PRICE{" "}
                  <Typography
                    fontFamily={"goodtimes"}
                    component={"span"}
                    sx={{ color: "#FF136D" }}
                    fontWeight={"600"}
                    color={"#fff"}
                    fontSize={"30px"}
                  >
                    LIVE
                  </Typography>{" "}
                  DATA
                </Typography>
              </Grid>
              <Grid item>
                <Box component={"div"} sx={{ display: "flex" }}>
                  <Box
                    component={"img"}
                    src={fLogo}
                    sx={{ width: "40px", height: "40px" }}
                  />
                  <Box
                    component={"div"}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="subtitle1" sx={{ minWidth: "150px" }}>
                      Fieres Blockchain
                    </Typography>
                    <Typography variant="subtitle1">Fearo</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"700"}
                  fontSize={"30px"}
                >
                  $0.0197
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  sx={{
                    background:
                      "linear-gradient(90deg ,#FF6F37, #FF2676, #B801AA, #7101BC)",
                    width: "120px",
                    textAlign: "center",
                    color: "white",
                    borderRadius: "15px",
                    // height: "0px",
                  }}
                >
                  <Typography
                    variant="button"
                    fontFamily={"sora"}
                    fontSize={"13px"}
                  >
                    Buy Now
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },

                alignItems: { xs: "center", md: "flex-start" },
              }}
              pr={{ xs: "0px", md: "20px" }}
            >
              <Box
                component={"div"}
                bgcolor={"#190d15"}
                sx={{
                  height: "400px",
                  width: "400px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "15px",
                  position: "relative",
                  pt: "50px",
                  //   bgcolor: "blue",
                }}
              >
                <Typography fontFamily={"sora"} fontWeight={"700"}>
                  Pre-sale is Live Now
                </Typography>
                <Box
                  component={"div"}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Days</Typography>
                  </Box>

                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Hours</Typography>
                  </Box>

                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Minutes</Typography>
                  </Box>

                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Second</Typography>
                  </Box>
                </Box>
                <Box component={"img"} src={divider} sx={{ mt: "20px" }} />

                <Typography fontFamily={"sora"} fontWeight={"700"}>
                  Pre-sale
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    width: "300px",
                    height: "10px",
                    background: "#241820",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      width: "200px",
                      height: "10px",
                      background:
                        "linear-gradient(90deg,#FFB000, #FF564D, #FF0098, #5D00C1)",
                      borderRadius: "10px",
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "90px",
                    left: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ bgcolor: "white", height: "25px", width: "1px" }}
                  />
                  <Typography fontWeight={"300"} fontSize={"15px"}>
                    Pre-sale
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "90px",
                    left: "130px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ bgcolor: "white", height: "25px", width: "1px" }}
                  />
                  <Typography fontWeight={"300"} fontSize={"15px"}>
                    Soft Cap
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "90px",
                    left: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ bgcolor: "white", height: "25px", width: "1px" }}
                  />
                  <Typography fontWeight={"300"} fontSize={"15px"}>
                    Bonus
                  </Typography>
                </Box>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    bgcolor: "#281a21",
                    px: "20px",
                    py: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Typography variant="button" color={"white"}>
                    Purchase Token
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* section-3-start */}
          <Container
            maxWidth={"xl"}
            sx={{
              bgcolor: "#0d0109",
              height: { xs: "auto", md: "400px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "column",
              gap: "30px",
              mt: { xs: "50px", md: "0px" },
            }}
          >
            {/* item-start-here */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                px: "10px",
                alignItems: "center",
                justifyContent: "center",
                width: { md: "auto", xs: "100%" },
              }}
            >
              <Box
                component={"img"}
                src={sec3roc}
                sx={{
                  width: { md: "100px", xs: "100%" },
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Button
                variant="text"
                sx={{
                  gap: "10px",
                  bgcolor: "#1a0b11",
                  borderRadius: "50px",
                  px: { md: "50px", xs: "0px" },
                  height: { xs: "50px", md: "80px" },
                  width: { md: "auto", xs: "400px" },
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontWeight={"600"}
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  FIERES BLOCKCHAIN EXPLORER
                </Typography>
                <Box component={"img"} src={arrow} />
              </Button>
            </Box>
            {/* item-start-here */}
            {/* item-start-here */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                px: "10px",
                alignItems: "center",
                justifyContent: "center",
                width: { md: "auto", xs: "100%" },
              }}
            >
              <Box
                component={"img"}
                src={sec3code}
                sx={{
                  width: { md: "100px", xs: "100%" },
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Button
                variant="text"
                sx={{
                  gap: "10px",
                  bgcolor: "#1a0b11",
                  borderRadius: "50px",
                  px: { md: "50px", xs: "0px" },
                  height: { xs: "50px", md: "80px" },
                  width: { md: "auto", xs: "400px" },
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontWeight={"600"}
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  DEVELOPER RESOURCES
                </Typography>
                <Box component={"img"} src={arrow} />
              </Button>
            </Box>
            {/* item-start-here */}
            {/* item-start-here */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                px: "10px",
                alignItems: "center",
                justifyContent: "center",
                width: { md: "auto", xs: "100%" },
              }}
            >
              <Box
                component={"img"}
                src={sec3retry}
                sx={{
                  width: { md: "100px", xs: "100%" },
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Button
                variant="text"
                sx={{
                  gap: "10px",
                  bgcolor: "#1a0b11",
                  borderRadius: "50px",
                  px: { md: "50px", xs: "0px" },
                  height: { xs: "50px", md: "80px" },
                  width: { md: "auto", xs: "400px" },
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontWeight={"600"}
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  FIERES BLOCKCHAIN TESTNET
                </Typography>
                <Box component={"img"} src={arrow} />
              </Button>
            </Box>
            {/* item-start-here */}
          </Container>
          {/* section-3-end */}
          {/* section-4-start */}
          <Container maxWidth="xl" sx={{ color: "white" }}>
            <Box sx={{ width: "50%" }}>
              <Typography>
                Welcome to the exciting new era of blockchain, where people come
                together to create a more sustainable, inclusive, and equitable
                world. At Fieres, we're proud to be leading the way with our
                innovative Fieres Chain, which bridges the physical and digital
                worlds, connecting real-world data to digital assets.
              </Typography>
              <Typography>
                Our vision is to create a world where transparency and trust are
                between individuals and organisations. With Fieres Chain, we're
                making this vision a reality by quantifying and validating
                actions and their impacts. You can take ownership of your
                personal data, control its use, and be part of a secure,
                trustworthy, and transparent transfer of information and value.
                This is the power of Web3 - where everyone is an owner and
                co-creator, not just a user. Experience the future of digital
                asset creation with Fieres Chain, designed for low transaction
                fees and real-time execution. Our designed for low transaction
                fees and real-time execution. Our designed for low transaction
                fees and real-time execution. Our blockchain empowers financial
                institutions and businesses with fast and reliable transactions,
                while also enabling individuals to actively participate in
                shaping more sustainable value chains. Join us today and be part
                of the revolution!
              </Typography>
              <Button
                variant="text"
                sx={{
                  height: "50px",
                  background:
                    "linear-gradient(90deg,#FF6F37, #FF2676, #B801AA, #7101BC)",
                  borderRadius: "25px",
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontSize={"15px"}
                  sx={{ mx: "10px", color: "white" }}
                >
                  Explore Dapps
                </Typography>
              </Button>
            </Box>
            <Box></Box>
          </Container>
          {/* section-4-end */}
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
