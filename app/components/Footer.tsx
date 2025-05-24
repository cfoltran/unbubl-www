import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Unbubl</h3>
            <p className="text-sm text-white/70">
              Discover hidden stories around you.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://apps.apple.com/fr/app/unbubl/id6744279413?l=en-GB"
                  className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
                >
                  Download the app
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/delete-account"
                  className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a 
              href="mailto:clement@deckart.xyz"
              className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
            >
              clement@deckart.xyz
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Unbubl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 