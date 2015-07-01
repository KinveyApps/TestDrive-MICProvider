# TestDrive-MICProvider
A basic Authentication provider for MIC


##Setup

1.  Install dependencies with `npm install`
2.  Run with `npm start`

##Usage

By default, the server runs at http://localhost:3000

To authenticate, perform a `PUT` request to `http://localhost:3000/authenticate` with the body: `{"username":"test", "password":"test"}`.

If there is any other username or password (besides test/test), or if either of them is missing, the service will return a 401.