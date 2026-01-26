import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-wide py-16 grid lg:grid-cols-3 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-xl mb-4">
            TaxSonic Global
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            A premium regulatory risk, tax structuring, and governance advisory
            firm serving founders, boards, and leadership teams globally.
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/industries" className="hover:text-foreground">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-medium mb-4">Advisory Scope</h4>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
            TaxSonic Global provides advisory services only. We do not offer
            execution, statutory audit, regulatory representation, funding
            guarantees, or litigation support unless separately agreed.
          </p>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-200 py-6">
        <div className="container-wide text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} TaxSonic Global. All rights reserved.</span>
          <span>Confidential • Independent • Advisory-Only</span>
        </div>
      </div>
    </footer>
  );
}
