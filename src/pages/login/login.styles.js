import { makeStyles } from '@material-ui/core/styles' ;

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    border: '1px solid #f00',
    backgroundColor: "#007aa5"
  },
  signinFormContainer: {
    backgroundColor: "#f0f8ff",
    width: "22%",
    height: "60vh",
    marginTop: "20vh",
    marginLeft: "39vw",
    padding: "20px"
  },

  signinInput: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  customButton: {
    backgroundColor: "#50c878",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    marginTop: "15px",
    cursor: "pointer"
  },
  greeting: {
    marginTop: "25px",
    fontSize: "35px"
  },
}));