package shared

type GetRefundPartCollectionType struct {
	Parts   []RefundPartResponseTypewithSuccess `json:"parts,omitempty"`
	Success *bool                               `json:"success,omitempty"`
}
