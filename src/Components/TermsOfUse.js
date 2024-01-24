import ScrollToTopButton from "./ ScrollToTopButton";
import Footer from "./Footer";

const TermsOfUse = () => {

    return (
        <>
        <section className="rights-component">
            <h1 className="heading">Terms of Use:</h1>
            <p className="text">Last updated: July 10, 2023</p>
            <ScrollToTopButton />
            <ol className="order-list">
                <li> Intellectual Property: All photographs and content on this website are protected by copyright laws. You may not reproduce, distribute, or use any of the content without our prior written permission.</li>
                <li>External Links: Our website may contain links to external websites for your convenience. We do not endorse or take responsibility for the content or practices of these third-party websites.</li>
                <li>Disclaimer: While we strive to provide accurate and up-to-date information on our website, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, or services</li>
                <li>Changes to Terms: We reserve the right to modify or update these Terms of Use and Privacy Policy at any time. It is your responsibility to regularly review these terms for any changes.</li>
                <li>Consent and Authorization for Image Usage: By engaging our photography services, you grant us the consent and authorization to use the photographs taken during the sessions for promotional and marketing purposes. This may include but is not limited to our website, social media platforms, portfolio, and advertising materials. If you have any specific preferences or restrictions regarding the usage of your images, please communicate them to us in writing.</li>
                <li>Confidentiality of Client Information: We respect the privacy of our clients and will treat all client information shared with us as confidential. We will not disclose any personal or sensitive information to third parties unless required by law or with your explicit consent.</li>
                <li>Client Rights and Ownership: As a client, you retain the rights and ownership of the photographs taken during the sessions. We will not sell or license your images to third parties without your permission. However, we may showcase your images in our portfolio with your consent.</li>
                <li>Child and Minor Privacy: We prioritize the privacy and protection of children and minors. If you are under the age of 18, please obtain parental or guardian consent before providing any personal information or engaging our photography services.</li>
                <li>Data Retention: We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</li>
                <li>Contact Information: If you have any questions, concerns, or requests regarding our Privacy Policy or the use of your personal information, please contact us using the contact details provided on our website.</li>
            </ol>
            <h2 className="heading">Refund Policy</h2>
            <ol className="order-list">
                <li>Deposit: A non-refundable deposit of $50 is required to secure and book a photoshoot date and time with Nixie photo. This deposit is deducted from the total cost of the service booked.</li>
                <li>Cancellation Policy: If a client wishes to cancel their booked photoshoot: <br/>
                    a. More than 48 hours before the scheduled date, they will not incur any additional cancellation fee, though the $50 deposit remains non-refundable. <br/>
                    b. Less than 48 hours before the scheduled date, a cancellation fee amounting to 50% of the total cost of the reserved service will be charged.
                </li>
                <li>No-Shows: Clients who fail to show up for their scheduled appointment without any prior notice will be charged the full amount of the reserved service.</li>
                <li>Rescheduling: While we understand unforeseen circumstances can arise, we encourage our clients to notify us as soon as possible if rescheduling is needed. The $50 deposit can be applied to the rescheduled date if the change is made more than 48 hours before the initial scheduled time. Rescheduling less than 48 hours before the shoot might be subject to availability and additional fees.</li>
                <li>Service Satisfaction: While we strive to provide the best services to our clients, if there are any concerns regarding the quality or content of the delivered photos, please get in touch within 7 days of receiving your photographs. We will do our best to address and rectify the concerns. However, refunds for reasons other than those specified in this policy will be at the sole discretion of Nixie photo.</li>
                <li>Force Majeure: Nixie is not liable for any failure to perform due to unforeseen circumstances or to causes beyond our control, including but not limited to acts of nature, acts of government, labor disputes, and delays in delivery not due to our failure.</li>
            </ol>
            <p className="text">By using our website and engaging our photography services, you acknowledge and agree to these Terms of Use, Refund Policy and Privacy Policy. If you have any questions or concerns, please <a className="rights-link" href="/contacts">contact us</a> for further clarification.</p>
        </section>
        <Footer />
        </>
    )
}
export default TermsOfUse;



