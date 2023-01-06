package shared

type GetDebitMemoApplicationPartCollectionType struct {
	ApplicationParts []GetDebitMemoApplicationPartType `json:"applicationParts,omitempty"`
	NextPage         *string                           `json:"nextPage,omitempty"`
	Success          *bool                             `json:"success,omitempty"`
}
