package shared

type GetAllOrdersResponseType struct {
	NextPage *string `json:"nextPage,omitempty"`
	Orders   []Order `json:"orders,omitempty"`
	Success  *bool   `json:"success,omitempty"`
}
