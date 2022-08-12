import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';

// const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(word);
    // {!!images.length && <ImageCard image={images[0]} />}
    if (word.length) {
      fetch(`${API_URL}/new-image?query=${word}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.id
            ? setImages([{ ...data, title: word }, ...images])
            : alert('Not photos found');
        })
        .catch((err) => {
          console.log(err);
        });
      setWord('');
    } else {
      alert('Not photos found');
    }
  };

  console.log(handleSearchSubmit.data);
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-5">
        {images.length ? (
          <Row md={4}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
