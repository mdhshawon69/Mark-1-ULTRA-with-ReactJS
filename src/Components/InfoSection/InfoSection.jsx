import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../GlobalStyles';
import {
    Heading,
    Img,
    ImgWrapper,
    InfoColumn,
    InfoRow,
    InfoSec,
    Subtitle,
    TextWrapper,
    // eslint-disable-next-line prettier/prettier
    TopLine
} from './InfoSection.elements';

const InfoSection = ({
    lightBg,
    imgStart,
    topLine,
    headline,
    description,
    primary,
    buttonLable,
    lightTextDesc,
    lightTopLine,
    lightText,
    img,
    start,
    alt,
}) => (
    <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to="/sign-up">
                            <Button big fontBig primary={primary}>
                                {buttonLable}
                            </Button>
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
    </InfoSec>
);

export default InfoSection;
