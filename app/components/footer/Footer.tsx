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
        <div className="py-6 text-lg text-green space-y-3">
          <p className="font-bold text-xl">
            © 2025 Nerdconf. All rights reserved.
          </p>
          <p className="font-medium">
            Developed by{" "}
            <a
              href="https://github.com/nahuelbarrera"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Aftercode
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/alex-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Nerdconf
            </a>
          </p>
          <p className="font-medium">
            Art by{" "}
            <a
              href="https://github.com/nahuelbarrera"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              FLGraphix
            </a>
          </p>
          <p className="font-medium">
            Built for{" "}
            <a
              href="https://nerdconf.com"
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
