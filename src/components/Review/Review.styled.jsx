import styled from '@emotion/styled';

const ReviewList = styled.ul`
  padding: 20px;
  list-style: none;
`;
const ReviewItem = styled.li`
  background-color: #f2eee6;
  padding: 20px;
  font-size: 14px;
  text-align: justify;
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
  margin-bottom: 20px;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Comment = styled.p`
  font-style: italic;
`;

export { ReviewList, ReviewItem, Name, Comment };
