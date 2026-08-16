import Link from "next/link";
import { getNavigation } from "@/lib/content/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const { footer } = getNavigation();

  return (
    <footer className="border-border bg-surface-1 mt-24 border-t">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo height={22} />
            <p className="text-midnight-500 mt-4 max-w-xs text-sm">
              Innovation, Made Graceful. Graceful, dependable technology for
              travel, work, home and everywhere in between.
            </p>
            <p className="text-midnight-700 mt-6 text-sm font-medium">
              Discover thoughtful power and everyday essentials, or connect
              with us at info@aanuni.com.
            </p>
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
          <p>Technology, made graceful.</p>
        </div>
      </Container>
    </footer>
  );
}
