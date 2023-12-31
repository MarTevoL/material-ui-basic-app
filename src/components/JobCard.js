import * as React from "react";

import { Button, CardContent, Stack, Typography } from "@mui/material";
import SkillsPaper from "./SkillsPaper";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";

export default function JobCard({ job }) {
  let location = useLocation();
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      // height="100%"
      height="300px"
      padding="5px"
      // marginLeft="20px"
      // marginRight="20px"
      // marginBottom="20px"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.secondary,
      }}
    >
      <CardContent
        sx={{
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            color: (theme) => theme.palette.common.white,
            textAlign: "center",
          }}
          variant="subtitle1"
          component="div"
        >
          {job.title}
        </Typography>
        <Divider
          sx={{
            backgroundColor: (theme) => theme.palette.primary.light,
            borderBottomWidth: 2,
          }}
          variant="middle"
        />
        <SkillsPaper skills={job.skills} />
        <Typography
          sx={{
            color: (theme) => theme.palette.common.white,
          }}
        >
          {job.description}
        </Typography>
      </CardContent>
      <Button
        component={Link}
        to={`/job/${job.id}`}
        state={{ backgroundLocation: location }}
        sx={{
          marginBottom: "8px",
          backgroundColor: (theme) => theme.palette.button,
        }}
      >
        Learn More
      </Button>
    </Stack>
  );
}
