import React from 'react';

import { Container } from 'react-bootstrap';

const CLIENT_ID = '6eb3f3a2db404366aa57361631ad8653';
const REDIRECT_URI = 'http://localhost:3000';
const SCOPES = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

function Login() {
  return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
          <a className="btn btn-success btn lg" href={AUTH_URL}>Login With Spotify</a>
      </Container>
  );
}

export default Login;