import { FC } from "react";
import Pagination from "@mui/material/Pagination";
import "./style.module.scss";

interface PaginationProps {
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  cuurentPage: number;
}

const Paginate: FC<PaginationProps> = ({ count, onChange }) => {
  return (
    <Pagination
      count={count}
      shape="rounded"
      color="primary"
      onChange={onChange}
      size="small"
    />
  );
};

export default Paginate;
