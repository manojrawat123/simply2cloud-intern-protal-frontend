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
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Button, CircularProgress } from '@mui/material';
import { red } from '@mui/material/colors';


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


export default function InternApplicationCard({ jobApplication }) {

  const [expanded, setExpanded] = React.useState(false);




  const fieldsArray = {
    'User Phone': jobApplication.user.phone,
    'Email': jobApplication.user.email,
    'Status' : jobApplication.status
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
       
        title={<Typography variant="div" fontWeight="bold" className='text-lg'>
          {jobApplication?.user?.name}
        </Typography>}
        subheader={`Applied For - ${jobApplication.job.job_categoery.job_category}`}
      />
      <CardContent>

        <h1 className='font-bold'>Job Subtitle - <span className='font-normal'> {jobApplication.job.job_title}</span> </h1>
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
      </CardContent>
      <CardActions disableSpacing>
      
      </CardActions>
    </Card>
  );
}

