import React from 'react';
import PropTypes from 'prop-types';
import {
  BannerWrapper,
  BannerText,
  BannerTextInner,
  Text,
  BannerImage,
} from './BannerInfo.styles';
import Image from 'assets/images/milkmanHero.jpeg';

const BannerInfo = ({ displayBanner }) => {
  return (
    <BannerWrapper>
      {displayBanner ? (
        <BannerImage>
          <img src={Image} alt="Milkman category icon" />
        </BannerImage>
      ) : (
        <BannerText>
          <BannerTextInner>
            <Text>
              You can preview products either using filters below or use the
              navigation to be redirected to category page. Full description of
              the project and concepts can be found under README.md file.
              Functionalitoes presented here have beemn done to represent the
              most accurate real life application.
            </Text>
          </BannerTextInner>
        </BannerText>
      )}
    </BannerWrapper>
  );
};

BannerInfo.propTypes = {
  displayBanner: PropTypes.bool.isRequired,
};

export default BannerInfo;
