package operations

import (
	"openapi/pkg/models/shared"
)

type PvAPIGetListLangEnum string

const (
	PVAPIGetListLangEnumDefault  PvAPIGetListLangEnum = "Default"
	PVAPIGetListLangEnumJapanese PvAPIGetListLangEnum = "Japanese"
	PVAPIGetListLangEnumRomaji   PvAPIGetListLangEnum = "Romaji"
	PVAPIGetListLangEnumEnglish  PvAPIGetListLangEnum = "English"
)

type PvAPIGetListServiceEnum string

const (
	PVAPIGetListServiceEnumNicoNicoDouga PvAPIGetListServiceEnum = "NicoNicoDouga"
	PVAPIGetListServiceEnumYoutube       PvAPIGetListServiceEnum = "Youtube"
	PVAPIGetListServiceEnumSoundCloud    PvAPIGetListServiceEnum = "SoundCloud"
	PVAPIGetListServiceEnumVimeo         PvAPIGetListServiceEnum = "Vimeo"
	PVAPIGetListServiceEnumPiapro        PvAPIGetListServiceEnum = "Piapro"
	PVAPIGetListServiceEnumBilibili      PvAPIGetListServiceEnum = "Bilibili"
	PVAPIGetListServiceEnumFile          PvAPIGetListServiceEnum = "File"
	PVAPIGetListServiceEnumLocalFile     PvAPIGetListServiceEnum = "LocalFile"
	PVAPIGetListServiceEnumCreofuga      PvAPIGetListServiceEnum = "Creofuga"
	PVAPIGetListServiceEnumBandcamp      PvAPIGetListServiceEnum = "Bandcamp"
)

type PvAPIGetListQueryParams struct {
	Author        *string                  `queryParam:"style=form,explode=true,name=author"`
	GetTotalCount *bool                    `queryParam:"style=form,explode=true,name=getTotalCount"`
	Lang          *PvAPIGetListLangEnum    `queryParam:"style=form,explode=true,name=lang"`
	MaxResults    *int32                   `queryParam:"style=form,explode=true,name=maxResults"`
	Name          *string                  `queryParam:"style=form,explode=true,name=name"`
	Service       *PvAPIGetListServiceEnum `queryParam:"style=form,explode=true,name=service"`
}

type PvAPIGetListRequest struct {
	QueryParams PvAPIGetListQueryParams
}

type PvAPIGetListResponse struct {
	Body                               []byte
	ContentType                        string
	PartialFindResultPVForSongContract *shared.PartialFindResultPvForSongContract
	StatusCode                         int64
}
