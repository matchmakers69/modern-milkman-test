import styled from 'styled-components';

const BannerWrapper = styled('div')`
  width: 100%;
  max-width: 100%;
  margin-bottom: 15px;
`;

const BannerText = styled('div')`
  background: ${({ theme }) => theme.blueNav};
  padding: 3% 2%;
`;

const BannerTextInner = styled('div')`
  background: rgba(255, 255, 255, 0.6);
  padding: 15px;
`;

const Text = styled('p')`
  line-height: 1.5;
  font-size: 1.8rem;
  padding: 0;
  margin: 0;
`;

const BannerImage = styled('div')`
  display: block;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 18.25%;

  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    max-width: 100%;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
  }
`;

export { BannerWrapper, BannerText, BannerTextInner, Text, BannerImage };
