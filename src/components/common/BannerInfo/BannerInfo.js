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
              Plase use the filter below to display products on the home Page.
              You can use the navigation on the left side
            </Text>
          </BannerTextInner>
        </BannerText>
      )}
    </BannerWrapper>
  );
};

BannerInfo.propTypes = {};

export default BannerInfo;
