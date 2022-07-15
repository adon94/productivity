export const Title = ({ children }) => (
  <h2 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
    {children}
  </h2>
);

export const Subtitle = ({ children }) => (
  <h4 className="md:text-left text-lg mt-5">
    {children}
  </h4>
);

export const HeroText = ({ children }) => (
  <h2 className="text-8xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
    {children}
  </h2>
);