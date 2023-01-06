package shared

import (
	"time"
)

type PvContractPvTypeEnum string

const (
	PVContractPVTypeEnumOriginal PvContractPvTypeEnum = "Original"
	PVContractPVTypeEnumReprint  PvContractPvTypeEnum = "Reprint"
	PVContractPVTypeEnumOther    PvContractPvTypeEnum = "Other"
)

type PvContractServiceEnum string

const (
	PVContractServiceEnumNicoNicoDouga PvContractServiceEnum = "NicoNicoDouga"
	PVContractServiceEnumYoutube       PvContractServiceEnum = "Youtube"
	PVContractServiceEnumSoundCloud    PvContractServiceEnum = "SoundCloud"
	PVContractServiceEnumVimeo         PvContractServiceEnum = "Vimeo"
	PVContractServiceEnumPiapro        PvContractServiceEnum = "Piapro"
	PVContractServiceEnumBilibili      PvContractServiceEnum = "Bilibili"
	PVContractServiceEnumFile          PvContractServiceEnum = "File"
	PVContractServiceEnumLocalFile     PvContractServiceEnum = "LocalFile"
	PVContractServiceEnumCreofuga      PvContractServiceEnum = "Creofuga"
	PVContractServiceEnumBandcamp      PvContractServiceEnum = "Bandcamp"
)

type PvContract struct {
	Author           *string                `json:"author,omitempty"`
	CreatedBy        *int32                 `json:"createdBy,omitempty"`
	Disabled         *bool                  `json:"disabled,omitempty"`
	ExtendedMetadata *PvExtendedMetadata    `json:"extendedMetadata,omitempty"`
	ID               *int32                 `json:"id,omitempty"`
	Length           *int32                 `json:"length,omitempty"`
	Name             *string                `json:"name,omitempty"`
	PublishDate      *time.Time             `json:"publishDate,omitempty"`
	PvID             *string                `json:"pvId,omitempty"`
	PvType           *PvContractPvTypeEnum  `json:"pvType,omitempty"`
	Service          *PvContractServiceEnum `json:"service,omitempty"`
	ThumbURL         *string                `json:"thumbUrl,omitempty"`
	URL              *string                `json:"url,omitempty"`
}
