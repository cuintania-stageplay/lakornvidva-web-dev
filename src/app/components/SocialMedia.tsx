import Image from 'next/legacy/image';
import facebookIcon from '../images/social_media/facebook_icon.png';
import igIcon from '../images/social_media/instagram_icon.png';
import tiktokIcon from '../images/social_media/tiktok_icon.png';
import youtubeIcon from '../images/social_media/youtube_icon.png';
import { styled } from 'styled-components';

const IconBox = styled.div`
  width: max(200px, 40vw);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max(6.5vw, 55px);
  border-width: 6px;
  border-radius: 50%;
  border-color: transparent;
  &:hover {
    border-color: ${(props) => props.color};
  }
`;

export default function SocialMedia() {
  return (
    <IconBox>
      <IconStyle
        color='#00E225'
        href='https://www.facebook.com/culakornvidva'
        target='_blank'
      >
        <Image src={facebookIcon.src} width={100} height={100} alt='FB' />
      </IconStyle>

      <IconStyle
        color='#358FAF'
        href='https://www.instagram.com/lakornvidva/'
        target='_blank'
      >
        <Image src={igIcon.src} width={100} height={100} alt='IG' />
      </IconStyle>

      <IconStyle
        color='#E93224'
        href='https://www.tiktok.com/@culakornvidva'
        target='_blank'
      >
        <Image src={tiktokIcon.src} width={100} height={100} alt='Tiktok' />
      </IconStyle>
      <IconStyle
        color='#47206D'
        href='https://www.youtube.com/@CULakornVidva'
        target='_blank'
      >
        <Image src={youtubeIcon.src} width={100} height={100} alt='Youtube' />
      </IconStyle>
    </IconBox>
  );
}
