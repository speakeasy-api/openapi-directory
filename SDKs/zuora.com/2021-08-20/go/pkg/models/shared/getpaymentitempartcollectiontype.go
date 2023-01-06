package shared

type GetPaymentItemPartCollectionType struct {
	ItemParts []GetPaymentItemPartTypewithSuccess `json:"itemParts,omitempty"`
	NextPage  *string                             `json:"nextPage,omitempty"`
	Success   *bool                               `json:"success,omitempty"`
}
