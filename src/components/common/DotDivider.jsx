/**
 * Elegant divider: thin gradient lines with a centered terracotta dot.
 * Matches the header divider style for consistent section separation.
 */
const DotDivider = ({ className = '' }) => (
  <div className={`relative h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent ${className}`}>
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: '#942e06' }}
      aria-hidden
    />
  </div>
);

export default DotDivider;
