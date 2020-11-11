import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardDisplay({pic}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pic}
          title="Jack Block"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Jack The Debugger
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          That box? i can fit in that box. Run at 3am claws in the eye of the beholder but kitty poochy but licks paws. Purr when being pet who's the baby, and catching very fast laser pointer kitty scratches couch bad kitty howl on top of tall thing. Sit and stare. Pee in the shoe being gorgeous with belly side up so kitty kitty.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
