import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

const PageWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className={cn("grow", className)} role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageWrapper
