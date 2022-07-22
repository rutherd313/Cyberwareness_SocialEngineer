var json_test_de = {
    title:"Bewusstsein für Social Engineering",
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
    locale:"de",
    pages: [
        {
            name:'start',
            questions: [
                {
                    type: "html",
                    html: `<h3 class="text-center mt-4 mt-lg-5"> Starten Sie den Test </h3>
                            <div class="row mt-3 pt-3 bg-grey border-top border-bottom">
                                <p class="text-center"> Sie sind dabei einen <b>Test</b> über Social-Engineering-Angriffe zu beginnen. Da es <b>kein Zeitlimit</b> gibt, nehmen Sie sich bitte die Zeit, die Fragen gründlich zu lesen. Es ist möglich, den <b>Test</b> zu <b>wiederholen</b>. Bitte klicken Sie auf den Button <b>unten rechts</b>, wenn Sie bereit sind. </p>
                                <p class="text-center"> Wenn Sie sich zunächst über Social-Engineering-Angriffe <b>informieren</b> möchten, klicken Sie <a href='info.html#de'>hier</a>.</p>
                                <p class="text-center"><b>Hinweis:</b> Zur besseren Lesbarkeit wird im Folgenden für Personenbezeichnungen und personenbezogene Wörter die männliche Form genutzt. Diese Begriffe gelten für alle Geschlechter.</p>
                            </div>
                            <div class="attribution">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Social-Engineering-Angriffe können sowohl online als auch physisch erfolgen.",
                    correctAnswer: "U2FsdGVkX1++zXBZFXOvRbDv83XeAHJpj2hRxgNsAeI=",
                    choices: ["Wahr","Falsch"]
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Social-Engineering-Angriffe sind nur auf individueller Ebene schädlich.",
                    correctAnswer: "U2FsdGVkX1+WK6VdSvXnHDHh1UJCLWvBf1okiBcrY9E=",
                    choices: ["Wahr","Falsch"],
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welches Ziel verfolgen die verschiedenen Social-Engineering-Methoden?",
                    correctAnswer: "U2FsdGVkX19s0tNf4pJl/gL1ikcLRCfbADnHu4cwFQhvaALsJZfx+NzPWkhp4cEoWglE9rfORFwiRxosuRC0qJvyXUpWPA8QP5jhrcLqRsbKFoTCkSTMDln7lmdDT/bT",
                    choices: [
                        "Geld für eine Organisation zu beschaffen",
                        "Einen Einblick in die neue Produktpalette eines Unternehmens zu bekommen",
                        "Sich als namhafte Mitglieder eines Unternehmens auszugeben",
                        "Zugang zu wichtigen oder persönlichen Informationen zu erhalten",
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
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Social Engineering ist ... ",
                    correctAnswer: "U2FsdGVkX19yQm0/NaSD99sJdyPTayGkA8HSPsS/xd93O8UUloa5142j1BKgR33yWUY8xscfyon+eA+W6mTcb02Pj8pN83tJ96FM/VAuS7WIkZVoeIX1HoE6dke3mpi2E9hmSo2fw4Hnwbj8GwdxBg==",
                    choices: [
                        "jemanden austricksen oder täuschen, damit er vertrauliche Informationen preisgibt",
                        "nach internationalem Recht als illegal angesehen",
                        "eine Möglichkeit zur Erstellung neuer Softwareprodukte durch die Bereitstellung von Open-Source-Lizenzen",
                        "zum Sammeln von Feedback zu Software-Beta-Tests"
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie erhalten eine E-Mail von Ihrem "Arbeitgeber". Das Firmenlogo ist in der E-Mail zu sehen und Ihr Name ist in der Grußformel aufgeführt. In der E-Mail geht es um Ihre Stundenzettel und Ihr Arbeitgeber möchte, dass Sie die Stunden des letzten Monats überprüfen. Der "Stundenzettel" ist als "PDF" angehängt. Sie laden den Anhang herunter, bemerken aber nicht, dass im Hintergrund eine Schadsoftware auf Ihrem Computer installiert wird.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_1",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Da die E-Mail von Ihrem Arbeitgeber stammt, scheint sie von einer vertrauenswürdigen Quelle zu sein. Ein Angriff, der von einer vertrauenswürdigen Quelle wie Ihrem Arbeitgeber ausgeht, steht jedoch in engem Zusammenhang mit:",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie erhalten eine E-Mail von der oberen Führungsebene, in der Ihnen mitgeteilt wird, dass Sie bis Ende der Woche ein Schulungsmodul herunterladen und ausfüllen müssen, bevor Sie mit Ihrem "neuen Kunden" arbeiten können. Das Dokument ist am Ende der E-Mail angehängt. Die Absenderadresse scheint jedoch etwas merkwürdig zu sein. Dennoch denken Sie sich, dass das Schulungsmodul wichtig sein muss, denn Ihr Chef hat es direkt an Sie geschickt, und Sie haben einen neuen Kunden. Nachdem Sie auf das Download-Symbol für die Datei geklickt und sie geöffnet haben, wird eine Schadsoftware auf Ihrem Computer installiert.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_2",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Informationen, die von einer vertrauenswürdigen Quelle, z. B. der oberen Führungsebene, an einen bestimmten Mitarbeiter mit der direkten Aufforderung, eine Aktion durchzuführen, gesendet werden, können als diese Art des Angriffs eingestuft werden:",
                    correctAnswer: "U2FsdGVkX1+PVTbs6MJzWdvXEar3j6IMKHjxIep11PI=",
                    choices: ["Whaling","Scareware","Spear Phishing","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Ein "Unternehmenspartner" wendet sich direkt an den Vorstandsvorsitzenden eines Unternehmens und bittet ihn, eine von ihm gesendete dringende E-Mail weiterzubearbeiten. Der CEO findet die E-Mail in seinem Posteingang und stellt fest, dass der "Unternehmenspartner" ihn bittet, vertrauliche Informationen, die bei einem kürzlich erfolgten Angriff verloren gegangen sind, erneut zu überprüfen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_3",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Den Eindruck der Dringlichkeit erwecken, um sensible Informationen von der Geschäftsleitung zu erhalten und so deren Autorität zu nutzen, ist weit verbreitet bekannt als:",
                    correctAnswer: "U2FsdGVkX18eYZrvUNlWFJEOXZoaaFzAIUenZawis7A=",
                    choices: ["Whaling","Vishing","Quid Pro Quo","Dringlichkeitsbetrug"],
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
                    html: `<div class="clearfix">
                                <img src="img/test/q1_4.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiving SMS">
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Mike wurde per SMS über eine ungewöhnliche Aktivität in seinem Apple-Konto informiert. Die Textnachricht enthält einen Link, auf den er klicken soll, um die Aktivität zu überprüfen. Der Link führt jedoch zu einer gefälschten Website, die darauf abzielt, Mikes Anmeldedaten zu stehlen, indem sie ihn nach seinen Apple-ID-Anmeldedaten fragt.</p>
                            </div>`,
                },{
                    type: "radiogroup",
                    name: "q1_4",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Bei der SMS, die Mike erhalten hat, handelt es sich um einen Cyberangriff, der in erster Linie auf Opfer per Textnachrichten abzielt, auch bekannt als:", 
                    correctAnswer: "U2FsdGVkX18nuPmO901fkCVb7Ne+FxPZn2TfLxdiPO8=",
                    choices: ["Smishing","Vishing","Pretexting","Zugangsdaten-Diebstahl"],
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
                    html:`<div class="clearfix">
                                <img src="img/test/q1_5.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Receiving call">
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Ein Anrufer gibt sich als Mitarbeiter des Finanzamtes aus und möchte Ihre persönlichen Daten überprüfen. Der Anrufer teilt Ihnen mit, dass es ein ausstehendes Problem in Bezug auf Ihre Steuerformulare gibt. Wenn Sie die gewünschten Informationen nicht bereitstellen, droht der Anrufer damit, Ihre Steuererstattungen auszusetzen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_5",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Ein Betrug am Telefon mit Drohungen und dem Versuch, vertrauliche Informationen zu stehlen, ist eine Form welcher Cyberattacke?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sally, die sich in letzter Zeit über ihre Geschäfte mit Unternehmen X beschwert hat, hinterlässt einen Kommentar in dessen Online-Bewertungsbereich. Jemand, der sich als Kundendienstmitarbeiter von Unternehmen X ausgibt, kontaktiert Sally und bittet sie, die für ihren Kauf verwendeten Kreditkarteninformationen zu überprüfen, um sicherzustellen, dass sie eine rechtmäßige Kundin ist, bevor ihre Beschwerde bearbeitet wird.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_6",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Der falsche Kundenbetreuer, der sich als Vertreter von Unternehmen X ausgibt, nutzt die öffentlich zugänglichen Informationen, wie z. B. den Bewertungsbereich eines Unternehmens, für welche Art der Cyberattacke aus?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">ConnectUs, eine beliebte Social Media-Website, die Sie nutzen, hat Sie direkt angeschrieben. Aufgrund der weit verbreiteten technischen Probleme, mit denen viele Nutzer zu kämpfen haben, teilen sie Ihnen mit, dass Sie sich direkt an sie wenden können, wenn Sie Probleme oder Fragen zu Ihrem Konto haben.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_7",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Dieses Unternehmen, das sich als Kundendienst einer Social-Media-Plattform ausgibt, ist eine typische Masche welcher Cyberattacke?",
                    correctAnswer: "U2FsdGVkX1/bGdRkfeQ7zSCOO8edm/LH7bUoJ8f+NKw=",
                    choices: ["Angler Phishing","Quid Pro Quo","Whaling","Social-Media-Betrug"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Eine E-Mail von dem "Geschäftsführer" Ihres Unternehmens besagt, dass ein Geschäftspartner eine Zahlung für eine ausstehende Rechnung verlangt. Normalerweise gehen solche E-Mails bei einer anderen Abteilung ein, aber da dieser Partner mit einem Liquiditätsengpass konfrontiert ist, muss die Zahlung so schnell wie möglich in voller Höhe erfolgen. Der "Geschäftsführer" bittet Sie, Firmengelder auf ein in der E-Mail angegebenes Bankkonto zu überweisen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_8",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Sich als eine legitime Person wie den Geschäftsführer auszugeben, um eine Organisation zu betrügen, gehört am ehesten zu dieser Art des Betrugs:",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Vision Works, der vertrauenswürdige Partner Ihres Unternehmens, schickt eine E-Mail, in der er die Überweisung eines genehmigten Darlehens fordert. Die Gespräche über ein Darlehen sollen jedoch erst am Ende des Quartals stattfinden. Außerdem soll Vision Works noch nicht über die Bewilligung dieses Darlehens informiert werden.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_9",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Der Betrugsversuch, bei dem sich ein Angreifer wie ein vertrauenswürdiger Partner ausgibt, um Ihre Organisation zu betrügen, handelt es sich um folgende Art des Cyberangriffs:",
                    correctAnswer: "U2FsdGVkX1/PdoED3pdhGWjq5o8f9shI1Bv2Be9gcHic2sInPuiHzdAYgeYvZTZv",
                    choices: ["Business Email Compromise","Quid Pro Quo","Angler Phishing","Finanzbetrug"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Der Leiter einer Einzelhandelsfiliale, Raul, hat eine E-Mail erhalten, in der ihm mitgeteilt wird, dass eine Aktualisierung der Unternehmensrichtlinien stattfindet. In der E-Mail wird behauptet, dass er die Daten aller Mitarbeiter in seinem Geschäft angeben muss.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_10",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Da Raul dafür bekannt ist, dass er dieses spezielle Einzelhandelsgeschäft leitet, handelt es sich am ehesten um welche Art von Phishing?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Ein Angreifer, der sich mit einer gefälschten E-Mail-Adresse als CEO eines Unternehmens ausgibt, kontaktiert einen hochrangigen Mitarbeiter. Der Angreifer bittet um unternehmensweite Gehaltsabrechnungsdaten, die der hochrangige Mitarbeiter schnell per E-Mail weiterleiten soll.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_11",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Einem hochrangigen Mitarbeiter vertrauliche Informationen zu entlocken, ist ein klares Indiz für welche Art von Angriff?", 
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie erhalten eine Textnachricht von Facebook, in der behauptet wird, dass jemand versucht hat, von einem nicht erkannten Gerät auf Ihr Konto zuzugreifen. In der Nachricht werden Sie aufgefordert, Ihr Kontopasswort zurückzusetzen, und erhalten einen Link, über den Sie dies tun können. Sie wissen jedoch, dass Unternehmen nicht freiwillig Textnachrichten mit Links versenden, wenn sie nicht dazu aufgefordert werden.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_12",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Dies ist ein klassisches Beispiel für welche Art von Social-Engineering-Angriff?", 
                    correctAnswer: "U2FsdGVkX1+WqqZauRLGkycvxh2gl3HYiKZbcmcuSac=",
                    choices: ["Shoulder Surfing","Smishing","Pretexting","Social Media Betrug"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Chegg ist ausgefallen. Ein Angreifer nutzt die Gelegenheit, um ein gefälschtes Twitter-Konto als Chegg-Support zu erstellen, um mit frustrierten Studenten zu kommunizieren. Der Angreifer beginnt, Online-Nutzer anzusprechen, die kürzlich über Chegg getwittert haben, und fragt sie nach ihren persönlichen Kontodaten, um ihnen weiterhelfen zu können.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_13",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Der Versuch, sich als der Social-Media-Account eines Unternehmens auszugeben, um persönliche Kontodaten zu sammeln, ist ein typisches Beispiel für einen dieser Angriffe:",
                    correctAnswer: "U2FsdGVkX1+DpZdtF7QeTfEMmg033vKWmyDoXO2cXgM=",
                    choices: ["Quid Pro Quo","Angler Phishing","Spear Phishing","Social Media Betrug"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Die E-Mail eines unwissenden Firmenmitarbeiters, der sich im Urlaub befindet, wurde von einem Angreifer kompromittiert. Der Angreifer sendet eine E-Mail an die Kollegen des Mitarbeiters, in der er sie um ein Update zu ihrem aktuellen Projekt bittet und sie auffordert, neue geschäftliche Updates von ihren Partnerunternehmen sofort weiterzuleiten.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q1_14",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Beim Vortäuschen oder Ausnutzen eines kompromittierten Arbeits-E-Mail-Kontos, um sich Zugang zu sensiblen Informationen zu verschaffen, handelt es sich um:", 
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Der Empfang einer E-Mail, in der nach persönlichen Daten gefragt wird, fällt unter welche Kategorie von Social Engineering-Angriffen?", 
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welche dieser Kategorien ist KEINE Unterkategorie von Phishing?", 
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
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welche Technik zielt auf bestimmte Personen ab?", 
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welcher der folgenden Punkte kann NICHT als Bestandteil von Phishing eingestuft werden?", 
                    correctAnswer: ["U2FsdGVkX1/+DOtDBPmK7xinFXOIxlId8iuxPWLXnv0OCnziH3HeSACtxpxR6WiJ5kXY4G0gfggQ8ijT7XTsQxb1r47Kx78j8+ffabgC4PiWAXRkgPMqmk7swvGlEKBFYbdW+d2lNtLcb7LjIbZa/Q==", "U2FsdGVkX1/CeDMZ546c4vDJSZvjUO1jfP2DyBsI22Tesoj+1U0uJupLTGSycLDenkdYZUizQPc8/dPesz0Az7x2tmyfPkq5C+pk9dIbLW4="],
                    choices: [
                        "Das Erstellen falscher Social-Media-Profile, um ahnungslose Menschen zu täuschen",
                        "Sich als eine Firma mit einer falschen E-Mail-Adresse ausgeben, um E-Mails an andere zu senden",
                        "Hinterlassen einer Voicemail-Nachricht, die vorgibt, eine Autoritätsperson zu sein",
                        "Malware in einen ungeprüften Download von Dritten zu packen"
                    ]
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Alice arbeitet für das Unternehmen "XYZ Industries". Die Website des Unternehmens ist als "xyzindustries.com" aufgeführt. In der Eile gibt Alice versehentlich "xzyindustris.com" in ihren Webbrowser ein. Sie wird auf eine Seite geleitet, die eine ähnliche Anmeldeseite wie die ihres Unternehmens enthält. Es handelt sich jedoch um eine gefälschte Anmeldeseite, die darauf abzielt, ihren Benutzernamen und ihr Passwort zu stehlen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_1",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welchem Social-Engineering-Angriff ist Alice zum Opfer gefallen?",
                    correctAnswer: "U2FsdGVkX19ES8IOo6eKBEzM+uCTFFwvF/vzFjSSfK8=",
                    choices: ["Typosquatting","Clickjacking","Shoulder Surfing","Login Betrug"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Anstatt die korrekte Domain der Bank, "axisbank.com", einzugeben, tippen Sie "accessbank.com" ein und kommen trotzdem auf eine Website. Die Startseite sieht genauso aus wie jede andere Anmeldeseite einer Bank, und Sie bemerken nicht, dass Sie den tatsächlichen Namen der Bank falsch interpretiert haben. Sie erstellen ein Benutzerkonto bei dieser "Bank", ohne zu wissen, dass es sich in Wirklichkeit um einen Spin-off der Axis Bank handelt, der dazu dient, persönliche Daten von unwissenden Online-Benutzern zu sammeln.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_2",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche Social-Engineering-Attacke wird von dieser falschen Website ausgenutzt?",
                    correctAnswer: "U2FsdGVkX19ES8IOo6eKBEzM+uCTFFwvF/vzFjSSfK8=",
                    choices: ["Vishing","Typosquatting","Tailgating","Zugangsdaten-Diebstahl"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Beim Stöbern in seinen Lieblingsblogs sieht John einen Bild-Link mit einem blinkenden Warnzeichen, der behauptet, sein Computer sei mit fünf verschiedenen Trojanerviren infiziert. John weiß nicht, was ein Trojaner ist oder was er bewirkt, aber er weiß, dass es nicht gut ist, wenn sein Computer infiziert ist. Er klickt auf den Bild-Link und lädt eine ausführbare Datei herunter, die seinen Computer um 1000 % langsamer laufen lässt.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_3",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Indem er auf das Warnzeichen klickt, um ein Problem zu “beheben”, hat der Angreifer die Angst ausgenutzt, indem er John in die Falle für welche Art von Angriff lockte?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie sind auf youtubetomp3.com und laden Audio aus einem YouTube-Video herunter, das Sie in ein Video einfügen möchten, das Sie gerade erstellen. Es erscheint ein Popup-Fenster, das Sie darauf hinweist, dass Ihre Version von Adobe Flash veraltet ist und Ihr Computer ohne ein Update anfällig für bösartige Angriffe ist. Das Pop-up fordert Sie auf, auf einen Link zu klicken, um das "neueste Adobe Flash-Update" herunterzuladen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_4",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Der Angreifer nutzt die Schwachstelle des Benutzers aus, indem er ihn dazu verleitet, sich zu “schützen”, indem er auf den Download-Link klickt. Die Verwendung von Pop-ups, um den Benutzer einzuschüchtern und zur Installation von Malware zu verleiten, ist ein Beispiel für welchen Social Engineering-Angriff?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Thomas beschließt, eine PNG-Datei zu komprimieren, und wählt dazu eine Website zur Dateikomprimierung. Nachdem er einige Bilder hochgeladen hat, ist die Komprimierung abgeschlossen und unten auf der Seite erscheint die Schaltfläche zum Herunterladen. Sie scheint sich inmitten von Links zu befinden, die viel größer sind. In der Annahme, dass Thomas auf die richtige Schaltfläche geklickt hat, wird im unteren Bereich seines Browsers eine Datei zum Herunterladen angezeigt. Es scheint jedoch, dass die heruntergeladene Datei weder denselben Dateinamen noch denselben Dateityp hatte.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_5",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Indem er auf die falsche Schaltfläche klickte, wurde Thomas Opfer welches Social-Engineering-Angriffs?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Alice erhält eine E-Mail, in der behauptet wird, sie sei für eine Online-Umfrage ausgewählt worden, um einen Amazon-Gutschein im Wert von 100 US-Dollar zu gewinnen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_6",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Alice wird mit einem Geschenkgutschein gelockt, was typisch für diese Angriffsart ist:", 
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
                    html: `<div class="clearfix">
                                <img src="img/test/q2_7.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Free Smartphone">
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Beim Stöbern in seinen Lieblingsblogs sieht John ein verlinktes Bild, das behauptet, er habe ein kostenloses iPhone gewonnen. John klickt auf den Link, lädt eine seltsame ausführbare Datei herunter und infiziert seinen Computer mit mehreren Trojanerviren.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_7",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"John wird durch den “Gewinn” eines kostenlosen iPhones dazu verleitet, auf den Link zu klicken. Das Anlocken von Opfern unter dem Vorwand einer Belohnung ist für diese Art von Angriff üblich:", 
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Während der Veröffentlichung einer neuen Konsolenversion von PlayStation sucht Markus verzweifelt online nach einer neuen PlayStation. Innerhalb einer halben Stunde entdeckt Markus eine Anzeige für eine neue PlayStation mit Rabatt. In der Anzeige wird behauptet, dass nur noch ein Platz frei ist, um diesen Rabatt in Anspruch zu nehmen. Um den Rabatt in Anspruch nehmen zu können, muss Markus seinen vollständigen Namen, seine Telefonnummer und seine E-Mail-Adresse angeben, um fortfahren zu können.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_8",
                    isRequired: true,
                    requiredErrorText:  "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Die Online-Anzeige, über die Markus gestolpert ist, lässt sich am besten als folgenden Angriff beschreiben:",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Auf der Suche nach Antworten auf ihre Hausaufgaben benutzt die Schülerin Michelle ihr iPad, um eine Website mit guten Informationen zu finden. Sie findet eine potenziell gute Website, aber nachdem sie auf den Link geklickt hat, wird sie auf eine Seite weitergeleitet, die besagt, dass ihr iPad mit einem Virus infiziert ist.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_9",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Mit welchem Social-Engineering-Angriff versucht diese Webseite Michelle auszutricksen?",
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
                    html:`<div class="clearfix">
                                <img src="img/test/q2_10.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Download button">
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Caroline ist auf der Suche nach einem kostenlosen Bildbearbeitungsprogramm. Sie sucht über Google und findet einen Link zu einer Website, die eine kostenlose Software anbietet. Auf der Website ist ein Bild des Software-Symbols zu sehen, das wie ein richtiges Bildbearbeitungsprogramm aussieht. Unter dem Bild befindet sich eine große Download-Schaltfläche und eine kleine unter den Produktinformationen, also klickt Caroline einfach auf die große Schaltfläche unter dem Symbol. Anstelle des Fotoeditors lädt Caroline Malware auf ihren Computer herunter, was zu einem Systemabsturz führt.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_10",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welcher Angriffstyp versucht, Menschen mit gefälschten Download-Buttons zu täuschen?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Auf einer unsicheren Website eines Drittanbieters ist eine Warnung erschienen, die Ihnen mitteilt, dass Ihr Computer mit einem Virus infiziert ist.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_11",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Diese Warnung ist ein legitimer Hinweis darauf, dass Ihr Computer infiziert ist.",
                    correctAnswer: "U2FsdGVkX1/nBW8xABiL7/LO9I963/VDmZkhxYfVnRc=",
                    choices: ["Wahr","Falsch"]     
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie möchten ein kostenloses VPN von einer Drittanbieter-Website herunterladen, aber die Download-Schaltfläche leitet Sie auf eine neue Webseite mit einer infizierten Download-Schaltfläche um.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_12",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Um welche Art von Social Engineering handelt es sich?",
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
                    requiredErrorText:  "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welcher der folgenden Angriffe nutzt die Angst der Menschen vor Hackerangriffen oder Viren aus, um sie zum Herunterladen von Malware zu verleiten?",
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Wenn man irrtümlich die falsche URL für eine Website eingibt und dennoch auf eine Seite weitergeleitet wird, die der erwarteten Seite einigermaßen ähnlich ist, kann man das als folgendes bezeichnen:",
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
                    html:`<div class="clearfix">
                                <img src="img/test/q2_15.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Won iPhone">
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie möchten einen neuen Film streamen, der gerade in die Kinos gekommen ist. Nachdem Sie die Streaming-Website auf Ihrem Computer aufgerufen haben, erscheint ein Pop-up-Fenster, das Ihnen mitteilt, dass Sie soeben ein neues iPhone gewonnen haben - Sie müssen nur auf den angegebenen Link klicken, um es zu erhalten.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q2_15",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Dieses Beispiel eines Social-Engineering-Angriffs ähnelt am meisten:",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Aufgrund von Änderungen im Büro werden Sie vorübergehend an den Schreibtisch eines anderen Mitarbeiters versetzt. Im Laufe der Woche ist Ihnen ein USB-Stick in der Ecke des Schreibtischs aufgefallen. Aus Neugierde beschließen Sie, den USB-Stick an Ihren Arbeitscomputer anzuschließen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_1",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Die Verwendung eines nicht geprüften Geräts ist nicht nur ein Verstoß gegen die Nutzung fremden Eigentums, sondern wird auch von dieser Art von Angriff unter Ausnutzung der Neugierde verwendet:", 
                    correctAnswer: "U2FsdGVkX18/msZzZhVE5yAcRQ3+UySZGcsrJrd0UTI=",
                    choices: ["Baiting","Diversion Theft","Scareware","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie arbeiten für ein großes internationales IT-Unternehmen in der Zentrale und plötzlich erscheint ein Mann im Anzug an Ihrem Arbeitsplatz. Er spricht Sie mit Namen an und sagt Ihnen, dass er ein Manager der Niederlassung in New York ist. Sie wissen, dass es in New York eine Niederlassung gibt, und fragen ihn, was er von Ihnen will. Er sagt Ihnen, dass er heute Morgen eine Besprechung mit Ihrem Chef "Billy" über ein neues Projekt hatte und "Billy" ihn an Sie weitergeleitet hat. Er hat einen USB-Stick für Sie dabei, auf dem das Firmenlogo abgebildet ist. "Dort finden Sie weitere Informationen über das Projekt", sagt er. Dann muss er gehen, um den Flug zurück nach New York zu erwischen. Sie stecken den USB-Stick in Ihren Computer...</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_2",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welche Social-Engineering-Taktik hat der angebliche Manager aus New York angewandt, um Sie zum Einstecken des USB-Sticks zu überreden?",
                    correctAnswer: "U2FsdGVkX1+Z01wWsAtekgR48qG6btjni4u19PItn40=",
                    choices: ["Tailgating","Pretexting","Spear Phishing","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Bei einer Ihrer Begegnungen in der Online-Dating-Welt erhalten Sie eine Nachricht von einem attraktiven Mann namens Fabio. Fabio stellt Ihnen Fragen über Sie und Sie über ihn. Ein ständiges Problem, das Fabio erwähnt, ist sein Auto, das immer wieder kaputt geht. Fabio besteht darauf, dass er Sie gerne kennen lernen würde. Er braucht jedoch etwas Geld, um sein Fahrzeug zu reparieren, und fragt Sie, ob Sie ihm einen Gefallen tun und ihm etwas Geld leihen können.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_3",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Der Einsatz von Romantik und Anziehungskraft ist eine gängige Taktik, die bei welchem Social-Engineering-Angriff verwendet wird?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Während Sie in Ihrer Dating-App durch Ihre Matches scrollen, erregt eines der Profile Ihre Aufmerksamkeit. In einer Nachricht dieser Person wird erwähnt, dass Sie zwar sehr weit voneinander entfernt wohnen, sie aber anbietet, bei der ersten Kontaktaufnahme umzuziehen. Die Person schildert ihre Kindheitsgeschichte und ihre aktuellen Lebensumstände. Am Ende der Nachricht wird eine E-Mail-Adresse angegeben und die Person besteht darauf, das Gespräch per E-Mail und nicht über die Dating-Website fortzusetzen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_4",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Das plötzliche Vortäuschen von Verliebtheit und das plötzliche Verlassen der Dating-Website, um eine engere Kommunikation zu führen, steht in engem Zusammenhang mit welchem Angriff?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Gustavo arbeitet als Sicherheitsbeamter für ein privates Unternehmen. Als Leiter des Sicherheitsteams hat er Zugang zu allen Bereichen des Firmengebäudes. Eines Tages wird er von einer Person angesprochen, die ihm einen Vorschlag unterbreitet. Er wird gebeten, einen der Eingänge zum Gebäude über Nacht offen zu lassen und dafür etwas Geld zu erhalten.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_5",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welche Art von Social-Engineering-Angriff wird im oberen Text beschrieben?", 
                    correctAnswer: "U2FsdGVkX18fxW7Cjac6H/l0yZIK8tfmxGpR/C87sKc=",
                    choices: ["Quid Pro Quo","Tailgating","Piggybacking","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Mary ist dabei, die Kontaktdaten ihrer Angestellten zu aktualisieren, während sie in ihrem örtlichen Café einen Kaffee genießt. Hinter ihr sitzt eine vermummte Person, die auf ihren Bildschirm schaut und die Telefonnummern und Privatadressen von Marys Mitarbeitern aufschreibt.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_6",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche Art von Angriff wird von der vermummten Person verübt?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Während der Zugfahrt beschließt John, seine Steuererklärungen einzureichen. Derjenige, der hinter John sitzt, hat freie Sicht auf seinen Bildschirm und alles, was er eingibt.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_7",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welchem Angriff kann John unwissentlich zum Opfer fallen?",
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
                    html: `<div class="clearfix">
                                <img src="img/test/q3_8.png" class="col-sm-6 float-sm-end mb-3 mt-2 ms-sm-3 mw-100 rounded" alt="Call">
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Während der Busfahrt versucht Steve, telefonisch eine Rechnung mit seinem Internetanbieter zu klären. Um Zugang zu seinem Konto zu erhalten, muss Steve sein Geburtsjahr und seine persönliche PIN angeben. Dabei hat er diese Informationen versehentlich an alle im Waggon weitergegeben.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_8",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welcher Attacke könnte Steve zum Opfer fallen?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Während ihrer Pause ruft Linda ihren Stromanbieter an, um ausstehende Rechnungen zu bezahlen. Um auf ihr Konto zugreifen zu können, wird Linda aufgefordert, die Daten ihrer Debitkarte anzugeben, die sie am Telefon nennen muss.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_9",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Linda könnte Opfer welcher Art von Betrug werden?", 
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Isaac arbeitet für einen Mobilfunkanbieter. Um sich etwas dazuzuverdienen, hat Isaac beschlossen, gebrauchte Telefonnummern und Kundendaten auf einer Schwarzmarktseite zu verkaufen. Er tut dies jeden zweiten Monat und wurde bisher noch nicht erwischt.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_10",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Um welche Art von Angriff handelt es sich?", 
                    correctAnswer: "U2FsdGVkX19/vAuv/qacsnrI/7u88Lm7jthqZgoKU+YTi6iz9asT4RCFY8YBZ1tC",
                    choices: ["Tailgating","Diversion Theft","Whaling","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Eine falsche Firma, die von einer Einzelperson gegründet wurde, schafft es, Teil einer exklusiven Online-Business-Networking-Seite zu werden. Er gibt sich als Einkäufer von Walmart aus und informiert die anderen Mitglieder des Netzwerks darüber, dass neue Lieferungen ab sofort an ein anderes Lager geschickt werden sollen. Er erwähnt auch, dass sich das Lager des rechtmäßigen Unternehmens im Bau befindet und bis auf Weiteres nicht benutzt werden wird.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_11",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Ein falsches Unternehmen und jemand, der sich als Einkäufer eines rechtmäßigen Unternehmens ausgibt, um den Bestimmungsort von Waren an einen anderen Ort zu verlegen, ist eine dieser Taktiken, die häufig eingesetzt werden:", 
                    correctAnswer: "U2FsdGVkX1/5krIh1CqVILziHHZjZ82GHi3FQpZfmaw=",
                    choices: ["Pretexting","Business Email Compromise","Diversion Theft","Unternehmensbetrug"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Eine Person, die in einer Produktionsanlage arbeitet, kehrt in ihrer nächsten Schicht ins Lager zurück. Da sie weiß, dass es nur minimale Überwachung und menschliche Präsenz gibt, begibt sie sich in die Wartungsabteilung. Ohne dass es jemand bemerkt, ändert diese Person die Zieladresse in ein anderes Lager, um eine bestimmte Sendung mit hochwertigen Waren abzufangen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_12",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Die Änderung der Zieladresse einer Sendung mit hochwertigen Gütern, die zum persönlichen Vorteil abgefangen werden soll, ist eine gängige Praxis folgender Attacke:",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Tabatha, eine Person, die nicht befugt ist, ein Gebäude zu betreten, wartet auf jemanden, der das Gebäude betritt. Nach ein paar Minuten nähert sich ein Angestellter dem Gebäudeeingang während er telefoniert, ohne zu wissen, dass er verfolgt wird. Diese Person betritt das Gebäude mit einer Schlüsselkarte, und bevor die Tür vollständig geschlossen werden kann, setzt Tabatha ihren Fuß zwischen die Tür und betritt anschließend das Gebäude.</p>
                            </div>`, 
                },{
                    type: "radiogroup",
                    name: "q3_13",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Welchen Social-Engineering-Angriff hat Tabatha verwendet, um in das Gebäude einzudringen?", 
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">In Marcus' örtlichem Café wurde ein USB-Stick zurückgelassen. Marcus glaubt, dass er den ursprünglichen Besitzer des USB-Sticks finden kann, wenn er den Inhalt überprüft.</p>
                            </div>` 
                },{
                    type: "radiogroup",
                    name: "q3_14",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Auf welche Art von Angriff ist Marcus hereingefallen?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Eine Person klopft an Ihre Tür und gibt sich als Immobilienmakler aus. Ohne sich auszuweisen, teilt sie Ihnen mit, dass sie der Meinung ist, dass Ihr Gebäude eine Menge Geld wert ist. Die Person fragt dann, ob sie den Umfang des Gebäudes überprüfen könne, um eine Schätzung des möglichen Verkaufspreises zu erhalten.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_15",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Auch wenn die Person gute Absichten zu haben scheint, ist dieses Verhalten ein guter Indikator dafür, dass etwas nicht stimmt. Diese Person entwirft wahrscheinlich ein falsches Szenario, um welche Art von Social-Engineering-Angriff auszuführen?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Veronica hat in den letzten vier Monaten mit Jeremy, einem Mann aus Kanada, E-Mails ausgetauscht. Sie haben sich gegenseitig Bilder geschickt und Veronica ist der Meinung, dass sie eine Online-Beziehung mit Jeremy führt. Jeremy bittet darum, Veronica besuchen zu dürfen, aber da sie im Süden der Vereinigten Staaten lebt, braucht er Hilfe bei der Bezahlung des Flugtickets. Veronica schickt das Geld bereitwillig an Jeremy.</p>
                            </div>` 
                },{
                    type: "radiogroup",
                    name: "q3_16",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welcher Art von Angriff ist Veronica wahrscheinlich zum Opfer gefallen?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Steven ist dabei, in der örtlichen Bibliothek eine Bewerbung auszufüllen. Hinter ihm sitzt eine vermummte Person, die auf seinen Bildschirm schaut und Stevens persönliche Daten mitschreibt.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_17",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche Art von Angriff wird von der vermummten Person verübt?", 
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Während ihrer Mittagspause diskutieren Max und Chloé im Pausenraum des Unternehmens mit anderen Anwesenden über die neuen IT-Sicherheitsupdates. Sie besprechen Informationen, die nicht öffentlich bekannt sein sollen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_18",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welcher Art von Social Engineering-Angriff könnten Max und Chloé zum Opfer fallen?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Michael arbeitet als Wachmann für ein Unternehmen. Aufgrund der Art seiner Tätigkeit hat er Schlüssel zu allen Teilen des Firmengebäudes. Michael läuft Gefahr, seinen Posten zu verlieren, und beschließt daher, Kopien aller Schlüssel des Gebäudes anzufertigen.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_19",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welchen Social-Engineering-Angriff plant Michael?",
                    correctAnswer: "U2FsdGVkX18Piac1hd/+0QIKJQlLJWhAj1w5M7BKk5tYdyG1VME4lkWYy4cztnuX",
                    choices: ["Quid Pro Quo","Diversion Theft","Tailgating","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Die Einzelhandelsangestellte Veronica hat Schlüssel, mit denen sie die Vorrichtungen aufschließen kann, die die teureren Waren schützen. Robert, der in einem Restaurant in der Nähe von Veronicas Arbeitsplatz arbeitet, bittet Veronica, eines der Geräte für ihn aufzuschließen. Im Gegenzug bietet Robert Veronica Rabatte in dem Restaurant, in dem er arbeitet.</p>
                            </div>`
                },{
                    type: "radiogroup",
                    name: "q3_20",
                    isRequired: true,
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche Art von Social-Engineering-Angriff versucht Robert zu starten?",
                    correctAnswer: "U2FsdGVkX1+EvBcUfSSJlMsDJOHpdA4IvTXYxOtoXwY=",
                    choices: ["Quid Pro Quo","Tailgating","Diversion Theft","Böswilliger Insider"],
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Bei dieser Angriffsart erstellt ein Täter ein gefälschtes Szenario oder gibt sich als Autoritätsperson aus, um ein Opfer dazu zu bringen, Informationen preiszugeben oder eine schädliche Handlung vorzunehmen.", 
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Es ist sicher, persönliche Informationen in einem öffentlichen Raum einzusehen.", 
                    correctAnswer: "U2FsdGVkX18hFgghxYa7qs1mgeD8vC2YQ6CWbwnsf9Q=",
                    choices: ["Wahr","Falsch"],
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
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welches der folgenden Beispiele ist ein gutes Beispiel für Piggybacking?",
                    correctAnswer: "U2FsdGVkX1/qcmyZz/mgAPv2UDiuPhgZJkeWZbbzC4v44vGvQmOcy3eJlQ1qOAG1eHYwnBS+ET/SDIl2Guj+0wWYzjNYdl3vYgeAxf8ZPXLw6CkosRn1cuZhFMLjtbKx",
                    choices: [
                        "Weiterleitung einer Ketten-E-Mail an neue Empfänger",
                        "Einem Mitarbeiter durch Täuschung in einen zugangsbeschränkten Bereich folgen",
                        "Mithören eines vertraulichen Gesprächs",
                        "Jemanden um einen Gefallen bitten und eine Belohnung versprechen",
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title:"Eine Person dabei zu beobachten, wie sie ihr Passwort in den Computer eintippt, ist bekannt als:", 
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
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Gute Beispiele für physische Social-Engineering-Taktiken sind:", 
                    correctAnswer: "U2FsdGVkX19Fgei1h1a7au8f8OrrSHzZz5dvR3zberr97Sboc+SfH+KgCQxcyJSBAY1AugYdnLrIV9Xj0mgLAQ==",
                    choices: [
                        "Baiting, Piggybacking und Eavesdropping",
                        "Shoulder Surfing, Phishing und Baiting",
                        "Honey Potting, Clickjacking und Vishing",
                        "Whaling, Spear Phishing und Shoulder Surfing"
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
                    requiredErrorText:"Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Das unentdeckte Verfolgen eines Mitarbeiters auf ein gesperrtes Firmengelände wird wie folgt klassifiziert:",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Ein Bedrohungstäter wartet draußen auf dem Parkplatz eines Unternehmens darauf, dass ein Mitarbeiter das Gebäude betritt. Sobald der Angreifer bemerkt, dass jemand auf den Eingang zugeht, geht er hinaus und nähert sich dem Mitarbeiter. Er fragt den Angestellten, wie es ihm geht, und der Angreifer erzählt, dass er in letzter Zeit viel zu tun hatte, um den Anschein zu erwecken, er sei ebenfalls ein Angestellter. Wenn der Angreifer und der Angestellte vor das Gebäude treten, wartet er darauf, dass der Angestellte seine Zugangskarte benutzt, was dieser auch tut und dem Angreifer den Zutritt gewährt.</p>
                            </div>`
                },{
                    type: "checkbox",
                    name: "q4_1",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche Social-Engineering-Angriffe werden in diesem Szenario eingesetzt?",
                    correctAnswer: ["U2FsdGVkX18M6whbMduOjWSYsm+F1SSLgnSD5sYMlNQ=","U2FsdGVkX18hq5obZBCiFDBA63gNCKRS42f7BLd04AU="],
                    choices: ["Tailgating","Piggybacking","Pretexting","Böswilliger Insider"],
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Sie erhalten eine E-Mail von einer Bank, in deren Betreff Sie nach einer überfälligen Rechnung gefragt werden. In der E-Mail wird behauptet, dass es ein Problem mit Ihrem Bankkonto gegeben hat und dass es dauerhaft gesperrt wird, wenn die Informationen nicht aktualisiert werden. Um dieses Problem zu beheben, ist am Ende der E-Mail ein Link angegeben. Wenn Sie auf den Link klicken, erscheint eine Popup-Seite mit einer Warnung, dass Ihr System infiziert ist.</p>
                            </div>`
                },{
                    type: "checkbox",
                    name: "q4_2",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche Cyberangriffe werden in diesem Szenario eingesetzt?", 
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">Nach sorgfältiger Durchsicht des Mitarbeiterverzeichnisses von Cisco wählt ein Angreifer einen leitenden Ingenieur aus, der möglicherweise privilegierte Informationen über das Secure Control Framework auf seinem Computer hat. Der Angreifer schickt ihm eine E-Mail mit einer gefälschten E-Mail-Adresse, in der er sich als Personalverantwortlicher von Palo Alto Networks ausgibt, der einen engagierten leitenden Ingenieur wie ihn sucht. Die E-Mail spricht den Mitarbeiter mit seinem Namen an und fordert ihn auf, die angehängte Excel-Tabelle zu öffnen, damit er seine Verfügbarkeit für ein kurzes Gespräch angeben kann.</p>
                            </div>`
                },{
                    type: "checkbox",
                    name: "q4_3",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche verschiedenen Arten von Social-Engineering-Methoden setzt der Angreifer in diesem Fall ein?",
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
                                <h3 class='mt-3'>Szenario</h3>
                                <p class="mt-3">George, ein Angestellter eines Halbleiterherstellers, beschließt, eine anstehende Lieferung von Silizium in böswilliger Absicht an einen anderen Ort umzuleiten.</p>
                            </div>`
                },{
                    type: "checkbox",
                    name: "q4_4",
                    isRequired: true,
                    requiredErrorText: "Bitte wählen Sie eine Antwortmöglichkeit aus.",
                    title: "Welche beiden Social-Engineering-Angriffe beschreiben diese Situation am besten?", 
                    correctAnswer: ["U2FsdGVkX1/hUm0nZNa+kx5+GPPDK+uoMoandbYjUw0=","U2FsdGVkX19JjzvRO6UyNMFELDashjQzVZdp7Mer4Zjf1nBUYqQtY2GP7rVOZ49Z"],
                    choices: ["Diversion Theft","Quid Pro Quo","Piggybacking","Böswilliger Insider"],
                }
            ]
        },
    ],
    completedHtml:`<h4 class="text-center mt-4 mt-lg-5">Sie haben <b>{correctedAnswers}</b> Fragen von <b>{questionCount}</b> richtig beantwortet.</h4> 
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
                                <a href='test.html#de' onclick="window.location.reload();" class="btn-size btn-red btn-nav btn-repeat d-block"> </a>
                            </div>
                            <div class="link-wrapper">
                                <a href='test.html#de' onclick="window.location.reload();" class="color-dark fs-responsive link-completePage">Test Wiederholen</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='mt-4 mt-md-3  col-sm-4'>
                    <div class='d-flex justify-content-center'>
                        <div class='position-relative'>
                            <div class="position-absolute">
                                <a href='../resources.html#de' class="btn-size btn-red btn-nav btn-start-info d-block"> </a>
                            </div>
                            <div class="link-wrapper">
                                <a href='../resources.html#de' class="color-dark fs-responsive link-completePage">Zu den SE Begriffen</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='mt-4 mt-md-3 col-sm-4'>
                    <div class='d-flex justify-content-center'>
                        <div class='position-relative'>
                            <div class="position-absolute">
                                <a href='../index.html#de' class="btn-size btn-red btn-nav btn-home d-block"> </a>
                            </div>
                            <div class="link-wrapper">
                                <a href='../index.html#de' class="color-dark fs-responsive link-completePage">Zur Hauptseite</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="attribution bg-light">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
};