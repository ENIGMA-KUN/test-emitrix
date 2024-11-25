import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Building2, Code2, Shirt } from 'lucide-react';
import { getImageFromImages } from "../../utils/imageUtils";
import './in.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Image component
const CustomImage = ({ src, alt, width, height, ...props }) => {
    return (
        <img 
            src={src} 
            alt={alt || ''} 
            style={{ 
                width: width ? `${width}px` : 'auto',
                height: height ? `${height}px` : 'auto',
                maxWidth: '100%',
                objectFit: 'cover'
            }}
            {...props}
        />
    );
};

// Import images using Vite's way
const images = {
    industryImg: getImageFromImages('industryhero.png'),
    indusOne: getImageFromImages('indusone.jpg'),
    trendScope: getImageFromImages('trendscope.gif'),
    integraIndus: getImageFromImages('Integraindus.gif'),
    indusReport: getImageFromImages('indusreport.png'),
    indusAudit: getImageFromImages('indusaudit.jpg'),
    supplyThree: getImageFromImages('supplythree1.png'),
    footPrint: getImageFromImages('footprint.png'),
    productBased: getImageFromImages('productbased1.png'),
    trackTwo: getImageFromImages('TRACKTWO1.png'),
};

export default function Industries() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                bodyin: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Email sent successfully');
                setFormData({ name: '', email: '', message: '', company: '' });
            } else {
                setStatus('Error sending email');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('Error sending email');
        }
    };

    // Slider arrow components
    const PrevArrow = ({ onClick }) => (
        <div className="prevArroww" onClick={onClick}>
            <ChevronLeft size={24} strokeWidth={2.5} />
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="nextArroww" onClick={onClick}>
            <ChevronRight size={24} strokeWidth={2.5} />
        </div>
    );

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

    const testinomialSettings = {
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

    return (
        <div className="main-containerr">
            <div id="header-hero-container">
                <section id="heroo">
                    <div className="fadee"></div>
                    <div className="heroo-text-in">
                        <h1-in>Trusted carbon solution, everywhere</h1-in>
                        <p>
                            <CustomImage 
                                src={images.industryImg} 
                                width={500} 
                                height={450} 
                                alt="Property 1" 
                            />
                        </p>
                        <p>Financial-Institution, Technology, Fashion Apparel, etc.</p>
                    </div>
                </section>
            </div>

            <section id="how-it-works">
                <div className="containerr-in">
                    <h2-in>Focused Industries</h2-in>
                    <div className="flex">
                        <div className="feature-box">
                            <div className="icon-container">
                                <Building2 size={35} className="feature-icon" />
                            </div>
                            <h4>Complete climate solution for Financed Emissions</h4>
                            <p>Gain full insights into your financed emissions with our cutting-edge carbon estimation engine and advanced climate data</p>
                        </div>

                        <div className="feature-box">
                            <div className="icon-container">
                                <Code2 size={35} className="feature-icon" />
                            </div>
                            <h4>Carbon Management solution for software and IT companies</h4>
                            <p>With Emitrix you will be able to seamlessly manage such complexities to sustainably transform your business and achieve real impact</p>
                        </div>

                        <div className="feature-box">
                            <div className="icon-container">
                                <Shirt size={35} className="feature-icon" />
                            </div>
                            <h4>Carbon Management solution for fashion companies</h4>
                            <p>With Emitrix you will master this complexity and achieve higher impact for your business and consumers</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="properties">
                <div className="containerr-in">
                    <h2-in>One platform offering-</h2-in>
                    <div id="properties-slider" className="slick">
                        <Slider {...propertiesSettings}>
                            <div>
                                <CustomImage src={images.indusOne} width={254} height={254} alt="Property 1" />
                                <div className="property-details">
                                    <p className="price">Handle complex data sourcing and mapping with ease</p>
                                    <span className="pages">Automatically ingest data into Emitrix or export data into other systems via data mapping or API</span>
                                    <span className="menu">Structured data acquisition across all Scopes of the GHG Protocol</span>
                                </div>
                            </div>

                            <div>
                                <CustomImage src={images.trendScope} width={254} height={254} alt="Property 1" />
                                <div className="property-details">
                                    <p className="price">Understand your impact</p>
                                    <span className="pages">Our industry-leading models for Scope 1-3 emissions provide detailed insights, helping you make informed reduction decisions</span>
                                    <span className="menu">methodologies leverage the latest climate science to assess the intensity of global business activities</span>
                                </div>
                            </div>

                            <div>
                                <CustomImage src={images.integraIndus} width={254} height={254} alt="Property 1" />
                                <div className="property-details">
                                    <p className="price">Centralize your sustainability data</p>
                                    <span className="pages">Automate data ingestion with the Emitrix API, then scale data transformation to meet different regulatory requirements</span>
                                    <span className="menu">Intuitive UI simplifies sustainability data analysis, uncovers decarbonization opportunities, forecasts impacts, and tracks progress</span>
                                </div>
                            </div>

                            <div>
                                <CustomImage src={images.indusReport} width={254} height={254} alt="Property 1" />
                                <div className="property-details">
                                    <p className="price">Prepare for ESG disclosures</p>
                                    <span className="pages">Emitrix offers built-in disclosure preparation so you can meet sustainability reporting requirements under CSRD, TCFD, and others</span>
                                    <span className="menu">The intuitive reporting module offers guided workflows, benchmarking, and a unique library of risks and opportunities</span>
                                </div>
                            </div>

                            <div>
                                <CustomImage src={images.indusAudit} width={254} height={254} alt="Property 1" />
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
                <div className="container">
                    <h2-in>What Emitrix Offers</h2-in>
                    <div id="testimonials-slider">
                        <Slider {...testinomialSettings}>
                            <div>
                                <blockquote>
                                    <p><CustomImage src={images.supplyThree} width={500} height={250} alt="Client 7" /></p>
                                    <p>Monitor each supplier's progress, or leverage Emitrix to scale communications and reduction strategies across multiple vendors, making climate-driven purchasing decisions</p>
                                </blockquote>
                                <div className="testimonials-caption">
                                    <CustomImage src={images.footPrint} alt="Client 7" />
                                </div>
                            </div>

                            <div>
                                <blockquote>
                                    <p><CustomImage src={images.productBased} width={500} height={250} alt="Client 7" /></p>
                                    <p>Empower your organization to track emissions at the product level, making incremental strides toward achieving net-zero goals with precision and actionable insights</p>
                                </blockquote>
                                <div className="testimonials-caption">
                                    <CustomImage src={images.footPrint} alt="Client 7" />
                                </div>
                            </div>

                            <div>
                                <blockquote>
                                    <p><CustomImage src={images.trackTwo} width={500} height={250} alt="Client 7" /></p>
                                    <p>Establish emission reduction targets across different scopes, activities, and products, with clearly defined timeframes for achieving these sustainability goals</p>
                                </blockquote>
                                <div className="testimonials-caption">
                                    <CustomImage src={images.footPrint} alt="Client 7" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="containerr">
                    <h2-nz>Contact Us</h2-nz>
                    <div className="flexxx">
                        <div id="form-container">
                            <h3>Explore how Emitrix can transform your sustainability goals</h3>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Business email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Company name</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                    />
                                </div>

                                <button type="submit" className="submit-button rounded">
                                    Send Message
                                </button>
                            </form>
                            {status && <p className="status-message">{status}</p>}
                        </div>

                        <div id="address-container" className="contact-info">
                            <div className="info-group">
                                <label>Address</label>
                                <address>
                                    560064 BMS Institute Of technology, Bangalore, INDIA
                                </address>
                            </div>

                            <div className="info-group">
                                <label>Phone</label>
                                <a href="#">xxx-xxx-xxx</a>
                            </div>

                            <div className="info-group">
                                <label>Email Address</label>
                                <a href="#">www.emitrix.io</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}