const marqueeItems = [
  "Food Security",
  "Public Health Response",
  "Youth & Sports Development",
  "Girl Child Empowerment",
  "Education Support",
  "Leadership Training",
  "Enterprise Support",
  "Creative Empowerment",
  "Culture & Heritage",
  "Sustainable Communities",
  "Community Infrastructure",
  "SDG-Aligned Impact",
];

export function ImpactMarquee() {
  const repeatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section
      className="impact-marquee-section"
      aria-label="G Initiative impact areas"
    >
      <div className="impact-marquee">
        <div className="impact-marquee__track">
          {repeatedItems.map((item, index) => (
            <span key={`${item}-${index}`} className="impact-marquee__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}