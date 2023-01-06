package shared

type ProxyCreateExportFormatEnum string

const (
	ProxyCreateExportFormatEnumCsv   ProxyCreateExportFormatEnum = "csv"
	ProxyCreateExportFormatEnumHTML  ProxyCreateExportFormatEnum = "html"
	ProxyCreateExportFormatEnumExcel ProxyCreateExportFormatEnum = "Excel"
)

type ProxyCreateExport struct {
	ConvertToCurrencies *string                     `json:"ConvertToCurrencies,omitempty"`
	Encrypted           *bool                       `json:"Encrypted,omitempty"`
	FileID              *string                     `json:"FileId,omitempty"`
	Format              ProxyCreateExportFormatEnum `json:"Format"`
	Name                *string                     `json:"Name,omitempty"`
	Query               string                      `json:"Query"`
	Size                *int32                      `json:"Size,omitempty"`
	Status              *string                     `json:"Status,omitempty"`
	StatusReason        *string                     `json:"StatusReason,omitempty"`
	Zip                 *bool                       `json:"Zip,omitempty"`
}
