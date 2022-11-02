import * as React from "react";
import "./LocalSearch.css";
import "./../../pages/PagesStyles.css";
import { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useDispatch } from "react-redux";

export default function LocalSearch({ setSearchTerm, fetchSearchApi, query }) {
//redux
const dispatch = useDispatch();

  const [page] = useState(1);
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#abb7c4;",
      },
    },
  });

  const handleSearch = () => {
    dispatch(fetchSearchApi(query));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchSearchApi(query));

    return () => {};
  }, [page]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <div className="form_search">
            <input
              type="search"
              placeholder="Search Movies Here ..."
              onChange={handleChange}
            />
            <SearchIcon className="icon" label="ss" />
            <div
              className="btn btn-primary brn-sm search__icon"
              onClick={handleSearch}
            >
              Searchh
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
