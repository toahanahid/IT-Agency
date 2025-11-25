import './style.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Hero Animation
const initHero = () => {
    const tl = gsap.timeline()

    tl.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
        .from('.hero-image', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
}

// Scroll Animations
const initScrollAnimations = () => {
    gsap.utils.toArray('.reveal').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
    })
}

// Counter Animation
const initCounters = () => {
    gsap.utils.toArray('.counter').forEach(counter => {
        const target = counter.getAttribute('data-target')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: counter,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out'
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initHero()
    initScrollAnimations()
    initCounters()
})
