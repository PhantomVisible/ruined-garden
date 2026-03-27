import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// Initialize GSAP globally
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
window.gsap = gsap

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
