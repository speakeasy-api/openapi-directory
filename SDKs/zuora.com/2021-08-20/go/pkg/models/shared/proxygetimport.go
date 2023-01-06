package shared

import (
	"time"
)

type ProxyGetImport struct {
	CreatedByID         *string    `json:"CreatedById,omitempty"`
	CreatedDate         *time.Time `json:"CreatedDate,omitempty"`
	ID                  *string    `json:"Id,omitempty"`
	ImportType          *string    `json:"ImportType,omitempty"`
	ImportedCount       *int32     `json:"ImportedCount,omitempty"`
	Md5                 *string    `json:"Md5,omitempty"`
	Name                *string    `json:"Name,omitempty"`
	OriginalResourceURL *string    `json:"OriginalResourceUrl,omitempty"`
	ResultResourceURL   *string    `json:"ResultResourceUrl,omitempty"`
	Status              *string    `json:"Status,omitempty"`
	StatusReason        *string    `json:"StatusReason,omitempty"`
	TotalCount          *int32     `json:"TotalCount,omitempty"`
	UpdatedByID         *string    `json:"UpdatedById,omitempty"`
	UpdatedDate         *time.Time `json:"UpdatedDate,omitempty"`
}
