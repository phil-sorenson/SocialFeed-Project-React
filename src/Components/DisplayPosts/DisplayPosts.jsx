/**
    // Todo: Create a feed where all posts will be displayed in your app ---> 
**        All posts should be passed into this component using PROPS ---> 
**        Utilize "map" method to map each post to its own Post component
**        similar to the 'EntriesChartTracker.jsx'
** Use 'stacks' for my post display
 
*/

// const DisplayPosts = (props) => {
//     return ( 
        
        
//      );
// }
 
// export default DisplayPosts;

//* Vertical stacks

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicStack() {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stack spacing={2}>
//         <Item>Item 1</Item>
//         <Item>Item 2</Item>
//         <Item>Item 3</Item>
//       </Stack>
//     </Box>
//   );
// }



//* Card Javascript Code
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }