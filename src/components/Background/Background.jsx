const { Wrapper, Bg } = require('./Background.styled');

function Background({ movie }) {
  return (
    // <Wrapper>
    movie && (
      <Bg
        bg={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        alt={movie.title}
        //   width={`100%`}
      />
    )
    //   {children}
    // </Wrapper>
  );
}

export default Background;
