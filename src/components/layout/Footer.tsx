import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Regulatory Risk Advisory", href: "/services/regulatory-risk" },
    { name: "Tax Structuring Advisory", href: "/services/tax-structuring" },
    { name: "Finance & Control Architecture", href: "/services/finance-architecture" },
    { name: "Risk Diagnostic", href: "/services/risk-diagnostic" },
    { name: "Forensic Readiness", href: "/services/forensic-readiness" },
    { name: "IPO Readiness", href: "/services/ipo-readiness" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="font-serif text-xl mb-3">TaxSonic Global</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Premium regulatory risk, tax intelligence, and governance advisory
            firm helping businesses scale with clarity and confidence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-serif text-lg mb-4">Navigate</h4>
          <ul className="space-y-2">
            {navigation.main.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg mb-4">Advisory Services</h4>
          <ul className="space-y-2">
            {navigation.services.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TaxSonic Global. All rights reserved.
          </p>

          <p className="text-[11px] text-muted-foreground text-center max-w-xl">
            TaxSonic Global provides advisory services only. We do not offer
            statutory audit, legal opinions, merchant banking, IPO execution,
            SEBI filings, or funding guarantees unless separately agreed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
