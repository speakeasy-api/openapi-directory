package shared

type GetCreditMemoItemPartsCollectionType struct {
	ItemParts []GetCreditMemoItemPartTypewithSuccess `json:"itemParts,omitempty"`
	NextPage  *string                                `json:"nextPage,omitempty"`
	Success   *bool                                  `json:"success,omitempty"`
}
