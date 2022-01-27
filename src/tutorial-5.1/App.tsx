import { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { FormField, Review } from './types';
import { Reviews } from './components/Reviews';
import { Form } from './components/Form';

const formFields: FormField[] = [
  { id: 'name', value: '', label: 'Имя', multiline: false },
  { id: 'email', value: '', label: 'Почта', multiline: false },
  { id: 'text', value: '', label: 'Текст...', multiline: true },
];

const App = () => {
  const [comments, setComments] = useState<Review[]>([]);

  const deleteCommentHandler = (id: string) => {
    setComments((prev) => {
      const idx = prev.findIndex((comment) => (comment.id = id));

      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  };

  const formSubmitHandler = (newReview: Review) => {
    setComments((prev) => {
      return [...prev, newReview];
    });
  };

  useEffect(() => {
    try {
      const commentsFromStorage = JSON.parse(
        localStorage.getItem('comments') || '[]',
      );

      setComments(commentsFromStorage);
    } catch (e) {
      localStorage.removeItem('comments');
      console.error(e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div>
      <Container maxWidth="xs">
        <Stack spacing={2}>
          <Reviews list={comments} onDelete={deleteCommentHandler} />
          <Form fields={formFields} onSubmit={formSubmitHandler} />
        </Stack>
      </Container>
    </div>
  );
};

export default App;
