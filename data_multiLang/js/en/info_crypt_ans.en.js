var json_info_en = {
    title:"Social Engineering Awareness",
    description: "Information",
    showProgressBar: "top",
    firstPageIsStarted: true,
    startSurveyText: " ",
    pagePrevText: " ",
    pageNextText: " ",
    completeText:" ",
    requiredText: "",
    showQuestionNumbers:'off',
    pages:[
        {
            name:'start',
            questions: [
                {
                    type: "html",
                    html: `<h3 class="text-center mt-4 mt-lg-5"> Social Engineering Terms </h3>
                            <div class="row mt-3 pt-3 bg-grey border-top border-bottom">
                                <p class="text-center"> The following pages will <b>inform</b> you about various social engineering attacks. Questions will help you to check your knowledge. Please click the button on the <b>bottom right</b> to start.</p> 
                                <p class="text-center">If you think you already have sufficient knowledge about social engineering, you can <a href='test.html'><b>skip this section</b></a> and go directly to the test. It is possible to <b>return</b> after the test.</p> 
                            </div>`
                }
            ]
        },{
            name: "info_se_1",
            title:"Social Engineering",
            elements: [
                {
                    type: "html",
                    name: "se1",
                    html: `<div class="clearfix">
                                <img src="img/info/se1.png" class="col-sm-6 float-sm-end mt-2 mb-3 ms-sm-3 mw-100 rounded" alt="Hacker">
                                <h3 class='mt-3'> What is Social Engineering? </h3>
                                <p class='mt-3'> <i>Social Engineering</i> is the act of <b>manipulating</b> unsuspecting people through the use of deception in order to convince them to <b>reveal personal information</b> or <b>perform actions</b>.</p>
                                <p>An attacker is able to blindside a victim through the <b>exploitation of human characteristics</b> such as fear, trust, or ignorance. Ultimately, the purpose of Social Engineering is to obtain confidential information to <b>achieve a harmful objective</b> using <b>physical</b> or <b>nonphysical tactics</b>.</p>
                            </div>`
                }
            ]
        },{
            name: "info_se_2",
            title:"Social Engineering",
            elements: [
                {
                    type: "html",
                    name: "se2",
                    html:`<div class="clearfix">
                                <a target="_blank" rel="noopener noreferrer" href="https://financesonline.com/cybersecurity-statistics/"><img src="img/info/se2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Most Frequent Cyberattacks Experienced by Companies in the US (2019)"></a>
                                <h3 class='mt-3'> Information on Cyberattacks </h3>
                                <p>As reported by <a target="_blank" rel="noopener noreferrer" href="https://www.natlawreview.com/article/c-suites-cybercrime-damages-expected-to-reach-6-trillion-2021#:~:text=According%20to%20Cybersecurity%20Ventures%2C%20cybercrime,%246%20trillion%20globally%20by%202021.">The National Law Review</a>, <b>the fastest rising crime</b> in the US is cybercrime, with global implications. However, the likelihood of <b>tracking down and prosecuting</b> cybercriminals in the US is only <b>0.05%</b> (<a target="_blank" rel="noopener noreferrer" href="https://www3.weforum.org/docs/WEF_Global_Risk_Report_2020.pdf">World Economic Forum</a>).</p>
                                <p>As of April 2021, <b>102 criminals</b> were placed on the FBI's <a target="_blank" rel="noopener noreferrer" href="https://www.fbi.gov/wanted/cyber"> Cyber's Most Wanted List</a>. Their cyberattacks have cost individuals and companies billions of dollars. </p>
                                <p>A 2019 report from <a target="_blank" rel="noopener noreferrer" href="https://enterprise.verizon.com/resources/reports/2020-data-breach-investigations-report.pdf">Verizon</a> shows that the <b>most targeted industries</b> include the <b>public sector</b>, followed by <b>manufacturing companies</b> and <b>information firms</b>, and <b>healthcare companies</b>. In this context, 86% of data breaches are perpetrated with a <b>financial motivation</b>.</p>
                                <p>In 2020 alone, 17% of organizations faced <b>more than 100,000 security alerts daily</b>. (<a target="_blank" rel="noopener noreferrer" href="https://info.natilik.com/hubfs/Guides/UK-CISO-Benchmark-Report-2020.pdf">Cisco</a>)</p> 
                            </div>`
                }
            ]
        },{
            name: "info_se_3",
            title:"Social Engineering",
            elements: [
                {
                    type: "html",
                    name: "se3",
                    html:`<div class="clearfix">
                                <a target="_blank" rel="noopener noreferrer" href="https://cybersecurityventures.com/hackerpocalypse-cybercrime-report-2016/"><img src="img/info/se3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Global Damage from Cybercrime by 2021"></a>
                                <h3 class='mt-3'> Financial Implications </h3>
                                <p class='mt-3'>Social engineering attacks can cause great <b>financial damage</b>. Not only can private individuals become victims to social engineering attacks, but companies can also be affected.</p>
                                <p>One of the largest data breaches of all time was against <b>Yahoo</b> in 2013, affecting <b>three billion accounts</b>. As of 2020, the <b>Cam4 data breach</b> holds an astonishing record of <b>10.88 billion data records</b>. (<a target="_blank" rel="noopener noreferrer" href="https://www.upguard.com/blog/biggest-data-breaches">UpGuard</a>)</p>
                                <p>According to <a target="_blank" rel="noopener noreferrer" href="https://www.ibm.com/security/digital-assets/cost-data-breach-report/1Cost%20of%20a%20Data%20Breach%20Report%202020.pdf">IBM</a>, such a data breach <b>cost an average of $3.86 million</b> in 2020. The referred IBM report also states that the <b>US ranks first in the world</b> with an average data breach cost of $8.64 million. <b>Compared to</b> the damage caused by <b>natural disasters</b> within a year, the <b>costs and damages caused by cybercrime are significantly higher</b> (<a target="_blank" rel="noopener noreferrer" href="https://www.forbes.com/sites/rajindertumber/2019/01/05/cyber-attacks-igniting-the-next-recession/?sh=5ba3151bdbe4">Forbes</a>).</p>
                                <p>The average firm <b>loses 1.1 percent of its market value</b> and experiences a 3.2 percentage point drop in its year-on-year sales growth rate after experiencing a breach of customers’ personal data. (<a target="_blank" rel="noopener noreferrer" href="https://www.nber.org/digest/jun18/economic-and-financial-consequences-corporate-cyberattacks">NBER</a>)<p>
                            </div>`
                }
            ]
        },{
            name: "info_se_4",
            title:"Social Engineering",
            elements: [
                {
                    type: "html",
                    name: "se4",
                    html:`<div class="clearfix">
                                    <img src="img/info/se4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Cybercriminal">
                                    <h3 class='mt-3'> Notable Social Engineering Attacks </h3>
                                    <p class='mt-3'><b>Toyota Boshoku Corporation</b>, an auto parts supplier, was the victim of a <i>Business Email Compromise</i>  attack in 2019. The money lost amounted to nearly <b>$37 million</b>. Using persuasion, attackers <b>persuaded</b> a <b>finance executive</b> to <b>change</b> a <b>recipient's bank account information</b> in a wire transfer.</p>
                                    <p><b>Ubiquiti Networks</b>, a manufacturer of technology for the networking industry, lost almost <b>47 million dollars</b> in 2015 after a successful <i>phishing</i> attack. Using a <b>compromised company email account</b>, the attackers were able to impersonate employees and request fraudulent payments, which were then made by the accounting department.</p>
                                    <p>After releasing “The Interview” in 2014, <b>Sony Pictures</b> was the victim of a cyber attack by the North Korean government. Thousands of files, including business agreements, financial documents and employees’ information, were stolen through targeted <b>spear phishing</b> attacks. Employees were allegedly lured by <b>fake Apple emails</b>.</p>
                                    <p><b>Spear phishing</b> attacks led to the leak of emails and information from the <b>Democratic Party</b> during the 2016 Presidential Election. <b>Attackers created a fake email impersonating Google</b>, and provided a link to its targeted recipients to change their passwords due to unusual activity. <b>Access to</b> hundreds of <b>emails containing sensitive information</b> about the Clinton campaign were breached, potentially playing a role in the election outcome.</p>
                                    <small>Source: <a target="_blank" rel="noopener noreferrer" href="https://www.cybersecurityeducationguides.org/2017/11/top-5-social-engineering-attacks-of-all-time/">Cybersecurity Education Guides</a> </small>
                                </div>`
                }
            ]
    },{
            name: "question_se_1",
            title:"Questions",
            questions: [
                {
                    type: "html",
                    name: "se0",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/info/q0.png" class="mt-3 col-sm-6 px-0 rounded" alt="Hacker"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q0_1",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Social engineering is the manipulation of people with the aim of obtaining personal information or persuading them to take certain actions.",
                    correctAnswer:"U2FsdGVkX19VRIMXmL4cJC5V2irDi6kIEgWPiH08UFU=",
                    choices:["True","False"],
                },{
                    type: "radiogroup",
                    name: "q0_2",
                    isRequired: true,
                    requiredErrorText:  "Please select an answer.",
                    title:"Only companies are affected by social engineering attacks.",
                      
                    correctAnswer:"U2FsdGVkX1/UkYcgR8hDqM8gejeL1pxu+oDNOin38R0=",
                    choices:["True","False"],
                },{
                    type: "radiogroup",
                    name: "q0_3",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                       
                    title:"Social engineering attacks are often financially motivated.",
                       
                    correctAnswer:"U2FsdGVkX19VRIMXmL4cJC5V2irDi6kIEgWPiH08UFU=",
                    choices:["True","False"],
                }
            ]
        },{
            name: "result0",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res0",
                    html: `<h4 id="result0" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                <img class="col-sm-6 px-0 rounded" id="resImg"/>
                            <div>`,
                }
            ]
        },{
            name: "info_phis_1",
            title:"Phishing",
            elements: [
                {
                    type: "html",
                    name: "phis1",
                    html: `<div class="clearfix">
                                    <img src="img/info/phis1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Phishing">
                                    <h3 class='mt-3'> Phishing </h3>
                                    <p class='mt-3'> The best known form of social engineering is <i>phishing</i>. In the following pages you will learn what phishing is, and its many forms.</p>
                                </div>`
                }
            ]
        },{
            name: "info_phis_2",
            title:"Phishing",
            elements: [
                {
                    type: "html",
                    name: "phis2",
                    html: `<div class="clearfix">
                                <img src="img/info/phis2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Phishing">
                                <h3 class='mt-3'>What is Phishing?</h3>
                                <p class='mt-3'> The act of sending <b>messages</b> with fake information, with the intent to <b>steal</b> the receiver’s <b>sensitive information</b>. Sensitive information can include passwords, birthdates, social security numbers, or credit card information. These messages can be in the form of an <b>email, physical mail</b>, or even <b>text messages</b> and <b>phone calls</b>. Typically, the message will come under the <b>disguise</b> of a <b>source known by the victim</b>.</p>
                                <p>Phishing is not only <b>harmful towards individuals</b>, but it can also harm <b>entire organizations</b>. The best defense against phishing attacks is to <b>be cautious</b> and <b>not</b> to <b>disclose sensitive information</b> to <b>unauthorized individuals</b>.</p>
                                <p>To prevent phishing attacks, <b>don’t open</b> any <b>emails</b> that <b>seem suspicious</b> or <b>links</b> that entices you to <b>obtain</b> your <b>personal information</b>. Understand the <b>number and type of accounts</b> you are currently using since threat actors take advantage of disguising themselves as legitimate entities. Moreover, if you are to share information, verify the recipient’s credentials by making sure all <b>communications</b> are done in a <b>secured and certified setting</b> such as through an official website or email address. </p>
                            </div>`
                }
            ]
        },{
            name: "info_phis_3",
            title:"Phishing",
            elements: [
                {
                    type: "html",
                    name: "phis3",
                    html:`<h3 class='mt-3'>Subcategories of Phishing</h3>
                            <table class="table table-bordered border-secondary mt-3 text-secondary">
                            <tr class="bg-white">
                                <td class="align-top"><h5>Spear Phishing</h5></td>
                                <td>An email or communication <b>aimed at a targeted individual or an organization</b>.</td> 
                            </tr>
                            <tr class="bg-light-red">
                                <td class="align-top"><h5>Whaling</h5></td>
                                <td>A phishing scam <b>targeting executives</b> to take advantage of their executive powers for a ransom.</td> 
                            </tr>
                            <tr class="bg-white">
                                <td class="align-top"><h5>Business Email Compromise</h5></td>
                                <td>Emails <b>claiming to be from employees</b> in an organization. The email address can truly be compromised, or an attacker may be using a “spoofed”(disguised) email address similar to that of an employee.</td> 
                            </tr>
                            <tr class="bg-light-red">
                                <td class="align-top"><h5>Vishing</h5></td>
                                <td>A form of phishing <b>via phone calls</b> and/or <b>voicemails</b>.</td> 
                            </tr>
                            <tr class="bg-white">
                                <td class="align-top"><h5>Smishing</h5></td>
                                <td>A form of phishing in the form of (SMS) <b>text messages</b>.</td> 
                            </tr>
                            <tr class="bg-light-red">
                                <td class="align-top"><h5>Angler Phising</h5></td>
                                <td>Phishing attacks carried out by <b>spoof customer service accounts</b> on <b>social media</b> or through a <b>legitimate company</b>.</td> 
                            </tr>
                            </table>` 
                }
            ]
        },{
            name: "info_phis_4",
            title:"Phishing",
            elements: [
                {
                    type: "html",
                    name: "phis4",
                    html:`<div class="clearfix">
                                <img src="img/info/phis4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Overview Preventive Measure Phishing">
                                <h3 class='mt-3'>Preventive Measure</h3>
                                <p>Understand the manner in which people in your organization communicate. If you know that the <b>proper means of communication</b> is done in a particular order or methods, then any <b>communication</b> received <b>outside of these bounds</b> should be processed <b>with caution</b>. Furthermore, spear phishing <b>not only</b> targets specific individuals at a <b>company</b>, but the same guidelines should be heeded at a <b>personal level</b>.</p>
                                <p><b>Executives</b> and other individuals in upper management should have <b>steps and precautions applied</b> when sharing confidential information. Only share information with those <b>authorized to receive</b> such <b>information</b>. Additionally, if data is ever requested, always <b>verify the identity of the person</b>, their role and whether they may have access to the information being requested.</p>
                                <p>Understand the process of how information is shared within your organization. If payment is first to be directed to a particular department and yet you are the recipient of this information from upper management, then <b>verify</b> the <b>requested payments</b> with your direct managers and the concerned departments. If something <b>raises concern</b> of any kind, <b>don’t open</b> the email and <b>notify your organization</b>.</p>
                                <p><b>Be aware of your activities online within your active accounts</b>. Most people have more than one account, e.g., online banks (Venmo, Paypal, Citibank, etc.). By being aware of your <b>online and offline footprints</b>, any messages or voicemails that are outside of your queue of history should be processed with caution. Lastly, <b>companies do not send messages</b> or voicemails to customers <b>with links or account security information unless</b> immediately <b>requested by the customer</b>. However, they may send messages regarding unauthorized log-in attempts if a customer is opted in for account security alerts.</p>
                                <p>Understand that only <b>minimal information</b> should be requested <b>to verify your identity</b>. Customer service sometimes does require actual users to be verified, but in a situation where more personal details are requested than needed (i.e., payment details, home address, Social Security Number, etc.), this should raise a red flag. Customer service’s job is to help and resolve issues. If you find yourself sharing more personal information than required to have your issue resolved, then you are most likely in the process of being a victim of angler phishing.</p>
                            </div>`
                }
            ]
        },{
            name: "question_phis_1",
            title:"Question",
            questions: [
             {
                type: "html",
                name: "scenario1_1",
                html:`<div class="clearfix">
                            <img src="img/info/q1_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Money Transfer">
                            <h3 class='mt-3'>Scenario</h3>
                            <p class="mt-3">As CFO, you receive an email from another executive from a partner of your organization. Due to abrupt changes in regulations, this person demanded a transfer of $5000 to be sent directly to him/her in the purpose of reallocating funds.</p>
                        </div>`
             },{
                type: "radiogroup",
                name: "q1_1",
                isRequired: true,
                requiredErrorText: "Please select an answer.",
                title:"As a high-profile target, the email strategically targeted someone from upper management in the hopes of executing which form of social engineering attack?",    
                correctAnswer: "U2FsdGVkX18exonoQPlK/nIOtuUr1R6KLs7tPG067L8=",
                choices: ["Smishing","Angler Phishing","Vishing","Whaling"],
                choicesOrder: "random"
             }
            ]
        },{
            name: "result1",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res1",
                    html: `<h4 id="result" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                <img class="col-sm-6 px-0 rounded" id="resImg"/>
                            <div>`,
                }
            ]
        },{
            name: "info_oe_1",
            title:"Phishing in an Online Environment",
            elements: [
                {
                    type: "html",
                    name: "oe1",
                    html:`<div class="clearfix">
                            <img src="img/info/oe1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Internet">
                            <h3 class='mt-3'>Phishing in an Online Environment</h3>
                            <p class='mt-3'> Phishing attacks are not always delivered through a source of communication. Sometimes phishing attacks can occur <b>while browsing the internet</b>. On the following pages you will learn about attacks to watch out for online.</p>
                        </div>`
                }
            ]
        },{
            name: "info_oe_2",
            title: "Phishing in an Online Environment",
            elements: [
                {
                    type: "html",
                    name: "oe2",
                    html:`<div class="clearfix">
                                <img src="img/info/oe2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Keyboard">
                                <h3 class='mt-3'>Typosquatting (URL Hijacking)</h3>
                                <p class='mt-3'> <i>Typosquatting</i> occurs when a <b>domain name</b> (the website name typed into a web browser. Ex: Google.com, Amazon.com) is <b>misspelled</b> directing the victim to a <b>malicious site</b>. The attacker has somehow acquired the domain name mistakenly entered. The fake site can run <b>malicious scripts</b> or be <b>disguised as the real site</b> the victim was trying to access. This type of attack can be extremely dangerous and can lead to other forms of attacks.</p>
                                <p>The best defense against this type of attack is <b>awareness</b>. Do a quick <b>spell check</b> of any URLs entered into your browser.</p>
                            </div>`,
                }
            ]
        },{
            name: "info_oe_3",
            title:"Phishing in an Online Environment",
            elements: [
                {
                    type: "html",
                    name: "oe3",
                    html:`<div class="clearfix">
                                <img src="img/info/oe3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Warning">
                                <h3 class='mt-3'>Scareware</h3>
                                <p class='mt-3'> As the name implies, this attack preys on a victim’s fear. <i>Scareware</i> attacks usually come in the form of a <b>pop up</b> or <b>banner ad</b> claiming that the victim’s computer is <b>infected with a virus</b> or <b>other spyware</b>. Examples being, large buttons with text, “fix it!” or “scan your computer!” to install malware on your computer. The goal is to convince the user that there is a problem with their system, so that they may <b>download malicious software</b>.</p>
                                <p>To combat this attack, be aware that there are <b>verified programs</b> that can check your system for potential viruses. <b>Ignore</b> any <b>non-verified sources</b> claiming your system is infected.</p>
                            </div>`,
                }
            ]
        },{
            name: "info_oe_4",
            title:"Phishing in an Online Environment",
               
            elements: [
                {
                    type: "html",
                    name: "oe4",
                    html:`<div class="clearfix">
                                <img src="img/info/oe4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download Button">
                                <h3 class='mt-3'>Clickjacking</h3>
                                <p class='mt-3'> This attack works by <b>tricking</b> a <b>user</b> into <b>clicking on a link</b> that is <b>different from what they may perceive</b>. This can potentially <b>reveal confidential information</b>, or even allow the attackers to <b>take control of</b> the <b>infected computer</b>. For example, attackers will buy ad space on file sharing websites. With this ad space, they will make malicious image links disguised as a proper download link. The victim will think he is downloading the file hosted by the site, when, in fact, they are downloading the attacker’s file.</p>
                                <p>As a countermeasure, be <b>wary of</b> all <b>download links</b> or URLs <b>from third party sites</b>. Do not download files from unknown or unverified websites, and instead <b>refer to an authentic software manufacturer’s website</b> for specific downloads. When downloading a file, confirm the <b>file extension</b> (.docx, .mp3, .jpeg) <b>matches</b> the <b>downloaded file type</b>.</p>
                            </div>`,
                }
            ]
        },{
            name: "info_oe_5",
            title:"Phishing in an Online Environment",
            elements: [
               {
                    type: "html",
                    name: "oe5",
                    html:`<div class="clearfix">
                                <img src="img/info/oe5.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Present">
                                <h3 class='mt-3'>Baiting (Online)</h3>
                                <p class='mt-3'>This attack is similar in nature to a “Scareware” attack. However, the victim is instead enticed to click a link through the <b>promise of reward</b> instead of protection against a malicious threat. The victim will instead be directed to a <b>malicious site</b> or asked to download <b>malicious software</b>.</p>
                                <p>To combat this attack, remember that <b>nothing online is free</b>. Note, this attack does <b>not exclusively exist online</b>. If an offer seems too good to be true, it certainly is.</p>
                            </div>`
            }
            ]
        },{
            name: "question_oe_1",
            title:"Question",
                
            questions: [
             {
                type: "html",
                name: "scenario2_1",
                html:`<div class="clearfix">
                            <img src="img/info/q2_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download Button">
                            <h3 class='mt-3'>Scenario</h3>
                            <p class='mt-3'>John is trying to download an MP3 file he has found on a media share website. On the download page there are multiple download buttons. John clicks an image link with a big green button titled “Download Now!” John downloads an executable file instead, which infects his computer with five different trojan malware.</p>
                        </div>` 
            },{
                type: "radiogroup",
                name: "q2_1",
                isRequired: true,
                requiredErrorText: "Please select an answer.",
                   
                title:"Using multiple download buttons in the hopes of a victim falling trap to clicking a deceitful button is a common method used in which attack?",
                correctAnswer: "U2FsdGVkX1810Q/cOvRSnn39D9ICFydR9PpXZ/pm8FM=",
                choices: ["Baiting","Typosquatting","Scareware","Clickjacking"],
                choicesOrder: "random"
             }
            ]
        },{
            name: "result2",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res2",
                    html: `<h4 id="result" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                <img class="col-sm-6 px-0 rounded" id="resImg"/>
                            <div>`
                }
            ]
        },{
            name: "info_pa_1",
            title:"Physical Attacks",  
            elements: [
                {
                    type: "html",
                    name: "pa1",
                    html:`<div class="clearfix">
                                <img src="img/info/pa1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Thief">
                                <h3 class='mt-3'>Physical Attacks</h3>
                                <p class='mt-3'>The term social engineering also includes <b>attacks in the real world</b>. You can find out what forms of social engineering belong to this category on the following pages.</p>
                            </div>`,
                }
            ]
        },{
            name: "info_pa_2",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa2",
                    html:`<div class="clearfix">
                                <img src="img/info/pa2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="USB stick">
                                <h3 class='mt-3'>Baiting (Physical)</h3>
                                <p class='mt-3'><i>Baiting</i> is an attack that plays off a <b>victim’s curiosity</b> through virtual or physical methods. This can come in the form of leaving a <b>piece of physical media</b> in a noticeable area. For example, a <b>flash drive</b> may be left in the middle of a table. The goal of the attack is to have the victim <b>plug the physical media into the victim’s device</b> to inject <b>malicious malware</b>. Virtually, baiting is a means to trick victims with prizes or with monetary rewards online for the purpose of propagating malware.</p>
                                <p><b>Never install</b> any <b>unknown hardware</b> of any kind. Always <b>verify the source and validity of the device</b> you are using.</p>
                            </div>`,
                }
            ]
        },{
            name: "info_pa_3",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa3",
                    html:`<div class="clearfix">
                                <img src="img/info/pa3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 border rounded" alt="Courier">
                                <h3 class='mt-3'>Pretexting</h3>
                                <p class='mt-3'><i>Pretexting</i> can be considered a close sibling to phishing. Typically, a perpetrator will initiate a pretexting attack by <b>creating a fake scenario</b> under the guise of a trusted authority. This authority could range from something simple, like a <b>delivery person</b>, to something more serious, like <b>law enforcement</b>. Or the <b>scenario may be researched in advance</b> to create an outline to deceive the recipient that may allow the attacker to <b>gather confidential information</b>. Just like phishing, the goal of pretexting is to gather information the perpetrator would not normally have access to.</p>
                                <p>One of the most insidious methods of social engineering, falling victim to pretexting can be prevented by <b>paying attention to anything outside the norm</b>. This can be noted from the <b>behavior and attitude</b> of the other party, or simply the <b>interaction with them</b>. Understand that threat actors aim to gain access to confidential information. They may act in a <b>hurry</b>, request for a <b>favor</b> or perhaps somehow <b>know information that they should not</b> know to begin with. If the interaction and demeanor of the person you are in contact with is displaying such actions, then <b>notify the proper chain of command</b>.</p>
                            </div>`, 
                }
            ]
        },{
            name: "info_pa_4",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa4",
                    html:`<div class="clearfix">
                                <img src="img/info/pa4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Two Faces">
                                <h3 class='mt-3'>Malicious Insider (Man on the Inside)</h3>
                                <p class='mt-3'>This type of attack affects not only individuals, but entire organizations as well. A <i>malicious insider</i> attack occurs when any <b>individual</b> that is privy to sensitive information in an organization decides to <b>divulge</b> said <b>information</b>. There are several reasons a malicious insider attack may occur. Anything from <b>monetary gain</b> to <b>aggravation with the organization</b> may cause an individual to act against their team.</p>
                                <p><b>Organizational leaders</b> are the ones who should be in charge of thwarting malicious insider attacks. Keep a system secure through <b>performing regular checks</b> and balances on those who have access to sensitive information. How to handle this system of checks and balances is not a one fits all type of solution and should be handled case by case. On the individual’s level, be <b>cautious of those who have access to your private information</b>. Alert the proper channels of an organization when you think there may have been a breach of sensitive information.</p>
                            </div>`, 
                }
            ]
        },{
            name: "question_pa_1",
            title:"Question",
            questions: [
             {
                type: "html",
                name: "scenario3_1",
                html:`<div class="clearfix">
                            <img src="img/info/q3_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Evil">
                            <h3 class='mt-3'>Scenario</h3>
                            <p class="mt-3">Disgruntled employee Tom has decided that after years of not receiving a raise, he is going to enact revenge on his company. To do this, he releases all company databases online.</p>
                        </div>`, 
             },{
                type: "radiogroup",
                name: "q3_1",
                isRequired: true,
                requiredErrorText: "Please select an answer.",
                title: "Which of the following closely relates to the attack being committed?",
                correctAnswer:"U2FsdGVkX19QorIBNWgYWPYn7eknTcMhMjzgIXLUEtmvWH9KTnCrKgf+ZKpUEr0v",
                choices: [ "Pretexting","Baiting","Malicious Insider"],
                choicesOrder: "random"
             }
            ]
        },{
            name: "result3",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res3",
                    html: `<h4 id="result" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                <img class="col-sm-6 px-0 rounded" id="resImg"/>
                            <div>`
                }
            ]
        },{
            name: "info_pa_5",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa5",
                    html:`<div class="clearfix">
                                <img src="img/info/pa5.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Access">
                                <h3 class='mt-3'>Tailgating and Piggybacking</h3>
                                <p class='mt-3'>A social engineering tactic used by threat actors to <b>enter a restricted area</b>. There are two common forms: <i>tailgating</i> and <i>piggybacking</i>.</p> 
                                <p>In <b>piggybacking</b>, the attacker may wait for an opportunity to enter the building from an <b>employee</b> who has <b>authorized access</b> by asking them to <b>hold the door before it closes</b>.</p> 
                                <p><b>Tailgating</b> would be the attacker entering a restricted area <b>without notifying an employee</b>. An example would be when the attacker closely follows an employee and holds the door to gain entry without being noticed.</p>
                                <p>No matter what the circumstances are, <b>don’t allow strangers or uninvited visitors in your facility</b>. Though the situation may be unsettling to tell someone no, remember that these are policies put in place to prevent attacks. Make sure to always <b>close</b> the <b>door securely after entering</b>. Threat actors take advantage of loosely shut doors as a means to enter restricted areas.</p>
                            </div>`, 
                }
            ]
        },{
            name: "info_pa_6",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa6",
                    html:`<div class="clearfix">
                                <img src="img/info/pa6.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Spy on someone's computer">
                                <h3 class='mt-3'>Shoulder Surfing</h3>
                                <p class='mt-3'><i>Shoulder surfing</i> occurs when a perpetrator <b>looks directly at your computer</b> screen <b>without permission</b> to gather information.</p> 
                                <p>To countermeasure this attack, be <b>cautious when using a device in public</b>. When using a computer or a smartphone in a public place, be aware of others around you. Especially <b>when viewing sensitive information</b>, make sure to be in a <b>secure position</b>, away from possible prying eyes.</p> 
                            </div>`,
                }
            ]
        },{
            name: "info_pa_7",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa7",
                    html:`<div class="clearfix">
                                <img src="img/info/pa7.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Ear">
                                <h3 class='mt-3'>Eavesdropping</h3>
                                <p class='mt-3'><i>Eavesdropping</i> <b>listens for personal information</b> spoken about in a <b>conversation between other individuals</b>. This form of attack may seem primitive in nature, but <b>be aware of any information said out loud</b>.</p> 
                                <p>When speaking with whomever, especially when sensitive details are to be discussed, be aware of others around you. <b>Position yourself away from others within hearing distance</b>. If there’s not much room available to distance yourself, <b>lower your voice</b> to prevent others from eavesdropping.</p> 
                            </div>`, 
                }
            ]
        },{
            name: "question_pa_2",
            title:"Question",
            questions: [
             {
                type: "html",
                name: "scenario3_2",
                html: `<div class="clearfix">
                            <img src="img/info/q3_2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Delivery Man">
                            <h3 class='mt-3'>Scenario</h3>
                            <p class="mt-3">Sheila is an employee at Oscorp Industries. She has a lunch date with a friend at a restaurant. Just as she is about to leave the company building, someone pretending to be a delivery man approaches her with a large package. He asks her to hold the door open for him. "I'll be happy to do that, of course," she says and wishes the delivery man a good day.</p>
                        </div>`,
             },{
                type: "radiogroup",
                name: "q3_2",
                isRequired: true,
                requiredErrorText: "Please select an answer.",
                title:"Which social engineering method did Sheila fall for?", 
                correctAnswer: "U2FsdGVkX1/NUe05Hz0s0P0TXXEjummkaTZrKTt4O0g=",
                choices: ["Piggybacking","Shoulder Surfing","Eavesdropping","Tailgating"],
                choicesOrder: "random"
             }
            ]
        },{
            name: "result4",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res4",
                    html: `<h4 id="result" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                <img class="col-sm-6 px-0 rounded" id="resImg"/>
                            <div>`
                }
            ]
        },{
            name: "info_pa_8",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa8",
                    html:`<div class="clearfix">
                                <img src="img/info/pa8.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Online Dating">
                                <h3 class='mt-3'>Honeypot</h3>
                                <p class='mt-3'>Messages that solicit <b>romance</b> or use <b>sexuality</b> as a means of attracting an unsuspecting victim. The attacker may take advantage of the setting such as a <b>dating website</b> to quickly lure those seeking to find love or partnership for their own personal gain.</p>
                                <p>Threat actors will <b>take advantage</b> of any <b>human vulnerability</b> such as emotions. The <b>abrupt development of emotions</b> and request for any <b>financial favor</b> in a form of pity are displayed, then you are not in contact with your lover, but rather with a threat actor.</p>
                            </div>`,
                }
            ]
        },{
            name: "info_pa_9",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa9",
                    html:`<div class="clearfix">
                                <img src="img/info/pa9.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Compromising action and reward">
                                <h3 class='mt-3'>Quid Pro Quo</h3>
                                <p class='mt-3'>In a <i>Quid Pro Quo</i> attack, the perpetrator will try to get the victim to <b>do a compromising action in the promise of a reward</b>. As always, a compromising action could range from releasing private information to letting an individual into a building.</p>
                                <p>Even if an offer seems beneficial to both parties involved, <b>understand all implications of accepting a deal with someone</b>. It’s possible that a deal may seem harmless on the surface, but eventually it could lead to harmful results.</p>
                            </div>`, 
                }
            ]
        },{
            name: "info_pa_10",
            title:"Physical Attacks",
            elements: [
                {
                    type: "html",
                    name: "pa10",
                    html: `<div class="clearfix">
                                <img src="img/info/pa10.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Packages">
                                <h3 class='mt-3'>Diversion Theft (Offline)</h3>
                                <p class='mt-3'>The act of <b>altering or stealing the delivery destination</b> of a shipment of goods through stealth and deception. The shipment may be redirected to an alternative location or intercepted by the attacker.</p>
                                <p>Provide limited administration privileges only to those authorized to do so. <b>Sensitive information</b> such as location of shipment origin and/or destination must be <b>exclusive to personnel</b>, such as the purchasing agent. The <b>data</b> containing such content must also be <b>hidden from the general public</b>.</p>
                            </div>`,
                }
            ]
        },{
            name: "question_pa_3",
            title:"Question",
            questions: [
             {
                type: "html",
                name: "scenario3_3",
                html:`<div class="clearfix">
                            <img src="img/info/q3_3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Handshake">
                            <h3 class='mt-3'>Scenario</h3>
                            <p class="mt-3">The IT worker at your company, Micheal, is willing to open browser privileges on your work computer. This will allow you to go on any website you want while at work. In exchange, you must organize Micheal’s birthday party this year.</p>
                        </div>`, 
             },{
                type: "radiogroup",
                name: "q3_3",
                isRequired: true,
                requiredErrorText: "Please select an answer.",
                title:"Micheal is trying to instigate what type of social engineering attack?",
                correctAnswer: "U2FsdGVkX186aICNVyMveXLRs4E6kUcoYB4PI1KoHJk=",
                choices: ["Honeypot","Quid Pro Quo","Diversion Theft"],
                choicesOrder: "random"
             }
            ]
        },{
            name: "result5",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res5",
                    html: `<h4 id="result" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                <img class="col-sm-6 px-0 rounded" id="resImg"/>
                            <div>`
                }
            ]
        },
    ],
    completedHtml: `<h4 class="text-center mt-4 mt-lg-5">Well done!</h4>                
                    <div class="row justify-content-center mt-3 p-3 mx-0 bg-grey border-top border-bottom">
                        <img class="col-sm-6 px-0 rounded" src="./img/info/complete.png" alt='High Five'/>
                        <p class="mt-3 text-center"> Now that you've been informed in social engineering methods, let's see how you perform by taking a test! </p>
                    </div>
                    <div class='row justify-content-evenly border-top mx-0'> 
                        <div class='mt-4 mt-md-3 col-sm-4'>
                            <div class='d-flex justify-content-center'>
                                <div class='position-relative'>
                                    <div class="position-absolute">
                                        <a href='test.html' class="btn-size btn-red btn-nav btn-start-test d-block"> </a>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href='test.html' class="color-dark fs-responsive link-completePage">Go to Test</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 mt-md-3 col-sm-4">
                            <div class='d-flex justify-content-center'>
                                <div class='position-relative'>
                                    <div class="position-absolute">
                                        <a href='../index.html' class="btn-size btn-red btn-nav btn-home d-block"> </a>
                                    </div>
                                    <div class="link-wrapper">
                                        <a href='../index.html' class="color-dark fs-responsive link-completePage">Go to Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="attribution bg-light">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
}