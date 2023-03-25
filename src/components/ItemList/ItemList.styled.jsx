import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';

export const StyledTable = styled(Table)`
  && {
    & .MuiTableCell-root.MuiTableCell-head {
      border: 1px solid rgba(224, 224, 224, 1);
      background-color: #ecf2ff;
      font-family: inherit;
      font-weight: 600;
      font-size: 30px;
    }

    & .MuiTableCell-root.MuiTableCell-body {
      border: 1px solid rgba(224, 224, 224, 1);
      font-size: 25px;
      font-family: inherit;
    }
  }
`;
