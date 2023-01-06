package shared

type GetPaymentPartsCollectionType struct {
	NextPage *string                         `json:"nextPage,omitempty"`
	Parts    []GetPaymentPartTypewithSuccess `json:"parts,omitempty"`
	Success  *bool                           `json:"success,omitempty"`
}
