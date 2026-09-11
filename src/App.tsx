
import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"
import type { TechnologyType } from "./components/types/Type";
import Footer from "./Footer";


function App() {
  const loadDataPromise =async():Promise<TechnologyType[]>=>{
   const res = await fetch('/data.json') ;
   const data = res.json() ;
   return data ;
  }

 return (
   <>
    <Nav></Nav>
    <Hero></Hero>
    <Suspense fallback={<h1 className="container mx-auto text-2xl">Loading technologies...</h1>}>
    <Technologies loadDataPromise={loadDataPromise()}></Technologies>
    </Suspense>
    <Footer></Footer>
   </>
 )
}


export default App
