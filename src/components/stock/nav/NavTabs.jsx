import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function NavTabs({ activeTab, onChange }) {
  return (
    <div>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() => onChange("dashboard")}
          variant={activeTab === "dashboard" ? "contained" : "outlined"}
        >
          One
        </Button>
        <Button
          onClick={() => onChange("createStocks")}
          variant={activeTab === "createStocks" ? "contained" : "outlined"}
        >
          Two
        </Button>
        <Button
          onClick={() => onChange("stocksTable")}
          variant={activeTab === "stocksTable" ? "contained" : "outlined"}
        >
          Three
        </Button>
      </ButtonGroup>
    </div>
  );
}

NavTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NavTabs;
