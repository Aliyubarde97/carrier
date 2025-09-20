
import { ShieldCheck, Info, WarningCircle, LinkSimple } from 'phosphor-react';

const TermsOfServiceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4 mt-3">
            Terms of Service
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">

          {/* General Disclaimers */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-t-4 border-blue-500 dark:border-blue-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <ShieldCheck size={32} weight="bold" className="mr-3 text-blue-500 dark:text-blue-400" />
              General Service Disclaimers
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>
                No Job Guarantee:
                 While we connect candidates with opportunities, we do not guarantee employment.
                  The hiring company retains full discretion over recruitment and final hiring decisions.
              </li>
              <li>
                Third-Party Information:
                 Our platform displays content from various third parties, including employers and job seekers.
                  We do not warrant the absolute accuracy, completeness, or authenticity of information published by these third parties.
              </li>
              <li>
                No Responsibility for Third-Party Content:
                 We disclaim all responsibility for the validity, content, or outcomes related to job postings or information provided by
                  third parties on our site or through external channels.
              </li>
              <li>
                Information Availability: We do not guarantee a specific volume or frequency of alerts or information.
                 Content is published and distributed based solely on availability.
              </li>
              <li>
                Delivery Failures: We are not liable for undelivered messages or alerts resulting from network service interruptions
                 technical issues with your service provider, or any other unforeseen circumstances beyond our control.
              </li>
              <li>
                Informational Service:CareerDoor operates primarily as an informational service.
                 We cannot guarantee 100% authenticity or accuracy of all vacancy details or user-submitted information.
              </li>
            </ul>
          </div>

          {/* User Rights & Responsibilities */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-t-4 border-green-500 dark:border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Info size={32} weight="bold" className="mr-3 text-green-500 dark:text-green-400" />
              Your Rights & Our Rights
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>
                Redistribution: You are permitted to redistribute the service alerts and information we send to you.
              </li>
              <li>
                Service Termination:
                 We reserve the right to modify or terminate any aspect of our service at any time, with or without prior notification to clients.
              </li>
              <li>
                User Authenticity & Fraud: We do not certify the authenticity of all users of this service. We are not responsible for any fraud or damages that may arise from interactions or information obtained through our service. Users are advised to exercise caution and due diligence.
              </li>
            </ul>
          </div>

          {/* External Links & Content */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-t-4 border-orange-500 dark:border-orange-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <LinkSimple size={32} weight="bold" className="mr-3 text-orange-500 dark:text-orange-400" />
              External Links & Job Postings
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>
                External Links:
               Our service may include links to external websites. We do not endorse, nor do we accept responsibility for, the content, privacy practices, or accuracy of information found on these external sites.
              </li>
              <li>
                Expired Job Postings: Job postings placed on our website will remain 
                visible after their expiry date, but the application process for such postings will be disabled.
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-red-50 dark:bg-red-950 p-8 rounded-lg shadow-md border-t-4 border-red-600 dark:border-red-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <WarningCircle size={32} weight="bold" className="mr-3 text-red-600 dark:text-red-400" />
              Limitation of Liability
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>
                General Liability Exclusion: We shall not be liable for any claim arising from the performance, non-performance, delayed delivery, or defects in our service. This includes, but is not limited to, special, indirect, economic, or consequential loss or damage (such as loss of profit or revenue), regardless of how it arises or is caused (including through negligence), in connection with the supply, functioning, or use of our Service.
              </li>
              <li>
                Third-Party Content Liability Exclusion:
                 We shall not be liable for any claims arising from vacancies posted by employers, other information on our site, or any loss or damage (including loss of profit or revenue) whether from negligence or otherwise, in connection with the supply, functioning, or use of the Service, whether directly through us or any of our partners. Our liability, if any, shall in all cases be limited to the fees paid by the client directly to us in the specific year/month during which the event of default occurred.
              </li>
              <li>
                Unrestricted Liability for Injury: Nothing within these terms shall limit either party's liability for death or personal injury resulting from proven negligence by itself, its employees, or agents.
              </li>
              <li>
                Client Indemnification: The Client agrees to fully indemnify and hold us harmless against any liability to third parties that arises from the Client's use of our service.
              </li>
              <li>
                Exclusion of Client Loss: We are not responsible or liable to the Client for any loss or damage suffered by the Client as a direct or indirect result of using the services we provide.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceSection;