import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description:
    "PropertyPulse is a platform that allows you to find the perfect rental property for you.",
  keywords: "rental, property, real estate, home, apartment, house, investment",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
