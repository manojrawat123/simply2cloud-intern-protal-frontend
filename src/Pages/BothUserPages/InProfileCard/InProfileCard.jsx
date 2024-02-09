import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from "date-fns";
import Heading from '../../../RepeatedCode/tags/Heading';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function InternProfileCard({ profile, isCompany }) {

  const [expanded, setExpanded] = React.useState(false);
  console.log(profile)

  const fieldsArray = {
    'Expected Salary': profile.expected_salary,
    'Year Of Experience': `${profile.experience_years} Year ++`,
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='border-2 rounded-2xl'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* {jobs.company.company_name.substring(0, 1)} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title={<Typography variant="div" fontWeight="bold" className='text-lg'>
          {isCompany ? profile?.intern?.name : profile.title}
        </Typography>}
        subheader={`${isCompany ? `${profile.job_categoery.job_category} (${profile.title})` : `(${profile.job_categoery.job_category})`}`}
      />
      <CardContent>
        <table>
          {Object.entries(fieldsArray).map(([key, value]) => {
            return (


              <tr key={key} variant='tr'>
                <td key={key} variant='th' fontSize={"1rem"} className='font-bold' >
                  {key}&nbsp;&nbsp;

                </td>
                <td variant='td' fontSize={"1rem"} fontWeight="400">
                  {value}
                </td><br />
              </tr>
            )
          }
          )}


        </table>
        <div>
          <h1 className='font-bold underline text-center mt-4'>Your Details</h1>
          {profile.desc.split('\n').map((element, index) => {
            return <div key={index}>{index + 1}. {element}</div>
          })}
        </div>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
    </Card>
  );
}

