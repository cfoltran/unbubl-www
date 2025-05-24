export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#111] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy for Unbubl</h1>
        <p className="text-gray-400"><strong>Last Updated: [Date]</strong></p>

        <p className="text-lg leading-relaxed">
          At
          <strong className="text-white"> Unbubl</strong>
          , we are committed to protecting your privacy. This Privacy Policy
          outlines how we collect, use, and protect your personal information when
          you use our app.
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p className="text-lg leading-relaxed">
            We may collect the following types of personal data when you use the
            app:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong className="text-white">Pseudo and Phone Number</strong>
              : We collect your pseudo and phone number for
              <strong className="text-white"> authentication</strong>
              purposes (e.g., via phone authentication).
            </li>
            <li>
              <strong className="text-white">Device Information</strong>
              : We may collect device IDs and other related data for the purpose of
              providing better services.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Data</h2>
          <p className="text-lg leading-relaxed">We use your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong className="text-white">Authentication</strong>
              : To verify your identity and grant you access to the app via phone
              authentication.
            </li>
            <li>
              <strong className="text-white">Analytics</strong>
              : We use third-party services like
              <strong className="text-white"> Amplitude</strong>
              to track usage data, but
              <strong className="text-white"> we do not send phone numbers</strong>
              to Amplitude. Instead, we may send username, device ID, and user ID
              for internal analytics purposes.
            </li>
            <li>
              <strong className="text-white">Notifications</strong>
              : To send you push notifications based on your preferences.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">3. Third-Party Services</h2>
          <p className="text-lg leading-relaxed">We share your data with the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong className="text-white">Amplitude</strong>
              : We share username, device ID, user ID, and location for analytics
              purposes, but
              <strong className="text-white"> this data is not used for targeted advertising</strong>
              or other tracking purposes.
            </li>
            <li>
              <strong className="text-white">Twilio</strong>
              : For phone number-based authentication and communication.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            These third-party services do
            <strong className="text-white"> not use your data for advertising</strong>
            or other tracking purposes.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">4. Location Data</h2>
          <p className="text-lg leading-relaxed">
            We do
            <strong className="text-white"> not</strong>
            collect or store location data.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">5. Data Retention</h2>
          <p className="text-lg leading-relaxed">
            We do
            <strong className="text-white"> not</strong>
            store personal data long-term. All data collected is used temporarily
            for authentication purposes or analytics. If you wish to have your data
            removed, you can contact us.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
          <p className="text-lg leading-relaxed">
            As a user of
            <strong className="text-white"> Unbubl</strong>
            , you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong className="text-white">Account Deletion</strong>
              : You can request the deletion of your account and personal data by
              contacting us at
              <a href="mailto:clement@deckart.xyz" className="text-blue-400 hover:text-blue-300">clement@deckart.xyz</a>
              .
            </li>
            <li>
              <strong className="text-white">Opt-Out</strong>
              : You can opt-out of data collection for analytics and push
              notifications at any time via the app&apos;s settings.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">7. Security</h2>
          <p className="text-lg leading-relaxed">
            We take the security of your data seriously and use
            <strong className="text-white"> Supabase Auth</strong>
            for secure mobile authentication. Your data is encrypted and stored
            securely to prevent unauthorized access.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">8. Children&apos;s Privacy</h2>
          <p className="text-lg leading-relaxed">
            Our app is not intended for children under the age of 13. We do not
            knowingly collect data from children. If we become aware that we have
            collected data from a child under the age of 13, we will take steps to
            delete such information.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">9. Push Notifications</h2>
          <p className="text-lg leading-relaxed">
            We send
            <strong className="text-white"> push notifications</strong>
            to inform you about updates, messages, or activities within the app. You
            can choose to enable or disable notifications in your settings at any
            time.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">10. Changes to This Privacy Policy</h2>
          <p className="text-lg leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes
            in our practices or for other operational, legal, or regulatory reasons.
            Any changes will be reflected in the updated &quot;Last Updated&quot; date at the
            top of this page.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">11. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or our
            data practices, please contact us at:
          </p>
          <p className="text-lg leading-relaxed">
            <strong className="text-white">Email</strong>
            :
            <a href="mailto:clement@deckart.xyz" className="text-blue-400 hover:text-blue-300">clement@deckart.xyz</a>
          </p>
        </section>
      </div>
    </div>
  );
} 