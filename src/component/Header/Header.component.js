import { PureComponent } from 'react'
import {
    Cart,
    TopRightNavBarWrap,
    HeaderContainer,
    TopMiddleNavBarWrap,
    TopLeftNavBarWrap,
    HeaderWrap,
} from "./styled";

import Category from 'Component/Category';
import Logo  from 'Component/Logo'
import CurrencySwitcher from 'Component/CurrencySwitcher';
import CartOverlay from 'Component/CartOverlay';

export class Header extends PureComponent {
    render() {
        return (
            <HeaderContainer>
                <HeaderWrap>
                    <TopLeftNavBarWrap>
                        <Category/>
                    </TopLeftNavBarWrap>
                    <TopMiddleNavBarWrap>
                        <Logo aria-label="logo"/>
                    </TopMiddleNavBarWrap>
                    <TopRightNavBarWrap>
                        <CurrencySwitcher/>
                        <Cart aria-label="cart menu">
                            <CartOverlay/>
                        </Cart>
                    </TopRightNavBarWrap>
                </HeaderWrap>
            </HeaderContainer>
        )
    }
}

export default Header