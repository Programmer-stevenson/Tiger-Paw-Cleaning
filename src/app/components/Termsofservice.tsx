import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white text-gray-800 rounded-xl shadow-2xl max-w-3xl w-full p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8">Effective Date: April 5, 2026</p>

            <div className="space-y-6 text-sm leading-relaxed text-gray-700">
              <p>
                These Terms of Service ("Terms") govern your use of the Tiger Paw Cleaning LLC 
                ("Company," "we," "us," or "our") website and cleaning services. By accessing our 
                website or engaging our services, you agree to be bound by these Terms. If you do 
                not agree, please do not use our website or services. These Terms are governed by 
                the laws of the State of Missouri.
              </p>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Services</h2>
                <p>
                  Tiger Paw Cleaning LLC provides residential and commercial cleaning services 
                  including general cleaning, deep cleaning, post-construction cleaning, carpet and 
                  upholstery cleaning, and move-in/move-out cleaning. Service availability, pricing, 
                  and scheduling are subject to change. All quotes are estimates and final pricing 
                  may vary based on the actual scope and condition of the property.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">2. Booking and Scheduling</h2>
                <p>
                  Service appointments are confirmed upon mutual agreement of date, time, scope, 
                  and pricing. We will make reasonable efforts to arrive within the scheduled window. 
                  Tiger Paw Cleaning LLC reserves the right to reschedule due to weather, staffing, 
                  or unforeseen circumstances, and will notify you as soon as possible.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Cancellation Policy</h2>
                <p>
                  Cancellations must be made at least 24 hours prior to the scheduled appointment. 
                  Cancellations made with less than 24 hours' notice may be subject to a cancellation 
                  fee of up to 50% of the quoted service price. No-shows without prior notice will 
                  be charged the full quoted amount.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Payment Terms</h2>
                <p>
                  Payment is due upon completion of services unless otherwise agreed in writing. We 
                  accept major credit cards, debit cards, cash, and other payment methods as 
                  communicated at the time of booking. Invoices not paid within 30 days of the 
                  service date may be subject to a late fee of 1.5% per month, or the maximum rate 
                  allowed under Missouri law (RSMo §408.020), whichever is less.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Satisfaction Guarantee</h2>
                <p>
                  We stand behind the quality of our work. If you are not satisfied with any aspect 
                  of our cleaning, please contact us within 24 hours of service completion. We will 
                  re-clean the affected areas at no additional charge. Claims made after 24 hours 
                  will be evaluated on a case-by-case basis.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Access to Property</h2>
                <p>
                  You agree to provide safe and reasonable access to the areas to be cleaned. This 
                  includes securing pets, removing hazardous materials, and ensuring utilities 
                  (water, electricity) are available. Tiger Paw Cleaning LLC is not responsible for 
                  pre-existing damage, wear, or conditions not caused by our services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Liability and Insurance</h2>
                <p>
                  Tiger Paw Cleaning LLC is fully licensed and insured. In the unlikely event of 
                  accidental damage to your property caused directly by our staff during service, 
                  please notify us within 48 hours. We will assess the damage and, if our liability 
                  is confirmed, repair or replace the damaged item or provide fair compensation. Our 
                  total liability for any single claim shall not exceed the total amount paid for the 
                  service during which the damage occurred, except where Missouri law requires 
                  otherwise.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by Missouri law, Tiger Paw Cleaning LLC shall not 
                  be liable for any indirect, incidental, special, consequential, or punitive damages 
                  arising from or related to the use of our website or services. This includes but 
                  is not limited to loss of profits, data, or business opportunities. Nothing in 
                  these Terms shall exclude or limit liability for fraud, willful misconduct, or any 
                  liability that cannot be excluded under Missouri law.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">9. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Tiger Paw Cleaning LLC, its owners, 
                  employees, and agents from any claims, damages, losses, or expenses (including 
                  reasonable attorney fees) arising from your misuse of our website, breach of these 
                  Terms, or failure to provide safe access to your property.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">10. Intellectual Property</h2>
                <p>
                  All content on this website — including text, graphics, logos, images, and 
                  software — is the property of Tiger Paw Cleaning LLC and is protected by 
                  applicable copyright and trademark laws. You may not reproduce, distribute, or 
                  use any content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">11. Website Use</h2>
                <p>
                  You agree to use our website only for lawful purposes. You may not use the website 
                  to transmit harmful, threatening, or unlawful material, attempt to gain 
                  unauthorized access to our systems, or interfere with the website's functionality 
                  or other users' experience.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">12. Dispute Resolution</h2>
                <p>
                  Any disputes arising from these Terms or our services shall be resolved through 
                  good-faith negotiation. If a resolution cannot be reached, the dispute shall be 
                  submitted to binding arbitration in the State of Missouri, in accordance with the 
                  rules of the American Arbitration Association. The prevailing party shall be 
                  entitled to recover reasonable attorney fees and costs.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">13. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of Missouri, without regard to its conflict of law provisions. Any legal 
                  action arising from these Terms shall be filed in the courts of the State of 
                  Missouri.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">14. Changes to These Terms</h2>
                <p>
                  We reserve the right to update these Terms at any time. Changes will be posted on 
                  this page with an updated effective date. Your continued use of our website or 
                  services after any changes constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">15. Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us:
                </p>
                <p className="mt-2">
                  Tiger Paw Cleaning LLC<br />
                  Email: tigerpawcleaning@gmail.com<br />
                  Phone: (573) 777-0025
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}