package shared

type GetSubscriptionTermInfoResponseType struct {
	NextPage *string `json:"nextPage,omitempty"`
	Terms    []Term  `json:"terms,omitempty"`
}
