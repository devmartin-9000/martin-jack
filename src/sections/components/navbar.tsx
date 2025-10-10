"use client"

import { Button } from "@/components/ui/button"
import { Blocks, House, MessagesSquare, Moon, Wrench } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex px-8 bg-[#ff751f]/10 py-0 justify-between items-center min-w-screen max-w-screen">
        <div className="h-30 w-30 object-cover">
            <img src="./logo-dark.png" alt="logo" />
        </div>
        <div className="flex gap-4 items-center p-4 bg-white/50 rounded-full">
            <Button><div className="flex flex-cols gap-3 items-center"><Moon /></div></Button>
            <Button><div className="flex flex-cols gap-3 items-center"><House />Home</div></Button>
            <Button><div className="flex flex-cols gap-3 items-center"><Blocks />Projects</div></Button>
            <Button><div className="flex flex-cols gap-3 items-center"><Wrench />Tech Stack</div></Button>
            <Button><div className="flex flex-cols gap-3 items-center"><MessagesSquare />Let's Chat</div></Button>
        </div>
    </div>
  )
}

export default Navbar