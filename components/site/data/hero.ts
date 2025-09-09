export type HeroSlide = {
  image: string
  title: string
  description: string
  cta?: { label: string; href: string }
}

export const heroSlides: HeroSlide[] = [
  {
    image:
      "https://brainwaveconsulting.co.in/wp-content/uploads/2023/07/Home-banner-1.png",
    title:
      "Automotive, Manufacturing, Power & Energy, Life Sciences, and Varied Industry Expertise",
    description:
      "Provided services and solutions to multiple sectors and industries on timely basis.",
    cta: { label: "Explore Industries", href: "https://brainwaveconsulting.co.in/industries/" },
  },
  {
    image:
      "https://brainwaveconsulting.co.in/wp-content/uploads/2025/08/Home-banner-new.jpg",
    title: "Innovative Engineering & Embedded Solutions for a Smarter Future",
    description:
      "We deliver complete software, hardware, and AI/ML integration services to bring your next-gen products to life.",
    cta: { label: "Explore Services", href: "https://brainwaveconsulting.co.in/services/#techserv" },
  },
  {
    image: "https://brainwaveconsulting.co.in/wp-content/uploads/2023/12/BWC-Banner.jpg",
    title: "Dassault & BWC Partnership capabilities for success",
    description:
      "Our partnership has reaped benefits and results for customers across the globe.",
  },
  {
    image: "https://brainwaveconsulting.co.in/wp-content/uploads/2023/07/slider-3.png",
    title:
      "Innovative 3DEXPERIENCE platform Dassault Products for and beyond PLM",
    description:
      "Products for Design, Modeling, Engineering, Simulation, Manufacturing, and 3D Software.",
  },
  {
    image: "https://brainwaveconsulting.co.in/wp-content/uploads/2023/07/Home-banner-4.png",
    title: "We help your enterprise with tailored engineering solutions",
    description:
      "Our long term relations with customers are defined by the success of our customers.",
  },
]
