
'use client';
import { useState } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import Image from "next/image";
import targetHero from "@/images/targethero.png";
import decarbon from "@/images/Decarbonone1.png";
import track from "@/images/trackingtwo1.png";
import decarbone from "@/images/decarbonthree1.png";
import trackone from "@/images/trackone.png";
import tracktwo from "@/images/TRACKTWO.png";
import footprint from "@/images/footprint.png";
import trackthree from "@/images/trackthree.gif";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Copy, Handshake, Globe, Award, Target, User, Check, ChevronLeft, ChevronRight } from 'lucide-react';

import "./index.css";

export default function NetZero() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="prevArroww" onClick={onClick}>
                <ChevronLeft size={24} strokeWidth={2.5} />
            </div>
        );
    }
    
    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="nextArroww" onClick={onClick}>
                <ChevronRight size={24} strokeWidth={2.5} />
            </div>
        );
    }

    const propertiesSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Email sent successfully');
                setFormData({ name: '', email: '', message: '', company: '' });
            } else {
                setStatus('Error sending email');
            }
        } catch (error) {
            setStatus('Error sending email');
        }
    };

    return (
        <>
            <div style={{ 
                position: 'relative', 
                zIndex: 20,
                backgroundColor: 'white',
                width: '100%'
            }}>
                <Header/>
            </div>
            <div className="main-containerr">
                <div id="header-hero-container" style={{
                    background: 'radial-gradient(ellipse 200% 100% at bottom left,#183EC2,#EAEEFE 100%)',
                    marginTop: '-60px'
                }}>
                    <section id="heroo" style={{ background: 'transparent' }}>
                        <div className="fade"></div>
                        <div className="heroo-text">
                            <h1>Reduce carbon emissions at scale</h1>
                            <p><Image src={targetHero} width={300} height={250} alt="Target Hero" /></p>
                            <p>Reducing carbon emissions is critical to fulfilling all climate goals, and Watershed's platform makes it easy to take action on reductions and obtain meaningful results quickly</p>
                        </div>
                    </section>
                </div>

                <section id="how-it-works">
                    <div className="containerr">
                        <h2>Three-step approach</h2>
                        <div className="flexx">
                            <div className="feature-box">
                                <div className="icon-container">
                                    <Copy size={35} className="feature-icon" />
                                </div>
                                <h4>Develop a plan</h4>
                                <p>Identifying the right goals for your business, whether it's committing to net zero, setting science-based targets, or if you're uncertain about the best approach</p>
                            </div>

                            <div className="feature-box">
                                <div className="icon-container">
                                    <Handshake size={35} className="feature-icon" />
                                </div>
                                <h4>Simulate scenarios</h4>
                                <p>Model emissions scenarios at the material, product, and company levels, ensuring that the decisions you make today lead to meaningful reductions</p>
                            </div>

                            <div className="feature-box">
                                <div className="icon-container">
                                    <Globe size={35} className="feature-icon" />
                                </div>
                                <h4>Take action</h4>
                                <p>Emitrix makes easy to start reducing emissions. For most companies, switching to clean power is one of the fastest ways to reduce carbon footprint</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="agents">
                    <div className="containerr">
                        <h2>Set science-based targets and reach net-zero</h2>
                        <p className="large-paragraph">with the guidance of our carbon accounting experts.</p>

                        <div className="flexx">
                            <div className="cardd">
                                <Image src={decarbon} alt="Decarbonization" />
                                <h3>Tailored Emission Reduction Targets</h3>
                                <p className="newp">Set goals for emission reduction at various levels (scopes, activities, products) within defined timeframes.</p>
                            </div>

                            <div className="cardd">
                                <Image src={track} alt="Tracking" />
                                <h3>Concentrate on Crucial Areas</h3>
                                <p className="newp">Facility to track progress against set goals. Monitoring emissions from major and specific areas</p>
                            </div>

                            <div className="cardd">
                                <Image src={decarbone} alt="Decarbon" />
                                <h3>Enhanced Decision Making:</h3>
                                <p className="newp">Improve your decision-making capabilities by providing valuable insights into emission reduction efforts</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="containerr">
                        <h2>Why is target setting important to reach your climate goals?</h2>
                        <div className="flexx">
                            <div className="services-item">
                                <div className="icon-container">
                                    <Award size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Score higher on ESG reporting</h3>
                                    <p>Companies that do have net-zero targets scored better on emissions and disclosure criteria if they also have interim goals before 2040</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <Target size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Target setting drives innovation</h3>
                                    <p>Setting decarbonization targets fosters innovation by transforming operations. Deloitte found sustainability leaders are over 400% more likely to be innovation leaders</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <User size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Increase customer loyalty</h3>
                                    <p>Showing clear sustainability commitments to conscious consumers enhances trust; 77% of retailers see increased customer loyalty</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <Globe size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Improve brand reputation</h3>
                                    <p>Consumers now demand climate action, with 79% of executives noting improved brand reputation after setting science-based targets</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <Handshake size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Talent retention</h3>
                                    <p>Enhance employee engagement and retention, as a Deloitte report shows a 50% reduction in turnover intention with sustainability strategies</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <Check size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Informed Decision-Making</h3>
                                    <p>Setting targets enables organizations to make informed decisions based on data and projections, ensuring strategies align with climate goals</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials">
                    <div className="containerr">
                        <h2>Level-up your track</h2>
                        <div id="testimonials-slider">
                            <Slider {...testimonialSettings}>
                                <div>
                                    <blockquote>
                                        <p><Image src={trackone} width={500} height={250} alt="Track One" /></p>
                                        <p>A system to monitor and measure progress toward established goals, ensuring alignment and providing real-time updates on goal achievement</p>
                                    </blockquote>
                                    <div className="testimonials-caption">
                                        <Image src={footprint} alt="Footprint" width={60} height={60} />
                                    </div>
                                </div>

                                <div>
                                    <blockquote>
                                        <p><Image src={tracktwo} width={500} height={250} alt="Track Two" /></p>
                                        <p>Establish emission reduction targets across different scopes, activities, and products, with clearly defined timeframes for achieving these sustainability goals</p>
                                    </blockquote>
                                    <div className="testimonials-caption">
                                        <Image src={footprint} alt="Footprint" width={60} height={60} />
                                    </div>
                                </div>

                                <div>
                                    <blockquote>
                                        <p><Image src={trackthree} width={500} height={250} alt="Track Three" /></p>
                                        <p>Improve decision-making capabilities by providing valuable insights into emission reduction efforts, leading to enhanced outcomes</p>
                                    </blockquote>
                                    <div className="testimonials-caption">
                                        <Image src={footprint} alt="Footprint" width={60} height={60} />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="containerr">
                        <h2>Contact Us</h2>
                        <div className="flexx">
                            <div id="form-container">
                                <h3>Explore how Emitrix can transform your sustainability goals</h3>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />

                                    <label htmlFor="email">Business email</label>
                                    <input 
                                        type="text" 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="subject">Company name</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />

                                    <button type="submit" className="rounded">Send Message</button>
                                </form>
                                <p>{status}</p>
                            </div>

                            <div id="address-container">
                                <label>Address</label>
                                <address>
                                    560064 BMS Institute Of technology, Bangalore, INDIA
                                </address>

                                <label>Phone</label>
                                <a href="#">xxx-xxx-xxx</a>

                                <label>Email Address</label>
                                <a href="#">www.emitrix.io</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}
