package shared

import (
	"time"
)

type ProxyGetExportFormatEnum string

const (
	ProxyGetExportFormatEnumCsv   ProxyGetExportFormatEnum = "csv"
	ProxyGetExportFormatEnumHTML  ProxyGetExportFormatEnum = "html"
	ProxyGetExportFormatEnumExcel ProxyGetExportFormatEnum = "Excel"
)

type ProxyGetExport struct {
	ConvertToCurrencies *string                   `json:"ConvertToCurrencies,omitempty"`
	CreatedByID         *string                   `json:"CreatedById,omitempty"`
	CreatedDate         *time.Time                `json:"CreatedDate,omitempty"`
	Encrypted           *bool                     `json:"Encrypted,omitempty"`
	FileID              *string                   `json:"FileId,omitempty"`
	Format              *ProxyGetExportFormatEnum `json:"Format,omitempty"`
	ID                  *string                   `json:"Id,omitempty"`
	Name                *string                   `json:"Name,omitempty"`
	Query               *string                   `json:"Query,omitempty"`
	Size                *int32                    `json:"Size,omitempty"`
	Status              *string                   `json:"Status,omitempty"`
	StatusReason        *string                   `json:"StatusReason,omitempty"`
	UpdatedByID         *string                   `json:"UpdatedById,omitempty"`
	UpdatedDate         *time.Time                `json:"UpdatedDate,omitempty"`
	Zip                 *bool                     `json:"Zip,omitempty"`
}
