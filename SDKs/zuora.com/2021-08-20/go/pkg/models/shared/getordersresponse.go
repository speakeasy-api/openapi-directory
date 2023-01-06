package shared

type GetOrdersResponse struct {
	NextPage *string `json:"nextPage,omitempty"`
	Orders   []Order `json:"orders,omitempty"`
}
