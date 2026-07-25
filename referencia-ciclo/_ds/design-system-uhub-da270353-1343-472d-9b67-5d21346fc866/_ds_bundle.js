/* @ds-bundle: {"format":4,"namespace":"DesignSystemUHub_da2703","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"CierreInstitucional","sourcePath":"components/marketing/CierreInstitucional.jsx"},{"name":"CircunstanciaCard","sourcePath":"components/marketing/CircunstanciaCard.jsx"},{"name":"CredibilityBand","sourcePath":"components/marketing/CredibilityBand.jsx"},{"name":"DiferenciadorCard","sourcePath":"components/marketing/DiferenciadorCard.jsx"},{"name":"FAQAccordion","sourcePath":"components/marketing/FAQAccordion.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"LineaTematicaCard","sourcePath":"components/marketing/LineaTematicaCard.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"ProcessDiagram","sourcePath":"components/marketing/ProcessDiagram.jsx"},{"name":"StatCallout","sourcePath":"components/marketing/StatCallout.jsx"},{"name":"TestimonioCard","sourcePath":"components/marketing/TestimonioCard.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6dc9b9ecf041","components/core/Button.jsx":"ae93699acf9a","components/core/Card.jsx":"9ba133254ace","components/core/Input.jsx":"344e768cacc7","components/marketing/CierreInstitucional.jsx":"2118da77ae7c","components/marketing/CircunstanciaCard.jsx":"0b3706940a28","components/marketing/CredibilityBand.jsx":"417837980874","components/marketing/DiferenciadorCard.jsx":"dcbc689cb854","components/marketing/FAQAccordion.jsx":"cf5848e7b77f","components/marketing/Hero.jsx":"6103697164d4","components/marketing/LineaTematicaCard.jsx":"f545cb2e5257","components/marketing/PricingCard.jsx":"6bbaf646b976","components/marketing/ProcessDiagram.jsx":"888144ef8138","components/marketing/StatCallout.jsx":"4d34ce78d243","components/marketing/TestimonioCard.jsx":"9dd7fbad214d","components/navigation/SiteHeader.jsx":"d07bf86f1cec","ui_kits/emprende-diario/BusinessHomePage.jsx":"3931fd901776","ui_kits/uhub-ac/ACHomePage.jsx":"20d1a44d7c42"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystemUHub_da2703 = window.DesignSystemUHub_da2703 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'orange',
  children
}) {
  const tones = {
    orange: {
      background: 'var(--orange-accent)',
      color: '#fff'
    },
    red: {
      background: 'var(--red-uhub)',
      color: '#fff'
    },
    neutral: {
      background: 'var(--gray-light)',
      color: 'var(--gray-dark)'
    },
    blue: {
      background: 'var(--blue-accent)',
      color: '#fff'
    }
  };
  return React.createElement('span', {
    style: {
      ...tones[tone],
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block',
      letterSpacing: '.01em'
    }
  }, children);
}
function Tag({
  children
}) {
  return React.createElement('span', {
    style: {
      background: 'transparent',
      border: '1px solid var(--border-medium)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onClick,
  type = 'button'
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14
    },
    md: {
      padding: '12px 22px',
      fontSize: 15
    },
    lg: {
      padding: '15px 28px',
      fontSize: 16
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    minHeight: 44,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background-color .15s ease',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--cta-primary-bg)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gray-dark)',
      border: '1px solid var(--gray-dark)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--red-uhub)'
    },
    onDark: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.6)'
    }
  };
  const hoverBg = {
    primary: 'var(--cta-primary-bg-hover)'
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant]
  };
  if (hover && !disabled && variant === 'primary') style.background = 'var(--cta-primary-bg-hover)';
  if (hover && !disabled && variant === 'secondary') {
    style.background = 'var(--gray-dark)';
    style.color = '#fff';
  }
  if (hover && !disabled && variant === 'ghost') style.textDecoration = 'underline';
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padded = true
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: padded ? 'var(--space-6)' : 0,
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required
}) {
  const [id] = React.useState(() => 'in-' + Math.random().toString(36).slice(2, 8));
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    htmlFor: id,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--gray-dark)'
    }
  }, label), React.createElement('input', {
    id,
    type,
    placeholder,
    value,
    onChange,
    required,
    style: {
      minHeight: 44,
      padding: '0 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-medium)',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      color: 'var(--gray-dark)',
      outline: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CierreInstitucional.jsx
try { (() => {
function CierreInstitucional({
  title,
  body,
  ctaLabel
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--gray-dark)',
      color: '#fff',
      padding: 'var(--space-16) var(--space-8)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      color: '#fff',
      margin: 0,
      maxWidth: 560
    }
  }, title), body && React.createElement('p', {
    style: {
      fontSize: 16,
      color: 'rgba(255,255,255,.85)',
      maxWidth: 520,
      margin: 0
    }
  }, body), ctaLabel && React.createElement('button', {
    style: {
      minHeight: 44,
      marginTop: 'var(--space-2)',
      padding: '13px 26px',
      background: 'var(--cta-primary-bg)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { CierreInstitucional });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CierreInstitucional.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CircunstanciaCard.jsx
try { (() => {
function CircunstanciaCard({
  color = 'var(--red-uhub)',
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: color,
      marginTop: 6,
      flexShrink: 0
    }
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--gray-dark)'
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2,
      lineHeight: 1.5
    }
  }, description)));
}
Object.assign(__ds_scope, { CircunstanciaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CircunstanciaCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CredibilityBand.jsx
try { (() => {
function CredibilityBand({
  items = []
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--gray-dark)',
      color: '#fff',
      padding: 'var(--space-5) var(--space-8)',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      textAlign: 'center'
    }
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement('span', {
    style: {
      opacity: .5
    }
  }, '·'), React.createElement('span', null, it))));
}
Object.assign(__ds_scope, { CredibilityBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CredibilityBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DiferenciadorCard.jsx
try { (() => {
function DiferenciadorCard({
  notTitle = 'NO ES',
  notItems = [],
  isTitle = 'SÍ ES',
  isItems = []
}) {
  const col = (title, items, isCheck) => React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: '.04em',
      color: isCheck ? 'var(--red-uhub)' : 'var(--gray-medium)'
    }
  }, title), items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--gray-dark)'
    }
  }, React.createElement('span', {
    style: {
      color: isCheck ? 'var(--red-uhub)' : 'var(--gray-medium)',
      fontWeight: 700
    }
  }, isCheck ? '✓' : '✕'), React.createElement('span', null, it))));
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-card)'
    }
  }, col(notTitle, notItems, false), col(isTitle, isItems, true));
}
Object.assign(__ds_scope, { DiferenciadorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DiferenciadorCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FAQAccordion.jsx
try { (() => {
function FAQAccordion({
  items = []
}) {
  const [open, setOpen] = React.useState(0);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      maxWidth: 720
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('button', {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      padding: '20px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--gray-dark)',
      textAlign: 'left',
      minHeight: 44
    }
  }, React.createElement('span', null, it.q), React.createElement('span', {
    style: {
      fontSize: 22,
      color: 'var(--red-uhub)',
      fontWeight: 300,
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform .2s'
    }
  }, '+')), open === i && React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      margin: '0 0 20px'
    }
  }, it.a))));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  align = 'left'
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      minHeight: 420,
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      padding: 'var(--space-16) var(--space-12)',
      backgroundColor: 'var(--gray-dark)',
      backgroundImage: imageSrc ? `linear-gradient(var(--overlay-dark),var(--overlay-dark)),url(${imageSrc})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textAlign: align
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 640
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-lg)',
      lineHeight: 'var(--leading-tight)',
      color: '#fff',
      margin: 0
    }
  }, title), subtitle && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-normal)',
      marginTop: 'var(--space-4)',
      color: 'rgba(255,255,255,.9)'
    }
  }, subtitle), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      flexWrap: 'wrap'
    }
  }, ctaPrimary && React.createElement('button', {
    style: {
      minHeight: 44,
      padding: '13px 26px',
      background: 'var(--cta-primary-bg)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15
    }
  }, ctaPrimary), ctaSecondary && React.createElement('button', {
    style: {
      minHeight: 44,
      padding: '13px 26px',
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.6)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15
    }
  }, ctaSecondary))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LineaTematicaCard.jsx
try { (() => {
function LineaTematicaCard({
  color = 'var(--red-uhub)',
  title,
  description,
  aliados = []
}) {
  return React.createElement('div', {
    style: {
      borderLeft: `4px solid ${color}`,
      paddingLeft: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--gray-dark)'
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, description), aliados.length > 0 && React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--gray-medium)',
      marginTop: 4
    }
  }, 'Aliados: ', aliados.join(', ')));
}
Object.assign(__ds_scope, { LineaTematicaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LineaTematicaCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function PricingCard({
  badge,
  badgeTone = 'red',
  title,
  price,
  priceNote,
  description,
  features = [],
  ctaLabel,
  emphasized = true,
  note
}) {
  return React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 260,
      background: '#fff',
      border: emphasized ? '2px solid var(--gray-dark)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, badge && React.createElement('span', {
    style: {
      alignSelf: 'flex-start',
      background: badgeTone === 'red' ? 'var(--red-uhub)' : 'var(--gray-medium)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 16
    }
  }, badge), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      margin: 0,
      color: 'var(--gray-dark)'
    }
  }, title), price && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 44,
      margin: '14px 0 4px',
      color: 'var(--gray-dark)'
    }
  }, price, priceNote && React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 400,
      opacity: .5,
      marginLeft: 6
    }
  }, priceNote)), description && React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginBottom: 20
    }
  }, description), React.createElement('ul', {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      marginBottom: 26,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, features.map((f, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: 'var(--gray-dark)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--red-uhub)',
      fontWeight: 700
    }
  }, '✓'), f))), ctaLabel && React.createElement('button', {
    style: {
      minHeight: 44,
      padding: '13px',
      background: emphasized ? 'var(--cta-primary-bg)' : 'transparent',
      color: emphasized ? '#fff' : 'var(--gray-dark)',
      border: emphasized ? 'none' : '2px solid var(--gray-dark)',
      borderRadius: 'var(--radius-md)',
      fontWeight: 700,
      fontSize: 14
    }
  }, ctaLabel), note && React.createElement('p', {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      textAlign: 'center',
      marginTop: 12,
      marginBottom: 0
    }
  }, note));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessDiagram.jsx
try { (() => {
function ProcessDiagram({
  steps = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)'
    }
  }, steps.map((s, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 140,
      textAlign: 'center',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: i % 2 === 0 ? 'var(--red-uhub)' : 'var(--burgundy)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20
    }
  }, i + 1), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--gray-dark)'
    }
  }, s.name), React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, s.subtitle))), i < steps.length - 1 && React.createElement('div', {
    style: {
      flex: 1,
      height: 2,
      background: 'var(--border-medium)',
      marginTop: 27
    }
  }))));
}
Object.assign(__ds_scope, { ProcessDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessDiagram.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCallout.jsx
try { (() => {
function StatCallout({
  value,
  label,
  tone = 'red'
}) {
  const colors = {
    red: 'var(--red-uhub)',
    orange: 'var(--orange-accent)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-stat)',
      color: colors[tone],
      lineHeight: 1
    }
  }, value), React.createElement('span', {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      maxWidth: 160
    }
  }, label));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonioCard.jsx
try { (() => {
function TestimonioCard({
  initials,
  name,
  business,
  quote,
  results = []
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 320
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('span', {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--red-uhub)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      flexShrink: 0
    }
  }, initials), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--gray-dark)'
    }
  }, name), React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, business))), React.createElement('p', {
    style: {
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--gray-dark)',
      margin: 0,
      lineHeight: 1.5
    }
  }, '“', quote, '”'), React.createElement('ul', {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, results.map((r, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: 'var(--gray-dark)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--red-uhub)'
    }
  }, '•'), r))));
}
Object.assign(__ds_scope, { TestimonioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonioCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  logoSrc,
  logoAlt = 'uHub',
  links = [],
  ctaLabel,
  onCtaClick
}) {
  return React.createElement('div', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,.97)',
      borderBottom: `2px solid var(--red-uhub)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      height: 64,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('img', {
    src: logoSrc,
    alt: logoAlt,
    style: {
      height: 28
    }
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: l.href || '#',
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--gray-dark)'
    }
  }, l.label)), ctaLabel && React.createElement('button', {
    onClick: onCtaClick,
    style: {
      minHeight: 40,
      padding: '0 20px',
      background: 'var(--cta-primary-bg)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      fontWeight: 700,
      fontSize: 14
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/emprende-diario/BusinessHomePage.jsx
try { (() => {
function BusinessHomePage() {
  const {
    Hero,
    CredibilityBand,
    StatCallout,
    TestimonioCard,
    Badge,
    Button,
    Input,
    Card,
    CierreInstitucional
  } = window.DesignSystemUHub_da2703;
  const [step, setStep] = React.useState('landing');
  const [email, setEmail] = React.useState('');
  const Nav = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-uhub-primary.png",
    style: {
      height: 32
    },
    alt: "uHub"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--gray-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Emprende Diario"), /*#__PURE__*/React.createElement("span", null, "MentorClass"), /*#__PURE__*/React.createElement("span", null, "Red uHub"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => setStep('test')
  }, "Hacer el test")));
  if (step === 'test') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        background: '#fff',
        minHeight: 700
      }
    }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        margin: '60px auto',
        padding: '0 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "orange"
    }, "Test del cuadrante"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'var(--text-display-md)',
        margin: '16px 0'
      }
    }, "\xBFQu\xE9 tipo de emprendedor eres?"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        marginBottom: 28
      }
    }, "10 preguntas. Recibe tu resultado y una gu\xEDa espec\xEDfica por correo."), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        marginBottom: 10
      }
    }, "1. \xBFTienes un proyecto propio o trabajas un modelo ajeno?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Proyecto propio"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Modelo ajeno"))), /*#__PURE__*/React.createElement(Input, {
      label: "Correo",
      type: "email",
      placeholder: "tu@email.com",
      value: email,
      onChange: e => setEmail(e.target.value)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setStep('result')
    }, "Ver mi resultado")))));
  }
  if (step === 'result') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        background: '#fff',
        minHeight: 700
      }
    }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 520,
        margin: '60px auto',
        padding: '0 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, "Tu perfil"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'var(--text-display-md)',
        margin: '16px 0'
      }
    }, "Reemprendedor Atorado"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        marginBottom: 28
      }
    }, "Ya intentaste, te estancaste o pausaste. Necesitas un sistema que te haga volver \u2014 no otro curso."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-secondary)',
        marginBottom: 20
      }
    }, "Te enviamos la gu\xEDa a ", email || 'tu correo', "."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => setStep('landing')
    }, "Conoce Emprende Diario")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    title: "Emprender no es un evento. Es un h\xE1bito que se sostiene.",
    subtitle: "La membres\xEDa de uHub para quien ya intent\xF3 y quiere volver \u2014 con sistema, ritmo y acompa\xF1amiento real.",
    ctaPrimary: "Conoce Emprende Diario",
    ctaSecondary: "Pr\xF3xima MentorClass"
  }), /*#__PURE__*/React.createElement(CredibilityBand, {
    items: ["10 años acompañando emprendedores", "550+ personas", "Metodología propia"]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      maxWidth: 1000,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      marginBottom: 12
    }
  }, "No necesitas m\xE1s cursos."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '0 auto 32px'
    }
  }, "Necesitas volver a ti mismo con estructura. Descubre tu perfil en 2 minutos."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setStep('test')
  }, "Hacer el test del cuadrante")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 32px',
      background: 'var(--gray-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatCallout, {
    value: "500+",
    label: "MXN/mes tier Ritmo"
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "3",
    label: "encuentros mensuales",
    tone: "orange"
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "1",
    label: "comunidad activa"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      textAlign: 'center',
      marginBottom: 40
    }
  }, "Dos tiers de membres\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Ritmo"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      margin: '12px 0'
    }
  }, "$499 MXN/mes"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, "Comunidad, sesiones grupales, herramientas y accountability mensual."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Inscribirme")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "Momentum \xB7 Pr\xF3ximamente"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      margin: '12px 0'
    }
  }, "Por invitaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, "Todo lo de Ritmo + mentor\xEDa 1:1 mensual y masterminds."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Unirme a la lista")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 64px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      textAlign: 'center',
      marginBottom: 40
    }
  }, "Historias reales"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TestimonioCard, {
    initials: "MG",
    name: "Mar\xEDa Gonz\xE1lez",
    business: "Panader\xEDa \xB7 Ju\xE1rez",
    quote: "Encontr\xE9 el sistema que me faltaba.",
    results: ["Ventas constantes", "Formalizó su negocio"]
  }), /*#__PURE__*/React.createElement(TestimonioCard, {
    initials: "LR",
    name: "Laura Reyes",
    business: "Consultor\xEDa \xB7 Chihuahua",
    quote: "Dej\xE9 de empezar de cero cada vez.",
    results: ["Equipo de 2 personas", "Clientes recurrentes"]
  }))), /*#__PURE__*/React.createElement(CierreInstitucional, {
    title: "El problema no es arrancar. Es volver.",
    body: "La pr\xF3xima MentorClass es gratis \u2014 1 hora en vivo, jueves de la tercera semana.",
    ctaLabel: "Reservar mi lugar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px',
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Emprende Diario \xB7 Una membres\xEDa de uHub \xB7 uhub.mx"));
}
window.BusinessHomePage = BusinessHomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/emprende-diario/BusinessHomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uhub-ac/ACHomePage.jsx
try { (() => {
function ACHomePage() {
  const {
    Hero,
    CredibilityBand,
    StatCallout,
    DiferenciadorCard,
    ProcessDiagram,
    CircunstanciaCard,
    LineaTematicaCard,
    CierreInstitucional
  } = window.DesignSystemUHub_da2703;
  const {
    Badge,
    Button
  } = window.DesignSystemUHub_da2703;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-uhub-primary.png",
    style: {
      height: 34
    },
    alt: "uHub"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--gray-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "El Sistema"), /*#__PURE__*/React.createElement("span", null, "Impacto"), /*#__PURE__*/React.createElement("span", null, "Red uHub"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Donar"))), /*#__PURE__*/React.createElement(Hero, {
    title: "El cambio que emprender exige no ocurre solo.",
    subtitle: "uHub AC opera un Sistema de Acompa\xF1amiento Integral de 12 meses para emprendedores en Chihuahua y Ciudad Ju\xE1rez.",
    ctaPrimary: "Conoce el Sistema",
    ctaSecondary: "Financia el programa"
  }), /*#__PURE__*/React.createElement(CredibilityBand, {
    items: ["10 años operando", "550+ personas acompañadas", "Donataria Autorizada"]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      textAlign: 'center',
      marginBottom: 40
    }
  }, "Un solo Sistema, no programas sueltos"), /*#__PURE__*/React.createElement(DiferenciadorCard, {
    notItems: ["Somos una incubadora", "Hacemos talleres de emprendimiento", "Ayudamos a personas vulnerables"],
    isItems: ["Operamos un sistema de acompañamiento a la persona", "Metodología sostenida de 12 meses", "Acompañamos a quien el ecosistema tradicional no ve"]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 64px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      textAlign: 'center',
      marginBottom: 40
    }
  }, "Ciclo de Cambio Emprendedor uHub\u2122 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      marginTop: 8
    }
  }, "+ Consolidar, exclusivo del programa AC")), /*#__PURE__*/React.createElement(ProcessDiagram, {
    steps: [{
      name: 'Descubrir',
      subtitle: 'Motor y mentalidad'
    }, {
      name: 'Aterrizar',
      subtitle: 'Modelo de negocio'
    }, {
      name: 'Adaptar',
      subtitle: 'Ajuste continuo'
    }, {
      name: 'Crecer',
      subtitle: 'Escala y ventas'
    }, {
      name: 'Consolidar',
      subtitle: 'Profesionalización técnica'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      background: 'var(--gray-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatCallout, {
    value: "550+",
    label: "personas acompa\xF1adas"
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "90.9%",
    label: "continuidad emprendedora post-graduaci\xF3n",
    tone: "orange"
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "76%",
    label: "mantiene actividad econ\xF3mica al cierre"
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "70%",
    label: "reporta incremento en ingresos",
    tone: "orange"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 32px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      textAlign: 'center',
      marginBottom: 12
    }
  }, "A qui\xE9n acompa\xF1amos"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '0 auto 40px'
    }
  }, "Circunstancias concretas, nunca un porcentaje de vulnerabilidad."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(CircunstanciaCard, {
    title: "Mujeres que sostienen su casa solas",
    description: "Buscan un ingreso propio y estable para su familia."
  }), /*#__PURE__*/React.createElement(CircunstanciaCard, {
    color: "var(--burgundy)",
    title: "Emprendedoras que apenas inician",
    description: "Tienen una idea pero no saben por d\xF3nde empezar."
  }), /*#__PURE__*/React.createElement(CircunstanciaCard, {
    color: "var(--blue-accent)",
    title: "Emprendedoras estancadas",
    description: "Ya intentaron y necesitan un sistema para volver."
  }), /*#__PURE__*/React.createElement(CircunstanciaCard, {
    color: "var(--orange-accent)",
    title: "Emprendedoras consolidando su negocio",
    description: "Buscan formalizar y profesionalizar lo que ya construyeron."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 64px',
      maxWidth: 900,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-md)',
      textAlign: 'center',
      marginBottom: 20
    }
  }, "L\xEDneas tem\xE1ticas del Sistema"), /*#__PURE__*/React.createElement(LineaTematicaCard, {
    title: "Emprendedores L\xEDderes Sociales",
    description: "Aplicaci\xF3n del Sistema a liderazgo comunitario."
  }), /*#__PURE__*/React.createElement(LineaTematicaCard, {
    color: "var(--burgundy)",
    title: "Mujeres Emprendedoras",
    description: "Aplicaci\xF3n del Sistema para mujeres jefas de familia.",
    aliados: ["FECHAC"]
  }), /*#__PURE__*/React.createElement(LineaTematicaCard, {
    color: "var(--blue-accent)",
    title: "Inclusi\xF3n Productiva",
    description: "Aplicaci\xF3n del Sistema para poblaciones con acceso limitado al mercado."
  }), /*#__PURE__*/React.createElement(LineaTematicaCard, {
    color: "var(--orange-accent)",
    title: "Intraemprendimiento Social",
    description: "Reservado exclusivamente para asociaciones civiles."
  })), /*#__PURE__*/React.createElement(CierreInstitucional, {
    title: "El Sistema se adapta a tu prioridad como financiador",
    body: "Coinversi\xF3n social, implementaci\xF3n en alianza o patrocinio estrat\xE9gico \u2014 10 a\xF1os de datos documentados.",
    ctaLabel: "Conversemos"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px',
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "uHub \xB7 Centro de Desarrollo Emprendedor \xB7 uhub.org.mx"));
}
window.ACHomePage = ACHomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uhub-ac/ACHomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CierreInstitucional = __ds_scope.CierreInstitucional;

__ds_ns.CircunstanciaCard = __ds_scope.CircunstanciaCard;

__ds_ns.CredibilityBand = __ds_scope.CredibilityBand;

__ds_ns.DiferenciadorCard = __ds_scope.DiferenciadorCard;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LineaTematicaCard = __ds_scope.LineaTematicaCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.ProcessDiagram = __ds_scope.ProcessDiagram;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.TestimonioCard = __ds_scope.TestimonioCard;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
