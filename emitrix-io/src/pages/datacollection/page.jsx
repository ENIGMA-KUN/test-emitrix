import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    FileText,
    ShieldCheck,
    DollarSign,
    Globe,
    Target,
    Handshake,
    Cpu,
    Server,
    FileJson
} from 'lucide-react';
import { getImageFromImages } from "../../utils/imageUtils";
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
const Image = {
    heroTwo: getImageFromImages('herotwo.png'),
    footPrint: getImageFromImages('footprint.png'),
    thermo: getImageFromImages('thermo.gif'),
    pieChart: getImageFromImages('piechart.gif'),
    competition: getImageFromImages('competition_is_good_-removebg-preview.png'),
    payment: getImageFromImages('3d-illustration-payment-confirmation-bill.jpg'),
    scope: getImageFromImages('scopewize1.png'),
    api: getImageFromImages('apifig1.png'),
    data: getImageFromImages('datacolprod1.png'),
    apitwo: getImageFromImages('apitwo.png'),
    product: getImageFromImages('productbased.png'),
    co2: getImageFromImages('co2.gif'),
};


export default function DataCollection() {

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Trigger email sending on button click
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
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    
    const testinomialsSettings = {
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
                <h1>Gather All Your Emissions Data</h1>
                <p><Image src={heroTwo} width={300} height={250} alt="Property 1" /></p>
                <p>Unify your data in a secure platform and instantly gain clear visibility into your company's carbon footprint</p>
                <p>Time to evaluate your sustainability strategy</p>
            </div>
        </section>
    </div>
<section id="how-it-works">
    <div className="containerr">
        <h2>Our solution</h2>
        <div className="flexx">
            <div className="feature-box">
                <div className="icon-container">
                    <Cpu size={35} className="feature-icon" />
                </div>
                <h4>One</h4>
                <p>Automate your data collection process</p>
            </div>

            <div className="feature-box">
                <div className="icon-container">
                    <Server size={35} className="feature-icon" />
                </div>
                <h4>Two</h4>
                <p>Build a central source for carbon accounting data</p>
            </div>

            <div className="feature-box">
                <div className="icon-container">
                    <FileJson size={35} className="feature-icon" />
                </div>
                <h4>Three</h4>
                <p>Unify all your sustainability data in one digital and digestible format</p>
            </div>
        </div>
    </div>
</section>

<section id="properties">
<div className="containerr">
<h2>Is collecting emissions data essential?</h2>
<div id="properties-slider" className="slick">
    <Slider {...propertiesSettings}>
<div>
<Image src={footPrint} alt="Property 1" />
<div className="property-details">
<p className="price">Build an accurate carbon footprint assessments</p>
<span className="pages">Data Accuracy</span>
<span className="menu">Emission Factors</span>
</div>
</div>

<div>
<Image src={thermo} width={254} height={254} alt="Property 1" />
<div className="property-details">
<p className="price">Identify emissions hotspots</p>
<span className="pages">Reduction plan</span>
<span className="menu">Immense sustainability improvements</span>
</div>
</div>

<div>
<Image src={pieChart} width={254} height={254}  alt="Property 1" />
<div className="property-details">
<p className="price">Know your scope 1, 2, 3 emissions</p>
<span className="pages">An action plan</span>
<span className="menu">Reach sustainability goals</span>
</div>
</div>

<div>
<Image src={competition} width={254} height={254} alt="Property 1"/>
<div className="property-details">
<p className="price">Earn competitive advantages</p>
<span className="pages">Minimize risk-compliance</span>
<span className="menu">Build brand equity</span>
</div>
</div>

<div>
<Image src={payment} width={254} height={254} alt="Property 1" />
<div className="property-details">
<p className="price">Cost Savings</p>
<span className="pages">Detect inefficiencies</span>
<span className="menu">lowering operational costs</span>
</div>
</div>
</Slider>
</div>

<button className="rounded">Start Collecting Data</button>
</div>
</section>

<section id="agents">
<div className="containerr">
<h2>Measure</h2>
<p className="large-paragraph">A smarter, faster carbon footprint measurement</p>

<div className="flexx">
<div className="cardd">
<Image src={scope} alt="Realtor 1" />
<h3>Intelligent data collection</h3>
<p className="newp"> Scope-wise monitoring gives you a clear view of your emissions across all scopes, enabling you to pinpoint areas for improvement | Scope 3 </p>
</div>

<div className="cardd">
<Image src={api} width={363} height={187} alt="Realtor 1" />
<h3>Easy to Integrate</h3>
<p className="newp">Quickly gather accurate business data with a flexible API and simple uploads, ensuring seamless integration and faster insights for your business needs</p>
</div>

<div className="cardd">
<Image src={data} width={363} height={187} alt="Realtor 1" />
<h3>Product-Centric collection</h3>
<p className="newp">Use products as the core unit for emissions tracking, aligning seamlessly with each organization’s offerings for accurate and tailored monitoring</p>
</div>

</div>
</div>
</section>

<section id="services">
    <div className="containerr">
        <h2>Why is calculating emissions on all scopes crucial?</h2>
        <div className="flexx">
            <div className="services-item">
                <div className="icon-container">
                    <FileText size={35} className="feature-icon" />
                </div>
                <div className="services-card-right">
                    <h3>Comply with regulations</h3>
                    <p>Calculating your carbon emissions, on all relevant scopes, enables you to prepare for current and future regulations</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="services-item">
                <div className="icon-container">
                    <ShieldCheck size={35} className="feature-icon" />
                </div>
                <div className="services-card-right">
                    <h3>Manage climate risk and increase resilience</h3>
                    <p>Inaction on climate change could cost the global economy $178 trillion by 2070, highlighting urgent risks</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="services-item">
                <div className="icon-container">
                    <DollarSign size={35} className="feature-icon" />
                </div>
                <div className="services-card-right">
                    <h3>Less CO2 = fewer costs</h3>
                    <p>Identifying and quantifying CO2 emissions helps to recognise inefficiencies and financial blind spots</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="services-item">
                <div className="icon-container">
                    <Globe size={35} className="feature-icon" />
                </div>
                <div className="services-card-right">
                    <h3>Access the carbon market</h3>
                    <p>Companies face costs for CO2 emissions as carbon trading and internal pricing initiatives grow</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="services-item">
                <div className="icon-container">
                    <Target size={35} className="feature-icon" />
                </div>
                <div className="services-card-right">
                    <h3>Enhanced Sustainability Goals</h3>
                    <p>Tracking all emissions enables organizations to set informed, science-based targets for reducing environmental impact</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>

            <div className="services-item">
                <div className="icon-container">
                    <Handshake size={35} className="feature-icon" />
                </div>
                <div className="services-card-right">
                    <h3>Stakeholder Confidence</h3>
                    <p>Transparent emissions reporting fosters trust with investors and stakeholders, showcasing commitment to sustainability and responsibility</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="testimonials">
<div className="containerr">
<h2>What Our Clients Are Saying</h2>
<div id="testimonials-slider">
    <Slider {...testinomialsSettings}>
<div>
<blockquote>
<p><Image src={apitwo} width={500} height={250} alt="Client 7" /></p>
<p>Leverage an enterprise-grade API to streamline data ingestion and enhance flexibility in measurement, empowering automated, accurate, and scalable sustainability tracking across your operations</p>
</blockquote>
<div className="testimonials-caption">
<Image src={footPrint} alt="Client 7" />
</div>
</div>

<div>
<blockquote>
<p><Image src={product} width={500} height={250} alt="Client 7" /></p>
<p>Empower your organization to track emissions at the product level, making incremental strides toward achieving net-zero goals with precision and actionable insights</p>
</blockquote>
<div className="testimonials-caption">
<Image src={footPrint} alt="Client 7" />
</div>
</div>

<div>
<blockquote>
<p><Image src={co2} width={500} height={250} alt="Client 7" /></p>
<p>Emitrx simplifies supplier engagement, enabling swift measurement and reduction of Scope 3 emissions, delivering the first solution focused on large-scale supplier carbon footprint reduction</p>
</blockquote>
<div className="testimonials-caption">
<Image src={footPrint} alt="Client 7" />
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
                                <input type="text" id="name" name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />

                                <label htmlFor="email">Business email</label>
                                <input type="text" id="email" name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="subject">Company name</label>
                                <input type="text" id="subject" name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />

                                <button type='submit' className="rounded">Send Message</button>
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
};