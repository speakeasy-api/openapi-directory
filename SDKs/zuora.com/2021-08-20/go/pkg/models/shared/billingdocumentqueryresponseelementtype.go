package shared

type BillingDocumentQueryResponseElementType struct {
	Documents []GetBillingDocumentsResponseType `json:"documents,omitempty"`
	NextPage  *string                           `json:"nextPage,omitempty"`
	Success   *bool                             `json:"success,omitempty"`
}
