import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

export default function Navbar(props) {
  
  return (
    <div>
      <nav className="bg-black flex flex-col items-center place-content-around h-screen py-32 px-12
        border-l-2 border-white">
        <NavItem currentPage={props.page} keyVal={0} handleClick={props.handleClick}>Home</NavItem>
        <NavItem currentPage={props.page} keyVal={1} handleClick={props.handleClick}>Experience</NavItem>
        {/* <NavItem currentPage={props.page} keyVal={2} handleClick={props.handleClick}>Skills</NavItem> */}
        <NavItem currentPage={props.page} keyVal={3} handleClick={props.handleClick}>Projects</NavItem>
        <NavItem currentPage={props.page} keyVal={4} handleClick={props.handleClick}>Contact</NavItem>
      </nav>
      {/* Progress tracker */}
      {/* <div className="absolute right-16 top-0 h-32 border-r-2 border-white"></div> */}
    </div>
    )
}

function NavItem(props) {
  let styling = "flex flex-col items-center font-medium text-xl text-white cursor-pointer p-2 border-t-2 border-b-2"
  if (props.keyVal === props.currentPage) {
    styling += " border-white transition duration-500 ease-in-out"
  } else {
    styling += " border-transparent hover:drop-shadow-glow transition duration-300 ease-in-out"
  }
  return (
    <>
    <div className={styling} onClick={() => {if (props.keyVal != props.currentPage) {props.handleClick(props.keyVal)}}}>{props.children}</div>
    </>
  )
}