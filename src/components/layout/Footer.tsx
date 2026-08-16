import Link from "next/link";
import { getNavigation } from "@/lib/content/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";

export function Footer() {
  const { footer } = getNavigation();

  return (
    <footer className="border-border bg-surface-1 mt-24 border-t">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo height={22} />
            <p className="text-midnight-500 mt-4 max-w-xs text-sm">
              Innovation, Made Graceful. Graceful, dependable technology for
              travel, work, home and everywhere in between.
            </p>
            <NewsletterForm className="mt-6 max-w-sm" />
          </div>

          {footer.map((column) => (
            <div key={column.heading}>
              <p className="text-midnight-400 text-xs font-semibold tracking-wide uppercase">
                {column.heading}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-midnight-600 hover:text-midnight-900 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border text-midnight-500 mt-12 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} aanuni. All rights reserved.</p>
          <p>
            Prices and availability shown at checkout. Taxes and shipping
            calculated based on your region.
          </p>
        </div>
      </Container>
    </footer>
  );
}
