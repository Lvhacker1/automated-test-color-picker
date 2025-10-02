'use client'
import ColorPick from "@/components/ColorPick";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import { Page } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [rgbColor, setRgbColor] = useState<string>('rgb(255, 0, 0)');
  const [hexColor, setHexColor] = useState<string>('#FF0000');

  const generateRandomRGB = (): void => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRgbColor(`rgb(${r}, ${g}, ${b})`);
  }

  const generateRandomHex = (): void => {
    const hex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    setHexColor(hex);
  }
  
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <MainContent />}
      {currentPage === 'rgb' && (
        <ColorPick color={rgbColor} colorHeading="RGB Background" onClick={generateRandomRGB} />
      )}
      {currentPage === 'hex' && (
        <ColorPick color={hexColor} colorHeading="HEX Background" onClick={generateRandomHex} />
      )}
      <Footer />
    </>
  );
}
