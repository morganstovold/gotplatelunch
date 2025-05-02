"use client";

import { motion } from "motion/react";
import { Footer } from "../../components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <section className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Privacy Policy
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  1. The identity and the contact data of the Supplier
                </h2>
                <div className="space-y-4">
                  <p>
                    Identity and the contact data of the Supplier of products
                    and/or services (also referred to in this Privacy Policy the
                    &quot;Supplier of products and/or services&quot; or
                    the&quot;Controller&quot;):
                  </p>
                  <div>
                    <h3 className="font-bold text-lg">
                      Got Plate Lunch Restaurant
                    </h3>
                    <p>Address: 810 West 9th St. Benicia, CA 94510</p>
                    <p>Business Phone: (707) 745-4751</p>
                    <p>Menu Currency: USD</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      Got Plate Lunch Express
                    </h3>
                    <p>Address: 3200 Bayshore Rd #2, Benicia, CA 94510</p>
                    <p>Business Phone: (707) 745-4751</p>
                    <p>Menu Currency: USD</p>
                  </div>
                  <p>
                    1.1. Contact data of the data protection officer
                    (&quot;DPO&quot;) may be found on the website
                    (&quot;website&quot;), as long as it was (necessary to be)
                    appointed such data protection officer.
                  </p>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  2. Purposes (and related legal basis) of the processing(s)
                </h3>
                <div className="space-y-4">
                  <p>
                    2.1. The Controller shall process the personal data you
                    (also referred to in this privacy policy &quot;you&quot; or
                    the &quot;client&quot; or the &quot;data subject&quot;)
                    provided by the client (eg. Name, surname, (delivery)
                    address, phone no., email address) when ordering products
                    and/or services through the application of the Provider
                    (referred to in this Privacy Policy the
                    &quot;application&quot; or the &quot;solution&quot;), and
                    communicated by the Provider to the Controller, for any
                    purposes in order to take the steps in order to conclude a
                    contract with the client (following a request expressed by
                    the client when using the application) and to perform the
                    agreement concluded with the client (the
                    &quot;agreement&quot;).
                  </p>
                  <p>
                    2.2. Your electronic contact details provided in the context
                    of selling a product or a service may be used for direct
                    marketing (unsolicited communications) regarding similar
                    products or services. You can always withdraw your consent
                    by using the unsubscribe link available prior to any
                    ordering session of yours or in the footer of any marketing
                    email communication received from us.
                  </p>
                  <p>
                    2.4. Without affecting the generality of the foregoing and
                    for the sake of clarity, your (electronic contact) data may
                    be used by the Controller and/or the suppliers of products
                    and/or services in order to send you direct marketing
                    communications (unsolicited communications, for products or
                    services that are not similar to those in the context of
                    which you provided your data), as long as you gave your
                    consent for such purpose. You can always withdraw your
                    consent by accessing the provided link.
                  </p>
                  <p>
                    2.5. The Controller will store and process any of your
                    personal data to the maximum extend and period provided by
                    the mandatory applicable legal regulations in force.
                  </p>
                  <p>
                    2.6. The Controller will also process your personal data for
                    any other purposes for which you expressed the unambiguous
                    consent.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  3. Legal basis of the processing
                </h3>
                <div className="space-y-4">
                  <p>
                    The legal basis of the processing are article 6 paragraph
                    (1) letter (b) and (c), as well as, especially in case of
                    the direct marketing, the letter (f), from the Regulation
                    (EU) 2016/679 of the European Parliament and of the Council,
                    from 27 April 2016 (referred to in this Privacy Policy the
                    &quot;Regulation&quot; or (&quot;GDPR&quot;), namely:
                  </p>
                  <p>
                    (b) processing is necessary for the performance of a
                    contract to which the data subject is party or in order to
                    take steps at the request of the data subject prior to
                    entering into a contract;
                  </p>
                  <p>
                    (c) processing is necessary for compliance with a legal
                    obligation to which the Controller is subject;
                  </p>
                  <p>
                    (f) processing is necessary for the purposes of the
                    legitimate interests pursued by the Controller or by a third
                    party...&quot;.
                  </p>
                  <p>
                    To the maximum extent permitted by the legal regulations in
                    force, the personal data processing for direct marketing
                    purposes may be performed for a legitimate interest, taking
                    into consideration there is a relevant and adequate
                    relationship between the data subject and the Controller,
                    the data subject being/becoming a client of the Controller.
                    The legitimate interests pursued by the Controller through
                    the direct marketing communications, mainly are the
                    possibility of keeping the client updated with the activity
                    of the Controller.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  4. Recipients or the category of recipients of the personal
                  data
                </h3>
                <div className="space-y-4">
                  <p>
                    4.1. Sending your data to different recipients and in
                    different (third) countries, recipients that are processing
                    the personal data for (compatible, related and correlated
                    purposes with) the purpose of executing the contract you
                    have with the Controller, namely: delivery providers,
                    printing providers, pos billing providers, loyalty
                    providers, etc.
                  </p>
                  <p>
                    4.2. Also, without affecting the generality of the foregoing
                    and for the sake of clarity, the following information will
                    be transmitted to the following categories of recipients,
                    for the following purposes:
                  </p>
                  <p>
                    4.2.1. Your details, namely: last name, first name, email
                    address, phone number, delivery address (if relevant),
                    provided together with the details of your order, on the
                    electronic way (excluding the details of the payment card,
                    if you have chosen the online payment process) will be
                    (re)transmitted through email messenger operators to the
                    Controller and back to you, to your email address, in order
                    to process the order and in order to offer you the relevant
                    notifications regarding the information about confirmation
                    or rejection of the order or about the missed orders and
                    about the delivery of your order.
                  </p>
                  <p>
                    4.2.2. If possible, your details, namely : last name, first
                    name, email address, phone number, delivery address (if
                    relevant), provided together with the details of your order,
                    on the electronic way (excluding the details of the payment
                    card, if you have chosen the online payment process) will be
                    (re)transmitted through SMS messenger operators to the
                    suppliers of products and/or services and back to you, by
                    SMS, in order to process the order and in order to offer you
                    the relevant notifications regarding the information about
                    confirmation or rejection of the order or about the missed
                    orders and about the delivery of your order.
                  </p>
                  <p>
                    4.2.3. As well as, the personal data will be sent in order
                    to be stored by the data storage providers
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  5. Transfers of personal data to third countries or an
                  international organization
                </h3>
                <div className="space-y-4">
                  <p>
                    5.1. An eventual transfer or a set of transfers of personal
                    data to a third country or an international organization
                    shall take place only on one of the following conditions:
                  </p>
                  <p>
                    (a) the data subject has explicitly consented to the
                    proposed transfer, after having been informed of the
                    possible risks of such transfers for the data subject due to
                    the absence of an adequacy decision and appropriate
                    safeguards;
                  </p>
                  <p>
                    (b) the transfer is necessary for the performance of a
                    contract between the data subject and the Controller or the
                    implementation of pre-contractual measures taken at the data
                    subject&apos;s request;
                  </p>
                  <p>
                    (c) the transfer is necessary for the conclusion or
                    performance of a contract concluded in the interest of the
                    data subject between the Controller and another natural or
                    legal person;
                  </p>
                  <p>
                    (d) the transfer is necessary for important reasons of
                    public interest;
                  </p>
                  <p>
                    (e) the transfer is necessary for the establishment,
                    exercise or defense of legal claims;
                  </p>
                  <p>
                    (f) the transfer is necessary in order to protect the vital
                    interests of the data subject or of other people, where the
                    data subject is physically or legally incapable of giving
                    consent;
                  </p>
                  <p>
                    (g) existence of a adequacy decision according with the
                    Regulation;
                  </p>
                  <p>
                    (h) existence of appropriate safeguards, including binding
                    corporate rules according with the Regulation;
                  </p>
                  <p>
                    5.2. The following data will be transferred to the following
                    third countries, as follows:
                  </p>
                  <p>
                    5.2.1. Last name, first name, email address, phone number,
                    delivery address (if relevant) will be sent in USA, in order
                    to process the order and in order to offer you the relevant
                    notifications regarding the information about confirmation
                    or rejection of the order or about the missed orders and
                    about the delivery of your order.
                  </p>
                  <p>
                    5.2.2. Last name, first name, email address, phone number,
                    delivery address (if relevant) will be sent in USA, in order
                    to process the order and in order to offer you the relevant
                    notifications regarding the information about confirmation
                    or rejection of the order or about the missed orders and
                    about the delivery of your order.
                  </p>
                  <p>
                    5.2.3. Last name, first name, email address, phone number,
                    delivery address (if relevant) will be sent in USA, in order
                    to process the order and in order to offer you the relevant
                    notifications regarding the information about confirmation
                    or rejection of the order or about the missed orders and
                    about the delivery of your order.
                  </p>
                  <p>
                    5.2.4. Last name, first name, email address, phone number,
                    and delivery address (if relevant) Order session originating
                    IP will be send in USA, in order to be stored and/or in
                    order to process the order and in order to offer you the
                    relevant notifications regarding the information about
                    confirmation or reject of the order or about the missed
                    orders and about the delivery of your order.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  6. The period for which the personal data will be stored
                </h3>
                <div className="space-y-4">
                  <p>
                    The personal data will be stored for 1 year but not less
                    than the period provided by the legal regulations in force.
                  </p>
                  <p>
                    The personal data will be (mainly) stored in order to
                    execute the agreement as well as for fiscal and/or legal
                    purposes and additionally, specifically and without
                    affecting the generality of the foregoing, the email address
                    and the phone number (as and if the case may be) will be
                    stored for direct marketing purpose.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  7. Obligation to provide the personal data and of the possible
                  consequences of failure to provide such data
                </h3>
                <div className="space-y-4">
                  <p>
                    The provision of the personal data is a contractual
                    requirement.
                  </p>
                  <p>
                    The data subject is obliged to provide the personal data.
                  </p>
                  <p>
                    The refusal to provide (certain) (personal) data will lead
                    (as consequences of not fulfilling the obligation to provide
                    respective data) to the impossibility of (fully) using the
                    application and/or certain functionalities of the
                    application and/or to the impossibility to order and/or to
                    buy and/or to pick-up and/or delivery of products and/or
                    services, as the case may be, the Controller being entitled
                    not to process the order.
                  </p>
                  <p>
                    Without affecting the generality of the foregoing and for
                    the sake of clarity:
                  </p>
                  <p>
                    i) In case the data regarding the location were the products
                    has to be delivered are not provided, the products cannot be
                    delivered;
                  </p>
                  <p>
                    ii) In case the email address is not provided, we cannot
                    send you any information about confirmation or reject of the
                    order or about the missed orders and/or other information
                    regarding your order and the communications with you cannot
                    be performed;
                  </p>
                  <p>
                    v) In case the name and surname are not provided, we will
                    not have the minimum identification data to have a valid
                    agreement with you and also your order will not be processed
                    and we won&apos;t be able to send you the information about
                    confirmation or reject of the order or about the missed
                    orders
                  </p>
                  <p>
                    vi) In case the IP addresses are not provided, no further
                    investigations can be performed in order to determine what
                    happened and whether or not you were a victim of a
                    fraudulent ordering session (e.g. fake orders, prank orders
                    or purchase impersonation), therefore the order may not be
                    safely accepted.
                  </p>
                  <p>
                    vii) In case the phone number is not provided the Controller
                    may not contact you back in a timely manner for
                    order-related clarifications or delivery address
                    clarifications, as the case may be.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Sections 8-21 have been condensed for readability. The full
                    privacy policy including all details about your rights to
                    access, rectification, erasure, restriction of processing,
                    data portability, objection, and other rights under GDPR is
                    available upon request.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  22. Cookie Policy
                </h3>
                <div className="space-y-4">
                  <p>
                    Controller&apos;s web application may use
                    &quot;cookies.&quot;
                  </p>
                  <p>
                    Cookies are text files containing small amounts of
                    information which are downloaded to your device when you
                    visit and use the web application. Cookies are then sent
                    back to the originating URL on each subsequent visit, or to
                    another URL that recognizes that cookie. Cookies are useful
                    because they allow a website to recognize a user&apos;s
                    device. You can find more information about cookies at:
                    www.allaboutcookies.org and www.youronlinechoices.eu. For a
                    video about cookies visit www.google.co.uk/
                    goodtoknow/data-on-the-web/cookies.
                  </p>
                  <p>
                    Cookies do lots of different jobs, like letting you navigate
                    between pages efficiently, remembering your preferences, and
                    generally improve the user experience.
                  </p>
                  <p>
                    They can also help to ensure that adverts you see online are
                    more relevant to you and your interests.
                  </p>
                  <p>
                    You may set and/or adjust your (browser) settings and
                    preferences regarding cookies at any time, and you may
                    disable cookies. Disabling them may prevent you from using
                    certain parts/functionalities of the Controller&apos;s web
                    application.
                  </p>
                  <p>
                    We may collect anonymous information, including for
                    statistical or research purposes.
                  </p>
                  <p>
                    We use the following categories on our web based
                    application:
                  </p>
                  <p className="font-semibold">
                    Category 1 — Strictly Necessary Cookies
                  </p>
                  <p>
                    These cookies are essential in order to enable you to move
                    around Controller&apos;s web application and use its
                    features, such as accessing secure areas. Without these
                    cookies services like shopping baskets or e-billing cannot
                    be provided.
                  </p>
                  <p className="font-semibold">
                    Category 2 — Performance Cookies
                  </p>
                  <p>
                    These cookies collect information about how you use the
                    Controller&apos;s web application — for instance, which
                    pages you go to most, and if they get error messages from
                    web pages and/or the web application. These cookies
                    don&apos;t collect information that identifies a visitor.
                    All information these cookies collect is aggregated and
                    therefore anonymous. It is only used to improve how the
                    Controller&apos;s website(s) and/or the application works.
                  </p>
                  <p>
                    As 3rd party cookies in this category we use Google
                    Analytics, a service which transmits website traffic data to
                    Google servers in the United States. The reports provided by
                    Google Analytics help us understand website traffic and
                    webpage usage. Google Analytics does not identify individual
                    users or associate your IP address with any other data held
                    by Google.
                  </p>
                  <p>
                    Google Analytics: For more information about Google
                    Analytics cookies, please see Google&apos;s help pages and
                    privacy policy:
                  </p>
                  <p>Google&apos;s Privacy Policy</p>
                  <p>Google Analytics Help pages</p>
                  <p>
                    Google has developed the Google Analytics opt-out browser
                    add-on; if you want to opt out of Google Analytics, you can
                    download and install the add-on for your web browser here.
                  </p>
                  <p className="font-semibold">
                    Category 3 — Functionality Cookies
                  </p>
                  <p>
                    These cookies allow the Controller&apos;s web application to
                    remember choices you make while browsing and/or using the
                    application (such as your user name, language or the region
                    you are in) and provide enhanced, more personal features.
                  </p>
                  <p>
                    These cookies can also be used to remember changes you have
                    made to text size, language and other parts of web pages
                    that you can customize.
                  </p>
                  <p>
                    The information these cookies collect will not personally
                    identify you, and they cannot track your browsing activity
                    on non- Controller&apos;s websites.
                  </p>
                  <p>
                    For reliable review of your order status, on-screen on the
                    application, in real-time, and also for easy reordering,
                    your data may be saved on your device, serving a cookie
                    locally.
                  </p>
                  <p className="font-semibold">
                    Category 4 - Targeting cookies or advertising cookies
                  </p>
                  <p>
                    These cookies will usually be third-party cookies, although
                    if a user is visiting the advertising network&apos;s own
                    website it is technically possible these could be first
                    party. They will always be persistent but time-limited
                    cookies. These cookies can be associated with services
                    provided by the third party but this is not always the case.
                    These cookies contain a unique key that is able to
                    distinguish individual users&apos; browsing habits or that
                    can be translated into a set of browsing habits or
                    preferences using information stored elsewhere. Generally
                    speaking, the privacy statement should indicate if the
                    cookie is being used as part of an advertising network.
                    Cookies may also be used to limit the number times a user
                    sees a particular ad on a website and to measure the
                    effectiveness of a particular campaign.
                  </p>
                  <p>Examples include:</p>
                  <p>
                    • Cookies placed by advertising networks to collect browsing
                    habits in order to target relevant adverts to the user. The
                    site the user is visiting need not actually be serving
                    adverts, but often this will also be the case.
                  </p>
                  <p>
                    • Cookies placed by advertising networks in conjunction with
                    a service implemented by the website to increase
                    functionality, such as commenting on a blog, adding a site
                    to the user&apos;s social network, providing maps or
                    counters of visitors to a site.
                  </p>
                  <p>
                    By default, the web ordering application and its originating
                    website URL is not serving category 4 cookies. However, it
                    may be possible to order online from other websites that
                    frame-in or facilitate access to the online menu and web
                    application. Therefore, please always check the cookie
                    policy of the visited website from which you initiated an
                    online ordering session in order to find out if any category
                    4 cookies are served and which is the way to opt-out or
                    opt-in for them, as the legal case may be.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  23. Processing of your personal data by the Provider
                </h3>
                <div className="space-y-4">
                  <p>
                    The Provider may also process your personal data as the
                    processor of the supplier of products and/or services,
                    including without limitation for the following purposes,
                    according to those agreed with the suppliers of products
                    and/or services : i) data storage for the suppliers of
                    products and/or services; ii) sending notifications to you
                    regarding the information about confirmation or reject of
                    the order or about the missed orders and about the delivery
                    of your order; iii) sending to you direct marketing
                    communications; iii) collection of the IP addresses in order
                    to be used in case of any litigation and/or fraud regarding
                    the payments; iv) sending your data to different recipients
                    and in different (third) countries, recipients that are
                    processing the personal data for compatible, related and
                    correlated purposes with the purpose of executing the
                    contract you have with the suppliers of products and/or
                    services, namely: delivery, printing, pos billing, loyalty,
                    online payment processing, etc.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  24. Miscellaneous
                </h3>
                <div className="space-y-4">
                  <p>
                    24.1. You have all the rights mentioned in the present
                    Privacy Policy as well as any other rights mentioned by the
                    mandatory legal regulations in force regarding personal data
                    processing.
                  </p>
                  <p>
                    24.2. Your rights mentioned in the present Privacy Policy
                    can be exercised according with the Regulation and any other
                    applicable legal regulations in force.
                  </p>
                  <p>
                    24.3. Any requests and/or demands sent by you towards the
                    Controller for exercising any of your rights may be made in
                    writing, by registered letter that will be sent to the
                    headquarter of the Controller and/or online via the contact
                    for or contact email of the Controller as found on the
                    website or at the email of the DPO, if such DPO exists,
                    and/or by any other ways of communications mentioned in the
                    legal regulations in force.
                  </p>
                  <p>
                    24.4. The data subject may request, according to the above
                    mentioned ones, and obtain, free of charge, in particular,
                    access to and rectification or erasure of personal data,
                    restriction of the processing of personal data, data
                    portability, and the exercise of the right to object and
                    also the right not to be subject to a decision based solely
                    on automated processing, including profiling, which produces
                    legal effects concerning him or her or similarly
                    significantly affects him or her but also in relation with
                    the security breach of the personal data.
                  </p>
                  <p>
                    24.5. The terms used in the present Privacy Policy will have
                    the meaning defined in the Regulations, unless the context
                    otherwise requires or it is otherwise provided herein.
                  </p>
                  <p>
                    24.6. Except otherwise required by the mandatory legal
                    regulations in force, the Controller reserves the right to
                    update and change the Privacy Policy from time to time
                    without specific notice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
