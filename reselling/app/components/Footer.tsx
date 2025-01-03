export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-6 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Footer Branding */}
        <div className="text-lg font-semibold">🎫 Ticket Reselling</div>

        {/* Footer Info */}
        <div className="mt-4 md:mt-0 text-center text-sm">
          Your trusted platform for buying and selling tickets securely.
        </div>

        {/* Copyright Section */}
        <div className="mt-4 md:mt-0 text-sm">
          © {currentYear} Ticket Reselling. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
