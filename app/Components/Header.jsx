"use client"

import Link from "next/link";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  useEffect(() => {
    const select = (selector, all = false) => 
      all ? Array.from(document.querySelectorAll(selector)) : document.querySelector(selector);

    const mobileNavToggleBtn = select(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        const navbar = select("#navbar");
        if (navbar) {
          navbar.classList.toggle("navbar-mobile");
        }
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        const anchor = navbarlink;
        if (!anchor.hash) return;
        const section = document.querySelector(anchor.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);

    const dropdowns = select('.navbar .dropdown > a', true);
    if (dropdowns) {
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
          if ((select('#navbar')).classList.contains('navbar-mobile')) {
            e.preventDefault();
            (dropdown.nextElementSibling).classList.toggle('dropdown-active');
          }
        });
      });
    }

    const scrollto = (el) => {
      const header = select('#header');
      const offset = header.offsetHeight;
      const elementPos = (select(el)).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    };

    const scrollLinks = select('.scrollto', true);
    if (scrollLinks) {
      scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          if ((select('#navbar')).classList.contains('navbar-mobile')) {
            (select('#navbar')).classList.remove('navbar-mobile');
            mobileNavToggleBtn.classList.toggle("bi-list");
            mobileNavToggleBtn.classList.toggle("bi-x");
          }
          if ((link).hash) {
            e.preventDefault();
            scrollto((link).hash);
          }
        });
      });
    }

    const selectHeader = select('#header');
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        console.log("header toggled");
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };

    if (selectHeader) {
      window.addEventListener('load', headerScrolled);
      window.addEventListener('scroll', headerScrolled);
    }

    return () => {
      window.removeEventListener('load', navbarlinksActive);
      window.removeEventListener('scroll', navbarlinksActive);
      if (selectHeader) {
        window.removeEventListener('load', headerScrolled);
        window.removeEventListener('scroll', headerScrolled);
      }
    };
  }, []);

  const { user, userName, logout } = useAuth();

  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link href="/" legacyBehavior><a><img src="assets/img/logo/logo.png" alt="" className="img-fluid" /></a></Link>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about1">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            {user ? (
              <li className="dropdown"><a href="#"><span>Welcome, {userName || 'Admin'}</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><Link href="/dashboard" legacyBehavior><a>Go to dashboard</a></Link></li>
                  <li><a style={{ cursor: 'pointer' }} onClick={logout}>Logout</a></li>
                </ul>
              </li>
            ) : (
              <li><Link href="/login" legacyBehavior><a className="nav-link scrollto">Login</a></Link></li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
