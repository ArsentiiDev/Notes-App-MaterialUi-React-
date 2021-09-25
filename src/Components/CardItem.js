import React from "react";

import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, pink, yellow } from "@material-ui/core/colors";


const useStyles = makeStyles({
    avatar: {
        backgroundColor:  (item)=>  {
            if(item.category === 'work') {
                return yellow[700]
            } else if(item.category === 'money') {
                return green[500]
            } else if(item.category === 'todos') {
                return pink[500]
            } return blue[500]
        }
    }
})

function CardItem({item, handleDelete}) {

    const classes = useStyles(item)

   const handleDeleteBtn =()=> {
        handleDelete(item.id)
    }
  return (
    <div>
      <Card elevation={4} className={classes.test}>
        <CardHeader
            avatar= {
                <Avatar className={classes.avatar}>
                    {item.category[0].toUpperCase()}
                </Avatar>
            }
          action ={
            <IconButton onClick={handleDeleteBtn}>
              <DeleteOutlined />
            </IconButton>
          }
          title={item.title}
          subheader={item.category}

        />
        <CardContent>
            <Typography variant="body2" color="textSecondary">
                {item.details}
            </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardItem;
