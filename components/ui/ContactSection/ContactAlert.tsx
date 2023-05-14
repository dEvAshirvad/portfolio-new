import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../alert-dialog"
import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"

function ContactAlert() {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-left">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message" className="text-left">Your message</Label>
                    <Textarea placeholder="Type your message here." id="message" />
                </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <div className="flex items-center gap-4">
                    <AlertDialogCancel className="w-full m-0">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="w-full">Submit</AlertDialogAction>
                </div>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}

export default ContactAlert