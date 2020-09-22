import React from "react";
import BallRating from "./BallRating";
import {Button, Card, CardActions, CardContent, CardMedia, CardHeader, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const Reviews = ({ reviews }) => {
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: '5%',
      backgroundColor: '#3f51b5',
      color: 'white'
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
    
    const classes = useStyles();


  return (
  <Grid container spacing={3} className={classes.cardGrid} alignItems="center" mb="2" mt="5">
  {reviews.map((review, i) => (
  <Grid item key={i} xs={4} sm={4} md={4}>
  <Card className={classes.card}>
    <CardHeader subheader={review.name}><BallRating rating={review.rating}/></CardHeader>
  <CardContent className={classes.CardContent}>
  {review.review}
  <Typography>
  <BallRating rating={review.rating}/>
  </Typography>
  </CardContent>
  </Card>
  </Grid> 
  ))}
  </Grid>

    // <div className="row row-cols-3 mb-2 mt-5">
    //   {reviews.map((review) => {
    //     return (
    //       <div
    //         key={review.id}
    //         className="card text-white bg-info mb-3 mr-4"
    //         style={{ maxWidth: "30%" }}
    //       >
    //         <div className="card-header d-flex justify-content-between">
    //           <span>{review.name}</span>
    //           <span>
    //             <BallRating rating={review.rating} />
    //           </span>
    //         </div>
    //         <div className="card-body">
    //           <p className="card-text">{review.review}</p>
    //         </div>
    //       </div>
    //          );
    //         })}
    //       </div>
        );
        }
    export default Reviews;