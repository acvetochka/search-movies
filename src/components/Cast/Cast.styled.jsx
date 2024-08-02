import styled from '@emotion/styled';

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px;
`;

const CastItem = styled.li`
  display: flex;
  width: calc((100% - 60px) / 5);
  min-width: 175px;
  font-size: 14px;
  background-color: #f2eee66e;
  border-radius: 8px;
  overflow: hidden;
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 449px){
  width: 100%;}
`;

const CastText = styled.div`
  padding: 10px;
  font-style: italic;
`;
const Name = styled.p`
  font-weight: bold;
  font-style: normal;
`;

export { CastList, CastItem, CastText, Name };
