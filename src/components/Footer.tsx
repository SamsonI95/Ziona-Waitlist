import zionaWordmark from "@/assets/ziona-wordmark.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container text-center space-y-4">
        <img src={zionaWordmark} alt="Ziona" className="h-8 mx-auto" />
        <div className="flex justify-center gap-6 text-sm">
          <a
            href="https://gamy-freedom-336.notion.site/Ziona-s-privacy-Policy-36c872f9c26980f7aed7d871bdb7859e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Privacy Policy
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ZionKing LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
