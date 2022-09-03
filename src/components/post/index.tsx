import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import PostMenu from './post-menu';
import CircularStatic from './recaudation';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
//TODO: update CircularStatic for pie char in this link below
//https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/pie-series/
const Post = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [Like, setLike] = React.useState(true);
  const [BookMark, setBookMark] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLike(!Like)
  }

  const handleBookMark = () => {

    setBookMark(!BookMark)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Link href="/usuario-info" underline='none'>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          </Link>
        }
        action={
            <PostMenu />
        }
        title='Shrimp and Chorizo Pella'
        subheader="September 14, 2016"
      />
      <Link href="#" underline='none'>
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/seed/picsum/200/300"
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Link href="/here" underline='none'>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          {Like ? (<FavoriteBorderIcon />):(<FavoriteIcon />)}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={handleBookMark}>
          {BookMark ? (<BookmarkBorderIcon />):(<BookmarkIcon />)}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Grid xs={12}>
            <CircularStatic />
          </Grid>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Post;
