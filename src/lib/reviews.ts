// Reviews reais do Google (ficha "Observatório Astromidnight"), buscadas em
// cada build via Places API -- nunca no browser, a chave fica só no
// servidor (ver GOOGLE_PLACES_API_KEY no .env). Sem chave ou em caso de
// falha, devolve null e a secção cai no que já lá estiver -- nunca rebenta
// o build (mesmo princípio de lib/prints.ts e lib/calcom.ts). Como o
// número de reviews muda sem alterar código nenhum, um "Redeploy" na
// Vercel sobre um deployment já existente pode reaproveitar o output
// antigo -- só um build novo a partir de um commit garante ir buscar as
// reviews atuais.
const PLACE_ID = 'ChIJsTSYGOLBGQ0RVFFE5LTN1bI';

export type PlaceReview = {
  authorName: string;
  authorPhotoUrl: string | null;
  authorUrl: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type PlaceReviewsData = {
  rating: number;
  totalReviews: number;
  reviews: PlaceReview[];
  mapsUrl: string;
  writeReviewUrl: string;
};

export async function getPlaceReviews(lang: 'pt' | 'en'): Promise<PlaceReviewsData | null> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY as string | undefined;
  if (!apiKey) {
    console.warn('[reviews] GOOGLE_PLACES_API_KEY não definida, a saltar reviews do Google.');
    return null;
  }

  const params = new URLSearchParams({
    place_id: PLACE_ID,
    fields: 'rating,user_ratings_total,reviews,url',
    language: lang === 'en' ? 'en' : 'pt-PT',
    reviews_sort: 'newest',
    key: apiKey,
  });

  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params}`);
    const data = await res.json();
    if (data.status !== 'OK') {
      console.warn('[reviews] Places API devolveu', data.status, data.error_message ?? '');
      return null;
    }

    const result = data.result;
    return {
      rating: result.rating ?? 0,
      totalReviews: result.user_ratings_total ?? 0,
      reviews: (result.reviews ?? []).map((r: Record<string, unknown>) => ({
        authorName: r.author_name as string,
        authorPhotoUrl: (r.profile_photo_url as string) ?? null,
        authorUrl: r.author_url as string,
        rating: r.rating as number,
        text: r.text as string,
        relativeTime: r.relative_time_description as string,
      })),
      mapsUrl: result.url,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
    };
  } catch (err) {
    console.warn('[reviews] falha ao obter reviews do Google:', err);
    return null;
  }
}
