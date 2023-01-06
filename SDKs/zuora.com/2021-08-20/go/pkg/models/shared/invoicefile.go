package shared

type InvoiceFile struct {
	ID            *string `json:"id,omitempty"`
	PdfFileURL    *string `json:"pdfFileUrl,omitempty"`
	VersionNumber *int64  `json:"versionNumber,omitempty"`
}
