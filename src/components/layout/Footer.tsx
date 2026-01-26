import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

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
    { name: "IPO Readiness Advisory", href: "/services/ipo-readiness" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-foreground">T</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">TaxSonic</span>
                <span className="font-serif text-xl font-light opacity-70 ml-1">Global</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Premium regulatory risk, tax intelligence, and governance advisory for 
              businesses navigating complexity with confidence.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold">
              <Mail className="w-4 h-4" />
              <a href="mailto:taxsonicglobal@gmail.com" className="hover:underline">
                taxsonicglobal@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Navigate</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Advisory Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} TaxSonic Global. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Advisory by appointment only
          </p>
        </div>
      </div>
    </footer>
  );
}
