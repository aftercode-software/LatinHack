import { cn } from "@/lib/utils";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="mt-10">
      <Container>
        <BorderSeparator />
        <div className="py-6 text-3xl font-medium font-upheaval text-green">
          <p>THE WORLD BELONGS TO YOU... NERD.</p>
        </div>
        <BorderSeparator />
        <div className="py-6 text-lg text-green space-y-3 font-roboto-mono">
          <p className="font-bold text-xl">
            © 2025 Nerdconf. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              data-link-name="developed_by_aftercode"
              href="https://aftercode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-600"
            >
              Aftercode
            </a>{" "}
            and{" "}
            <a
              data-link-name="developed_by_nerdconf"
              href="https://nerdconf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Nerdconf
            </a>
          </p>
          <p>
            Art by{" "}
            <a
              data-link-name="art_by_flgx"
              href="https://www.behance.net/flgx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              FLGraphix
            </a>
          </p>
          <p>
            Built for{" "}
            <a
              data-link-name="built_for_polkadot"
              href="https://polkadot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Polkadot
            </a>
          </p>
        </div>
        <BorderSeparator className="mb-10" />
      </Container>
    </footer>
  );
}

function BorderSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full border-t-2 border-dashed border-green",
        className
      )}
    />
  );
}
