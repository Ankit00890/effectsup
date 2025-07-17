export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center text-white/60">
      <div className="max-w-3xl mx-auto">
        {/* Removed Logo and Heart icon */}
        <p className="text-sm mt-6">
          © {new Date().getFullYear()} Effectsup. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

