'use client';
import { useState } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import Image from "next/image";
import report from "@/images/reporthero.png";
import reportone from "@/images/repotone.jpg";
import reporttwo from "@/images/repotwo.jpg";
import business from "@/images/return_business_17.jpg";
import bigdata from "@/images/Big-Data.gif";
import audit from "@/images/audit.gif";
import reportonee from "@/images/reportone1.png";
import reporttwoo from "@/images/reporttwo1.png";
import reportthree from "@/images/reportthree1.png";
import complianceone from "@/images/complianceone.png";
import compliencetwo from "@/images/compliancetwo.png";
import footprint from "@/images/footprint.png";
import boost from "@/images/boost.gif";
import { ClipboardList, HandshakeIcon, Globe, Wind, FileText, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import "./index.css";

export default function Reporting() {
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
                            <h1>Precise Carbon Reporting, Instantly Shareable</h1>
                            <p><Image src={report} width={300} height={250} alt="Reporting Hero" /></p>
                            <p>Unlock precision with accurate carbon reporting. Track, measure, and reduce your footprint using real-time insights, ensuring compliance and sustainable growth</p>
                        </div>
                    </section>
                </div>

                <section id="how-it-works">
                    <div className="containerr">
                        <h2>Sustainability disclosures at your fingertips</h2>
                        <div className="flexx">
                            <div className="feature-box">
                                <div className="icon-container">
                                    <ClipboardList size={35} className="feature-icon" />
                                </div>
                                <h4>One</h4>
                                <p>Stay Audit-Ready: ESG and climate reports with data you can trust</p>
                            </div>

                            <div className="feature-box">
                                <div className="icon-container">
                                    <HandshakeIcon size={35} className="feature-icon" />
                                </div>
                                <h4>Two</h4>
                                <p>Investor-Grade Transparency: giving your stakeholders confidence in your sustainability journey</p>
                            </div>

                            <div className="feature-box">
                                <div className="icon-container">
                                    <Globe size={35} className="feature-icon" />
                                </div>
                                <h4>Three</h4>
                                <p>Lead in Sustainability: proactive with disclosures, positioning your business</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="properties">
                    <div className="containerr">
                        <h2>Easy CSRD navigation</h2>
                        <div id="properties-slider">
                            <Slider {...propertiesSettings}>
                                <div className="slider-item">
                                    <div className="image-container">
                                        <Image 
                                            src={reportone} 
                                            width={254} 
                                            height={254} 
                                            alt="Report One"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="property-details">
                                        <p className="price">Evaluate the needs for disclosure</p>
                                        <span className="pages">Discover the key disclosures your business needs, along with tailored timelines and clear requirements for effortless compliance and success.</span>
                                        <span className="menu">Streamline Compliance</span>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="image-container">
                                        <Image 
                                            src={reporttwo} 
                                            width={254} 
                                            height={254} 
                                            alt="Report Two"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="property-details">
                                        <p className="price">Streamline Emissions Data</p>
                                        <span className="pages">Establish a robust base for E1 disclosures using a certified carbon management platform to automate emissions measurement and reporting</span>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="image-container">
                                        <Image 
                                            src={business} 
                                            width={254} 
                                            height={254} 
                                            alt="Business Report"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="property-details">
                                        <p className="price">Build high-quality reports, faster</p>
                                        <span className="pages">Streamline your data collection across Scopes 1, 2, 3</span>
                                        <span className="menu">Auto-Populate Reports Efficiently</span>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="image-container">
                                        <Image 
                                            src={bigdata} 
                                            width={254} 
                                            height={254} 
                                            alt="Big Data"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="property-details">
                                        <p className="price">Improve your environmental performance</p>
                                        <span className="pages">Establish science-based targets to effectively lower emissions, explore decarbonization actions, and comprehend their overall impact</span>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="image-container">
                                        <Image 
                                            src={audit} 
                                            width={254} 
                                            height={254} 
                                            alt="Audit"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="property-details">
                                        <p className="price">Streamlined Auditing Process</p>
                                        <span className="pages">Submit these reports to auditors for validation, streamlining the entire auditing process for enhanced efficiency</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <button className="rounded">Start Collecting Data</button>
                    </div>
                </section>

                <section id="agents">
                    <div className="containerr">
                        <h2>Audit-ready ESG and climate reporting</h2>
                        <p className="large-paragraph">A smarter, faster tool</p>

                        <div className="flexx">
                            <div className="cardd">
                                <Image src={reportonee} width={363} height={181} alt="Report One Extended" />
                                <h3>Facilitates Accurate carbon reporting</h3>
                                <p>Generate a comprehensive carbon footprint report with one click, featuring in-depth analysis of key emission hotspots for targeted reductions</p>
                            </div>

                            <div className="cardd">
                                <Image src={reporttwoo} width={363} height={181} alt="Report Two Extended" />
                                <h3>Sustainability disclosures at your fingertips</h3>
                                <p>Identify applicable disclosures for your business and receive clear timelines and requirements to ensure full compliance</p>
                            </div>

                            <div className="cardd">
                                <Image src={reportthree} width={363} height={181} alt="Report Three" />
                                <h3>Ready for track, audit and analysis</h3>
                                <p>Analyze emissions, track trends, share insights, and create disclosures to meet CSRD, TCFD, CDP, and other reporting requirements</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="containerr">
                        <h2>Why reporting emissions on all scopes crucial?</h2>
                        <div className="flexx">
                            <div className="services-item">
                                <div className="icon-container">
                                    <Wind size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Comprehensive Carbon Footprint</h3>
                                    <p>Using software for ESG reporting, especially for carbon reporting, streamlines data collection, enhances accuracy.</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <FileText size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Regulatory Compliance</h3>
                                    <p>regulations and frameworks, like CSRD and TCFD, require reporting on all scopes to ensure transparency and accountability</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>

                            <div className="services-item">
                                <div className="icon-container">
                                    <Award size={35} className="feature-icon" />
                                </div>
                                <div className="services-card-right">
                                    <h3>Sustainability Goals</h3>
                                    <p>To achieve net-zero goals, it's essential to understand and reduce emissions across the entire value chain</p>
                                    <a href="#" className="learn-more">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials">
                    <div className="containerr">
                        <h2>Sustainability reports at your fingertips</h2>
                        <div id="testimonials-slider">
                            <Slider {...testimonialSettings}>
                                <div>
                                    <blockquote>
                                        <p><Image src={complianceone} width={500} height={250} alt="Compliance One" /></p>
                                        <p>Generate a one-click carbon footprint report, dive deep into emission hotspots, and craft tailored communications for stakeholders</p>
                                    </blockquote>
                                    <div className="testimonials-caption">
                                        <Image src={footprint} alt="Footprint" width={60} height={60} />
                                    </div>
                                </div>

                                <div>
                                    <blockquote>
                                        <p><Image src={compliencetwo} width={500} height={250} alt="Compliance Two" /></p>
                                        <p>Achieve audit-ready ESG and climate reporting, effortlessly identifying relevant disclosures for your business</p>
                                    </blockquote>
                                    <div className="testimonials-caption">
                                        <Image src={footprint} alt="Footprint" width={60} height={60} />
                                    </div>
                                </div>

                                <div>
                                    <blockquote>
                                        <p><Image src={boost} width={500} height={250} alt="Boost" /></p>
                                        <p>Create high-quality reports in no time with smart workflows. Automatically populate disclosures for CSRD, TCFD, CDP, and more</p>
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