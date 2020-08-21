import React, { useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import gsap from 'gsap';
import "./SideNav.scss";

const SideNav = props => {
    let sidebarMenu = useRef(null);
    let sidebarMenuOverlay = useRef(null);
    let menuLayer = useRef(null);
    const menuTimeline = useRef();

    const { menuState, setMenuState } = props;

    useEffect(() => {
        menuTimeline.current = gsap.timeline({ paused: true });
        menuTimeline.current.fromTo(
            [sidebarMenuOverlay, menuLayer, sidebarMenu],
            {
                duration: 0,
                x: '100%'
            },
            {
                duration: 0.75,
                x: '0%',
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.5
                }
            }
        );
    }, []);

    useEffect(() => {
        menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
    }, [menuState]);

    useEffect(() => {
        const { history } = props;
        history.listen(() => setMenuState(false));
    });


    return (
        <div
            className="sidebar-navigation-overlay"
            ref={el => (sidebarMenuOverlay = el)}
            onClick={() => setMenuState(false)}>
            <div className="menu-wrapper">
                <div className="menu-layer" ref={el => (menuLayer = el)}>
                    <nav className="sidebar-navigation" ref={el => (sidebarMenu = el)}>
                        <div className="sidebar-top">
                            <div className="link-wrapper">
                                <Link className="menu-link" to="/">Home</Link>
                                <Link className="menu-link" to="/about">About</Link>
                                <Link className="menu-link" to="/contact">Contact</Link>
                                <Link className="menu-link" to="/projects">Projects</Link>
                            </div>
                        </div>
                        <div className="sidebar-bottom">
                            <ul classname="extra-links">
                                <li className="link-item">
                                    <div className="link-title">Drop me a line</div>
                                    <a className="link-sub" href="mailto:jarabelmonte@gmail.com">jarabelmonte@gmail.com</a>
                                </li>
                                <li className="link-item">
                                    <span className="link-sub"> 2020 copyright </span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SideNav);