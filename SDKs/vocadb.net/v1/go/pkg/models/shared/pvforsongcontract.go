package shared

import (
	"time"
)

type PvForSongContractPvTypeEnum string

const (
	PVForSongContractPVTypeEnumOriginal PvForSongContractPvTypeEnum = "Original"
	PVForSongContractPVTypeEnumReprint  PvForSongContractPvTypeEnum = "Reprint"
	PVForSongContractPVTypeEnumOther    PvForSongContractPvTypeEnum = "Other"
)

type PvForSongContractServiceEnum string

const (
	PVForSongContractServiceEnumNicoNicoDouga PvForSongContractServiceEnum = "NicoNicoDouga"
	PVForSongContractServiceEnumYoutube       PvForSongContractServiceEnum = "Youtube"
	PVForSongContractServiceEnumSoundCloud    PvForSongContractServiceEnum = "SoundCloud"
	PVForSongContractServiceEnumVimeo         PvForSongContractServiceEnum = "Vimeo"
	PVForSongContractServiceEnumPiapro        PvForSongContractServiceEnum = "Piapro"
	PVForSongContractServiceEnumBilibili      PvForSongContractServiceEnum = "Bilibili"
	PVForSongContractServiceEnumFile          PvForSongContractServiceEnum = "File"
	PVForSongContractServiceEnumLocalFile     PvForSongContractServiceEnum = "LocalFile"
	PVForSongContractServiceEnumCreofuga      PvForSongContractServiceEnum = "Creofuga"
	PVForSongContractServiceEnumBandcamp      PvForSongContractServiceEnum = "Bandcamp"
)

type PvForSongContract struct {
	Author           *string                       `json:"author,omitempty"`
	CreatedBy        *int32                        `json:"createdBy,omitempty"`
	Disabled         *bool                         `json:"disabled,omitempty"`
	ExtendedMetadata *PvExtendedMetadata           `json:"extendedMetadata,omitempty"`
	ID               *int32                        `json:"id,omitempty"`
	Length           *int32                        `json:"length,omitempty"`
	Name             *string                       `json:"name,omitempty"`
	PublishDate      *time.Time                    `json:"publishDate,omitempty"`
	PvID             *string                       `json:"pvId,omitempty"`
	PvType           *PvForSongContractPvTypeEnum  `json:"pvType,omitempty"`
	Service          *PvForSongContractServiceEnum `json:"service,omitempty"`
	Song             *SongContract                 `json:"song,omitempty"`
	ThumbURL         *string                       `json:"thumbUrl,omitempty"`
	URL              *string                       `json:"url,omitempty"`
}
