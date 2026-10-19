/** Optional editorial assets. Only add real, approved photographs without A.C. branding.
 * ecosystem: mentor with one person; practice: working session;
 * audience: classroom or business group. Null leaves no box, gap or public placeholder.
 */
type Photo = { src: string; alt: string; width: number; height: number; caption?: string };
type PhotoSlot = "ecosystem" | "practice" | "audience";
const photos: Record<PhotoSlot, Photo | null> = {
  ecosystem: null,
  practice: null,
  audience: null,
};

export function EditorialPhoto({ slot }: { slot: PhotoSlot }) {
  const photo = photos[slot];
  if (!photo) return null;
  return <figure className={`editorial-photo editorial-photo-${slot}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
    {photo.caption && <figcaption>{photo.caption}</figcaption>}
  </figure>;
}
