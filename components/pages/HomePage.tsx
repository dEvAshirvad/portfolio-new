import React from 'react'
import Hero from '../ui/Hero/Hero'
import TabMenu from '../ui/Tabs/TabMenu'
import FaqSection from '../ui/FaqSection/FaqSection'
import Contact from '../ui/ContactSection/Contact'
import Footer from '../ui/Footer/Footer'
import { BottomSheet } from '../ui/Header/BottonSheet'
import { AlertDialog } from '../ui/alert-dialog'
import ContactAlert from '../ui/ContactSection/ContactAlert'

function HomePage() {
    return (
        <main>
            <AlertDialog>
                <ContactAlert />
                <Hero />
                <TabMenu />
                <FaqSection />
                <Contact />
                <Footer />
                <BottomSheet />
            </AlertDialog>
        </main>
    )
}

export default HomePage