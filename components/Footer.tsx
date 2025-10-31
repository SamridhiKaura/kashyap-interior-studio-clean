export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Kashyap Interior Studio. All rights reserved.</p>
        <p>Design by Samridhi Kaura</p>
      </div>
    </footer>
  );
}
