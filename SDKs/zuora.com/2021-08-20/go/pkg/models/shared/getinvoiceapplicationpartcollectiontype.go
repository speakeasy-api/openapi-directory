package shared

type GetInvoiceApplicationPartCollectionType struct {
	ApplicationParts []GetInvoiceApplicationPartType `json:"applicationParts,omitempty"`
	NextPage         *string                         `json:"nextPage,omitempty"`
	Success          *bool                           `json:"success,omitempty"`
}
