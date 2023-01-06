package shared

type DocumentDownload struct {
	DocContent *string `json:"docContent,omitempty"`
	ID         *string `json:"id,omitempty"`
}
