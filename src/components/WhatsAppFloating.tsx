export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/918858118918?text=Hello%20TaxSonic%20Global%2C%20I%20would%20like%20to%20discuss%20an%20advisory%20engagement."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366]
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-105
      "
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 text-white"
        fill="currentColor"
      >
        <path d="M19.11 17.35c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.14-.19.29-.76.95-.93 1.14-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.44-.87-.78-1.45-1.74-1.62-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.5-.17 0-.36-.02-.55-.02-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.14.19 2.06 3.15 5 4.41.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.13-.27-.21-.56-.36z"/>
        <path d="M16.02 3C9.39 3 4 8.38 4 15c0 2.64.86 5.07 2.32 7.04L4 29l7.16-2.28A11.9 11.9 0 0016.02 27C22.65 27 28 21.62 28 15S22.65 3 16.02 3zm0 21.6c-2.2 0-4.25-.64-5.98-1.74l-.43-.26-4.25 1.35 1.39-4.14-.28-.43A9.52 9.52 0 016.5 15c0-5.26 4.27-9.53 9.52-9.53 5.26 0 9.52 4.27 9.52 9.53 0 5.26-4.26 9.6-9.52 9.6z"/>
      </svg>
    </a>
  );
}
