import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import PurchasesTable from "../components/PurchasesTable";

function Account() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await axios.get(
      "http://localhost:4000/users/61d68df1f895d1a4033ec2d2"
    );
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <Grid
      container
      columns={{ xs: 4, md: 12 }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" component="div">
              {user.name}
            </Typography>
            <Typography color="text.secondary">Email: {user.email}</Typography>
            <Typography variant="body2">
              Account Balance: {user.accountBalance}
            </Typography>
            <Typography variant="body2">
              {user.isMember ? "Member" : "Not a Member"}
            </Typography>
            { user.purchases && user.purchases.length > 0 ? (
              <>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ paddingTop: "20px" }}
                >
                  Purchases
                </Typography>
                <Divider />
                <PurchasesTable purchases={user.purchases} />
              </>
            ) : ''}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Account;
