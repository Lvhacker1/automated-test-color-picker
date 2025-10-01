'use client'
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import { Page } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <MainContent />
    </>
  );
}
