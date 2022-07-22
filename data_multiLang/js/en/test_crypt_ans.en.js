var json_test_en = {
    title:"Social Engineering Awareness",
    description: "Test",
    showProgressBar: "top",
    progressBarType: "questions",
    firstPageIsStarted: true,
    startSurveyText: " ",
    pagePrevText: " ",
    pageNextText: " ",
    completeText:" ",
    showQuestionNumbers:'off',
    requiredText: "",
    pages: [
        {
            name:'start',
            questions: [
                {
                    type: "html",
                    html: `<h3 class="text-center mt-4 mt-lg-5"> Start the Test </h3>
                            <div class="row mt-3 pt-3 bg-grey border-top border-bottom">
                                <p class="text-center"> You are about to start a <b>test</b> on social engineering attacks. Since there is <b>no time limit</b>, please take the time to read the questions thoroughly. It is possible to <b>repeat the test</b>. Please click the button on the <b>bottom right</b> when you are ready.</p>
                                <p class="text-center"> If you want to <b>inform</b> yourself first about social engineering attacks, click <a href='info.html'>here</a>. </p>
                            </div>
                            <div class="attribution">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`, 
                }
            ]
        },{
            name: "General 1",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img0_1",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q0_1.png" class="mt-3 col-sm-6 px-0 rounded" alt="Hacker"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q0_1",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Social engineering attacks can happen online as well as in person.",
                    correctAnswer: "U2FsdGVkX193+Y0sdZFZNark7Yyf8WKakKVW4A/PzBM=",
                    choices: ["True","False"] 
                }
            ]
        },{
            name: "General 2",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img0_2",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q0_2.png" class="mt-3 col-sm-6 px-0 rounded" alt="Hacker"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q0_2",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Social engineering attacks are only harmful on an individual level.",
                    correctAnswer: "U2FsdGVkX1/ZdHMyswmOBVNbgLJCVTZ7LGTtd7k15HQ=",
                    choices: ["True","False"]
                }
            ]
        },{
            name: "General 3",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img0_3",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q0_3.png" class="mt-3 col-sm-6 px-0 rounded" alt="Hacker"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q0_3",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "What is the ultimate goal for different methods of social engineering?",
                    correctAnswer: "U2FsdGVkX1/wV12UWEe1OGTvAR75d5ZjlJ8QeirbE/TncImOPwc8KL7uKKLIRPFCiZchybOmSverkRZwSsIlug==",
                    choices: [
                        "To fundraise money for an organization",
                        "To get an inside look on a company’s new product",
                        "To impersonate notable members of a company", 
                        "To gain access to vital or personal information",
                    ],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "General 4",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img0_4",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q0_4.png" class="mt-3 col-sm-6 px-0 rounded" alt="Hacker"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q0_4",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Social Engineering is...",
                    correctAnswer: "U2FsdGVkX1+JDU0Cw1fxevuJWEdaAr7A8JCHXJqjGUqgHmaR8nmun0FzGTB+WyVnL3j7BvGDCMZtt5p05NGQ6YFkq/16igDuCXFnDM2BmZz3l/MZQXH0CgP0MLd32mVO",
                    choices: [
                        "Tricking or deceiving someone into providing confidential information",
                        "Considered illegal under international law",
                        "A way for creating new software products by providing open-source licenses",
                        "Used for collecting feedback regarding software beta tests" 
                    ],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 1",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_1",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiveing email">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You receive an email from your “employer”. The company logo is present in the mail as well as your name listed in the greeting phrase. The email is regarding your timesheets and your employer wants you to check the hours from last month. The “timesheet” is attached as a “pdf”. You download the attachment but don’t realize that in the background, there is some malware being installed on your computer.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_1",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Since this email comes from your employer, it suggests it to be from a trusted source. However, an attack designed to come from a trusted source such as your employer closely relates to:", 
                    correctAnswer: "U2FsdGVkX1+PVTbs6MJzWdvXEar3j6IMKHjxIep11PI=",
                    choices: ["Whaling","Angler Phishing","Pretexting","Spear Phishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 2",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_2",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You receive an email from upper management, stating that you must download and complete a training module by the end of the week before working with your “new client.” The document is attached at the bottom of the email. The sending address also seems a bit peculiar. Nonetheless, you figure out that the training module must be important since your boss sent it directly to you, and you do have a new client coming up. After clicking the download icon for the file and opening it, a malware is installed onto your computer.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_2",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Information coming to a specific employee from a trusted source, like upper management, with direct requests to complete an action can be categorized as:",
                    correctAnswer: "U2FsdGVkX1+PVTbs6MJzWdvXEar3j6IMKHjxIep11PI=",
                    choices: [
                        "Whaling",
                        "Scareware",
                        "Spear Phishing",
                        "Malicious Insider",
                    ],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 3",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_3",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Speaking about email">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">A “corporate partner” directly contacts the CEO of a company, asking them to follow up with an urgent email that they’ve sent. The CEO finds the email in her inbox, and notices that the “corporate partner” is asking them to re-verify confidential information that they’ve lost in a recent data breach attack.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_3",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"The sense of urgency to capture sensitive information from senior management to leverage their authority is common use of:",
                      
                    correctAnswer: "U2FsdGVkX18eYZrvUNlWFJEOXZoaaFzAIUenZawis7A=",
                    choices: ["Whaling","Vishing","Quid Pro Quo","Urgency Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 4",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_4",
                    html:`<div class="clearfix">
                                <img src="img/test/q1_4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiving SMS">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Mike was informed by SMS that there was an unusual activity in his Apple account. The text message contains a link to click on to check the activity. However, the link leads to a fake website that aims to steal Mike's login details by asking him for his Apple ID credentials.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_4",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "The SMS Mike received is a cyber attack which primarily targets victims over text messages is also known as:",
                    correctAnswer: "U2FsdGVkX18nuPmO901fkCVb7Ne+FxPZn2TfLxdiPO8=",
                    choices: ["Smishing","Vishing","Pretexting","Credentials Theft"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 5",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_5",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_5.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiving call">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">A caller claims to be someone from the Internal Revenue Service (IRS) and would like to verify your personal information. The caller notifies you that there is a pending issue regarding your tax forms. If you don’t provide the information he’s seeking, the caller threatens to suspend your tax refunds.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_5",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "A scam over the phone with the use of threat and attempts to steal confidential information is a form of which cyber attack?",
                    correctAnswer: "U2FsdGVkX1+OIBhDZO31yqT83YC2sphbMnLQyOoUDxE=",
                    choices: ["Diversion Theft","Vishing","Quid Pro Quo","Pretexting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 6",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_6",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_6.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Review">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Sally, who had recent complaints about doing business with Company X leaves a comment in their online review section. Someone pretending to be a customer service representative for Company X reaches out to Sally and asks her to verify the credit card information used for her purchase, so that they can ensure she is a legitimate customer before resolving her complaint. </p>
                            </div>`, 
            },{
                    type: "radiogroup",
                    name: "q1_6",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Using publicly displayed info such as the review section of a company, the false customer representative representing Company X takes advantage of which social engineering attack?",
                    correctAnswer: "U2FsdGVkX1/bGdRkfeQ7zSCOO8edm/LH7bUoJ8f+NKw=",
                    choices: ["Angler Phishing","Smishing","Quid Pro Quo","Baiting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 7",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_7",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_7.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Contact us">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">ConnectUs, a popular social media site you use, has directly messaged you. Due to the rampant technological issue experienced by many users, they inform you that you can directly contact them if you have any issues with or questions about your account. </p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_7",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"This entity masquerading as customer service from a social media platform is a typical scheme used in:",
                    correctAnswer: "U2FsdGVkX1/bGdRkfeQ7zSCOO8edm/LH7bUoJ8f+NKw=",
                    choices: ["Angler Phishing","Quid Pro Quo","Whaling","Social Media Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 8",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_8",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_8.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Invoice">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">An email coming from one of your company’s directors states that a corporate partner demands a payment for a pending invoice. Typically, such emails are received by another department, but since this partner is facing a cash shortage, the payment must be made in full as soon as possible. The “director” asks you to transfer company funds to a bank account provided in the email.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_8",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Impersonating a legitimate entity such as the director to defraud an organization is associated closest with:", 
                    correctAnswer: "U2FsdGVkX1/PdoED3pdhGWjq5o8f9shI1Bv2Be9gcHic2sInPuiHzdAYgeYvZTZv",
                    choices: ["Business Email Compromise","Pretexting","Diversion Theft","Angler Phishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 9",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_9",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_9.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Money">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Vision Works, your organization’s trusted partner, sends an email demanding the transfer of an approved loan. However, discussions of a loan are not to occur until the end of the quarter. Moreover, Vision Works is not yet to be informed of the approval of this loan.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_9",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "The attempt to defraud by impersonating a legitimate entity such as a trusted partner to defraud your organization is associated closest to:",    
                    correctAnswer: "U2FsdGVkX1/PdoED3pdhGWjq5o8f9shI1Bv2Be9gcHic2sInPuiHzdAYgeYvZTZv",
                    choices: ["Business Email Compromise","Quid Pro Quo","Angler Phishing","Financial Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 10",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_10",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_10.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiving message">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Retail store manager Raul has received an email that a company policy update is taking place. The email claims that he must reply with the information of all employees working in his store.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_10",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Since Raul is known for managing this particular retail store, what type of phishing is this most closely related to?",  
                    correctAnswer: "U2FsdGVkX18fGh5T+bo7spF7R68AMO0Hb04sz42nA0k=",
                    choices: ["Vishing","Whaling","Angler Phishing","Spear Phishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 11",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_11",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_11.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiving email">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">An attacker pretending to be the CEO of a company through the use of a spoofed email address contacts one of their high-ranking employees. The attacker asks for company-wide payroll information, and the high-ranking employee quickly emails it over.</p>
                            </div>`,
            },{
                    type: "radiogroup",
                    name: "q1_11",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Targeting a high-ranking employee for confidential information is a clear indicator of what kind of attack?",  
                    correctAnswer: "U2FsdGVkX197zYkx3JaixjJ0GmAMxzhypj6j7fksDjE=",
                    choices: ["Pretexting","Whaling","Baiting","Spear Phishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 12",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_12",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_12.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Smartphone with text message">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You receive a text message from Facebook claiming that someone tried accessing your account from an unrecognized device. The message asks you to reset your account password, and provides a link for you to do so. However, you understand that companies do not voluntarily send text messages with links unless requested.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_12",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"This type is a classic example of what type of social engineering attack?",
                    correctAnswer: "U2FsdGVkX1+WqqZauRLGkycvxh2gl3HYiKZbcmcuSac=",
                    choices: ["Shoulder Surfing","Smishing","Pretexting","Social Media Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 13",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_13",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_13.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Support">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Chegg is down, so an attacker takes the opportunity to create a fake Twitter account as Chegg Support to be able to communicate with frustrated students. The attacker starts reaching out to online users that have recently tweeted about at Chegg, and starts asking them for their personal account information to be able to assist them further.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_13",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"The attempt to impersonate a company’s social media presence to be able to collect personal account information is typically an example of:", 
                    correctAnswer: "U2FsdGVkX1+DpZdtF7QeTfEMmg033vKWmyDoXO2cXgM=",
                    choices: ["Quid Pro Quo","Angler Phishing","Spear Phishing","Social Media Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 14",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario1_14",
                    html: `<div class="clearfix">
                                <img src="img/test/q1_14.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Sending emails">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">The email of an unknowing company employee on vacation has been compromised by an attacker. The attacker sends an email out to the employee’s colleagues, asking them for an update on their current project and asking them to forward new business updates from their partnering organizations immediately.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_14",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "The act of impersonating or utilizing a compromised work email  account for the purpose of gaining access to sensitive information is most closely related to:", 
                    correctAnswer: "U2FsdGVkX18e4NPOFxF2CgXv8b3ArwTRnJmhu36kPL3Q9qUhrIPd7LM2Vu0duw38",
                    choices: ["Baiting","Business Email Compromise","Shoulder Surfing","Piggybacking"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 15",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img1_15",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q1_15.png" class="mt-3 col-sm-6 px-0 rounded" alt="Email"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q1_15",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Receiving an email asking for personal information falls under what category of social engineering attack?",    
                    correctAnswer: "U2FsdGVkX1/5zdtIAstgdCUMqPvkE9H2yHYCxvJ9aOY=",
                    choices: ["Tailgating","Clickjacking","Phishing","Quid Pro Quo"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 16",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img1_16",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q1_16.png" class="mt-3 col-sm-6 px-0 rounded" alt="Criminal with fishing rod"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q1_16",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Which one of these is NOT a subcategory of phishing?",
                    correctAnswer: "U2FsdGVkX1+gh+wkuisv0zYcQAS/4p0XfJMu0wM1P9Y=",
                    choices: ["Business Email Compromise","URL Hijacking","Vishing","Whaling"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 17",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img1_17",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q1_17.png" class="mt-3 col-sm-6 px-0 rounded" alt="Email attack"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q1_17",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Which technique targets specific individuals?",
                    correctAnswer: "U2FsdGVkX1+RRqnZBKXW7K50sAPPT7HTIyB0eC4byXE=",
                    choices: ["Pretexting","Smishing","Spear phishing","Vishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Phishing 18",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img1_18",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q1_18.png" class="mt-3 col-sm-6 px-0 rounded" alt="Email attack"/>
                            <div>`
                },{
                    type: "checkbox",
                    name: "q1_18",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Which of the following CANNOT be classified as a feature of phishing?", 
                    correctAnswer: ["U2FsdGVkX1+Uft5T/4Vd0FXJMFTv0xQSYbuBfyiAIxUQCGRp5wc7M8RSAts1yYeMs3LqOPGlvHbQJncl86xYP8uirc9u01aGQJsxgjavLhkt3t3KPAMDvIlDFHqbwPF5", "U2FsdGVkX1/aOb0lELhJZXwy4ZZKvajXegbEibjr+WkITk83qSMYY3SGx5qj910UZIokjC3iB1DPbMzGw3OOwWVI9rtNJvQ/2sDMF7owghE="],
                    choices: [
                        "Creating false social media profiles to deceive unsuspecting people",
                        "Impersonating a company’s email address to send emails to others",
                        "Leaving a voicemail message claiming to be a figure of authority",
                        "Packing malware into an unverified third-party download"
                    ],
                }
            ]
        },{
            name: "Online Environment 1",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_1",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Login page">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Alice works for the company “XYZ Industries”. The company’s website is listed as “xyzindustries.com”. In a hurry, Alice accidentally types “xzyindustris.com” into her web browser. She is directed to a page that has a similar login page as her company’s. However, this is a fake login page designed to steal her username and password.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_1",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Alice fell victim to which social engineering attack?",
                    correctAnswer: "U2FsdGVkX19ES8IOo6eKBEzM+uCTFFwvF/vzFjSSfK8=",
                    choices: ["Typosquatting","Clickjacking","Shoulder Surfing","Login Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 2",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_2",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Login page">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Instead of typing the correct bank site domain, “axisbank.com”, you type in “accessbank.com” and proceed anyway. The home page looks the same as any other bank login page, and you don’t realize you’ve misinterpreted the bank’s actual name. You go ahead and create a user account with this “bank,” unknowing that its existence is actually a spin-off of Axis Bank and is used to collect personal information from unknowing online users.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_2",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title: "This false site is taking advantage of which social engineering attack?",
                    correctAnswer: "U2FsdGVkX19ES8IOo6eKBEzM+uCTFFwvF/vzFjSSfK8=",
                    choices: ["Vishing","Typosquatting","Tailgating","Credentials Theft"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 3",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_3",
                    html:`<div class="clearfix">
                                <img src="img/test/q2_3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Virus alert">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">While looking through his favorite blogs, John sees an image link claiming his computer is infected with five different trojan viruses with a flashing warning sign. John does not know what a trojan virus is or what it does, but he does know it is not a good thing for his computer to have. He clicks the image link and downloads an executable file that causes his computer to run 1000% slower.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_3",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title: "By clicking on the warning sign to “fix” an issue, the attacker took advantage of fear by enticing John to fall trap to which type of attack?",  
                    correctAnswer: "U2FsdGVkX1/oGRj+FRCABdBn/aa0jMQ/naTQr4z7iKs=",
                    choices: ["Scareware","Baiting","Clickjacking","Spear Phishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 4",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_4",
                    html:`<div class="clearfix">
                                <img src="img/test/q2_4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Update alert">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You’re on youtubetomp3.com, downloading audio from a YouTube video that you’d like to put in a video that you’re making. A pop-up comes up stating that your version of Adobe Flash is out of date, and that your computer will be vulnerable to malicious attacks without it being updated. The pop-up prompts you to click on a link to download the “newest Adobe Flash update”.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_4",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title:"The attacker takes advantage of user vulnerability by tempting the user to “protect” themselves by clicking on the download link. The use of pop-ups to scare and lead the user to install malware is an example of which social engineering attack?",
                    correctAnswer: "U2FsdGVkX1/oGRj+FRCABdBn/aa0jMQ/naTQr4z7iKs=",
                    choices: ["Scareware","Quid Pro Quo","Clickjacking","Shoulder Surfing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 5",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_5",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_5.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Thomas decides to compress a PNG file and does so in a file compression website. After uploading a few images, the compression is finished and at the bottom of the page appears the download button. It appears to be in the middle of surrounding links that are relatively much larger. Thinking Thomas has clicked the correct button, a file is shown to be downloaded in the bottom section of his browser. However, it seems that whatever was downloaded was neither the same file name nor the same file type.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_5",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "By clicking the incorrect button, Thomas fell victim to which social engineering attack?",
                    correctAnswer: "U2FsdGVkX19vA5bqFwG9cd4E+SgRtKSE8sRHzn60dZU=",
                    choices: ["Angler Phishing","Typosquatting","Clickjacking","Baiting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 6",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_6",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_6.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Gift Card">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Alice receives an email claiming that she has been chosen for an online survey to win a $100 Amazon gift card.</p>
                            </div>`, 
                },{
                    type: "radiogroup",
                    name: "q2_6",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Alice is lured by a gift card which is an attack typically used with:",
                    correctAnswer: "U2FsdGVkX18qdCylYEIT+ASyNjIFPmLaqEc/CZGTq9Q=",
                    choices: ["Baiting","Honeypot","Vishing","Pretexting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 7",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_7",
                    html:`<div class="clearfix">
                            <img src="img/test/q2_7.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Free Smartphone">
                            <h3 class='mt-3'>Scenario</h3>
                            <p class="mt-3">While looking through his favorite blogs, John sees a linked image claiming he has won a free iPhone. John clicks on the link, downloads a strange executable file, and has his computer infected with several trojan viruses.</p>
                        </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_7",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"John is coaxed into clicking the link by “winning” a free iPhone. Luring victims in a false pretense of a reward is common attack used with:",   
                    correctAnswer: "U2FsdGVkX18qdCylYEIT+ASyNjIFPmLaqEc/CZGTq9Q=",
                    choices: ["Baiting","Shoulder Surfing","Whaling","Clickjacking"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 8",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_8",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_8.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Special offer">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">During a release of a new version console by PlayStation, Marcus desperately searches for a new PlayStation online. Within half an hour, Marcus notices an ad for a discounted new PlayStation. The ad claims that only one spot is left to claim this discount. To claim, Marcus must have to enter his full name, phone number and email address in order to proceed.</p>
                            </div>`, 
                },{
                    type: "radiogroup",
                    name: "q2_8",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"The ad online that Marcus stumbled on can be best described as:",
                    correctAnswer: "U2FsdGVkX18/msZzZhVE5yAcRQ3+UySZGcsrJrd0UTI=",
                    choices: ["Baiting","Diversion Theft","Honeypot","Clickjacking"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 9",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_9",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_9.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Alert">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Searching for homework answers, student Michelle uses her iPad to find a website with good information. She finds a potentially good website, but after clicking on the link, she is redirected to a page that says her iPad is infected with a virus.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_9",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "This webpage is trying to use what social engineering attack on Michelle?",
                    correctAnswer: "U2FsdGVkX19LWpd5mePn3EzrP8ZbwQnfJ/4L8RhFH9c=",
                    choices: ["Baiting","Clickjacking","Scareware","Typosquatting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 10",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_10",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_10.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download button">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Caroline is looking for a free photo editor program. She searches via Google and finds a link to a website which provides some free software. On the website is an image of the software icon which looks like a proper photo editor. There is a big download Button below the image and a little one below the product information, so Caroline just clicks on the big one below the icon. Instead of the photo editor Caroline downloads malware on her computer which leads to a system crash.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_10",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title: "Which attack type tries to trick people with fake download buttons?",
                    correctAnswer: "U2FsdGVkX18UOtMhhbVtsLWBFdFAY/jUzUitWQmh68U=",
                    choices: ["Baiting","Clickjacking","Scareware","Typosquatting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 11",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_11",
                    html: `<div class="clearfix">
                                    <img src="img/test/q2_11.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Virus alert">
                                    <h3 class='mt-3'>Scenario</h3>
                                    <p class="mt-3">A warning has appeared on an unsecure, third-party website telling you that your computer is infected with a virus.</p>
                                </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_11",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "This warning is a legitimate indicator that your computer is infected.",
                    correctAnswer: "U2FsdGVkX18cyvOafcu08DwkTj8gXGrgIMrzdH3zaJI=",
                    choices: ["True","False"]    
                }
            ]
        },{
            name: "Online Environment 12",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_12",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_12.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download button">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You want to download a free VPN from a third-party website, but the download button redirects you to a new webpage with an infected download button.</p>
                            </div>`, 
                },{
                    type: "radiogroup",
                    name: "q2_12",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which type of social engineering is it?",
                    correctAnswer: "U2FsdGVkX18Q+nwrOHvTun2anNNAxd0Dlyy54a0dDEw=",
                    choices: ["Tailgating","Honeypot","Angler Phishing","Clickjacking"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 13",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img2_13",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q2_13.png" class="mt-3 col-sm-6 px-0 rounded" alt="Fear"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q2_13",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which of the following attacks uses people's fear of hacking or viruses to trick them into downloading malware?",
                    correctAnswer: "U2FsdGVkX19IvFUfzLg615lF3JIofxWw6JNXs5Aslh8=",
                    choices: ["Whaling","Baiting","Scareware","Pretexting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 14",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img2_14",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q2_14.png" class="mt-3 col-sm-6 px-0 rounded" alt="Keyboard"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q2_14",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Mistakenly entering the incorrect URL for a website, yet being redirected to a page that’s somewhat similar to what’s expected can be known as:",  
                    correctAnswer: "U2FsdGVkX18m8R0jegsZMOQDn8mcarO09/Lj5fahfdk=",
                    choices: ["Phishing","Baiting","Scareware","Typosquatting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Online Environment 15",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario2_15",
                    html: `<div class="clearfix">
                                <img src="img/test/q2_15.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Won iPhone">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You want to stream a new movie that just released in theaters. After entering the streaming website on your computer, a pop-up window appears stating that you’ve just won a new iPhone – all you have to do is click on the provided link to receive it.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q2_15",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "This example of a social engineering attack most closely resembles:",
                    correctAnswer: "U2FsdGVkX19NezYeCMJcwb/qpNcHAxFckBR+/mN8lCsPQdOKI7OVxPCDbzynrCDW",
                    choices: ["Pretexting","Baiting (online)","Scareware","Baiting (offline)"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 1",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_1",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="USB stick">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Due to changes in the office, you are temporarily moved to someone else’s desk. Throughout the week, you’ve noticed a USB stick in the corner of the desk. Out of curiosity, you decide to insert the USB into your work computer.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_1",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Using an unverified device is not only a violation of using someone else’s property, but this type of attack takes advantage of curiosity which is commonly used with:",  
                    correctAnswer: "U2FsdGVkX18/msZzZhVE5yAcRQ3+UySZGcsrJrd0UTI=",
                    choices: ["Baiting","Diversion Theft","Scareware","Malicious Insider"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 2",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_2",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Handshake">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You work for a big international IT company at their headquarters and suddenly a guy in a suit appears at your workplace. He addresses you by name and tells you that he is a manager from the branch office in New York city. You know there is a branch office in New York and you ask him what he wants from you. He tells you that he had a meeting with your boss “Billy” earlier this morning about a new project and “Billy” forwarded him to you. He has a USB stick for you with the company's brand on it. “There you’ll find further information about the project”, he says. Then he has to go, to catch the plane back to New York. You insert the USB stick in your computer…</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_2",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title:"What social engineering tactic did the supposed manager from New York use to persuade you to insert the USB stick?", 
                    correctAnswer: "U2FsdGVkX1+Z01wWsAtekgR48qG6btjni4u19PItn40=",
                    choices: ["Tailgating","Pretexting","Spear Phishing","Malicious Insider"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 3",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_3",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Online Dating">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">During one of your encounters in the online dating world, you receive a message from an attractive man named Fabio. Fabio asks you questions about you and you about him. A persistent issue Fabio mentions is about his vehicle and how it’s always breaking down. Fabio insists he would love to finally meet you. However, he is in need of some money to fix his vehicle and asks you if you can do him a favor by lending him some money.</p>
                            </div>`, 
                },{
                    type: "radiogroup",
                    name: "q3_3",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Using romance and attraction is a common tactic used in which social engineering attack?",
                    correctAnswer: "U2FsdGVkX197nILlmqvOFpWVRp2ZCC8GVRc7uW1SUgI=",
                    choices: ["Baiting","Honeypot","Angler Phishing","Quid Pro Quo"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 4",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_4",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Online Dating">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">While scrolling through your matches in your dating app, one of the profiles catches your attention. A message coming from this person mentions that although you live very far from each other, they’re offering to relocate on the first contact. This person pours out their childhood story as well as their current living conditions. At the end of the message, an email address is provided and the person insists on continuing this conversation via email rather than through the dating website.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_4",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "The sudden pretense of being enamoured and to abruptly veer off the dating website to have a closer means of communication closely relates to which attack?",   
                    correctAnswer: "U2FsdGVkX197nILlmqvOFpWVRp2ZCC8GVRc7uW1SUgI=",
                    choices: ["Baiting","Honeypot","Pretexting","Vishing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 5",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_5",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_5.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Handshake">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Gustavo works security for a private company. As head of the security team, he has access to all parts of the company’s building. One day he is approached by an individual with a proposition. He is asked to leave one of the entrances to the building open overnight in exchange for some money.</p>
                            </div>`,
            },{
                    type: "radiogroup",
                    name: "q3_5",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"What type of attack is Gustavo about to fall victim to?",
                    correctAnswer: "U2FsdGVkX18fxW7Cjac6H/l0yZIK8tfmxGpR/C87sKc=",
                    choices: ["Quid Pro Quo","Tailgating","Piggybacking","Malicious Insider"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 6",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_6",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_6.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Watching someone secretly">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Mary is working on updating the contact information of her employees while enjoying some coffee at her local cafe. Sitting behind her is a hooded individual looking at her screen and writing down the phone numbers and home addresses of Mary’s employees.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_6",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title: "What type of attack is being committed by the hooded individual?",
                    correctAnswer: "U2FsdGVkX18wQ846MBUQpzUCq/OMjYv2KC7rfoVfS9KADZwVVSx0IrzVMZq3s5r2",
                    choices: ["Shoulder Surfing","Tailgating","Eavesdropping","Diversion Theft"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 7",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_7",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_7.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Train">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">While riding the train, John decided to file his tax forms. Whoever is seated behind John has a clear view of his screen and everything he’s entering.</p>
                            </div>`, 
                },{
                    type: "radiogroup",
                    name: "q3_7",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"What can John unknowingly and possibly fall victim to?",
                    correctAnswer: "U2FsdGVkX18wQ846MBUQpzUCq/OMjYv2KC7rfoVfS9KADZwVVSx0IrzVMZq3s5r2",
                    choices: ["Shoulder Surfing","Smishing","Eavesdropping","Pretexting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 8",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_8",
                    html:  `<div class="clearfix">
                                <img src="img/test/q3_8.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Call">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">While riding the bus, Steve is trying to handle a bill over the phone with his internet provider. To access his account, Steve must state his year of birth and his personal PIN. In doing so, Steve has inadvertently broadcasted this information to everyone in the train car.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_8",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "What can Steve possibly fall victim to?",
                    correctAnswer: "U2FsdGVkX18pkgF/8ZVjOhvQjP//VdagnsHe0YYXjzM=",
                    choices: ["Baiting","Quid Pro Quo","Eavesdropping","Piggybacking"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 9",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_9",
                    html:`<div class="clearfix">
                                <img src="img/test/q3_9.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Call">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">During her break, Linda calls her electric provider to pay for outstanding bills. To access her account, Linda was asked to pay with her debit card details, which must be said over the phone.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_9",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"What can Linda possibly fall victim to?", 
                    correctAnswer: "U2FsdGVkX18pkgF/8ZVjOhvQjP//VdagnsHe0YYXjzM=",
                    choices: ["Quid Pro Quo","Angler Phishing","Eavesdropping","Shoulder Surfing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 10",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_10",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_10.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Selling">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Isaac works for a cellular provider. To make some side money, Isaac has decided to sell in use phone numbers as well as customer information on a black market site. He does so once every other month and has yet to be caught.</p>
                            </div>`, 
            },{
                    type: "radiogroup",
                    name: "q3_10",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which of the following closely relates to the attack being committed?",
                    correctAnswer: "U2FsdGVkX19M14C12r8he6inAEvBXQnlu9Ichigtw6bsVVh+5T1oO1l5/0trQaeL",
                    choices: ["Tailgating","Diversion Theft","Whaling","Malicious Insider"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 11",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_11",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_11.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Delivery">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">A false company created by an individual manages to be a part of an exclusive online business networking site. He claims to be a purchasing agent for Walmart and informs others in the network that new shipments are to be sent to a different warehouse effective immediately. He also mentions that the legitimate company warehouse is under construction and will not be used until further notice.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_11",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"A false company and someone impersonating to be a purchasing agent from a legitimate company to divert the shipment destination of goods to a different location is a common tactic used in:",
                      
                    correctAnswer: "U2FsdGVkX1/5krIh1CqVILziHHZjZ82GHi3FQpZfmaw=",
                    choices: ["Pretexting","Business Email Compromise","Diversion Theft","Company Fraud"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 12",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_12",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_12.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Factory with delivery truck">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">An individual who works in a manufacturing plant returns to the warehouse in their next shift. Knowing when there would be minimal surveillance and human presence, he proceeds to the servicing department. Without anyone noticing, this person alters the destination address to another warehouse to be intercepted for a specific shipment containing high value goods.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_12",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title: "The act of altering the destination address of a shipment containing high value goods to be intercepted for personal gain is a common practice with:",
                    correctAnswer: "U2FsdGVkX1/5krIh1CqVILziHHZjZ82GHi3FQpZfmaw=",
                    choices: ["Tailgating","Spear Phishing","Diversion Theft","Typosquatting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 13",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_13",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_13.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Sneaking">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Tabatha, someone who does not have authorization to enter a building, waits for someone to enter the building. A few minutes in, an employee approaches the building entrance while on their phone, unknowing that he is being followed. This person enters via key card and before the door can fully shut, Tabatha puts her foot in behind the door and enters afterwards.</p>
                            </div>`,
            },{
                    type: "radiogroup",
                    name: "q3_13",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Which social engineering attack did Tabatha use to enter the building?", 
                    correctAnswer: "U2FsdGVkX19JP55bRE+1qzpU+VvnJJmJaYWZ+Y7/ghk=",
                    choices: ["Tailgating","Piggybacking","Pretexting","Shoulder Surfing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 14",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_14",
                    html: `<div class="clearfix">
                                    <img src="img/test/q3_14.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="USB stick">
                                    <h3 class='mt-3'>Scenario</h3>
                                    <p class="mt-3">A flash drive has been left behind in Marcus’s local coffee shop. Marcus thinks that he may be able to find the original owner of the flash drive if he checks the contents inside.</p>
                                </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_14",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"What type of attack has Marcus fallen into?",
                    correctAnswer: "U2FsdGVkX1/WDXhhJgDu9jvTEqsLIzOOyFqHBTc/fCA=",
                    choices: ["Whaling","Baiting","Diversion Theft","Quid Pro Quo"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 15",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_15",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_15.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Real estate agent">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">An individual knocks at your door and presents themselves as a real estate agent. Without showing you any credentials, the individual informs you that they think your building is worth a lot of money. This individual then asks if they could check the perimeter of the building so they can get an estimate of how much the property could sell for.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_15",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "While the individual seems to have good intentions, this type of behavior is a good indicator that something is not right. This individual is probably creating a fake scenario to pull off what type of social engineering attack?",
                    correctAnswer: "U2FsdGVkX19jOjafFaZVbCVwoSFbxIP8Hx/+dz9GPLw=",
                    choices: ["Eavesdropping","Pretexting","Shoulder Surfing","Quid Pro Quo"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 16",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_16",
                    html:`<div class="clearfix">
                                <img src="img/test/q3_16.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Email love letter">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Veronica has spent the past four months emailing Jeremy, a man from Canada. They have sent pictures of themselves to each other, and Veronica considers herself in an online relationship with Jeremy. Jeremy asks to come visit Veronica, but since she lives in the south of the United States, he will need help paying for the ticket. Veronica willingly sends the money to Jeremy.</p>
                            </div>`,
            },{
                    type: "radiogroup",
                    name: "q3_16",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Veronica is likely falling victim to what type of attack?",
                    correctAnswer: "U2FsdGVkX1+0h5chXRI3PpWNffT9VXAQzuZ02JrNYXI=",
                    choices: ["Baiting","Honeypot","Angler Phishing","Pretexting"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 17",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_17",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_17.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Watching someone secretly">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Steven is working on filling a job application at his local library. Sitting behind him is a hooded individual looking at his screen and writing down Steven’s personal information.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_17",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "What type of attack is being committed by the hooded individual?", 
                    correctAnswer: "U2FsdGVkX1+ZkjaLA7n3YuVkJfUrr8xb8kalHpG/MYI+lwlv1+0xaH7iU+G84LLD",
                    choices: ["Eavesdropping","Spear Phishing","Piggybacking","Shoulder Surfing"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 18",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_18",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_18.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Restaurant">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">During their lunch break, Max and Chloe are discussing the new IT security updates in the company break room with others close by. They are discussing information that is not supposed to be publicly known.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_18",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Max and Chloe could fall victim to which type of social engineering attack?",
                    correctAnswer: "U2FsdGVkX19DZngwcUCEGkL869LoSxzPAJkKUfPZhbE=",
                    choices: ["Eavesdropping","Whaling","Tailgating","Diversion Theft"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 19",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_19",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_19.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Keys">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Michael works as a security guard for a company. Due to the nature of his job, he has keys to all parts of the company’s building. Michael is in danger of losing his position, so he decides to make copies of all of the building’s keys.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q3_19",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "What social engineering attack is Michael plotting?",
                    correctAnswer: "U2FsdGVkX1+dM17SG3sN95HE/VK/ne9wO1uPNVmUUB1fTOC0zma34fN2pb82v8FS",
                    choices: ["Quid Pro Quo","Diversion Theft","Tailgating","Malicious Insider"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 20",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "scenario3_20",
                    html: `<div class="clearfix">
                                <img src="img/test/q3_20.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Handshake">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">Retail worker Veronica has keys that unlock the devices that protect the higher priced merchandise.  Robert, who works at a restaurant not far from Veronica’s place of work, asks Veronica to leave one of the devices unlocked for him. In exchange, Robert offers Veronica discounts at the restaurant he works at.</p>
                            </div>`,
            },{
                    type: "radiogroup",
                    name: "q3_20",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Robert is trying to instigate what type of social engineering attack?",
                    correctAnswer: "U2FsdGVkX1+EvBcUfSSJlMsDJOHpdA4IvTXYxOtoXwY=",
                    choices: ["Quid Pro Quo","Tailgating","Diversion Theft","Malicious Insider"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 21",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img3_21",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q3_21.png" class="mt-3 col-sm-6 px-0 rounded" alt="Disguised"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q3_21",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "This type of attack involves a perpetrator creating a fake scenario or impersonating an authority figure to get a victim to disclose information or perform a compromising action.",    
                    correctAnswer: "U2FsdGVkX19aBs40fcPxZUpFGQjyJtT8HTfV6Q2c7n4=",
                    choices: ["Pretexting","Baiting","Tailgating","Scareware"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 22",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img3_22",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q3_22.png" class="mt-3 col-sm-6 px-0 rounded" alt="Man with laptop"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q3_22",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "It is safe to review personal information in a public space.", 
                    correctAnswer: "U2FsdGVkX1/zqiZKJQ/p3jzI7eAOEmhb8cF5Bs4EJX8=",
                    choices: ["True","False"]
                }
            ]
        },{
            name: "Physical Attacks 23",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img3_23",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q3_23.png" class="mt-3 col-sm-6 px-0 rounded" alt="Breaking-in"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q3_23",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which of these is a good example of piggybacking?",
                    correctAnswer: "U2FsdGVkX18+jNMW6YbAKEi/nRV3E0Muv+yOn252LFmCT54Roi+JhxiYF1tDj7p+pTdlEdQo0LKETuCrB/+tXrYacoBzD5i7fLGcrHEXK9k=",
                    choices: [
                        "Forwarding a chain email to new recipients",
                        "Following an employee into a restricted area through deception",
                        "Eavesdropping on a confidential conversation",
                        "Asking someone for a favor in return for a reward"
                    ],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 24",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img3_24",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q3_24.png" class="mt-3 col-sm-6 px-0 rounded" alt="Watching someone secretly"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q3_24",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title:"Watching an individual type their password into their computer is known as:",
                    correctAnswer: "U2FsdGVkX1/h9iMyFouQEHDkH0o3bOQyiUBbBM0pa75IBpk7CNaEJg9wEtiMEk8O",
                    choices: ["Piggybacking","Clickjacking", "Shoulder Surfing", "Quid pro quo"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 25",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img3_25",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q3_25.png" class="mt-3 col-sm-6 px-0 rounded" alt="Fraud"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q3_25",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Good examples of physical social engineering tactics are:",
                    correctAnswer: "U2FsdGVkX1/My5R66o/GhQZTBKBrFt60Ziq+2q4J3XBpdIB4etg9v7ttv5B4WGqapFV6vNpZb4Re8cagLKx84Q==",
                    choices: [
                        "Baiting, Piggybacking, and Eavesdropping",
                        "Shoulder Surfing, Phishing, and Baiting",
                        "Honey Potting, Clickjacking, and Vishing",
                        "Whaling, Spear Phishing, and Shoulder Surfing",
                    ],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks 26",
            randomizationGroup: 'A',
            questions: [
                {
                    type: "html",
                    name: "img3_26",
                    html: `<div class="row justify-content-center px-2">
                                <img src="img/test/q3_26.png" class="mt-3 col-sm-6 px-0 rounded" alt="Sneaking"/>
                            <div>`
                },{
                    type: "radiogroup",
                    name: "q3_26",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Following an employee into a restricted company site without being discovered is classified as:",
                    correctAnswer: "U2FsdGVkX19Xw79dDrnI6RpX9HX+O+j61WdQj/3uQx4=",
                    choices: ["Tailgating","Shoulder Surfing", "Pretexting", "Quid pro quo"],
                    choicesOrder: "random"
                }
            ]
        },{
            name: "Physical Attacks multiple 1",
            randomizationGroup: 'B',
            questions: [
                {
                    type: "html",
                    name: "scenario4_1",
                    html: `<div class="clearfix">
                                <img src="img/test/q4_1.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Colleagues">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">A threat actor waits outside in a company’s parking lot for an employee to enter the building. As soon as the individual notices someone walking towards the entrance, he walks out and proceeds to move closer to the employee. He asks the employee how they’re doing and the attacker creates a backstory of how busy work has been lately to create an illusion that he is also an employee. By the time both the attacker and employee steps in front of the building, he waits for the employee to use their access card, which he does, allowing entry to the attacker.</p>
                            </div>`,
                },{
                    type: "checkbox",
                    name: "q4_1",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which social engineering attacks are being used in this scenario?",
                    correctAnswer: ["U2FsdGVkX18M6whbMduOjWSYsm+F1SSLgnSD5sYMlNQ=","U2FsdGVkX18hq5obZBCiFDBA63gNCKRS42f7BLd04AU="],
                    choices: ["Tailgating","Piggybacking","Pretexting","Malicious Insider"],
                }
            ]
        },{
            name: "Phishing Online Environment Physical Attacks multiple 2",
            randomizationGroup: 'B',
            questions: [
                {
                    type: "html",
                    name: "scenario4_2",
                    html: `<div class="clearfix">
                                <img src="img/test/q4_2.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Email">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">You notice an email coming from a bank with a subject line inquiring for an overdue invoice. The email claims that there’s been an issue with your bank account and if information isn’t updated, it will be closed permanently. To rectify this issue, a link is provided at the bottom of the email. You decide to click on the link and as you do so, a pop-up page appears with a warning sign that your system is infected.</p>
                            </div>`,
                },{
                    type: "checkbox",
                    name: "q4_2",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which cyberattacks are being utilized in this scenario?",
                    correctAnswer: ["U2FsdGVkX1850Y59s5YlIG7QCtv/grcNhSQaSKs9jwo=","U2FsdGVkX1/9k9dFmZZqZb4DbO6hIcEFFwKanEUB66Q="],
                    choices: ["Phishing","Scareware","Clickjacking", "Quid Pro Quo"],
                }
            ]
        },{
            name: "Phishing multiple 3",
            randomizationGroup: 'B',
            questions: [
                {
                    type: "html",
                    name: "scenario4_3",
                    html: `<div class="clearfix">
                                <img src="img/test/q4_3.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Email">
                                <h3 class='mt-3'>Scenario</h3>
                                <p class="mt-3">After carefully reviewing Cisco’s employee directory, an attacker selects a head engineer who may have privileged information regarding their secure control framework on his computer. The attacker sends an email to him with a “spoofed” email address, impersonating a recruiter from Palo Alto Networks looking for a dedicated head engineer just like him. The email refers to the employee by his name, and asks him to open the excel sheet attached so that he can insert his availability for a quick chat.</p>
                            </div>`,
                },{
                    type: "checkbox",
                    name: "q4_3",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "What different types of social engineering methods are employed by the attacker in this case?",
                    correctAnswer: ["U2FsdGVkX1/+CQVto6jJvOCtQw3XfNHyX1Vinw21qy4=","U2FsdGVkX18OO0i+l7+3Po2F5Vn5m30Yt6Y8ndy1sFNTlTVewyPIImPivQDqKS8G"],
                    choices: ["Spear Phishing","Angler Phishing","Business Email Compromise", "Vishing"],
                }
            ]
        },{
            name: "Physical Attacks multiple 4",
            randomizationGroup: 'B',
            questions: [
                {
                    type: "html",
                    name: "scenario4_4",
                    html: `<div class="clearfix">
                                    <img src="img/test/q4_4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Redirect shipment">
                                    <h3 class='mt-3'>Scenario</h3>
                                    <p class="mt-3">George, an employee at a semiconductor manufacturing company, decides to redirect an upcoming shipment of silicon to an alternate location with malicious intent.</p>
                                </div>`,
                },{
                    type: "checkbox",
                    name: "q4_4",
                    isRequired: true,
                    requiredErrorText: "Please select an answer.",
                    title: "Which two social engineering attacks best describe this situation?",
                    correctAnswer: ["U2FsdGVkX1/hUm0nZNa+kx5+GPPDK+uoMoandbYjUw0=","U2FsdGVkX18RHAGOxTVhjNCMy9A8GveaX2+qxtkiS3qrUdlIstkzTfKqunMO1MMJ"],
                    choices: ["Diversion Theft","Quid Pro Quo","Piggybacking","Malicious Insider"],
                }
            ]
        },
    ],
    completedHtml:`<h4 class="text-center mt-4 mt-lg-5">You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4> 
                <br/>
                <div class='row justify-content-center border-top mx-0'> 
                    <div class='col-sm-6 align-self-center p-3 p-md-4'>
                        <div class='row justify-content-center'>
                            <div class="col-8"> 
                                <canvas id='doughnutChart'></canvas>
                            </div>
                        </div>
                    </div> 
                    <div class='col-sm-6 align-self-center mt-3 p-1 p-md-4'>
                        <canvas id='barChart'></canvas>
                    </div> 
                </div>
                <div class='row justify-content-evenly border-top mx-0'> 
                    <div class='mt-4 mt-md-3 col-sm-4'>
                        <div class='d-flex justify-content-center'>
                            <div class='position-relative'>
                                <div class="position-absolute">
                                    <a href='test.html' onclick="window.location.reload();" class="btn-size btn-red btn-nav btn-repeat d-block"> </a>
                                </div>
                                <div class="link-wrapper">
                                    <a href='test.html' onclick="window.location.reload();" class="color-dark fs-responsive link-completePage">Repeat Test</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='mt-4 mt-md-3  col-sm-4'>
                        <div class='d-flex justify-content-center'>
                            <div class='position-relative'>
                                <div class="position-absolute">
                                    <a href='../resources.html' class="btn-size btn-red btn-nav btn-start-info d-block"> </a>
                                </div>
                                <div class="link-wrapper">
                                    <a href='../resources.html' class="color-dark fs-responsive link-completePage">Go to SE Terms</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='mt-4 mt-md-3 col-sm-4'>
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
};