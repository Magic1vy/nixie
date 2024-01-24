import ScrollToTopButton from "./ ScrollToTopButton";
import Footer from "./Footer";

const PrivacyPolicy = () => {

    return (
        <>
        <section className="rights-component">
            <h1 className="heading">Privacy Policy:</h1>
            <ScrollToTopButton />
            <p className="text">Last updated: July 10, 2023</p>
            <ol className="order-list">
                <li>Information Collection: We may collect personal information such as your name, contact details, and email address for the purpose of communication and providing photography services. We will handle this information with utmost confidentiality and will not share it with third parties without your explicit consent.</li>
                <li>Data Security: We take reasonable measures to protect your personal information from unauthorized access, loss, or misuse. We use secure data storage systems and employ industry-standard security practices to safeguard your data.</li>
                <li>Use of Information: The personal information we collect will be used to fulfill your photography requests, communicate with you regarding your sessions, and provide you with relevant updates and offers. We may also use anonymized data for statistical and analytical purposes.</li>
                <li>Cookies and Tracking Technologies: Our website uses cookies and similar tracking technologies to enhance your browsing experience. These technologies allow us to gather information about your usage patterns, preferences, and interactions with our website. 
                    <br/>
                    We use Google Analytics and Google Search Console to gather data about website traffic and user interactions. This helps us to improve the functionality of our website and deliver a better user experience. 
                    <br/>
                    We give you the option to accept all cookies or to decline all cookies when you visit our website. The cookie banner will be displayed until you make a choice. 
                    <br/>
                    If you choose to accept all cookies, a cookie will be set on your device for a duration of 150 days to remember your choice. If you choose to decline all cookies, a cookie will also be set to remember your choice, but Google Analytics and Google Search Console will not track your visit. 
                    <br/>
                    For more information about how Google uses cookies, please visit <a className="rights-link" href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">Google's Cookie Policy</a>.
                </li>
            </ol>
        </section>
        <Footer />
        </>
    )
}
export default PrivacyPolicy;