import { styled } from 'styled-components';

const TeaserStyle = styled.div`
  @media screen and (max-width: 480px) {
    width: max(280px, 80vw);
    height: max(157.5px, 45vw);
  }

  width: 48vw;
  height: 27vw;
`;

export default function TeaserVDO() {
  return (
    <TeaserStyle>
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/LbB9BKJRht8'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </TeaserStyle>
  );
}
