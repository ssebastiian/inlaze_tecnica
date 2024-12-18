export interface Results {
    page:          number;
    results:       IMovie[];
    total_pages:   number;
    total_results: number;
}

export interface IMovie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    genres:            Igenres[];
}

export interface Igenres {
    id:     number;
    name:   string
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Fr = "fr",
    Tl = "tl",
}
