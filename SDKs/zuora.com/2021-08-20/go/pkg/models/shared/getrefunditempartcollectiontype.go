package shared

type GetRefundItemPartCollectionType struct {
	ItemParts []GetRefundItemPartTypewithSuccess `json:"itemParts,omitempty"`
	NextPage  *string                            `json:"nextPage,omitempty"`
	Success   *bool                              `json:"success,omitempty"`
}
