import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-gold/20 mt-24">
      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="font-serif text-lg font-medium mb-3">
            TaxSonic Global
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Premium regulatory risk, tax structuring, and governance advisory
            firm serving founders, CFOs, and boards globally.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-serif text-sm font-medium mb-3">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-gold">Home</a></li>
            <li><a href="/about" className="hover:text-gold">About</a></li>
            <li><a href="/services" className="hover:text-gold">Services</a></li>
            <li><a href="/industries" className="hover:text-gold">Industries</a></li>
            <li><a href="/contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div>
          <h4 className="font-serif text-sm font-medium mb-3">
            Advisory Notice
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Advisory-only firm. We do not provide execution, statutory audit,
            legal opinions, SEBI filings, valuation certification, or funding
            guarantees unless separately agreed in writing.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="container-wide py-4 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} TaxSonic Global. All rights reserved.
          </span>
          <span>
            Independent • Conflict-free • Advisory-led
          </span>
        </div>
      </div>
    </footer>
  );
}
