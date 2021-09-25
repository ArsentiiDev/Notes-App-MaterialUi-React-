import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid'
import { Container, Paper } from "@material-ui/core";
import CardItem from '../Components/CardItem'
import Masonry from 'react-masonry-css'


export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: 'DELETE',
    })
    const newNotes = notes.filter(item => {
      return item.id !== id
    })
    setNotes(newNotes)
  }
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Container>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((item) => (
          <div key={item.id} item xs={12} sm={6} md={3} lg={4}>
            <CardItem item={item} handleDelete={handleDelete} />
          </div>

        ))}
      </Masonry>
    </Container>
  );
}
