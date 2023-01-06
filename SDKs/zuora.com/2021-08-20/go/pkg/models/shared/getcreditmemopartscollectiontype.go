package shared

type GetCreditMemoPartsCollectionType struct {
	NextPage *string                            `json:"nextPage,omitempty"`
	Parts    []GetCreditMemoPartTypewithSuccess `json:"parts,omitempty"`
	Success  *bool                              `json:"success,omitempty"`
}
