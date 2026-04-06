import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
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

            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Effective Date: April 5, 2026</p>

            <div className="space-y-6 text-sm leading-relaxed text-gray-700">
              <p>
                Tiger Paw Cleaning LLC ("Company," "we," "us," or "our") is committed to protecting 
                the privacy of our customers and website visitors. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you visit our website or 
                engage our cleaning services. We operate under the laws of the State of Missouri.
              </p>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
                <p className="mb-2">We may collect the following types of information:</p>
                <p>
                  <strong>Personal Information:</strong> Name, email address, phone number, 
                  physical address, and any details you provide when requesting a quote or scheduling 
                  services through our contact form.
                </p>
                <p className="mt-2">
                  <strong>Automatically Collected Information:</strong> Browser type, IP address, 
                  operating system, referring URLs, pages viewed, and dates/times of visits. This 
                  information is collected through cookies and similar tracking technologies.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to respond to your inquiries and quote requests, 
                  schedule and provide cleaning services, communicate with you regarding appointments 
                  and service updates, improve our website and customer experience, comply with 
                  applicable legal obligations under Missouri law, and send promotional communications 
                  if you have opted in (you may opt out at any time).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">3. How We Share Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may 
                  share your information with trusted service providers who assist in operating our 
                  website and business (such as Web3Forms for form processing), provided they agree 
                  to keep your information confidential. We may also disclose your information if 
                  required by law, court order, or governmental regulation in the State of Missouri 
                  or at the federal level.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar technologies to enhance your browsing 
                  experience and analyze site traffic. You may disable cookies through your browser 
                  settings, but some features of our website may not function properly.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Data Security</h2>
                <p>
                  We implement reasonable administrative, technical, and physical security measures 
                  to protect your personal information from unauthorized access, alteration, 
                  disclosure, or destruction. However, no method of electronic transmission or 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the 
                  purposes outlined in this policy, comply with legal obligations, resolve disputes, 
                  and enforce our agreements, consistent with Missouri record retention requirements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Your Rights</h2>
                <p>
                  You may request access to, correction of, or deletion of your personal information 
                  at any time by contacting us at tigerpawcleaning@gmail.com or (573) 777-0025. We 
                  will respond to your request within a reasonable timeframe.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Children's Privacy</h2>
                <p>
                  Our website and services are not directed to individuals under the age of 18. We 
                  do not knowingly collect personal information from children. If we become aware 
                  that we have collected information from a minor, we will take steps to delete it 
                  promptly.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites (such as Facebook). We are 
                  not responsible for the privacy practices or content of those sites. We encourage 
                  you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">10. Missouri Merchandising Practices Act</h2>
                <p>
                  Tiger Paw Cleaning LLC operates in compliance with the Missouri Merchandising 
                  Practices Act (Chapter 407, RSMo), which prohibits deceptive and unfair business 
                  practices. We are committed to transparency in all aspects of our business, 
                  including the collection and use of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on 
                  this page with an updated effective date. Your continued use of our website or 
                  services after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">12. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us:
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