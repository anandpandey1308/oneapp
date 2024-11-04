/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Lock } from "lucide-react";
import Profile from "../../assets/profile.svg";

const CardSkeleton = () => (
  <div className="animate-pulse" style={{ maxWidth: 350, height: 150 }}>
    <div className="h-16 bg-gray-200 rounded-t-lg" />
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  </div>
);

const ActionAreaCard = ({ image, altText, title, description, isLoading, isLocked }) => {
  if (isLoading) return <CardSkeleton />;
  
  return (
    <Card sx={{ 
      maxWidth: 350, 
      height: 150,
      position: 'relative',
      '&::after': isLocked ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 1
      } : {}
    }}>
      <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'row', padding: 0 }}>
        <CardMedia
          component="img"
          sx={{
            width: '120px',
            height: '150px',
            objectFit: 'cover'
          }}
          image={image || Profile} 
          alt={altText}
        />
        <CardContent sx={{ flex: 1, p: 2 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1rem', mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            {description}
          </Typography>
        </CardContent>
        {isLocked && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Lock size={24} color="#2196f3" />
            <Typography variant="body2" sx={{ color: '#2196f3', fontWeight: 500 }}>
              Locked Content
            </Typography>
          </div>
        )}
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;