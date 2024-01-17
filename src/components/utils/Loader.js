import { Box } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
function Loader() {
  return (
    <Box
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader
        color="rgb(27, 33, 50)"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
}

export default Loader;
