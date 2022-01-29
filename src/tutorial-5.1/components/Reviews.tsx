import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Review } from '../types';

type ReviewsProps = {
  list: Review[];
  onDelete: (id: string) => void;
};

export const Reviews = ({ list, onDelete }: ReviewsProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography fontSize={'1.2rem'} marginBottom={2}>
          Отзывы
        </Typography>
        {list.length ? (
          list.map(({ id, fullName, text }) => {
            return (
              <List key={id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => onDelete(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={fullName} secondary={text} />
                </ListItem>
              </List>
            );
          })
        ) : (
          <Typography>Нет опубликованных отзывов ☹️</Typography>
        )}
      </CardContent>
    </Card>
  );
};
