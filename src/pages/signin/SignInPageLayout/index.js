import React from 'react';
import SignInPageLayoutNarrow from './SignInPageLayoutNarrow';
import SignInPageLayoutWide from './SignInPageLayoutWide';
import withWindowDimensions, {windowDimensionsPropTypes} from '../../../components/withWindowDimensions';

const propTypes = {
    ...windowDimensionsPropTypes,
};

const SignInPageLayout = props => (
    !props.isSmallScreenWidth
        ? (
            <SignInPageLayoutWide
                welcomeText={props.welcomeText}
                isMediumScreenWidth={props.isMediumScreenWidth}
                shouldShowWelcomeText={props.shouldShowWelcomeText}
            >
                {props.children}
            </SignInPageLayoutWide>
        )
        : (
            <SignInPageLayoutNarrow
                welcomeText={props.welcomeText}
                shouldShowWelcomeText={props.shouldShowWelcomeText}
            >
                {props.children}
            </SignInPageLayoutNarrow>
        )
);

SignInPageLayout.propTypes = propTypes;
SignInPageLayout.displayName = 'SignInPageLayout';

export default withWindowDimensions(SignInPageLayout);
