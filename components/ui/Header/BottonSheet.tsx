'use client'

import { Button } from "@/components/ui/button"
import {
    SheetContent,
    SheetFooter,
    SheetHeader,
} from "@/components/ui/sheet"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import { Github } from "lucide-react"
import Link from "next/link"

export function BottomSheet() {
    const position = "right"
    return (
        <SheetContent position={position} className="w-[50%] h-[98%] -translate-y-1/2 top-1/2 -translate-x-[102%] left-full rounded-lg pt-12 flex flex-col justify-between">
            <SheetHeader>
                <ul className="flex flex-col gap-3 justify-stretch">
                    <li className="w-full">
                        <Link href={""}><Button className="w-full">About</Button></Link>
                    </li>
                    <li className="">
                        <Link href={"#contactSec"}><Button className="w-full">Contact</Button></Link>
                    </li>
                    <li className="w-full">
                        <Link href={""}><Button className="w-full">Resume</Button></Link>
                    </li>
                </ul>
            </SheetHeader>
            <SheetFooter>
                <ul className="flex items-center justify-between">
                    <li>
                        <Link href={"https://twitter.com/dEvAshirvad"} className="socialUnderline">
                            <svg className="socialIcon" width="26" height="25" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5493 2.83822C20.499 2.2705 21.2095 1.37656 21.5483 0.323315C20.656 0.852782 19.6797 1.22575 18.6616 1.4261C17.2501 -0.0670284 15.0137 -0.430388 13.2021 0.539058C11.3905 1.5085 10.4521 3.57075 10.9113 5.57347C7.25616 5.38996 3.85072 3.66337 1.54242 0.82333C0.337764 2.90117 0.953368 5.55735 2.94924 6.89343C2.22751 6.87023 1.52179 6.67482 0.890917 6.3235C0.890917 6.34256 0.890917 6.36163 0.890917 6.3807C0.891334 8.54512 2.41678 10.4095 4.53827 10.8385C3.86883 11.0206 3.16663 11.0474 2.48524 10.9169C3.08187 12.7678 4.7878 14.0359 6.73219 14.0737C5.1218 15.3377 3.13301 16.0231 1.08584 16.0198C0.722978 16.0203 0.360403 15.9994 0 15.9573C2.07886 17.2931 4.49841 18.0022 6.96949 17.9997C10.4074 18.0233 13.7112 16.668 16.1421 14.2369C18.573 11.8058 19.9281 8.50179 19.9042 5.06392C19.9042 4.86688 19.8996 4.6709 19.8904 4.47598C20.7808 3.83253 21.5492 3.03542 22.1596 2.1221C21.3301 2.48976 20.4503 2.73114 19.5493 2.83822Z" fill="#1DA1F2" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/dEvAshirvad"} className="socialUnderline"><Github className="socialIcon" /></Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/ashirvad-satapathy-2291961b7/"} className="socialUnderline">
                            <svg className="socialIcon" height="25" viewBox="0 0 72 72" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://hashnode.com/@hellojicky"} className="socialUnderline">
                            <svg className="socialIcon" width="25" height="25" viewBox="0 0 337 337" fill="none">
                                <rect x="113" y="113" width="111" height="111" rx="55.5" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill="#2962FF" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </SheetFooter>
        </SheetContent>
    )
}
