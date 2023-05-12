import React from 'react'
import Hero from '../ui/Hero/Hero'
import TabMenu from '../ui/Tabs/TabMenu'
import FaqSection from '../ui/FaqSection/FaqSection'
import Contact from '../ui/ContactSection/Contact'
import Footer from '../ui/Footer/Footer'

function HomePage() {
    return (
        <main>
            <Hero />
            <TabMenu />
            <FaqSection />
            <Contact />
            <Footer />
        </main>
    )
}

export default HomePage