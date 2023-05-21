import { Box, Container, Stack, Typography } from "@mui/material";
import "./styles/index.css";
import { CreateBudget } from "../../components/CreateBudget";
import PageHeader from "../../components/PageHeader";

const BudgetPage = () => {
  return (
    <Container className="budgetpage-container">
      <Box className="budgetpage-box">
        <PageHeader />
        <Stack direction="column">
          <div className="budgetpage-head">
            <Typography variant="h3" component="h2" className="head-text">
              Take Control of your{" "}
              <span className="highlighted-text">Money</span>
            </Typography>
            <br />
            <Typography variant="h3" component="h5" className="head-sub-text">
              Do not save what is left after spending, but spend what is left
              after saving.
            </Typography>
          </div>
          <div className="budgetpage-createbudget">
            <CreateBudget />
          </div>
        </Stack>
      </Box>
    </Container>
  );
};

export default BudgetPage;
