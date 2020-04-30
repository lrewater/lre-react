import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid, Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

// create page styles
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(8)
  },
  description: {
    marginTop: 0,
    marginBottom: theme.spacing(2),
    lineHeight: 1.8,
    fontSize: 18,
    textAlign: "left"
  }
}));

const Home = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="md">
          <Typography variant="h4" style={{ textAlign: "left" }} gutterBottom>
            LRE React Examples
          </Typography>
          <Typography variant="body1" className={classes.description}>
            This site can be used to quickly test LRE React components.
          </Typography>
          <section className={classes.featuresBlock}>
            <Typography variant="h6" gutterBottom>
              Pages
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Form Elements
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Try out various form elements
                    </Typography>
                    <Button
                      color="primary"
                      component={Link}
                      to="/form-elements"
                    >
                      View Page
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Reports and Views
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Try out various report and view elements
                    </Typography>
                    <Button
                      color="primary"
                      component={Link}
                      to="/reports-views/1"
                    >
                      View Page
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Tables
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Try out various table elements
                    </Typography>
                    <Button color="primary" component={Link} to="/tables">
                      View Page
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Home;
