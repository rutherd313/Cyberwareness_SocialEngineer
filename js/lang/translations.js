//locale translations
let translations = {
    en:{
    //navigation bar
        "nav_home": '<a class="nav-link" href="index.html">Home</a>',
        "nav_about": '<a class="nav-link" href="about.html">About</a>',
        "nav_team": '<a class="nav-link" href="team.html">Team</a>',
        "nav_resources": '<a class="nav-link" href="resources.html">Resources</a>',
    //footer
        "Contact":"Contact Us:",
        "PrivacyPolicy":'<hr class="light-small-devices"><a href="privacy_policy.html">Privacy Policy</a>',
    //index.html
        //Carousel
        "Carousel1":`<h1 class="display-2">Cyberwareness</h1>
                    <h3 >Test Your Skills</h3>
                    <a href="./data_multiLang/test.html">
                        <button type="button" class="btn-primary btn-lg">Go To Test</button>
                    </a>`,
        "Carousel2":`<h1 class='display-2'>Look Inside an Attacker's Toolbox</h1> 
                    <a href='resources.html'>
                        <button type='button' class='btn-primary btn-lg'>Take a Look</button>
                    </a>`,
        //Jumbotron
        "JumbotronText":"Social engineering is the act of manipulating unsuspecting people through the use of deception to convince them to reveal valuable information. An attacker can blindside a victim by exploiting human characteristics such as fear, trust, and ignorance. Ultimately, the purpose of social engineering is to obtain confidential information to achieve a harmful objective.",
        //Welcome Section
        "WelcomeHeading":"Security Testing",
        "WelcomeText":"After taking our social engineering test, clients will have a clear understanding of social engineering attack scenarios, definitions, mitigation techniques, and what to do during a live attack.",
        //Services
        "Service1":"Inform",
        "Service2":"Test",
        "Service3":"Assess",
        //More Info
        "Heading1":"Social Engineering Threats Are More Pervasive Than Ever",
        "SubHeading1":"Social engineering is the bedrock of cybersecurity attacks. Therefore, social engineering attacks' importance cannot be understated. Here are a few facts to get you thinking about social engineering attacks' implications, and why staying ahead of them is a competitive advantage in the modern world.",
        "ul1li1":"The most common cyber attacks experienced by US companies are phishing.",
        "ul1li2":"Google detected more than 2 million phishing sites in 2020.",
        "ul1li3":"Among enterprises in 2019, there was a 48% increase in attacks involving malicious email attachments via office files.",
        "ul1li4":"Global cybercrime damage in 2021 amounted to $16.4 billion a day, $684.9 million an hour, $11 million per minute, and $190,000 per second.",
        "btn1":"Learn more",
        //Single Column Section
        "Heading2":"Applied Knowledge Is Power",
        "Text2":"The Cyberwareness team is changing the security industry for the better; we teach people about malicious attacks bad actors conduct in order to undermine their efforts. By investing in exceptional people, Cyberwareness enhances client security, elevates the data community, and creates a world that is more secure.",
    //about.html
        //Welcome Section
        "AboutHeading":"About Us",
        "AboutText":"Cyberwareness is a transatlantic research project conducted through a partnership between leading higher education research institutions in the United States and Germany. Partnership universities include Northeastern Illinois University and Pädagogische Hochschule Karlsruhe University of Education. If you would like to learn more about members of our team, please check out our <a href='team.html'>Team</a> page. The increasing presence of social engineering threats combined with a lack of general awareness sparked a discussion between both universities; recognition of this problem led to the unanimous decision to mitigate the success of social engineering attacks. Therefore, the universities teamed up to meet this need, and help improve the field of cybersecurity through creating Cyberwareness and its social engineering test.",
        //Transatlantic Research Project
        "PartnershipTitle":"Transatlantic Partnership",
        //Mission Statement
        "MissionHeading":"Our Mission",
        "MissionParagraph1":"Our mission is to give clients of all backgrounds a practical solution on how to combat socially engineered cyber-attacks. Through our social engineering test, clients become informed, allowing them to identify these insidious tactics. As personal data becomes more valuable, social engineering attacks' complexity increases in proportion. Our test’s intent is not only to inform but also to promote critical thinking for mitigating social engineering attacks in the present and future.",
        "MissionParagraph2":"As academics, we share the same values as our clients by formatting our test with the goal of knowledge retention. We have designed our resources with fluidity and incisiveness. By doing so, we aim to deliver the most seamless and efficient learning experience. With the increased traffic in data migration online, it is paramount that people understand what social engineering attacks are and their serious implications. Through this website, our team consolidated the most common social engineering attacks to educate in an all-inclusive manner.",
        //Research Institutions
        "InstitutionsHeading":"Research Institutions",
        "TextNEIU":"Northeastern Illinois University’s (NEIU) School of Business and Technology hosts the university’s computer science undergraduate and graduate-level programs, which remain the largest and most popular within the university. Nestled in Chicago, USA, NEIU’s computer science programs offer a dynamic host of courses that develop leaders in the fields of software engineering, networking, IT management, cybersecurity, data science, and artificial intelligence. Besides technical achievements, NEIU is noteworthy for its longstanding partnership with Google. To learn more about NEIU, please go to the university’s main website located <a href='https://www.neiu.edu/' target='_blank' rel='noopener noreferrer'> here</a>.",
        "TextPHKA":"The University of Education in Karlsruhe (PHKA) stands out among the most prominent landmarks in Baden-Württemberg, Germany because of its educational science center. Defining characteristics of the university include its focus on STEM, bilingual and multilingual education, and educational processes in the context of social diversity and inequality. As the centerpiece of Karlsruhe, PHKA’s unparalleled educational research remains seen and appreciated by all. More info about PHKA is found <a href='https://www-ph--karlsruhe-de.translate.goog/?_x_tr_sl=de&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=nui,sc' target='_blank' rel='noopener noreferrer'>here</a>, at the university’s main website.",
    //team.html
        //Welcome Section
        "TeamHeading":"Meet the Team",
        "TeamText":"Our team comprises of a partnership between academic researchers from Northeastern Illinois University (NEIU) in the United States, and Pädagogische Hochschule Karlsruhe University of Education (PHKA) in Germany. To find out more about our partnership, please go to our <a href='about.html'>About</a> page. Below you can gain insight into the people who helped make this project possible.",
        //Academic Advisors
        "AdvisorHeading":"Academic Advisors",
        "TextManar":"Manar is a computer science professor at Northeastern Illinois University. While not teaching, Manar leads several research projects and publications. Research topics cover a wide range, but notably relate to system security, wireless communications, and network analysis.",
        "TextBernhard":"Bernhard is a junior professor for computer science at the Karlsruhe University of Education. He is also a research and university assistant at the Technical University of Vienna. Bernhard’s research focuses on the modeling of teaching concepts as design patterns in the context of computational thinking.",
        //Design Team
        "TextJohn":"Experience includes front and back-end software development such as Java, JavaScript, MongoDB, and MySQL. Currently, John is working in the accounting field for a brokerage and logistics company with plans on migrating over to cybersecurity.",
        "TextSabine":"Before her studies, Sabine completed her education as a medical technical laboratory assistant with a state examination. Currently, she is studying mathematics and computer science in the bachelor’s program for secondary education at PHKA. At the university Sabine also works as a tutor in the Institute for Mathematics and Computer Science.",
        "TextJoe":"Previous work experience includes internships at NASA's Wallops Flight Facility and Johnson Space Center. Joe became interested in cybersecurity while in college and sees this website as a way to garner interest in others.",
        //Research Team
        "TextNoah":"Noah is currently studying mathematics and computer science in the bachelor's program for secondary education at PHKA. Besides his studies, Noah works at PHKA as a tutor in the Institute of Mathematics and Computer Science.",
        "TextAndrew":"Andrew is a fourth-year student at Northeastern Illinois University. He is currently pursuing his Bachelor of Science in Computer Science, with a concentration in information technology and cybersecurity. He is hoping to start a technology career in his hometown of Chicago.",
        "TextRaihan":"Raihan is a graduating senior at Northeastern Illinois University pursuing his B.S. in computer science. Notably, he has interned with Apple and Comcast. He is also a Mickey Leland research fellow under the U.S. Department of Energy and Oak Ridge Institute for Science and Education. Currently, Raihan is an NLP engineer at Comcast Laboratories.",
    //resources.html
        //Reference Guide
        "ReferenceGuideTitle":"Reference Guide",
        "AnglerPhishing":"<strong><u><mark>Angler Phishing –</strong></u></mark> Category of a phishing attack. Attacks by spoofing customer service accounts on social media or through a company.",
        "PhysicalBaiting":"<strong><u><mark>Baiting (physical) –</strong></u></mark> Leaving physical media with malicious software available in a public place.",
        "OnlineBaiting":"<strong><u><mark>Baiting (online) –</strong></u></mark> Enticing a victim to click a link through the promise of a reward.",
        "BEC":"<strong><u><mark>Business Email Compromise –</strong></u></mark> Category of a phishing attack. Attacks come in the form of emails masquerading as members of an organization or company.",
        "Clickjacking":"<strong><u><mark>Clickjacking –</strong></u></mark> Misdirecting a victim into thinking they are clicking an appropriate link.",
        "Diversion Theft":"<strong><u><mark>Diversion Theft –</strong></u></mark> Altering or stealing the delivery destination of a shipment of goods.",
        "Eavesdropping":"<strong><u><mark>Eavesdropping –</strong></u></mark> An attack where a perpetrator gets information by listening.",
        "Honeypot":"<strong><u><mark>Honeypot –</strong></u></mark> A social engineering attack that plays off a victim’s romantic interest.",
        "Malicious Insider":"<strong><u><mark>Malicious Insider (Man on the Inside) –</strong></u></mark> An attack carried by someone on the inside of an organization or company.",
        "Phishing":"<strong><u><mark>Phishing –</strong></u></mark> Sending messages with fake information, with the intent to steal the receiver’s sensitive information.",
        "Piggybacking":"<strong><u><mark>Piggybacking –</strong></u></mark> Entering a restricted area by blending in with nearby authorized personnel.",
        "Pretexting":"<strong><u><mark>Pretexting –</strong></u></mark> Using a scenario to pressure a victim into performing a compromising action.",
        "Scareware":"<strong><u><mark>Scareware –</strong></u></mark> Scaring the victim into thinking there is something wrong with their device.",
        "Shoulder Surfing":"<strong><u><mark>Shoulder Surfing –</strong></u></mark> An attack where a perpetrator gets information by looking at someone else's device screen.",
        "Spear Phishing":"<strong><u><mark>Spear Phishing –</strong></u></mark> Category of a phishing attack. Email or communication that targets an individual or organization.",
        "Smishing":"<strong><u><mark>Smishing –</strong></u></mark> Category of a phishing attack. Phishing through the medium of (SMS) text messages.",
        "SE-Attack":"<strong><u><mark>Social Engineering Attack –</strong></u></mark> Manipulating unsuspecting people using deception to convince them to reveal information or perform actions.",
        "Tailgating":"<strong><u><mark>Tailgating –</strong></u></mark> Entering a restricted area by closely following authorized personnel without being noticed.",
        "Typosquatting":"<strong><u><mark>Typosquatting / URL Hijacking –</strong></u></mark> A malicious website set up by an attacker with a URL name matching closely to a legitimate website.",
        "Quid Pro Quo":"<strong><u><mark>Quid Pro Quo –</strong></u></mark> A perpetrator tries to get the victim to do a compromising action in the promise of a reward.",
        "Vishing":"<strong><u><mark>Vishing –</strong></u></mark>Category of a phishing attack. A form of phishing via phone calls and/or voicemails.",
        "Whaling":"<strong><u><mark>Whaling –</strong></u></mark>Category of a phishing attack. Targeting executives to take advantage of their executive powers for ransom.",
        //More Info
        "LearnMoreHeading":"Want more information?",
        "LearnMoreText":"A detailed description of the various social engineering attacks can be found <a href='./data_multiLang/info.html'>here</a>.",
    //privacy_policy.html
        "PPTitle":"Privacy Notice",
        "PPSubTitle":"Last updated November 10, 2021",
        "PPIntro":`<p>Thank you for choosing to be part of our community at Cyberwareness (<b>"Company"</b>, <b>"we"</b>,<b>"us"</b>, or <b>"our"</b>). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at <b>m-mohaisen@neiu.edu</b>.</p>
                    <p>This privacy notice describes how we might use your information if you:
                        <ul>
                            <li>Visit our website at <a target="_blank" rel="noopener noreferrer"
                                href="https://cs.neiu.edu/cyberwareness">https://cs.neiu.edu/cyberwareness</a></li>
                            <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
                        </ul>
                    </p>
                    <p>In this privacy notice, if we refer to:
                        <ul>
                            <li><b>"Website"</b>, we are referring to any website of ours that references or links to this
                            policy</li>
                            <li><b>"Services"</b>, we are referring to our Website, and other related services, including any
                            sales, marketing, or events</li>
                        </ul>
                    </p>
                    <p>The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>
                    <p><strong>Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.</strong></p>`,
        "PPToC":`<h5><strong>TABLE OF CONTENTS</strong></h5>
                    <ol class="mt-4">
                        <a href="#infocollect">
                            <li>WHAT INFORMATION DO WE COLLECT?</li>
                        </a>
                        <a href="#infouse">
                            <li>HOW DO WE USE YOUR INFORMATION?</li>
                        </a>
                        <a href="#infoshare">
                            <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
                        </a>
                        <a href="#cookies">
                            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                        </a>
                        <a href="#inforetain">
                            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                        </a>
                        <a href="#infosafe">
                            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                        </a>
                        <a href="#privacyrights">
                            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                        </a>
                        <a href="#DNT">
                            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                        </a>
                        <a href="#caresidents">
                            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                        </a>
                        <a href="#policyupdates">
                            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                        </a>
                        <a href="#contact">
                            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                        </a>
                        <a href="#request">
                            <li>HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                        </a>
                    </ol>`,
        "infocollect":`<h5><strong>1. WHAT INFORMATION DO WE COLLECT?</strong></h5>
                        <p class="fs-17 text-black mt-4"><strong>Personal information you disclose to us</strong></p>
                        <p><em><b>In Short:</b> We collect personal information that you provide to us.</em></p>
                        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.</p>
                        <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
                        <p><b>Personal Information Provided by You.</b> We collect age; gender; region; country; and other similar information.</p>
                        <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                        <p class="fs-17 text-black mt-4"><strong>Information automatically collected</strong></p>
                        <p><em><b>In Short:</b> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</em></p>
                        <p>We automatically collect certain information when you visit, use or navigate the Website . This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website , and for our internal analytics and reporting purposes.</p>
                        <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                        <p>The information we collect includes:
                            <ul>
                                <li><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).</li>
                                <li class="mt-3"><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Website . For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                            </ul>
                        </p>`,
        "infouse":`<h5><strong>2. HOW DO WE USE YOUR INFORMATION?</strong></h5>
                    <p class="mt-4"><em><b>In Short:</b> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></p>
                    <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
                    <p>We use the information we collect or receive:
                    <ul>
                        <li><strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
                        <li class="mt-3"><strong>To post testimonials.</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at m-mohaisen@neiu.edu and be sure to include your name, testimonial location, and contact information.</li>
                        <li class="mt-3"><strong>Request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
                        <li class="mt-3"><strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user's consent.</li>
                        <li class="mt-3"><strong>To manage user accounts.</strong> We may use your information for the purposes of managing your account and keeping it in working order.</li>
                        <li class="mt-3">Research</li>
                        <li class="mt-3">Security Analytics</li>
                    </ul>`,
        "infoshare": `<h5><strong>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</strong></h5>
                    <p class="mt-4"><em><b>In Short:</b> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em></p>
                    <p>We may process or share your data that we hold based on the following legal basis:
                        <ul>
                            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                            <li class="mt-3"><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            <li class="mt-3"><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                            <li class="mt-3"><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                            <li class="mt-3"><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                        </ul>
                    </p>
                    <p>More specifically, we may need to process your data or share your personal information in the following situations:
                        <ul>
                            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                            <li class="mt-3"><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
                        </ul>
                    </p>`,
        "cookies":`<h5><strong>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong></h5>
                    <p class="mt-4"><em><b>In Short:</b> We may use cookies and other tracking technologies to collect and store your information.</em></p>
                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>`,
        "inforetain":`<h5><strong>5. HOW LONG DO WE KEEP YOUR INFORMATION?</strong></h5>
                    <p class="mt-4"><em><b>In Short:</b> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></p>
                    <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.</p>
                    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>`,
        "infosafe":`<h5><strong>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong></h5>
                    <p class="mt-4"><em><b>In Short:</b> We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
                    <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.</p>`,
        "privacyrights":`<h5><strong>7. WHAT ARE YOUR PRIVACY RIGHTS?</strong></h5>
                        <p class="mt-4"><em><b>In Short:</b> In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em></p>
                        <p>In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the <a href="#contact">contact details</a> provided below. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                        <p>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                        <p>If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details <a target="_blank" rel="noopener noreferrer" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.">here</a>.</p>
                        <p>If you are a resident in Switzerland, the contact details for the data protection authorities are available <a target="_blank" rel="noopener noreferrer" href="https://www.edoeb.admin.ch/edoeb/en/home.html">here</a>.</p>
                        <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website . To opt-out of interest-based advertising by advertisers on our Website visit <a target="_blank" rel="noopener noreferrer" href="http://www.aboutads.info/choices/">here</a>.</p>`,    
        "DNT":`<h5><strong>8. CONTROLS FOR DO-NOT-TRACK FEATURES</strong></h5>
                <p class="mt-4">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. </p>`,
        "caresidents":`<h5><strong>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong></h5>
                        <p class="mt-4"><em><b>In Short:</b> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>
                        <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
                        <p>If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website . To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website , but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>
                        <p class="fs-17 text-black mt-4"><strong>CCPA Privacy Notice</strong></p>
                        <p>The California Code of Regulations defines a "resident" as:</p>
                        <p>
                            <ul class="no-bullets">
                                <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                                <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
                            </ul>
                         </p>
                        <p>All other individuals are defined as "non-residents."</p>
                        <p>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>
                        <p><strong>What categories of personal information do we collect?</strong></p>
                        <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
                        <div class="w-100 overflow-y-scroll">
                            <table class="table table-bordered">
                                <tr>
                                    <th></th>
                                    <th>Category</th>
                                    <th>Examples</th>
                                    <th>Collected</th>
                                </tr>
                                <tr>
                                    <td>A.</td>
                                    <td> Identifiers</td>
                                    <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> B.</td>
                                    <td> Personal information categories listed in the California Customer Records statute</td>
                                    <td>Name, contact information, education, employment, employment history and financial information</td>
                                    <td>YES</td>
                                </tr>
                                <tr>
                                    <td> C.</td>
                                    <td> Protected classification characteristics under California or federal law</td>
                                    <td>Gender and date of birth</td>
                                    <td>YES</td>
                                </tr>
                                <tr>
                                    <td> D.</td>
                                    <td> Commercial information</td>
                                    <td>Transaction information, purchase history, financial details and payment information</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> E.</td>
                                    <td> Biometric information</td>
                                    <td>Fingerprints and voiceprints</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> F.</td>
                                    <td>Internet or other similar network activity</td>
                                    <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> G.</td>
                                    <td>Geolocation data</td>
                                    <td>Device location</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> H.</td>
                                    <td>Audio, electronic, visual, thermal, olfactory, or similar information</td>
                                    <td>Images and audio, video or call recordings created in connection with our business activities</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> I.</td>
                                    <td>Professional or employment-related information</td>
                                    <td>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> J.</td>
                                    <td>Education Information</td>
                                    <td>Student records and directory information</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> K.</td>
                                    <td>Inferences drawn from other personal information</td>
                                    <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                    <td>NO</td>
                                </tr>
                                <tr>
                                    <td> L.</td>
                                    <td>Test results</td>
                                    <td>Total scores gathered from each cyberwareness test session</td>
                                    <td>YES</td>
                                </tr>
                            </table>
                        </div>
                        <p>We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
                            <ul>
                                <li>Receiving help through our customer support channels;</li>
                                <li>Participation in customer surveys or contests; and</li>
                                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                            </ul>
                        </p>
                         <div>
                            <p><strong>How do we use and share your personal information?</strong></p>
                            <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>
                            <p>You may contact us by email at <b>m-mohaisen@neiu.edu</b>, or by referring to the contact details at the bottom of this document.</p>
                            <p>If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>
                        </div>
                        <div>
                            <p><strong>Will your information be shared with anyone else?</strong></p>
                            <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>
                            <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.</p>
                            <p>Cyberwareness has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. Cyberwareness will not sell personal information in the future belonging to website visitors, users and other consumers.</p>
                        </div>
                        <div>
                            <p><strong>Your rights with respect to your personal data</strong></p>
                            <p><u>Right to request deletion of the data - Request to delete</u></p>
                            <p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.</p>
                            <p><u>Right to be informed - Request to know</u></p>
                            <p>Depending on the circumstances, you have a right to know:
                                <ul>
                                    <li>whether we collect and use your personal information;</li>
                                    <li>the categories of personal information that we collect;</li>
                                    <li>the purposes for which the collected personal information is used;</li>
                                    <li>whether we sell your personal information to third parties;</li>
                                    <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
                                    <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                                    <li>the business or commercial purpose for collecting or selling personal information.</li>
                                </ul>
                            </p>
                            <p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>
                            <p><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></p>
                            <p>We will not discriminate against you if you exercise your privacy rights.</p>
                            <p><u>Verification process</u></p>
                            <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>
                            <p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>
                            <p><u>Other privacy rights</u></p>
                            <p>
                                <ul>
                                    <li>you may object to the processing of your personal data.</li>
                                    <li>you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data.</li>
                                    <li>you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                                    <li>you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.</li>
                                </ul>
                            </p>
                            <p>To exercise these rights, you can contact us by email at m-mohaisen@neiu.edu, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you. </p>
                        </div>`,
        "policyupdates":`<h5><strong>10. DO WE MAKE UPDATES TO THIS NOTICE?</strong></h5>
                        <p class="mt-4"><em><b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
                        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>`,
        "policycontact":`<h5><strong>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong></h5>
                        <p class="mt-4">If you have questions or comments about this notice, you may email us at <b>m-mohaisen@neiu.edu</b>, call us at <b>+1 (773) 442-4714</b>, or by post to:</p>
                        <p>
                        Cyberwareness <br />
                        5500 N. St. Louis Avenue<br />
                        Chicago , IL 60625<br />
                        United States<br />
                        </p>`,
        "request":`<h5><strong>12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong></h5>
                    <p class="mt-4">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="https://app.termly.io/notify/ccec2eb0-09fa-4a5c-94d6-402662768214" rel="noopener noreferrer" target="_blank">here</a>.</p>
                    <p>This privacy policy was created using <a target="_blank" rel="noopener noreferrer" href="https://termly.io/products/privacy-policy-generator">Termly's Privacy Policy Generator</a>.</p>`,
    },
    de:{
    //navigation bar
        "nav_home": '<a class="nav-link" href="index.html#de">Startseite</a>',
        "nav_about": '<a class="nav-link" href="about.html#de">Über das Projekt</a>',
        "nav_team": '<a class="nav-link" href="team.html#de">Team</a>',
        "nav_resources": '<a class="nav-link" href="resources.html#de">Begriffsübersicht</a>',
   //footer
        "Contact":"Kontaktieren Sie uns:",
        "PrivacyPolicy": '<hr class="light-small-devices"><a href="privacy_policy.html#de">Datenschutzbestimmungen</a>',
    //index.html
        //Carousel
        "Carousel1":`<h1 class="display-2">Cyberwareness</h1>
                    <h3>Testen Sie Ihr Wissen</h3>
                    <a href="./data_multiLang/test.html#de">
                        <button type="button" class="btn-primary btn-lg">Zum Test</button>
                    </a>`,
        "Carousel2":`<h1 class='display-2'>Angriffstaktikten kennen</h1> 
                    <a href='resources.html#de'>
                        <button type='button' class='btn-primary btn-lg'>Jetzt ansehen</button>
                    </a>`,
        //Jumbotron
        "JumbotronText":"Unter Social Engineering versteht man die Manipulation von Menschen durch Täuschung, um sie zur Preisgabe persönlicher Informationen oder zur Durchführung von Handlungen zu bewegen.",
        //Welcome Section
        "WelcomeHeading":"Das Ziel",
        "WelcomeText":"Nach der Teilnahme an unserem Social-Engineering-Test haben die Teilnehmenden ein klares Verständnis von Social-Engineering-Angriffsszenarien, Definitionen sowie Abwehrtechniken und wissen, was bei einem Angriff zu tun ist.",
        //Services
        "Service1":"Informieren",
        "Service2":"Testen",
        "Service3":"Auswerten",
        //More info
        "Heading1":"Social-Engineering-Bedrohungen sind allgegenwärtiger denn je",
        "SubHeading1":"Social Engineering ist die Grundlage für Angriffe auf die Cybersicherheit. Daher darf die Bedeutung von Social-Engineering-Angriffen nicht unterschätzt werden. Im Folgenden finden Sie einige Fakten, die Sie über die Auswirkungen von Social-Engineering-Angriffen aufklären und Ihnen verdeutlichen sollen, warum es in der modernen Welt ein Wettbewerbsvorteil ist, ihnen einen Schritt voraus zu sein.",
        "ul1li1":"Die häufigsten Cyberangriffe auf US-Unternehmen sind Phishing-Angriffe.",
        "ul1li2":"Google entdeckte im Jahr 2020 mehr als 2 Millionen Phishing-Seiten.",
        "ul1li3":"Bei Unternehmen gab es 2019 einen Anstieg von 48 % bei Angriffen mit bösartigen E-Mail-Anhängen über Office-Dateien.",
        "ul1li4":"Der weltweite Schaden durch Cyberkriminalität belief sich im Jahr 2021 auf 16,4 Milliarden US-Dollar pro Tag, 684,9 Millionen US-Dollar pro Stunde, 11 Millionen US-Dollar pro Minute und 190.000 US-Dollar pro Sekunde.",
        "btn1":"Mehr erfahren",
        //Single Column Section
        "Heading2":"Angewandtes Wissen ist Macht",
        "Text2":"Das Cyberwareness-Team verändert die Sicherheitsbranche zum Besseren. Wir unterrichten Menschen über schädliche Angriffe, die bösartige Akteurinnen und Akteure durchführen, um ihre Bemühungen zu untergraben. Durch die Investition in außergewöhnliche Mitarbeiterinnen und Mitarbeiter erhöht Cyberwareness die Sicherheit der Nutzerinnen und Nutzer, verbessert die Datengemeinschaft und schafft eine sicherere Welt.",
    //about.html
        //Welcome Section
        "AboutHeading":"Über das Projekt",
        "AboutText":"Cyberwareness ist ein transatlantisches Forschungsprojekt, das im Rahmen einer Partnerschaft zwischen führenden Hochschulforschungseinrichtungen in den Vereinigten Staaten und Deutschland durchgeführt wird. Zu den Partneruniversitäten gehören die Northeastern Illinois Universität und die Pädagogische Hochschule Karlsruhe. Wenn Sie mehr über die Mitglieder unseres Teams erfahren möchten, besuchen Sie gerne unsere <a href='team.html#de'>Team</a>-Seite. Die zunehmende Präsenz von Social-Engineering-Bedrohungen in Verbindung mit einem Mangel an allgemeinem Bewusstsein dessen löste eine Diskussion zwischen beiden Universitäten aus. Die Anerkennung dieses Problems führte zu dem Entschluss, den Erfolg von Social-Engineering-Angriffen zu mindern. Daher haben sich die Universitäten zusammengetan, um diesen Bedarf zu decken und durch die Schaffung von Cyberwareness und dem Social-Engineering-Test zur Verbesserung der Cybersicherheit beizutragen.",
        //Transatlantic Research Project
        "PartnershipTitle":"Transatlantische Partnerschaft",
        //Mission Statement
        "MissionHeading":"Unser Ziel",
        "MissionParagraph1":"Unser Ziel ist es, Nutzerinnen und Nutzern aller Art eine praktische Lösung zur Bekämpfung von Social-Engineering-Angriffen zu bieten. Durch unseren Social-Engineering-Test werden die Teilnehmenden geschult, so dass sie diese heimtückischen Taktiken erkennen können. Da persönliche Daten immer wertvoller werden, nimmt die Komplexität von Social-Engineering-Angriffen im gleichen Maße zu. Unser Test soll nicht nur informieren, sondern auch kritisches Denken fördern, um Social-Engineering-Angriffe in der Gegenwart und Zukunft zu entschärfen.",
        "MissionParagraph2":"Als Akademiker teilen wir die gleichen Werte wie unsere Nutzerinnen und Nutzer, indem wir unseren Test mit dem Ziel einer effektiven Wissensvermittlung formatieren. Wir haben unsere Ressourcen so gestaltet, dass sie flüssig und prägnant sind. Auf diese Weise wollen wir eine möglichst nahtlose und effiziente Lernerfahrung bieten. Angesichts des zunehmenden Datenverkehrs im Internet ist es von größter Bedeutung, dass die Menschen verstehen, was Social-Engineering-Angriffe sind und welche schwerwiegenden Folgen sie haben. Auf dieser Website hat unser Team die gängigsten Social-Engineering-Angriffe zusammengefasst, um auf umfassende Weise aufzuklären.",
        //Research Institutions
        "InstitutionsHeading":"Forschungsinstitute",
        "TextNEIU":"Die Northeastern Illinois Universität (NEIU) bietet verschiedene Informatik-Studiengänge an, die nach wie vor die größten und beliebtesten innerhalb der Universität sind. Die in Chicago gelegenen Informatikprogramme der NEIU bieten eine Vielzahl von dynamischen Kursen, die Führungskräfte in den Bereichen Software-Engineering, Netzwerke, IT-Management, Cybersicherheit, Datenwissenschaft und künstliche Intelligenz ausbilden. Neben technischen Errungenschaften zeichnet sich die NEIU auch durch seine langjährige Partnerschaft mit Google aus. Um mehr über NEIU zu erfahren, besuchen Sie gerne die Hauptwebseite der Universität, die Sie <a href='https://www.neiu.edu/' target='_blank' rel='noopener noreferrer'> hier</a> finden.",
        "TextPHKA":"Die Pädagogische Hochschule Karlsruhe (PHKA) gehört mit ihrem erziehungswissenschaftlichen Zentrum zu den führenden Hochschulen in Baden-Württemberg in diesem Bereich. Zu den charakteristischen Merkmalen der Hochschule gehören ihre Fokussierung auf die MINT-Fächer, die zwei- und mehrsprachige Bildung sowie die Bildungsprozesse im Kontext sozialer Vielfalt und Ungleichheit. Weitere Informationen über die PHKA finden Sie <a href='https://www.ph-karlsruhe.de' target='_blank' rel='noopener noreferrer'> hier</a>, auf der Website der Hochschule.",
    //team.html
        //Welcome Section
        "TeamHeading":"Lernen Sie das Team kennen",
        "TeamText":"Unser Team besteht aus einer Partnerschaft zwischen Studierenden und Dozierenden der Northeastern Illinois Universität (NEIU) in den Vereinigten Staaten und der Pädagogischen Hochschule Karlsruhe (PHKA) in Deutschland. Weitere Informationen über unsere Partnerschaft finden Sie auf unserer Seite <a href='about.html#de'>über das Projekt</a>. Hier erhalten Sie einen Überblick über die Personen, die dieses Projekt möglich gemacht haben.",
        //Academic Advisors
        "AdvisorHeading":"Akademische Berater",
        "TextManar":"Manar ist Professor für Informatik an der Northeastern Illinois Universität. Neben seiner Lehrtätigkeit leitet Manar mehrere Forschungsprojekte und Veröffentlichungen. Die Forschungsthemen sind breit gefächert, betreffen aber vor allem die Bereiche Systemsicherheit, drahtlose Kommunikation und Netzwerkanalyse.",
        "TextBernhard":"Bernhard ist Juniorprofessor für Informatik an der Pädagogischen Hochschule Karlsruhe. Außerdem ist er Forschungs- und Universitätsassistent an der Technischen Universität Wien. Bernhards Forschungsschwerpunkt ist die Modellierung von Lehrkonzepten als Design Patterns im Kontext von Computational Thinking.",
        //Design Team
        "TextJohn":"Zu seinen Erfahrungen gehört die Entwicklung von Front- und Back-End-Software wie Java, JavaScript, MongoDB und MySQL. Derzeit arbeitet John im Bereich Buchhaltung für ein Makler- und Logistikunternehmen und plant, in den Bereich Cybersicherheit zu wechseln.",
        "TextSabine":"Vor dem Studieren schloss Sabine ihre Ausbildung zur medizinisch-technischen Laboratoriumsassistentin mit Staatsexamen ab. Derzeit studiert sie Mathematik und Informatik im Bachelorstudiengang Lehramt für die Sekundarstufe I an der PHKA. An der Hochschule arbeitet Sabine auch als Tutorin in den Instituten für Mathematik und Informatik.",
        "TextJoe":"Zu seinen früheren Berufserfahrungen zählen Praktika bei der NASA in der Wallops Flight Facility und im Johnson Space Center. Joe begann sich während seines Studiums für Cybersicherheit zu interessieren und sieht diese Website als eine Möglichkeit, das Interesse anderer zu wecken.",
        //Research Team
        "TextNoah":"Noah studiert derzeit Mathematik und Informatik im Bachelorstudiengang für den Sekundarbereich an der PHKA. Neben seinem Studium arbeitet Noah an der PHKA als Tutor im Institut für Informatik.",
        "TextAndrew":"Andrew ist ein Student im vierten Jahr an der Northeastern Illinois Universität. Zurzeit macht er seinen Bachelor of Science in Informatik mit den Schwerpunkten Informationstechnologie und Cybersicherheit. Er hofft, in seiner Heimatstadt Chicago eine Karriere im Technologiebereich zu beginnen.",
        "TextRaihan":"Raihan studiert an der Northeastern Illinois Universität, wo er seinen Bachelor-Abschluss in Informatik macht. Er hat ein Praktikum bei Apple und Comcast absolviert. Außerdem ist er ein Mickey-Leland-Forschungsstipendiat des US-Energieministeriums und des Oak Ridge Institute for Science and Education. Derzeit arbeitet Raihan als NLP-Ingenieur bei Comcast Laboratories.",
    //resources.html
        //Reference Guide
        "ReferenceGuideTitle":"Begriffsübersicht",
        "AnglerPhishing":"<strong><u><mark>Angler Phishing –</strong></u></mark> Kategorie eines Phishing-Angriffs. Angriffe durch gefälschte Kundendienstkonten in sozialen Medien oder durch ein Unternehmen.",
        "PhysicalBaiting":"<strong><u><mark>Baiting (physisch) –</strong></u></mark> Hinterlassen von physischen Datenträgern mit schädlicher Software an einem öffentlichen Ort.",
        "OnlineBaiting":"<strong><u><mark>Baiting (online) –</strong></u></mark> Ein Opfer durch das Versprechen einer Belohnung zum Anklicken eines Links verleiten.",
        "BEC":"<strong><u><mark>Business Email Compromise –</strong></u></mark> Kategorie eines Phishing-Angriffs. Die Angriffe erfolgen in Form von E-Mails, dessen Absender*innen sich als Mitglieder einer Organisation oder eines Unternehmens ausgeben.",
        "Clickjacking":"<strong><u><mark>Clickjacking –</strong></u></mark> Einem Opfer wird vorgegaukelt, dass es auf einen gültigen Link klickt.",
        "Diversion Theft":"<strong><u><mark>Diversion Theft –</strong></u></mark> Änderung oder Diebstahl des Lieferziels einer Warensendung.",
        "Eavesdropping":"<strong><u><mark>Eavesdropping –</strong></u></mark> Belauschen eines Privatgesprächs, um an sensible Informationen zu gelangen.",
        "Honeypot":"<strong><u><mark>Honeypot –</strong></u></mark> Ein Social-Engineering-Angriff, bei dem das romantische Interesse des Opfers ausgenutzt wird.",
        "Malicious Insider":"<strong><u><mark>Böswilliger Insider –</strong></u></mark> Ein Angriff, der von einer Person innerhalb einer Organisation oder eines Unternehmens durchgeführt wird.",
        "Phishing":"<strong><u><mark>Phishing –</strong></u></mark> Das Versenden von Nachrichten mit gefälschten Informationen mit der Absicht, sensible Daten des Empfängers/der Empfängerin zu stehlen.",
        "Piggybacking":"<strong><u><mark>Piggybacking –</strong></u></mark> Eindringen in einen zugangsbeschränkten Bereich, indem man sich unter das autorisierte Personal in der Nähe mischt.",
        "Pretexting":"<strong><u><mark>Pretexting –</strong></u></mark> Verwendung eines Szenarios, um ein Opfer unter Druck zu setzen, eine kompromittierende Aktion durchzuführen.",
        "Scareware":"<strong><u><mark>Scareware –</strong></u></mark> Einem Opfer Angst einjagen, damit es glaubt, dass mit seinem Gerät etwas nicht stimmt.",
        "Shoulder Surfing":"<strong><u><mark>Shoulder Surfing –</strong></u></mark> Ein Angriff, bei dem ein Täter/eine Täterin Informationen erhält, indem er/sie auf den Bildschirm des Geräts einer anderen Person schaut.",
        "Spear Phishing":"<strong><u><mark>Spear Phishing –</strong></u></mark> Kategorie eines Phishing-Angriffs. E-Mail oder Kommunikationsform, die auf eine bestimmte Person oder ein Unternehmen abzielt.",
        "Smishing":"<strong><u><mark>Smishing –</strong></u></mark> Kategorie eines Phishing-Angriffs. Phishing über das Medium (SMS-)Textnachrichten.",
        "SE-Attack":"<strong><u><mark>Social-Engineering-Attacke –</strong></u> </mark> Manipulation von Menschen durch Täuschung, um sie zur Preisgabe persönlicher Informationen oder zur Durchführung von Handlungen zu bewegen.",
        "Tailgating":"<strong><u><mark>Tailgating –</strong></u></mark> Eindringen in einen zugangsbeschränkten Bereich durch unbemerktes Verfolgen von autorisiertem Personal.",
        "Typosquatting":"<strong><u><mark>Typosquatting –</strong></u></mark> Eine bösartige Website, die von einem Angreifer/einer Angreiferin eingerichtet wird, mit einer URL (Internetadresse), die einer legitimen Website sehr ähnlich ist.",
        "Quid Pro Quo":"<strong><u><mark>Quid Pro Quo –</strong></u></mark> Ein Täter/eine Täterin versucht, das Opfer mit dem Versprechen einer Belohnung zu einer kompromittierenden Handlung zu bewegen.",
        "Vishing":"<strong><u><mark>Vishing –</strong></u></mark> Kategorie eines Phishing-Angriffs. Phishing-Angriffe, die über Anrufe und/oder Voicemails verübt werden.",
        "Whaling":"<strong><u><mark>Whaling –</strong></u></mark> Kategorie eines Phishing-Angriffs. Zielt auf Führungskräfte ab, um deren Befugnisse gegen Lösegeld auszunutzen.",
        //More Info
        "LearnMoreHeading":"Sie wollen mehr Informationen?",
        "LearnMoreText":"Eine ausführliche Beschreibung der verschiedenen Social-Engineering-Attacken finden Sie <a href='./data_multiLang/info.html#de'>hier</a>.",
    //privacy_policy.html
        "PPTitle":"Datenschutzerklärung",
        "PPSubTitle":"Zuletzt aktualisiert am 10. November 2021",
        "PPIntro":`<p>Vielen Dank, dass Sie sich entschieden haben, Teil unserer Gemeinschaft bei Cyberwareness (<b>"Unternehmen"</b>, <b>"wir"</b>,<b>"uns"</b> oder <b>"unser"</b>) zu werden. Wir verpflichten uns, Ihre persönlichen Daten und Ihr Recht auf Privatsphäre zu schützen.  Wenn Sie Fragen oder Bedenken bezüglich dieser Datenschutzerklärung oder unserer Praktiken in Bezug auf Ihre persönlichen Daten haben, kontaktieren Sie uns bitte unter <b>m-mohaisen@neiu.edu</b>.</p>
                    <p>In dieser Datenschutzerklärung wird beschrieben, wie wir Ihre Daten verwenden können, wenn Sie:
                        <ul>
                            <li>Unsere Webseite unter <a target="_blank" rel="noopener noreferrer"
                                href="https://cs.neiu.edu/cyberwareness">https://cs.neiu.edu/cyberwareness</a> besuchen</li>
                            <li>mit uns auf andere Weise in Kontakt treten - einschließlich Verkauf, Marketing oder Veranstaltungen</li>
                        </ul>
                    </p>
                    <p>Wenn wir in dieser Datenschutzerklärung Bezug nehmen auf:
                        <ul>
                            <li><b>"Webseite"</b>, beziehen wir uns auf jede unserer Webseiten, die auf diese Datenschutzrichtlinie verweist oder mit ihr verlinkt ist.</li>
                            <li><b>"Dienste"</b>, beziehen wir uns auf unsere Webseite und andere damit verbundene Dienste, einschließlich Verkauf, Marketing und Veranstaltungen.</li>
                        </ul>
                    </p>
                    <p>Der Zweck dieser Datenschutzerklärung ist es, Ihnen so klar wie möglich zu erklären, welche Informationen wir sammeln, wie wir sie verwenden und welche Rechte Sie in Bezug auf sie haben. Sollten Sie mit einigen Bestimmungen in dieser Datenschutzerklärung nicht einverstanden sein, stellen Sie bitte die Nutzung unserer Dienste unverzüglich ein.</p>
                    <p><strong>Bitte lesen Sie diese Datenschutzerklärung sorgfältig durch, damit Sie verstehen, was wir mit den von uns erfassten Daten tun.</strong></p>`,
        "PPToC":`<h5><strong>INHALT</strong></h5>
        <ol class="mt-4">
            <a href="#infocollect">
                <li>WELCHE INFORMATIONEN SAMMELN WIR?</li>
            </a>
            <a href="#infouse">
                <li>WIE VERWENDEN WIR IHRE INFORMATIONEN?</li>
            </a>
            <a href="#infoshare">
                <li>WERDEN IHRE INFORMATIONEN AN DRITTE WEITERGEGEBEN?</li>
            </a>
            <a href="#cookies">
                <li>VERWENDEN WIR COOKIES UND ANDERE TRACKING-TECHNOLOGIEN?</li>
            </a>
            <a href="#inforetain">
                <li>WIE LANGE BEWAHREN WIR IHRE DATEN AUF?</li>
            </a>
            <a href="#infosafe">
                <li>WIE SCHÜTZEN WIR IHRE DATEN?</li>
            </a>
            <a href="#privacyrights">
                <li>WELCHE RECHTE HABEN SIE IN BEZUG AUF IHRE PRIVATSPHÄRE?</li>
            </a>
            <a href="#DNT">
                <li>STEUERELEMENTE FÜR "DO-NOT-TRACK"-FUNKTIONEN</li>
            </a>
            <a href="#caresidents">
                <li>HABEN IN KALIFORNIEN ANSÄSSIGE PERSONEN BESONDERE DATENSCHUTZRECHTE?</li>
            </a>
            <a href="#policyupdates">
                <li>WERDEN WIR DIESE ERKLÄRUNG AKTUALISIEREN?</li>
            </a>
            <a href="#contact">
                <li>WIE KÖNNEN SIE UNS BEZÜGLICH DIESER ERKLÄRUNG KONTAKTIEREN?</li>
            </a>
            <a href="#request">
                <li>WIE KÖNNEN SIE DIE VON UNS ERHOBENEN DATEN EINSEHEN, AKTUALISIEREN ODER LÖSCHEN?</li>
            </a>
        </ol>`,
        "infocollect":`<h5><strong>1. WELCHE INFORMATIONEN SAMMELN WIR?</strong></h5>
                        <p class="fs-17 text-black mt-4"><strong>Persönliche Informationen, die Sie uns mitteilen</strong></p>
                        <p><em><b>Zusammenfassung:</b> Wir sammeln persönliche Informationen, die Sie uns zur Verfügung stellen.</em></p>
                        <p>Wir erfassen personenbezogene Daten, die Sie uns freiwillig zur Verfügung stellen, wenn Sie an Informationen über uns oder unsere Produkte und Dienstleistungen interessiert sind, wenn Sie an Aktivitäten auf der Webseite teilnehmen oder wenn Sie uns anderweitig kontaktieren.</p>
                        <p>Die von uns erfassten personenbezogenen Daten hängen vom Kontext Ihrer Interaktion mit uns und der Webseite, den von Ihnen getroffenen Entscheidungen und den von Ihnen verwendeten Produkten und Funktionen ab. Zu den personenbezogenen Daten, die wir erfassen, können die folgenden gehören:</p>
                        <p><b>Von Ihnen bereitgestellte persönliche Informationen.</b> Wir erfassen Alter, Geschlecht, Region, Land und andere ähnliche Informationen.</p>
                        <p>Alle personenbezogenen Daten, die Sie uns zur Verfügung stellen, müssen wahrheitsgemäß, vollständig und genau sein und Sie müssen uns über alle Änderungen dieser personenbezogenen Daten informieren.</p>
                        <p class="fs-17 text-black mt-4"><strong>Automatisch erfasste Informationen</strong></p>
                        <p><em><b>Zusammenfassung:</b> Einige Informationen - wie z. B. Ihre Internetprotokoll-Adresse (IP-Adresse) und/oder Browser- und Gerätemerkmale - werden automatisch erfasst, wenn Sie unsere Webseite besuchen.</em></p>
                        <p>Wir erfassen automatisch bestimmte Informationen, wenn Sie die Webseite besuchen, nutzen oder auf ihr navigieren. Diese Informationen geben keinen Aufschluss über Ihre Identität (wie z. B. Ihren Namen oder Ihre Kontaktdaten), können aber Geräte- und Nutzungsdaten enthalten, wie z. B. Ihre IP-Adresse, Browser- und Geräteeigenschaften, Betriebssystem, Spracheinstellungen, verweisende URLs, Gerätename, Land, Standort, Informationen darüber, wie und wann Sie unsere Webseite nutzen, und andere technische Informationen. Diese Informationen werden in erster Linie benötigt, um die Sicherheit und den Betrieb unserer Webseite aufrechtzuerhalten sowie für unsere internen Analyse- und Berichtszwecke.</p>
                        <p>Wie viele andere Unternehmen sammeln auch wir Informationen durch Cookies und ähnliche Technologien.</p>
                        <p>Die von uns gesammelten Informationen umfassen:
                            <ul>
                                <li><em>Protokoll- und Nutzungsdaten.</em> Protokoll- und Nutzungsdaten sind dienstbezogene, diagnostische, Nutzungs- und Leistungsinformationen, die unsere Server automatisch erfassen, wenn Sie auf unsere Webseite zugreifen oder sie nutzen, und die wir in Protokolldateien aufzeichnen. Je nachdem, wie Sie mit uns interagieren, können diese Protokolldaten Ihre IP-Adresse, Geräteinformationen, Browsertyp und -einstellungen sowie Informationen über Ihre Aktivitäten auf der Webseite (wie z. B. die mit Ihrer Nutzung verbundenen Datums-/Zeitstempel, aufgerufene Seiten und Dateien, Suchvorgänge und andere von Ihnen durchgeführte Aktionen, wie z. B. die von Ihnen genutzten Funktionen), Informationen über Geräteereignisse (wie z. B. Systemaktivitäten, Fehlerberichte (manchmal als "Crash Dumps" bezeichnet) und Hardware-Einstellungen) enthalten.</li>
                                <li class="mt-3"><em>Standortdaten.</em> Wir erheben Standortdaten wie z. B. Informationen über den Standort Ihres Geräts, die entweder genau oder ungenau sein können. Wie viele Informationen wir erfassen, hängt von der Art und den Einstellungen des Geräts ab, das Sie für den Zugriff auf die Webseite verwenden. So können wir beispielsweise GPS und andere Technologien verwenden, um Geolokalisierungsdaten zu erfassen, die uns Ihren aktuellen Standort mitteilen (basierend auf Ihrer IP-Adresse). Sie können der Erfassung dieser Daten widersprechen, indem Sie entweder den Zugriff auf die Daten verweigern oder die Standort-Einstellung auf Ihrem Gerät deaktivieren. Beachten Sie jedoch, dass Sie in diesem Fall möglicherweise bestimmte Aspekte der Dienste nicht nutzen können.</li>
                            </ul>
                        </p>`,
        "infouse":`<h5><strong>2. WIE VERWENDEN WIR IHRE INFORMATIONEN?</strong></h5>
                    <p class="mt-4"><em><b>Zusammenfassung:</b> Wir verarbeiten Ihre Daten für Zwecke, die auf legitimen Geschäftsinteressen, der Erfüllung unseres Vertrags mit Ihnen, der Einhaltung unserer gesetzlichen Verpflichtungen und/oder Ihrer Zustimmung beruhen.</em></p>
                    <p>Wir verwenden personenbezogene Daten, die wir über unsere Webseite gesammelt haben, für eine Reihe von unten beschriebenen Geschäftszwecken. Wir verarbeiten Ihre personenbezogenen Daten zu diesen Zwecken unter Berufung auf unsere legitimen Geschäftsinteressen, um einen Vertrag mit Ihnen abzuschließen oder zu erfüllen, mit Ihrer Zustimmung und/oder zur Erfüllung unserer gesetzlichen Verpflichtungen. Wir geben die spezifischen Verarbeitungsgründe, auf die wir uns stützen, neben jedem unten aufgeführten Zweck an.</p>
                    <p>Wir verwenden die Informationen, die wir sammeln oder erhalten:
                    <ul>
                        <li><strong>Zur Erleichterung der Kontoerstellung und des Anmeldevorgangs.</strong> Wenn Sie sich dafür entscheiden, Ihr Konto bei uns mit einem Konto eines Drittanbieters zu verknüpfen (z. B. mit Ihrem Google- oder Facebook-Konto), verwenden wir die Informationen, die Sie uns erlaubt haben, von diesen Drittanbietern zu sammeln, um die Erstellung des Kontos und den Anmeldevorgang für die Erfüllung des Vertrags zu erleichtern.</li>
                        <li class="mt-3"><strong>Zur Veröffentlichung von Erfahrungsberichten.</strong> Wir veröffentlichen auf unserer Webseite Erfahrungsberichte, die persönliche Informationen enthalten können. Bevor wir einen Erfahrungsbericht veröffentlichen, holen wir Ihr Einverständnis zur Verwendung Ihres Namens und des Inhalts des Erfahrungsberichts ein. Wenn Sie Ihren Erfahrungsbericht aktualisieren oder löschen möchten, kontaktieren Sie uns bitte unter m-mohaisen@neiu.edu und geben Sie unbedingt Ihren Namen, den Ort des Erfahrungsberichts und Ihre Kontaktdaten an. </li>
                        <li class="mt-3"><strong>Zum Einholen von Feedback.</strong> Wir können Ihre Daten verwenden, um Sie um Feedback zu bitten und Sie über Ihre Nutzung unserer Webseite zu informieren.</li>
                        <li class="mt-3"><strong>Um die Kommunikation zwischen Nutzer*innen zu ermöglichen.</strong> Wir können Ihre Daten verwenden, um die Kommunikation zwischen den Nutzer*innen zu ermöglichen, sofern der/die jeweilige Nutzer/Nutzerin zustimmt.</li>
                        <li class="mt-3"><strong>Zur Verwaltung von Benutzerkonten.</strong> Wir können Ihre Daten für die Verwaltung Ihres Kontos und die Aufrechterhaltung seiner Funktionsfähigkeit verwenden.</li>
                        <li class="mt-3">Für Forschungszwecke.</li>
                        <li class="mt-3">Für Sicherheitsanalysen.</li>
                    </ul>`,
        "infoshare": `<h5><strong>3. WERDEN IHRE INFORMATIONEN AN DRITTE WEITERGEGEBEN?</strong></h5>
                    <p class="mt-4"><em><b>Zusammenfassung:</b> Wir geben Informationen nur mit Ihrem Einverständnis weiter, um Gesetze einzuhalten, um Ihnen Dienstleistungen zu erbringen, um Ihre Rechte zu schützen oder um geschäftliche Verpflichtungen zu erfüllen.</em></p>
                    <p>Wir können Ihre bei uns gespeicherten Daten auf der Grundlage der folgenden Rechtsgrundlage verarbeiten oder weitergeben:
                        <ul>
                            <li><strong>Einverständnis:</strong> Wir können Ihre Daten verarbeiten, wenn Sie uns Ihre ausdrückliche Zustimmung zur Verwendung Ihrer personenbezogenen Daten für einen bestimmten Zweck erteilt haben.</li>
                            <li class="mt-3"><strong>Berechtigtes Interesse:</strong> Wir können Ihre Daten verarbeiten, wenn dies zur Wahrung unserer berechtigten Geschäftsinteressen erforderlich ist.</li>
                            <li class="mt-3"><strong>Erfüllung eines Vertrags:</strong> Wenn wir einen Vertrag mit Ihnen geschlossen haben, können wir Ihre persönlichen Daten verarbeiten, um die Bedingungen unseres Vertrags zu erfüllen.</li>
                            <li class="mt-3"><strong>Gesetzliche Verpflichtungen:</strong> Wir können Ihre Daten offenlegen, wenn wir gesetzlich dazu verpflichtet sind, um geltendem Recht, behördlichen Aufforderungen, einem Gerichtsverfahren, einem Gerichtsbeschluss oder einem rechtlichen Verfahren nachzukommen, wie z. B. als Reaktion auf einen Gerichtsbeschluss oder eine Vorladung (einschließlich als Reaktion auf öffentliche Behörden zur Erfüllung nationaler Sicherheits- oder Strafverfolgungsanforderungen).</li>
                            <li class="mt-3"><strong>Wichtige Interessen:</strong> Wir können Ihre Daten offenlegen, wenn wir der Meinung sind, dass dies notwendig ist, um potenzielle Verstöße gegen unsere Richtlinien, Betrugsverdacht, Situationen, die eine potenzielle Bedrohung für die Sicherheit von Personen darstellen, und illegale Aktivitäten zu untersuchen, zu verhindern oder Maßnahmen zu ergreifen, oder als Beweismittel in Rechtsstreitigkeiten, an denen wir beteiligt sind.</li>
                        </ul>
                    </p>
                    <p>Insbesondere in den folgenden Fällen kann es erforderlich sein, dass wir Ihre Daten verarbeiten oder Ihre persönlichen Informationen weitergeben:
                        <ul>
                            <li><strong>Unternehmensübertragungen.</strong> Wir können Ihre Daten in Verbindung mit oder während der Verhandlungen über eine Fusion, den Verkauf von Unternehmensvermögen, eine Finanzierung oder die Übernahme unseres gesamten oder eines Teils unseres Unternehmens durch ein anderes Unternehmen weitergeben oder übertragen.</li>
                            <li class="mt-3"><strong>Geschäftspartner.</strong> Wir können Ihre Daten an unsere Geschäftspartner weitergeben, um Ihnen bestimmte Produkte, Dienstleistungen oder Werbeaktionen anzubieten.</li>
                        </ul>
                    </p>`,
        "cookies":`<h5><strong>4. VERWENDEN WIR COOKIES UND ANDERE TRACKING-TECHNOLOGIEN?</strong></h5>
                    <p class="mt-4"><em><b>Zusammenfassung:</b> Wir können Cookies und andere Tracking-Technologien verwenden, um Ihre Daten zu erfassen und zu speichern.</em></p>
                    <p>Wir können Cookies und ähnliche Tracking-Technologien (wie Web-Beacons und Pixel) verwenden, um Informationen abzurufen oder zu speichern. Spezifische Informationen darüber, wie wir solche Technologien verwenden und wie Sie bestimmte Cookies ablehnen können, finden Sie in unserem Cookie-Hinweis.</p>`,
        "inforetain":`<h5><strong>5. WIE LANGE BEWAHREN WIR IHRE DATEN AUF?</strong></h5>
                    <p class="mt-4"><em><b>Zusammenfassung:</b> Wir bewahren Ihre Daten so lange auf, wie es für die Erfüllung der in dieser Datenschutzerklärung genannten Zwecke erforderlich ist, es sei denn, dies ist gesetzlich vorgeschrieben.</em></p>
                    <p>Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die in dieser Datenschutzerklärung dargelegten Zwecke erforderlich ist, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben oder zulässig (z. B. aus steuerlichen, buchhalterischen oder anderen rechtlichen Gründen). Für keinen der in dieser Erklärung genannten Zwecke müssen wir Ihre personenbezogenen Daten länger als 2 Jahre aufbewahren.</p>
                    <p>Wenn wir keine weitere legitime geschäftliche Notwendigkeit haben, Ihre personenbezogenen Daten zu verarbeiten, werden wir diese Daten entweder löschen oder anonymisieren, oder, falls dies nicht möglich ist (z. B. weil Ihre personenbezogenen Daten in Sicherungsarchiven gespeichert wurden), werden wir Ihre personenbezogenen Daten sicher aufbewahren und von jeder weiteren Verarbeitung isolieren, bis eine Löschung möglich ist.</p>`,
        "infosafe":`<h5><strong>6. WIE SCHÜTZEN WIR IHRE DATEN?</strong></h5>
                    <p class="mt-4"><em><b>Zusammenfassung:</b> Wir sind bestrebt, Ihre persönlichen Daten durch ein System von organisatorischen und technischen Sicherheitsmaßnahmen zu schützen.</em></p>
                    <p>Wir haben angemessene technische und organisatorische Sicherheitsmaßnahmen ergriffen, um die Sicherheit der von uns verarbeiteten personenbezogenen Daten zu schützen. Trotz unserer Sicherheitsvorkehrungen und Bemühungen, Ihre Daten zu schützen, kann jedoch keine elektronische Übertragung über das Internet oder Informationsspeicherungstechnologie zu 100 % sicher sein, so dass wir nicht versprechen oder garantieren können, dass Hacker*innen, Cyberkriminelle oder andere unbefugte Dritte nicht in der Lage sein werden, unsere Sicherheit zu überwinden und Ihre Daten unrechtmäßig zu sammeln, darauf zuzugreifen, zu stehlen oder zu ändern. Obwohl wir unser Bestes tun, um Ihre persönlichen Daten zu schützen, erfolgt die Übertragung von persönlichen Daten zu und von unserer Webseite auf Ihr eigenes Risiko. Sie sollten nur innerhalb einer sicheren Umgebung auf die Webseite zugreifen.</p>`,
        "privacyrights":`<h5><strong>7. WELCHE RECHTE HABEN SIE IN BEZUG AUF IHRE PRIVATSPHÄRE?</strong></h5>
                    <p class="mt-4"><em><b>Zusammenfassung:</b> In einigen Regionen, z. B. im Europäischen Wirtschaftsraum (EWR) und im Vereinigten Königreich (UK), haben Sie Rechte, die Ihnen mehr Zugang zu und Kontrolle über Ihre persönlichen Daten ermöglichen. Sie können Ihr Konto jederzeit überprüfen, ändern oder kündigen.</em></p>
                    <p>In einigen Regionen (wie dem EWR und dem Vereinigten Königreich) haben Sie nach den geltenden Datenschutzgesetzen bestimmte Rechte. Dazu gehören u. a. das Recht, (i) Zugang zu Ihren personenbezogenen Daten zu verlangen und eine Kopie davon zu erhalten, (ii) die Berichtigung oder Löschung zu verlangen, (iii) die Verarbeitung Ihrer personenbezogenen Daten einzuschränken und (iv) gegebenenfalls die Datenübertragbarkeit. Unter bestimmten Umständen haben Sie auch das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen. Um einen solchen Antrag zu stellen, verwenden Sie bitte die unten angegebenen Kontaktinformationen. Wir werden jeden Antrag in Übereinstimmung mit den geltenden Datenschutzgesetzen prüfen und bearbeiten.</p>
                    <p>Wenn wir uns auf Ihre Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten stützen, haben Sie das Recht, Ihre Einwilligung jederzeit zu widerrufen. Bitte beachten Sie jedoch, dass dies weder die Rechtmäßigkeit der Verarbeitung vor dem Widerruf berührt, noch die Verarbeitung Ihrer personenbezogenen Daten, die auf der Grundlage anderer rechtmäßiger Verarbeitungsgründe als der Einwilligung erfolgt.</p>
                    <p>Wenn Sie Ihren Wohnsitz im EWR oder im Vereinigten Königreich haben und der Meinung sind, dass wir Ihre personenbezogenen Daten unrechtmäßig verarbeiten, haben Sie auch das Recht, sich bei Ihrer örtlichen Datenschutzaufsichtsbehörde zu beschweren. Deren Kontaktdaten finden Sie <a target="_blank" rel="noopener noreferrer" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.">hier</a>.</p>
                    <p>Wenn Sie in der Schweiz wohnhaft sind, finden Sie <a target="_blank" rel="noopener noreferrer" href="https://www.edoeb.admin.ch/edoeb/en/home.html">hier</a> die Kontaktdaten der Datenschutzbehörden.</p>
                    <p><strong>Cookies und ähnliche Technologien:</strong> Die meisten Webbrowser sind so eingestellt, dass sie Cookies standardmäßig akzeptieren. Wenn Sie es vorziehen, können Sie Ihren Browser in der Regel so einstellen, dass er Cookies entfernt oder ablehnt. Wenn Sie sich dafür entscheiden, Cookies zu entfernen oder abzulehnen, kann dies bestimmte Funktionen oder Dienste unserer Webseite beeinträchtigen. Um interessenbezogene Werbung durch Werbetreibende auf unserer Webseite abzulehnen, besuchen Sie <a target="_blank" rel="noopener noreferrer" href="http://www.aboutads.info/choices/">diese Webseite</a>.</p>`,
        "DNT":`<h5><strong>8. STEUERELEMENTE FÜR "DO-NOT-TRACK"-FUNKTIONEN</strong></h5>
                <p class="mt-4">Die meisten Webbrowser und einige mobile Betriebssysteme und Anwendungen enthalten eine "Do-Not-Track" -Funktion oder -Einstellung (DNT), die Sie aktivieren können, um zu signalisieren, dass Sie nicht möchten, dass Daten über Ihre Online-Browsing-Aktivitäten überwacht und gesammelt werden. Zum gegenwärtigen Zeitpunkt ist noch kein einheitlicher Technologiestandard für die Erkennung und Umsetzung von DNT-Signalen festgelegt worden. Daher reagieren wir derzeit nicht auf DNT-Browsersignale oder andere Mechanismen, die automatisch mitteilen, dass Sie nicht online verfolgt werden möchten. Sollte ein Standard für das Online-Tracking verabschiedet werden, den wir in Zukunft befolgen müssen, werden wir Sie in einer überarbeiteten Version dieses Datenschutzhinweises über diese Praxis informieren.</p>`,
        "caresidents":`<h5><strong>9. HABEN IN KALIFORNIEN ANSÄSSIGE PERSONEN BESONDERE DATENSCHUTZRECHTE?</strong></h5>
                        <p class="mt-4"><em><b>Zusammenfassung:</b> Ja, wenn Sie in Kalifornien wohnhaft sind, haben Sie bestimmte Rechte in Bezug auf den Zugang zu Ihren persönlichen Daten.</em></p>
                        <p>Gemäß California Civil Code Section 1798.83, auch bekannt als "Shine The Light"-Gesetz, können unsere Nutzer*innen, die in Kalifornien ansässig sind, einmal jährlich von uns kostenlos Informationen über die Kategorien personenbezogener Daten (falls vorhanden), die wir zu Direktmarketingzwecken an Dritte weitergegeben haben, sowie die Namen und Adressen aller Dritten, mit denen wir im unmittelbar vorangegangenen Kalenderjahr personenbezogene Daten ausgetauscht haben, anfordern und erhalten. Wenn Sie in Kalifornien ansässig sind und einen solchen Antrag stellen möchten, reichen Sie ihn bitte schriftlich bei uns ein, indem Sie die unten angegebenen Kontaktinformationen verwenden.</p>
                        <p>Wenn Sie unter 18 Jahre alt sind, Ihren Wohnsitz in Kalifornien haben und über ein registriertes Konto auf der Webseite verfügen, haben Sie das Recht, die Entfernung unerwünschter Daten zu verlangen, die Sie öffentlich auf der Webseite veröffentlichen. Um die Entfernung solcher Daten zu beantragen, wenden Sie sich bitte an die unten angegebenen Kontaktinformationen und geben Sie die mit Ihrem Konto verbundene E-Mail-Adresse sowie eine Erklärung an, dass Sie in Kalifornien wohnen. Wir werden dafür sorgen, dass die Daten nicht öffentlich auf der Webseite angezeigt werden. Bitte beachten Sie jedoch, dass die Daten möglicherweise nicht vollständig oder umfassend aus allen unseren Systemen (z. B. Backups usw.) entfernt werden.</p>
                        <p class="fs-17 text-black mt-4"><strong>CCPA-Datenschutzhinweis</strong></p>
                        <p>Das kalifornische Gesetzbuch definiert einen "Einwohner" wie folgt:</p>
                        <p>
                            <ul class="no-bullets">
                                <li>(1) jede Person, die sich nicht nur vorübergehend im Bundesstaat Kalifornien aufhält und</li>
                                <li>(2) jede Person mit Wohnsitz im Staat Kalifornien, die sich vorübergehend außerhalb des Staates Kalifornien aufhält</li>
                            </ul>
                        </p>
                        <p>Alle anderen Personen werden als "Nicht-Einwohner" definiert.</p>
                        <p>Wenn diese Definition von "Einwohner" auf Sie zutrifft, müssen wir bestimmte Rechte und Pflichten in Bezug auf Ihre personenbezogenen Daten einhalten.</p>
                        <p><strong>Welche Kategorien von personenbezogenen Daten werden von uns erfasst?</strong></p>
                        <p>Wir haben in den vergangenen zwölf (12) Monaten die folgenden Kategorien personenbezogener Daten erhoben:</p>
                        <div class="w-100 overflow-y-scroll">
                            <table class="table table-bordered">
                                <tr>
                                    <th></th>
                                    <th>Kategorie</th>
                                    <th>Beispiele</th>
                                    <th>Erhoben</th>
                                </tr>
                                <tr>
                                    <td>A.</td>
                                    <td> Identifikatoren</td>
                                    <td>Kontaktangaben wie richtiger Name, Aliasname, Postanschrift, Telefon- oder Handynummer, eindeutige Personenkennung, Online-Kennung, Internetprotokolladresse, E-Mail-Adresse und Kontoname</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> B.</td>
                                    <td> Persönliche Datenkategorien, die im kalifornischen Gesetz über Kundendaten aufgeführt sind</td>
                                    <td>Name, Kontaktinformationen, Ausbildung, Beschäftigung, Beschäftigungsgeschichte und finanzielle Informationen</td>
                                    <td>JA</td>
                                </tr>
                                <tr>
                                    <td> C.</td>
                                    <td> Geschützte Klassifizierungsmerkmale nach kalifornischem oder bundesstaatlichem Recht</td>
                                    <td>Geschlecht und Geburtsdatum</td>
                                    <td>JA</td>
                                </tr>
                                <tr>
                                    <td> D.</td>
                                    <td> Kommerzielle Informationen</td>
                                    <td>Transaktionsinformationen, Kaufhistorie, finanzielle Details und Zahlungsinformationen</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> E.</td>
                                    <td> Biometrische Informationen</td>
                                    <td>Fingerabdrücke und Stimmabdrücke</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> F.</td>
                                    <td>Internet- oder andere ähnliche Netzaktivitäten</td>
                                    <td>Browsing-Verlauf, Suchverlauf, Online-Verhalten, Interessendaten und Interaktionen mit unseren und anderen Webseiten, Anwendungen, Systemen und Werbung</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> G.</td>
                                    <td>Geostandort-Daten</td>
                                    <td>Standort des Geräts</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> H.</td>
                                    <td>Akustische, elektronische, visuelle, thermische, olfaktorische oder ähnliche Informationen</td>
                                    <td>Bilder und Audio-, Video- oder Gesprächsaufzeichnungen im Zusammenhang mit unseren geschäftlichen Aktivitäten</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> I.</td>
                                    <td>Berufliche oder beschäftigungsbezogene Informationen</td>
                                    <td>Geschäftliche Kontaktdaten, um Ihnen unsere Dienstleistungen auf geschäftlicher Ebene anbieten zu können, Berufsbezeichnung sowie beruflicher Werdegang und berufliche Qualifikationen, wenn Sie sich bei uns um eine Stelle bewerben</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> J.</td>
                                    <td>Informationen zur Ausbildung</td>
                                    <td>Studentenunterlagen und Verzeichnisinformationen</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> K.</td>
                                    <td>Rückschlüsse aus anderen persönlichen Informationen</td>
                                    <td>Rückschlüsse, die aus den oben aufgeführten gesammelten persönlichen Daten gezogen werden, um ein Profil oder eine Zusammenfassung zu erstellen, z. B. über die Vorlieben und Eigenschaften einer Person</td>
                                    <td>NEIN</td>
                                </tr>
                                <tr>
                                    <td> L.</td>
                                    <td>Testergebnisse</td>
                                    <td>Gesamtwertung der einzelnen Cyberwareness-Testsitzungen</td>
                                    <td>JA</td>
                                </tr>
                            </table>
                        </div>
                        <p>Wir können auch andere personenbezogene Daten außerhalb dieser Kategorien erfassen, wenn Sie persönlich, online, telefonisch oder per Post mit uns in Kontakt treten:
                            <ul>
                                <li>Hilfe über unsere Kundensupport-Kanäle erhalten,</li>
                                <li>Teilnahme an Kundenumfragen oder Wettbewerben und</li>
                                <li>Erleichterung bei der Erbringung unserer Dienstleistungen und zur Beantwortung Ihrer Anfragen..</li>
                            </ul>
                        </p>
                        <div>
                            <p><strong>Wie verwenden wir Ihre persönlichen Daten und geben sie weiter?</strong></p>
                            <p>Weitere Informationen über unsere Praktiken der Datenerfassung und -weitergabe finden Sie in diesem Datenschutzhinweis.</p>
                            <p>Sie können uns per E-Mail unter <b>m-mohaisen@neiu.edu</b> oder über die Kontaktdaten am Ende dieses Dokuments kontaktieren.</p>
                            <p>Wenn Sie eine(n) Bevollmächtigte(n) einsetzen, um Ihr Recht auf Widerruf auszuüben, können wir einen Antrag ablehnen, wenn der/die Bevollmächtigte nicht nachweist, dass er/sie gültig bevollmächtigt wurde, in Ihrem Namen zu handeln.</p>
                        </div>
                        <div>
                            <p><strong>Werden Ihre Daten an andere Personen weitergegeben?</strong></p>
                            <p>Wir können Ihre persönlichen Daten gemäß einem schriftlichen Vertrag zwischen uns und jedem Dienstleister an unsere Dienstleister weitergeben. Jeder Dienstleister ist ein gewinnorientiertes Unternehmen, das die Daten in unserem Auftrag verarbeitet.</p>
                            <p>Wir können Ihre persönlichen Daten für unsere eigenen Geschäftszwecke verwenden, z. B. für interne Forschungsarbeiten zur technologischen Entwicklung und Demonstration. Dies wird nicht als "Verkauf" Ihrer personenbezogenen Daten angesehen.</p>
                            <p>Cyberwareness hat in den letzten 12 Monaten keine persönlichen Daten an Dritte für einen geschäftlichen oder kommerziellen Zweck weitergegeben oder verkauft. Cyberwareness wird auch in Zukunft keine personenbezogenen Daten von Besucher*innen, Nutzer*innen und anderen Verbraucher*innen der Webseite verkaufen.</p>
                        </div>
                        <div>
                            <p><strong>Ihre Rechte in Bezug auf Ihre personenbezogenen Daten</strong></p>
                            <p><u>Recht auf Löschung der Daten - Antrag auf Löschung</u></p>
                            <p>Sie können die Löschung Ihrer personenbezogenen Daten verlangen. Wenn Sie uns um die Löschung Ihrer personenbezogenen Daten bitten, werden wir Ihrer Bitte nachkommen und Ihre personenbezogenen Daten löschen, vorbehaltlich bestimmter, gesetzlich vorgesehener Ausnahmen, wie z. B. (aber nicht beschränkt auf) die Ausübung des Rechts auf freie Meinungsäußerung durch einen anderen Verbraucher/eine andere Verbraucherin, unsere Anforderungen aufgrund einer gesetzlichen Verpflichtung oder eine Verarbeitung, die zum Schutz vor illegalen Aktivitäten erforderlich ist.</p>
                            <p><u>Recht auf Information - Antrag auf Auskunft</u></p>
                            <p>Je nach den Umständen haben Sie ein Recht auf folgende Informationen:
                                <ul>
                                    <li>ob wir Ihre persönlichen Daten sammeln und verwenden</li>
                                    <li>die Kategorien der von uns erfassten personenbezogenen Daten</li>
                                    <li>die Zwecke, für die die erfassten personenbezogenen Daten verwendet werden</li>
                                    <li>ob wir Ihre persönlichen Daten an Dritte verkaufen</li>
                                    <li>die Kategorien personenbezogener Daten, die wir für einen Geschäftszweck verkauft oder offengelegt haben</li>
                                    <li>die Kategorien von Dritten, an die die persönlichen Daten verkauft oder zu Geschäftszwecken weitergegeben wurden</li>
                                    <li>der geschäftliche oder kommerzielle Zweck der Erhebung oder des Verkaufs personenbezogener Daten</li>
                                </ul>
                            </p>
                            <p>In Übereinstimmung mit geltendem Recht sind wir nicht verpflichtet, Verbraucherdaten, die auf Anfrage eines Verbrauchers/einer Verbraucherin de-identifiziert wurden, zur Verfügung zu stellen oder zu löschen oder einzelne Daten erneut zu identifizieren, um eine Verbraucheranfrage zu verifizieren.</p>
                            <p><u>Recht auf Nicht-Diskriminierung bei der Ausübung der Datenschutzrechte eines Verbrauchers/einer Verbraucherin</u></p>
                            <p>Wir werden Sie nicht diskriminieren, wenn Sie Ihre Datenschutzrechte wahrnehmen.</p>
                            <p><u>Verifizierungsprozess</u></p>
                            <p>Nach Erhalt Ihrer Anfrage müssen wir Ihre Identität überprüfen, um festzustellen, ob Sie die gleiche Person sind, über die wir die Informationen in unserem System haben. Diese Überprüfung erfordert, dass wir Sie um Informationen bitten, damit wir sie mit den Informationen abgleichen können, die Sie uns zuvor gegeben haben. Je nach Art der von Ihnen eingereichten Anfrage bitten wir Sie beispielsweise um die Angabe bestimmter Informationen, damit wir die von Ihnen bereitgestellten Informationen mit den bereits bei uns gespeicherten Informationen abgleichen können, oder wir kontaktieren Sie über eine Kommunikationsmethode (z. B. Telefon oder E-Mail), die Sie uns bereits mitgeteilt haben. Je nach den Umständen können wir auch andere Überprüfungsmethoden anwenden.</p>
                            <p>Wir verwenden die in Ihrer Anfrage angegebenen personenbezogenen Daten nur, um Ihre Identität oder Ihre Berechtigung zur Stellung der Anfrage zu überprüfen. Soweit möglich, werden wir es vermeiden, zusätzliche Informationen von Ihnen zum Zwecke der Überprüfung anzufordern. Wenn wir jedoch Ihre Identität anhand der von uns bereits gespeicherten Informationen nicht überprüfen können, können wir Sie um zusätzliche Informationen bitten, um Ihre Identität zu überprüfen und um Sicherheits- oder Betrugsvorbeugungsmaßnahmen zu treffen. Wir werden solche zusätzlich bereitgestellten Informationen löschen, sobald wir die Überprüfung Ihrer Identität abgeschlossen haben.</p>
                            <p><u>Andere Rechte zum Schutz der Privatsphäre</u></p>
                            <p>
                                <ul>
                                    <li>Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.</li>
                                    <li>Sie können die Berichtigung Ihrer personenbezogenen Daten verlangen, wenn diese unrichtig oder nicht mehr relevant sind, oder eine Einschränkung der Verarbeitung der Daten beantragen.</li>
                                    <li>Sie können eine(n) Bevollmächtigte(n) benennen, der/die in Ihrem Namen einen Antrag gemäß dem CCPA stellt. Wir können einen Antrag eines/einer Bevollmächtigten ablehnen, der/die nicht nachweist, dass er/sie berechtigt ist, in Ihrem Namen gemäß dem CCPA zu handeln.</li>
                                    <li>Sie können beantragen, dass Ihre personenbezogenen Daten künftig nicht mehr an Dritte verkauft werden. Nach Erhalt einer Opt-out-Anfrage werden wir der Anfrage so schnell wie möglich nachkommen, jedoch nicht später als 15 Tage ab dem Datum der Einreichung der Anfrage.</li>
                                </ul>
                            </p>
                            <p>Um diese Rechte auszuüben, können Sie uns per E-Mail unter m-mohaisen@neiu.edu oder über die Kontaktdaten am Ende dieses Dokuments kontaktieren. Wenn Sie eine Beschwerde darüber haben, wie wir mit Ihren Daten umgehen, würden wir uns freuen, von Ihnen zu hören.</p>
                        </div>`,
        "policyupdates":`<h5><strong>10. WERDEN WIR DIESE ERKLÄRUNG AKTUALISIEREN?</strong></h5>
                        <p class="mt-4"><em><b>Zusammenfassung:</b> Ja, wir werden diese Erklärung bei Bedarf aktualisieren, um die einschlägigen Gesetze einzuhalten.</em></p>
                        <p>Wir können diesen Datenschutzhinweis von Zeit zu Zeit aktualisieren. Die aktualisierte Version wird durch ein aktualisiertes Datum gekennzeichnet, und die aktualisierte Version wird wirksam, sobald sie zugänglich ist. Wenn wir wesentliche Änderungen an diesem Datenschutzhinweis vornehmen, können wir Sie entweder durch einen gut sichtbaren Aushang über diese Änderungen informieren oder Ihnen direkt eine Benachrichtigung zusenden. Wir empfehlen Ihnen, diesen Datenschutzhinweis regelmäßig zu lesen, um sich darüber zu informieren, wie wir Ihre Daten schützen.</p>`,
        "policycontact":`<h5><strong>11. WIE KÖNNEN SIE UNS BEZÜGLICH DIESER ERKLÄRUNG KONTAKTIEREN?</strong></h5>
                        <p class="mt-4">Wenn Sie Fragen oder Anmerkungen zu dieser Mitteilung haben, können Sie uns eine E-Mail an <b>m-mohaisen@neiu.edu</b> schicken, uns unter der Nummer <b>+1 (773) 442-4714</b> anrufen oder uns per Post kontaktieren:</p>
                        <p>
                        Cyberwareness <br />
                        5500 N. St. Louis Avenue<br />
                        Chicago , IL 60625<br />
                        United States<br />
                        </p>`,
        "request":`<h5><strong>12. WIE KÖNNEN SIE DIE VON UNS ERHOBENEN DATEN EINSEHEN, AKTUALISIEREN ODER LÖSCHEN?</strong></h5>
                    <p class="mt-4">Je nach den in Ihrem Land geltenden Gesetzen haben Sie unter Umständen das Recht, Einsicht in die von uns erfassten personenbezogenen Daten zu verlangen, diese Daten zu ändern oder zu löschen. Um die Überprüfung, Aktualisierung oder Löschung Ihrer personenbezogenen Daten zu beantragen, reichen Sie bitte ein Antragsformular ein, indem Sie <a href="https://app.termly.io/notify/ccec2eb0-09fa-4a5c-94d6-402662768214" rel="noopener noreferrer" target="_blank">hier</a> klicken.</p>
                    <p>Diese Datenschutzerklärung wurde erstellt unter Verwendung von <a target="_blank" rel="noopener noreferrer" href="https://termly.io/products/privacy-policy-generator">Termly's Privacy Policy Generator</a>.</p>`,
    }
};