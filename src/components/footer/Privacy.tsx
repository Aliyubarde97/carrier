import React from 'react';
import { LockSimple, UserCircle, DeviceMobile, Cookie, ShareNetwork, XCircle, FileText, CheckCircle, ChatCenteredText } from 'phosphor-react';

const PrivacyPolicySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 dark:text-purple-400 mb-4 mt-3">
            Privacy Policy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your privacy is paramount. This policy outlines how CareeDoor collects, uses, protects, and discloses your information.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Last Modified: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">

          {/* Introduction */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-purple-500 dark:border-purple-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <LockSimple size={32} weight="bold" className="mr-3 text-purple-500 dark:text-purple-400" />
              Introduction
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              CareerDoor  simplifies the job search process by publishing the latest career opportunities and information for individuals in Africa. 
              We also provide an intuitive platform for employers to connect with suitable candidates. This Privacy Policy details our practices concerning your personal data. By using our website and services, you consent to the data practices described in this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <UserCircle size={32} weight="bold" className="mr-3 text-blue-500 dark:text-blue-400" />
              Information We Collect
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              When you register or interact with our site, we may collect personal information, which can include:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Identity Data: Name, date of birth, gender.</li>
              <li>Contact Data:Email address, phone number, physical address.</li>
              <li>Professional Data: Educational background, work history, skills, qualifications, certifications, CV/Resume.</li>
              <li>Profile Data:Job objectives, preferences, and any other information you choose to include in your profile.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
              You are welcome to visit our site anonymously; however, certain services require registration and the submission of personal data.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-green-500 dark:border-green-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <DeviceMobile size={32} weight="bold" className="mr-3 text-green-500 dark:text-green-400" />
              How We Use Your Information
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              The information we collect from you may be used for the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Personalize Your Experience: To tailor our services and content to your specific needs and interests.</li>
              <li>Facilitate Connections: To allow employers to discover and contact you for relevant job opportunities that align with your profile.</li>
              <li>Enhance Job Search: To enable you to efficiently search for and apply to jobs, or for employers to search for job seekers.</li>
              <li>Service Communications: To send you periodic updates, newsletters, and information about our services.</li>
              <li>Promotional Activities: To administer surveys, contests, or other promotional activities on our site.</li>
              <li>Improve Customer Service: To respond more effectively and promptly to your inquiries and support requests.</li>
            </ul>
          </div>

          {/* How We Protect Your Information */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-l-4 border-yellow-500 dark:border-yellow-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <LockSimple size={32} weight="bold" className="mr-3 text-yellow-500 dark:text-yellow-400" />
              How We Protect Your Information
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We implement a range of robust security measures designed to safeguard your personal information when you access or submit it. These measures include [mention specific measures like SSL, encryption, access controls if applicable, but keep it general if not sure].
            </p>
          </div>

          {/* Data Deletion Requests */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-red-500 dark:border-red-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <XCircle size={32} weight="bold" className="mr-3 text-red-500 dark:text-red-400" />
              Requesting Data Deletion
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              You have the right to request the deletion of your personal data from our database.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Deletion Timeline: Upon receiving a verified request, we endeavor to delete your records and associated data from our active databases within 48 hours.</li>
              <li>How to Request:To initiate a data deletion request, please contact us using our dedicated <a href="/contact-us" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">Contact Us form</a>.</li>
            </ul>
          </div>

          {/* Use of Cookies */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-l-4 border-orange-500 dark:border-orange-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <Cookie size={32} weight="bold" className="mr-3 text-orange-500 dark:text-orange-400" />
              Do We Use Cookies?
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Yes, we utilize cookies. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Maintain Your Session:To keep you logged in and remember your preferences during your visit.</li>
              <li>Deliver Relevant Ads: To serve you relevant third-party advertisements based on your interests and site activity.</li>
            </ul>
          </div>

          {/* Information Disclosure */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-teal-500 dark:border-teal-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <ShareNetwork size={32} weight="bold" className="mr-3 text-teal-500 dark:text-teal-400" />
              Information Disclosure to Outside Parties
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              We are committed to protecting your personally identifiable information and do not sell, trade, or otherwise transfer it to outside parties, except as described below:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Trusted Third-Party Service Providers: We may share your information with trusted third parties who assist us in operating our website, conducting our business, or providing services to you, provided these parties agree to keep your information confidential.</li>
              <li>Employer Visibility:During the employer search and recruitment process, certain elements of your profile, such as your resume/CV, job objectives, name, and profile picture, will be made visible to potential employers to facilitate candidate selection and contact.</li>
              <li>Legal Compliance & Protection: We may disclose your information when we believe it is necessary to comply with legal obligations, enforce our site policies, or protect our rights, property, or safety, or the rights, property, or safety of others.</li>
              <li>Non-Personally Identifiable Data: Non-personally identifiable visitor information may be shared with other parties for marketing, advertising, or other analytical purposes.</li>
            </ul>
          </div>

          {/* Policy Scope */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-l-4 border-cyan-500 dark:border-cyan-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <FileText size={32} weight="bold" className="mr-3 text-cyan-500 dark:text-cyan-400" />
              Online Privacy Policy Only
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This online Privacy Policy pertains exclusively to information collected through our website and digital services. It does not apply to information collected offline or through other channels.
            </p>
          </div>

          {/* Consent */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-lime-500 dark:border-lime-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <CheckCircle size={32} weight="bold" className="mr-3 text-lime-500 dark:text-lime-400" />
              Your Consent
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              By utilizing our site and services, you signify your consent to this Privacy Policy.
            </p>
          </div>

          {/* Changes to Our Policy */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-l-4 border-violet-500 dark:border-violet-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <ChatCenteredText size={32} weight="bold" className="mr-3 text-violet-500 dark:text-violet-400" />
              Changes to Our Privacy Policy
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Should we decide to amend our Privacy Policy, we will post those changes on this page. We encourage you to review this page periodically for any updates.
            </p>
          </div>

          {/* Unsubscription */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-pink-500 dark:border-pink-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <XCircle size={32} weight="bold" className="mr-3 text-pink-500 dark:text-pink-400" />
              Unsubscription from Communications
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              If you wish to cease receiving our information, updates, or alerts at any time:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>You can unsubscribe by clicking the "unsubscribe" link located in our newsletters.</li>
              <li>Alternatively, you can manage your alert preferences directly from your user profile page.</li>
              <li>For further assistance, you may also send a request through our <a href="/contact-us" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">Contact Us form</a>.</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-l-4 border-gray-500 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <ChatCenteredText size={32} weight="bold" className="mr-3 text-gray-500 dark:text-gray-400" />
              Contacting Us
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Should you have any questions or concerns regarding this Privacy Policy, please feel free to contact us through our <a href="/contact-us" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">Contact Us form</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;