"use client";

import { motion } from "motion/react";
import { Footer } from "../../components/footer";
import Image from "next/image";
import seamlessBg from "@/public/palm-pattern.jpg";

export default function TermsPage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                Terms & Conditions
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500">
                  Our Locations
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">Got Plate Lunch Restaurant</h3>
                    <p>Address: 810 West 9th St. Benicia, CA 94510</p>
                    <p>Business Phone: (707) 745-4751</p>
                    <p>Menu Currency: USD</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Got Plate Lunch Express</h3>
                    <p>Address: 3200 Bayshore Rd #2, Benicia, CA 94510</p>
                    <p>Business Phone: (707) 745-4751</p>
                    <p>Menu Currency: USD</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <p className="font-semibold">
                  (hereinafter referred to as the &quot;Restaurant&quot; or &quot;We&quot; or &quot;Us&quot;)
                </p>
                <p>
                  These Terms and Conditions apply to you as a client for online ordering (hereinafter referred to as &quot;you&quot; or the &quot;user&quot; or the &quot;client&quot;)
                </p>
                <p className="font-semibold">
                  PLEASE READ THIS TERMS AND CONDITIONS CAREFULLY. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS THEN YOU SHOULD NOT ACCESS AND/OR USE THE ONLINE ORDERING (HEREINAFTER NAMED &quot;ONLINE ORDERING APPLICATION&quot;). ACCESS AND/OR USE OF THE ONLINE ORDERING BY YOU SHALL BE DEEMED TO BE YOUR ACCEPTANCE OF THESE TERMS AND CONDITIONS.
                </p>

                <div className="space-y-4">
                  <p>
                    Subject to applicable legal regulations in force, We may, in our discretion, from time to time amend or otherwise modify the Terms and Conditions of Use. We recommend that You carefully read, each time you order online, the Terms and Conditions as they may affect your rights.
                  </p>
                  <p>
                    These Terms and Conditions describe the general online ordering terms and conditions between Us and You and different rights and obligations of the Parties.
                  </p>
                  <p>
                    For the sake of clarity, these Terms and Conditions apply (also) in case of online ordering through the application (hereinafter referred to as the &quot;online ordering application&quot; or the &quot;application&quot;; the applications is the online ordering application used by the Client to place its order for different products and/or services (hereinafter referred to as the &quot;products&quot; and/or &quot;services&quot;).
                  </p>
                  <p>
                    The online ordering application is owned and operated by the licensor of the license agreement regarding the use of the application in order to order online.
                  </p>
                  <p>
                    Without affecting the generality of the present Terms and Conditions and for the sake of clarity You must also respect the license agreement regarding the use of the application in order to order online.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Disclaimers & Limitations of Liability
                </h3>
                <div className="space-y-4">
                  <p>
                    The Restaurant shall make all the necessary diligences to ensure that the information in relation with the online ordering is accurate and reliable. However, this cannot be infallible and errors may sometimes occur. You should take appropriate steps to verify all information in relation with the online ordering before using it. To the maximum extent permitted according to the applicable law, the Restaurant disclaims any warranty or representation of any kind, whether express or implied, as to any matter whatsoever relating to the online ordering, including without limitation the availability of the online ordering application.
                  </p>
                  <p>
                    The Restaurant may from time to time revise the information in relation with the online ordering application and/or process and reserves the right to make such changes without any obligation to notify any past, current or prospective clients. In no event shall the Restaurant be liable for any indirect, special, incidental or consequential damages arising out of any use of the information contained herein and/or in relation with the online ordering process.
                  </p>
                  <p>
                    By ordering online, you acknowledge and agree that the use of the online ordering application and/or processes at your own risk and the maximum extent permitted according to the applicable law, in no circumstances, shall We be liable for any direct, indirect, incidental, special, consequential, or punitive damages, losses, costs or expenses nor for any loss of profit that results from the use of, or inability to use this online ordering and/or any application and/or material on any site linked to this online ordering application (including but not limited to any viruses or any other errors or defects or failures in computer transmissions or network communications) even if We have been advised of the possibility of such damage. In addition, no liability can be accepted by Us in respect of any changes made to the content of the online ordering application and/or process by unauthorized third parties. All express or implied warranties or representations are excluded to the maximum extent permitted according to the applicable law.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Third-Party Content & Intellectual Property
                </h3>
                <div className="space-y-4">
                  <p>
                    The online ordering application and/or process may include content, information or links to third parties or third party sites. The Restaurant is not responsible for the content of any such sites or neither for the content of any third party advertising or sponsorship nor for compliance of such with any regulations. The links may be accessed at the user&apos;s own risk and the Restaurant makes no representations or warranties about the content, completeness, or accuracy of these links or the sites hyperlinked to this ordering online application. You agree to hold harmless and relieve the Restaurant from any liability whatsoever arising from your use of information from a third party or your use of any third-party website.
                  </p>
                  <p>
                    Except otherwise expressly mentioned, all the information in relation with the online ordering application (including without limitation: the images, buttons and text) are property and/or available with the permission of the licensor of the license agreement regarding the use of the application in order to order online and holds usage rights over them and may not be copied, distributed, or reproduced or transmitted in any form or by any means, electronic, mechanical, photocopying, recording or otherwise, without it&apos;s prior written permission.
                  </p>
                  <p>
                    The content referring to specific products (e.g. food items), arrangement and texts layout of the online ordering application and/or process, the trademarks, and any other content, are proprietary and are protected according with the legal regulations in force and cannot be used in any way without the express written permission of the Restaurant.
                  </p>
                  <p>
                    The Client does not obtain any license or right regarding the information in relation with the online ordering and/or application.
                  </p>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Account & Orders
                </h3>
                <div className="space-y-4">
                  <p>
                    If you decide to order online using the online ordering application, you may be asked to provide full contact details and/or to create an account and you may need to accept cookies. You must keep your data confidential and must not disclose it to anyone. The Restaurant reserves the right to suspend the use of the online ordering application and/or process if you breach the Terms and Conditions.
                  </p>
                  <p>
                    You acknowledge and agree that all orders are treated as an express intention to purchase the nominated products and/or services for the agreed online prices and We treat this as a binding offer from you to purchase such products and services. Any variations must be in writing, otherwise they will not be binding on either party.
                  </p>
                  <p>
                    The acceptance of any order for any of the products and/or services shall be at the entire discretion of the Restaurant. Our acceptance of an order may occur when you receive an on-screen message and/or email notification and/or an SMS, confirming your order.
                  </p>
                  <p>
                    The Restaurant reserves the right to refuse any service, terminate your access to the online ordering application and/or process, remove or edit any content or accept your order/s in its sole discretion and without prior notice to you.
                  </p>
                  <p>
                    The Restaurant&apos;s online ordering application must only be used by persons over the age of eighteen (18) years, or the minimum legal age as permitted by the law or otherwise under the supervision of an adult or guardian.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Products, Delivery & Payment
                </h3>
                <div className="space-y-4">
                  <p>
                    Any products and/or services provided through the online ordering application are done so on an &quot;as is&quot; and &quot;if available&quot; basis and the Restaurant expressly excludes any warranties, conditions, representations or other terms with respect to the online ordering or the content or products displayed on it, whether express or implied, unless expressly stated to the contrary.
                  </p>
                  <p>
                    The pictures of the products are for presentation only. The ordered products may have differences (e.g. color, form, etc.) towards the photos existing on the site. The Restaurant is not liable in any way if the description of products is not complete.
                  </p>
                  <p>
                    Delivery orders are also subject to: i) Your address falling in the defined delivery area of the Restaurant; ii)Availability of the restaurant being online for accepting online orders; iii) Your Order may be subject to a minimum amount per order;
                  </p>
                  <p>
                    You can pay by any of the methods listed in our checkout screen. Please make sure that if your order is placed using a credit or debit card, the card is valid on the date of your order placement. The Restaurant may provide no refunds to the orders paid online. Contact Us directly to settle any payment dispute or refund claim.
                  </p>
                  <p>
                    You may be automatically directed to an online listing referring to Your nearby Restaurant service location. Please note that prices, minimum spend restrictions and maximum cash spend restrictions vary from location to location. In addition, if you order on-line, the price charged may be different to the price for the Products had they been ordered in-store or by telephone.
                  </p>
                  <p>
                    The online order once placed cannot be modified or cancelled either through the website or offline by calling the restaurant. Anyhow, if you wish to cancel or complain about your order, please call your local restaurant service location, details of which will be included in the confirmatory e-mail sent to you upon placing your order and We can see how we can help you.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Delivery & Risk
                </h3>
                <div className="space-y-4">
                  <p>
                    We will aim to provide you with your ordered products as close as possible to your requested delivery/collection time but we cannot guarantee the delivery time in all the cases. Delivery time may be affected due to bad weather or traffic conditions. This is to ensure the safety of our riders. Delivery service may be temporarily unavailable in selected areas due to bad weather or unforeseen circumstances.
                  </p>
                  <p>
                    The Client agrees to accept delivery of the Products at the agreed time and place of delivery. If you have chosen for the Products to be delivered, the Restaurant will deliver the order to the main entrance of the delivery address but any deliveries carried into the delivery address will only be made if the driver and you consent to this. If you are not present to take delivery of the goods at the address given in your order, then We will not refund you the price for your order and will charge you for the full amount of your order.
                  </p>
                  <p>
                    Risk in the Products shall pass to the Client on delivery. Any software service/software is used and/or downloaded at your own risk. If you are in any doubt as to the suitability of the software service/software to be used and/or downloaded for your computer it is recommended that you obtain specialist advice before using and/or downloading it.
                  </p>
                  <p>
                    You are responsible for maintaining the confidentiality of your personal details, password and payment details. You agree to accept full responsibility for all your activities in relation with the online ordering (application).
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Final Provisions
                </h3>
                <div className="space-y-4">
                  <p>
                    You may not assign, sub-license or otherwise transfer any of your rights under these terms and conditions. In case any provision of this agreement is and/or becomes void, illegal, invalid or inapplicable, it shall not affect the validity or the applicability of the other contractual clauses, which shall continue to be in force and to produce legal effects as if the void, illegal, invalid or inapplicable clause was not part of this agreement.
                  </p>
                  <p>
                    This Terms and Conditions do not affect your statutory rights.
                  </p>
                  <p>
                    The Restaurant trademarks, as well as the related trademarks of others and related proprietary property are protected from copying and simulation under national and international laws and are not to be reproduced or copied without the express written permission of the Restaurant.
                  </p>
                  <p>
                    To the fullest extent permitted by law, the Restaurant excludes all liability arising out of its supply of the Products and in particular shall not be responsible for any loss or damage, arising directly or indirectly out of or in connection with delay beyond the estimated delivery or pickup time; any circumstances over which the Restaurant had no control of the consequences and which the Restaurant could not avoid by the exercise of reasonable care, or any indirect or unforeseeable loss suffered or incurred by the Client or others. In any event, the Restaurant&apos;s liability to the Client shall not exceed the total price charged for the relevant products/and or services.
                  </p>
                  <p>
                    This terms and Conditions shall be governed by and construed in accordance with the laws of the country in which the Restaurant is headquartered and the Restaurant and any dispute arising out of or in connection with these shall be settled by the competent courts from the headquarters of the Restaurant, excluding the possibility of reference to conflict of laws.
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