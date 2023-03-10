import * as React from "react"
import * as styles from "./terms.module.scss"

const PrivacyPolicy = () => (
    <div className={styles.terms}>
        <div className={styles.termsWrap}>
            <div className={styles.termsTxt}>
                We created Startpage to help you search and browse the internet privately. Not because you have something to hide, but because you have a lot to protect!<br />
                <br />
                We blazed the trail in 2006, and protecting your privacy is now more important than ever.<br />
                <br />
                Protecting your privacy is all about having control over your data. At Startpage, we help you control and protect what’s yours.<br />
                <br />
                When it comes to privacy, it's not just our policy. It's our mission!
                <br />
                <br />
                <br />
                <br />
                We don't collect any "personal data"<br />
                If information isn’t collected, it can’t be stolen, demanded, leaked or abused. Protecting your personal data is the best way to safeguard your online privacy.<br />
                <br />
                How we define "personal data"<br />
                Our definition of personal data is based on the privacy laws and regulations of the EU, including the General Data Protection Regulation (GDPR). These are widely regarded as the strongest privacy protections in the world. We consider any information about you or your behavior that can be traced back to you as personal data.<br />
                <br />
                Information we don’t collect<br />
                <br />
                So let’s be perfectly clear:
                <br />
                <br />
                <br />
                <div className={styles.termsAlign}>
                <strong>We don’t record your IP address</strong><br />
                The only exception is for automated search requests (robots) that rapidly submit more queries to our servers than any normal human would. When our software detects potential abuse, we register and block the offending IP address in order to keep our service safe and free.<br />
                <br />
                <strong>We don’t serve any tracking or identifying cookies</strong><br />
                This is about "good" and "bad" cookies. Cookies are small pieces of data that are sent to your hard drive by websites you visit. "Bad" cookies have unique elements that can track all kinds of personal information. We don’t serve any of those. Startpage uses just one "good" cookie called "preferences" in order to remember the search preferences you choose. It’s completely anonymous and expires after not visiting Startpage for 90 days.<br />
                <br />
                <br />
                <br />
                    <br />
                </div>
                <strong>We don't record your search queries</strong><br />
                When you search, your query is automatically stripped of unnecessary metadata including your IP address and other identifying information. We send the anonymized search query to Google and return the search results to you. We don’t log your searches.<br />
                <br />
                To prevent abuse such as robotic high-volume querying, we anonymously determine the frequency of popular search keywords as a part of our anti-abuse measures, while protecting your privacy.<br />
                <br />
                <strong>How we have implemented truly anonymous analytics</strong><br />
                We do measure overall traffic numbers and some other – strictly anonymous – statistics. These stats may include the number of times our service is accessed by a certain operating system, a type of browser, a language, etc., but we don’t know anything about individual users.<br />
                <br />
                <strong>How we keep Startpage free without using "personal data"</strong><br />
                Most online advertising today is personalized, meaning that online advertising services track what you do online and profile you in order to serve tailored ads. We don’t do that at Startpage. No tracking. No profiling!<br />
                <br />
                Our search result pages may include a small number of clearly labeled "sponsored links," which generate revenue and cover our operational costs. Those links are retrieved from platforms such as Google AdSense. In order to enable the prevention of click fraud, some non-identifying system information is shared, but because we never share personal information or information that could uniquely identify you, the ads we display are not connected to any individual user.<br />
                <br />
                It’s a myth that search engines need to profile you in order to earn decent money. Startpage serves strictly non-personalized ads. Sure, our ads make only a fraction of what other search engine ads make, but they pay all our bills.<br />
                <br />
                <strong>What happens to your data beyond Startpage search</strong><br />
                Once you click on a search result, you leave our site and our privacy protection. This is true for sponsored links, search results and other external links. Unless ... you use our proprietary feature "Anonymous View" – shown next to the search results. This is a great privacy tool that allows you to continue to browse in full privacy.<br />
                <br />
                Startpage's video search results are delivered in full privacy, provided by YouTube API Services. When clicking on video links, you will be redirected to YouTube, and subject to their YouTube Terms of Service and Google Privacy Policy.<br />
                <br />
                <strong>We don't disclose or sell your contact information</strong><br />
                When you contact us via email or through our support center, we’ll use the contact information provided to respond to you. Additional information can be found in our Support Privacy Policy.<br />
                <br />
                <strong>How we respond to governmental requests for data</strong><br />
                They can’t request what we don’t have. Any request will have to come from Dutch judicial authorities. We’ll only comply if we’re legally obliged to do so. But we’re not likely to receive requests by governments to hand over user data – simply because we don’t have any.<br />
                <br />
                We will never comply with any voluntary surveillance program<br />
                Fortunately, we are based in the EU, where we have strong laws that protect your right to privacy. European governments can’t legally force service providers like Startpage to implement a blanket spying program.<br />
                <br />
                <strong>Startpage complies with the GDPR</strong><br />
                We are located in the EU, and we fully comply with applicable privacy laws and regulations of the EU, including the General Data Protection Regulation (GDPR). These are widely regarded as the strongest privacy protections in the world.<br />
                <br />
                Looking for a quick win to improve your own GDPR compliance? Setting Startpage as the default search engine on all your organization’s IT equipment will help you minimize the amount of personal data that is processed by or for your organization. This can also help you implement important privacy principles, such as data minimization, storage limitation, privacy by design and privacy by default.<br />
                <br />
                <strong>In the EU you have a "right to be forgotten"</strong><br />
                Citizens in the EU have the right to request the deletion of search results that disclose their personal data when those results are inaccurate or no longer relevant. Find out how we have implemented this right here.<br />
                <br />
                <strong>Dutch Data Protection Authority</strong><br />
                We are always here to help. If you have any feedback or complaint about our services in general, or more specifically about how your privacy is protected when you use our services, please let us know via the contact details below. In accordance with EU privacy laws and regulations, you have the right to lodge a complaint with the national supervisory authority responsible for the protection of personal data if you think we have unlawfully processed your personal data. For the Netherlands, this supervisory authority is the Dutch Data Protection Authority, which you can contact here.<br />
                <br />
                <strong>Our company and contact information</strong><br />
                Still have privacy questions?<br />
                <br />
                Startpage is owned and operated by Surfboard Holding BV, Wilhelmina van Pruisenweg 104<br />
                2595 AN, Den Haag, The Netherlands. You can contact us at ●●●@abc.com<br />
            </div>
        </div>
    </div>
)

export default PrivacyPolicy
