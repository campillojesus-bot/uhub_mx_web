import { egresadas } from "@/data/uhub";
import { Arrow } from "./components";

export function HomeStories() {
  const stories = egresadas.filter(story => story.autorizada && story.foto);
  const featured = stories.find(story => story.destacada) ?? stories[0];
  if (!featured) return null;
  // The full wall starts at the six approved portraits requested in the brief.
  const mosaic = stories.length >= 6 ? stories.filter(story => story.id !== featured.id) : [];
  return <section className="hub-story hub-section" id="historias" aria-labelledby="cynthia-title">
    <div className="hub-shell">
      <div className="hub-story-layout">
        <div>
          <p className="hub-eyebrow">Quien fue acompañada, hoy acompaña</p>
          <h2 id="cynthia-title">{mosaic.length ? "Los casos de éxito tienen nombre y apellido." : "Así se ve cuando funciona."}</h2>
          <p className="hub-story-name">{featured.nombre}</p>
          <p className="hub-story-project">{featured.proyecto} · {featured.ciudad}</p>
          {featured.cita ? <blockquote className="hub-story-account">{featured.cita}</blockquote> : <p className="hub-story-account">{featured.texto}</p>}
          <p className="hub-story-attribution">{featured.atribucion}</p>
          <a className="hub-link" href="/nosotros#programas">Conoce la historia de estos programas <Arrow /></a>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.foto} alt={featured.alt} width={featured.width} height={featured.height} loading="lazy" />
          <figcaption>Emprendedora y mentora de uHüb.</figcaption>
        </figure>
      </div>
      {mosaic.length > 0 && <div className="hub-story-mosaic">{mosaic.map(story => <figure key={story.id}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={story.foto} alt={story.alt} width={story.width} height={story.height} loading="lazy" />
        <figcaption><strong>{story.nombre}</strong><span>{story.proyecto}</span><span>{story.atribucion}</span></figcaption>
      </figure>)}</div>}
    </div>
  </section>;
}
