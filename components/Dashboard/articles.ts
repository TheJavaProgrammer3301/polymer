export type MediaImageSize = { url?: string | null } | null | undefined;

export type ArticleData = {
	id: number;
	title: Record<string, unknown>;
	plainTitle?: string;
	slug: string;
	section: Section;
	publishedDate: string | null;
	createdAt: string;
	featuredImage?:
	| {
		url?: string | null;
		thumbnailURL?: string | null;
		alt?: string | null;
		sizes?: { card?: MediaImageSize; gallery?: MediaImageSize };
	}
	| number
	| null;
	subdeck?: string | null;
	kicker?: string | null;
	opinionType?: string | null;
	authors?: Array<number | { firstName: string; lastName: string }>;
	writeInAuthors?: Array<{ name: string }>;
};

export const SECTIONS = ['news', 'features', 'opinion', 'sports'] as const;
export const SECTION_OPTIONS = ['all', 'news', 'features', 'opinion', 'sports'] as const;

export type Section = (typeof SECTIONS)[number];
export type SectionFilter = (typeof SECTION_OPTIONS)[number];