import styled from "styled-components";

export const ListWeather = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 70px;
  margin-left: 40px;
  overflow: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 6px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #bebebe;
    transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #919191;
  }
`;
