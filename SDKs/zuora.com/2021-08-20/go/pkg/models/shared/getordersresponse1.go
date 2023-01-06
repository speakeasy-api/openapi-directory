package shared

type GetOrdersResponse1 struct {
	NextPage *string  `json:"nextPage,omitempty"`
	Orders   []Order1 `json:"orders,omitempty"`
}
