'use client';
import { useState } from 'react';
import Image from "next/image";
import supplychain from "@/images/Illustration_Supply-Chain-Management.png";
import chainone from "@/images/chainone.jpg";
import chaintwo from "@/images/chaintwo.jpg";
import chainthree from "@/images/chianthree.jpg";
import chainfour from "@/images/Suuplyfour.jpg";
import chainfive from "@/images/chainfive.jpg";
import supplyone from "@/images/supplychainone1.png";
import supplytwo from "@/images/supplytwo1.png";
import supplythree from "@/images/supplythree1.png";
import supplyfour from "@/images/Suuplyfour.jpg";
import footprint from "@/images/footprint.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import "./index.css";
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Users, BarChart2, Network } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Add to your imports at top


    export default function SupplyChain() {
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
            prevArrow: <PrevArrow />
        };
    
        const testinomialSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
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
                                <h1>Decarbonize your Supply Chain</h1>
                                <p><Image src={supplychain} width={300} height={250} alt="Supply Chain Management" /></p>
                                <p>Emitrix simplifies supplier engagement, enabling you to efficiently measure and reduce Scope 3 emissions</p>
                                <p>Track & Reduce all Supplier emissions easily</p>
                            </div>
                        </section>
                    </div>
    
                    <section id="how-it-works">
                        <div className="containerr">
                            <h2 style={{ textAlign: 'center' }}>Emitrix supply chain</h2>
                            <div className="flexx">
                                <div className="feature-box">
                                    <div className="icon-container">
                                        <Users size={35} className="feature-icon" />
                                    </div>
                                    <h4>Collaborate with suppliers at scale</h4>
                                    <p>Works directly with your vendors,suppliers to measure and analyze product emissions | Scope 3 emissions—including from supplier and vendor activities</p>
                                </div>
    
                                <div className="feature-box">
                                    <div className="icon-container">
                                        <BarChart2 size={35} className="feature-icon" />
                                    </div>
                                    <h4>Gain insights into supplier emissions</h4>
                                    <p>With Emitrix you can Access suppliers' detailed emissions data and targets to identify key opportunities for carbon reductions</p>
                                </div>
    
                                <div className="feature-box">
                                    <div className="icon-container">
                                        <Network size={35} className="feature-icon" />
                                    </div>
                                    <h4>Act Together</h4>
                                    <p>Track your individual supplier progress or scale communications and reduction planning across vendors, making purchasing decisions based on real climate actions</p>
                                </div>
                            </div>
                        </div>
                    </section>
    
                    <section id="properties">
                        <div className="containerr">
                            <h2>One platform offering-</h2>
                            <div id="properties-slider" className="slick">
                                <Slider {...propertiesSettings}>
                                    <div className="slider-item">
                                        <div className="image-container">
                                            <Image 
                                                src={chainone} 
                                                alt="Property 1" 
                                                width={254} 
                                                height={254}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="property-details">
                                            <p className="price">Supply chains at scale</p>
                                            <span className="pages">Get Control components of a supply chain include producers, vendors, warehouses, transportation companies, distribution centers, and retailers,etc.</span>
                                        </div>
                                    </div>
    
                                    <div className="slider-item">
                                        <div className="image-container">
                                            <Image 
                                                src={chaintwo} 
                                                alt="Property 2" 
                                                width={254} 
                                                height={254}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="property-details">
                                            <p className="price">Understand your impact</p>
                                            <span className="pages">Models for Scope 3 emissions provide detailed insights, helping you make informed reduction decisions</span>
                                            <span className="menu">methodologies leverage the latest climate science to assess the intensity of global business activities</span>
                                        </div>
                                    </div>
    
                                    <div className="slider-item">
                                        <div className="image-container">
                                            <Image 
                                                src={chainthree} 
                                                alt="Property 3" 
                                                width={254} 
                                                height={254}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="property-details">
                                            <p className="price">Centralize your chain data</p>
                                            <span className="pages">Centralize your supply chain data for streamlined operations, real-time insights, and seamless collaboration, empowering smarter decisions and driving efficiency across your entire network</span>
                                        </div>
                                    </div>
    
                                    <div className="slider-item">
                                        <div className="image-container">
                                            <Image 
                                                src={chainfour} 
                                                alt="Property 4" 
                                                width={254} 
                                                height={254}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="property-details">
                                            <p className="price">Smart system across every level</p>
                                            <span className="pages">Transform your facility into a smart factory, gaining full control over emissions and reducing your organization's environmental impact with real-time, data-driven decisions</span>
                                        </div>
                                    </div>
    
                                    <div className="slider-item">
                                        <div className="image-container">
                                            <Image 
                                                src={chainfive} 
                                                alt="Property 5" 
                                                width={254} 
                                                height={254}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="property-details">
                                            <p className="price">Publish audit-ready data</p>
                                            <span className="pages">With Emitrix, you can trace every data transformation and calculation, with one unified view into your data lineage</span>
                                            <span className="menu">Invite auditors to the Emitrix platform or export reports</span>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <button className="rounded">Explore More</button>
                        </div>
                    </section>
    
                    <section id="testimonials">
                        <div className="containerr">
                            <h2>What Emitrix Suggest Saying</h2>
                            <div id="testimonials-slider">
                                <Slider {...testinomialSettings}>
                                    <div>
                                        <blockquote>
                                            <p><Image src={supplyone} width={500} height={250} alt="Client 1" /></p>
                                            <p>Plan Activities with Supplier and vendor, As Scope 3 emissions—including from supplier and vendor activities—often account for more than 80% of a company's total carbon footprint</p>
                                        </blockquote>
                                        <div className="testimonials-caption">
                                            <Image src={footprint} alt="Client 1" width={60} height={60} />
                                        </div>
                                    </div>
    
                                    <div>
                                        <blockquote>
                                            <p><Image src={supplytwo} width={500} height={250} alt="Client 2" /></p>
                                            <p>Cut your carbon footprint fast with the solution dedicated to reducing supplier emissions at scale. View suppliers' granular emissions data, targets, and actions in a single dashboard</p>
                                        </blockquote>
                                        <div className="testimonials-caption">
                                            <Image src={footprint} alt="Client 2" width={60} height={60} />
                                        </div>
                                    </div>
    
                                    <div>
                                        <blockquote>
                                            <p><Image src={supplythree} width={500} height={250} alt="Client 3" /></p>
                                            <p>"Monitor each supplier's progress, or leverage Emitrix to scale communications and reduction strategies across multiple vendors, making climate-driven purchasing decisions"</p>
                                        </blockquote>
                                        <div className="testimonials-caption">
                                            <Image src={footprint} alt="Client 3" width={60} height={60} />
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