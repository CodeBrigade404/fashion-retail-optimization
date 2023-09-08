import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";

function ProgressBar(props) {
  var color = "";
  if (props.value > 100) {
    color = "#EC5959"; // Use your custom color here
  }
  if (props.value > 50 && props.value < 100) {
    color = "#1BDF83"; // Use your custom color here
  }
  if (props.value < 50) {
    color = "#FFEA2B"; // Use your custom color here
  }
  return (
    <div className="w-[130px] mr-10">
      <LinearProgress
        determinate
        variant="outlined"
        size="sm"
        thickness={24}
        value={props.value}
        sx={{
          "--LinearProgress-radius": "20px",
          "--LinearProgress-thickness": "20px",
          color: color,
          backgroundColor: "#EDEDFF",
        }}
      >
        <Typography
          level="body-xs"
          fontWeight="xl"
          textColor="#E49696"
          sx={{ mixBlendMode: "difference" }}
        >
          {props.value}%
        </Typography>
      </LinearProgress>
    </div>
  );
}

export default ProgressBar;
