import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

export function BottomSheet() {
    const position = "bottom"
    return (
        <SheetContent position={position} size="content" className="p-5 w-[97%] -translate-x-1/2 left-1/2 my-2 rounded-lg">
            <SheetHeader>
                <ul className="flex gap-3 justify-stretch">
                    <li className="w-full">
                        <Link href={""}><Button className="w-full">About</Button></Link>
                    </li>
                    <li className="w-full">
                        <Link href={""}><Button className="w-full">Contact</Button></Link>
                    </li>
                    <li className="w-full">
                        <Link href={""}><Button className="w-full">Resume</Button></Link>
                    </li>
                </ul>
            </SheetHeader>
        </SheetContent>
    )
}
