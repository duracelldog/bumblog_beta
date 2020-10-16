import React, {useRef, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {BiMenu, BiUser} from 'react-icons/bi';
import './Header.scss';

function Header(){

    const mobileMenuRef = useRef<HTMLUListElement>(null);
    const subMenuRef = useRef<HTMLDivElement>(null);


    // MainMenu 모바일에서 메뉴 펄치기 버튼
    const toggleMainMenu = (event: any , status: Number = 2) =>{
        if(mobileMenuRef.current){
            switch(status){
                case 0: // close
                    mobileMenuRef.current.classList.remove('on');
                    break;
                case 1: // open
                    mobileMenuRef.current.classList.add('on');
                    break;
                case 2: // toggle
                    mobileMenuRef.current.classList.toggle('on');
                    break;
            }
        }           
    }
    // SubMenu 데스크탑/모바일 마이페이지 아이콘 버튼
    const toggleSubMenu = () =>{
        if(subMenuRef.current){
            const classList = subMenuRef.current.classList
            // console.log('classList', classList);
            if(classList.contains('on')){
                closeSubMenu();
            }else{
                openSubMenu();
            }
        }
    }

    const openSubMenu = () =>{
        // console.log("openSubMenu 작동");
        if(subMenuRef.current){
            const classList = subMenuRef.current.classList
            classList.add('on');
            document.body.addEventListener('click', bodyFunc);
        }
    }

    const closeSubMenu = () =>{
        // console.log("closeSubMenu 작동");
        if(subMenuRef.current){
            const classList = subMenuRef.current.classList
            classList.remove('on');
            document.body.removeEventListener('click', bodyFunc);
        }
    }

    const bodyFunc = (e: any) =>{
        console.log('bodyevent 실행', e.srcElement.className);
        const exClassName = [
            'bb-header__sub-menu-box-ul',
            'bb-header__sub-menu-box-li'
        ];
        let flag = true;


        exClassName.forEach((val, index)=>{
            if(e.srcElement.className === val || e.srcElement.className.baseVal === 'icon-user'){
                flag = false;
            }
        });

        if(flag){
            closeSubMenu();
        }
    }

    useMemo(()=>{
        window.addEventListener('resize', ()=>{
            mobileMenuRef.current?.classList.remove('on');
            subMenuRef.current?.classList.remove('on');
        });
    }, []);

    return (
        <nav className="bb-header__nav">
            <div className="bb-header__menu--desktop">
                <div className="bb-header__mobile-menu-btn" onClick={(e) => toggleMainMenu(e, 2)}><BiMenu className="icon-menu" /></div>
                <div className="bb-header__logo-btn" onClick={(e) => toggleMainMenu(e, 0)}><Link className="text-black " to="/">Bumblog</Link></div>
                <div className="bb-header__desktop-menu-wrapper">
                    <ul className="bb-header__desktop-menu">
                      <li></li>
                    </ul>
                    <div className="bb-header__sub-menu">
                        <div className="bb-header__sub-menu-icon" onClick={toggleSubMenu}><BiUser className="icon-user" /></div>
                        <div className="bb-header__sub-menu-box" ref={subMenuRef}>
                            <div className="edge-wrapper">
                                <div className="edge"></div>
                            </div>
                            <ul className="bb-header__sub-menu-box-ul">
                                <li className="bb-header__sub-menu-box-li">1번 메뉴</li>
                                <li className="bb-header__sub-menu-box-li">1번 메뉴</li>
                                <li className="bb-header__sub-menu-box-li">1번 메뉴</li>
                                <li className="bb-header__sub-menu-box-li">1번 메뉴</li>
                                <li className="bb-header__sub-menu-box-li">1번 메뉴</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bb-header__mobile-menu-wrapper">
                <ul className="bb-header__mobile-menu" ref={mobileMenuRef}>
                    <li onClick={(e) => toggleMainMenu(e, 0)}><Link to="/board">MENU-1</Link></li>
                    <li>MENU-2</li>
                    <li>MENU-3</li>
                    <li>MENU-4</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;