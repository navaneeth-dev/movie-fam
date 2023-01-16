export interface Movie {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Trailer {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: Date;
	id: string;
}

export interface MovieSaves {
	id: string;
	created: string;
	updated: string;
	movie_id: string;
	movie_title: string;
	movie_overview: string;
	poster_path: string;
	user_id: string;
}
