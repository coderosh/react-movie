import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import Container from "./Container";
import Flex from "./Flex";

const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  background: transparent;
  outline: none;
  height: 25px;
  padding: 10px;
  color: #222;
  font-size: 20px;
`;

const Form = styled.form`
  width: 100%;
  z-index: 20px;
  padding: 50px 0;
`;

const StyledInputWrapper = styled.div`
  background: #fff;
  border-radius: 25px;
  padding: 0 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.54);
`;

const Search = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Container>
        <StyledInputWrapper as={Flex}>
          <FaSearch size="25px" color="#333" />
          <StyledInput
            placeholder="Search Movie"
            value={props.value}
            onChange={props.onChange}
          />
        </StyledInputWrapper>
      </Container>
    </Form>
  );
};

export default Search;
