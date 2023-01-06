package shared

type PosthmacSignatureType struct {
	AccountKey *string `json:"accountKey,omitempty"`
	Method     string  `json:"method"`
	Name       *string `json:"name,omitempty"`
	PageID     *string `json:"pageId,omitempty"`
	URI        string  `json:"uri"`
}
