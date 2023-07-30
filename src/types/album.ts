type IAlbum = {
	idAlbum: string
	idArtist: string
	idLabel: null | string
	strAlbum: string
	strAlbumStripped: string
	strArtist: string
	strArtistStripped: string
	intYearReleased: string
	strStyle: string
	strGenre: string
	strLabel: null | string
	strReleaseFormat: string
	intSales: string
	strAlbumThumb: string
	strAlbumThumbBack: null | string
	strAlbumCDart: string
	strAlbumSpine: null | string
	strAlbum3DCase: null | string
	strAlbum3DFlat: null | string
	strAlbum3DFace: null | string
	strAlbum3DThumb: null | string
	strDescriptionEn?: string
	intLoved: null | string
	intScore: null | string
	intScoreVotes: null | string
	strReview: null | string
	strMood: string
	strTheme: null | string
	strSpeed: null | string
	strMusicBrainzId: string
	strMusicBrainzArtistId: string
	strAllMusicId: null | string
	strBbcReviewId: null | string
	strRateYourMusicId: null | string
	strDiscogsId: string
	strWikidataId: string
	strWikipediaId: string
	strLocked: string
	tracks: ITrack[]
}

type ITrack = {
	id: string
	title: string
	length: string
	lengthMs: number
	position: number
}
