package operations

import (
	"openapi/pkg/models/shared"
)

type SongAPIGetByPvFieldsEnum string

const (
	SongAPIGetByPVFieldsEnumNone            SongAPIGetByPvFieldsEnum = "None"
	SongAPIGetByPVFieldsEnumAdditionalNames SongAPIGetByPvFieldsEnum = "AdditionalNames"
	SongAPIGetByPVFieldsEnumAlbums          SongAPIGetByPvFieldsEnum = "Albums"
	SongAPIGetByPVFieldsEnumArtists         SongAPIGetByPvFieldsEnum = "Artists"
	SongAPIGetByPVFieldsEnumLyrics          SongAPIGetByPvFieldsEnum = "Lyrics"
	SongAPIGetByPVFieldsEnumMainPicture     SongAPIGetByPvFieldsEnum = "MainPicture"
	SongAPIGetByPVFieldsEnumNames           SongAPIGetByPvFieldsEnum = "Names"
	SongAPIGetByPVFieldsEnumPVs             SongAPIGetByPvFieldsEnum = "PVs"
	SongAPIGetByPVFieldsEnumReleaseEvent    SongAPIGetByPvFieldsEnum = "ReleaseEvent"
	SongAPIGetByPVFieldsEnumTags            SongAPIGetByPvFieldsEnum = "Tags"
	SongAPIGetByPVFieldsEnumThumbURL        SongAPIGetByPvFieldsEnum = "ThumbUrl"
	SongAPIGetByPVFieldsEnumWebLinks        SongAPIGetByPvFieldsEnum = "WebLinks"
)

type SongAPIGetByPvLangEnum string

const (
	SongAPIGetByPVLangEnumDefault  SongAPIGetByPvLangEnum = "Default"
	SongAPIGetByPVLangEnumJapanese SongAPIGetByPvLangEnum = "Japanese"
	SongAPIGetByPVLangEnumRomaji   SongAPIGetByPvLangEnum = "Romaji"
	SongAPIGetByPVLangEnumEnglish  SongAPIGetByPvLangEnum = "English"
)

type SongAPIGetByPvPvServiceEnum string

const (
	SongAPIGetByPVPVServiceEnumNicoNicoDouga SongAPIGetByPvPvServiceEnum = "NicoNicoDouga"
	SongAPIGetByPVPVServiceEnumYoutube       SongAPIGetByPvPvServiceEnum = "Youtube"
	SongAPIGetByPVPVServiceEnumSoundCloud    SongAPIGetByPvPvServiceEnum = "SoundCloud"
	SongAPIGetByPVPVServiceEnumVimeo         SongAPIGetByPvPvServiceEnum = "Vimeo"
	SongAPIGetByPVPVServiceEnumPiapro        SongAPIGetByPvPvServiceEnum = "Piapro"
	SongAPIGetByPVPVServiceEnumBilibili      SongAPIGetByPvPvServiceEnum = "Bilibili"
	SongAPIGetByPVPVServiceEnumFile          SongAPIGetByPvPvServiceEnum = "File"
	SongAPIGetByPVPVServiceEnumLocalFile     SongAPIGetByPvPvServiceEnum = "LocalFile"
	SongAPIGetByPVPVServiceEnumCreofuga      SongAPIGetByPvPvServiceEnum = "Creofuga"
	SongAPIGetByPVPVServiceEnumBandcamp      SongAPIGetByPvPvServiceEnum = "Bandcamp"
)

type SongAPIGetByPvQueryParams struct {
	Fields    *SongAPIGetByPvFieldsEnum   `queryParam:"style=form,explode=true,name=fields"`
	Lang      *SongAPIGetByPvLangEnum     `queryParam:"style=form,explode=true,name=lang"`
	PvID      string                      `queryParam:"style=form,explode=true,name=pvId"`
	PvService SongAPIGetByPvPvServiceEnum `queryParam:"style=form,explode=true,name=pvService"`
}

type SongAPIGetByPvRequest struct {
	QueryParams SongAPIGetByPvQueryParams
}

type SongAPIGetByPvResponse struct {
	Body               []byte
	ContentType        string
	SongForAPIContract *shared.SongForAPIContract
	StatusCode         int64
}
