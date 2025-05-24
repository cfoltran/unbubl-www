import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Unbubl</h3>
            <p className="text-sm text-white/70">
              Découvrez des histoires cachées autour de vous.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://apps.apple.com/fr/app/unbubl/id6744279413?l=en-GB"
                  className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
                >
                  Télécharger l'application
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a 
              href="mailto:hello@unbubl.com"
              className="text-sm text-white/70 hover:text-[#00bcd4] transition-colors"
            >
              hello@unbubl.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Unbubl. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 