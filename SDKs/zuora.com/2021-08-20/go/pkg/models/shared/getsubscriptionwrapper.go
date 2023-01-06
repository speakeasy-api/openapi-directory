package shared

type GetSubscriptionWrapper struct {
	NextPage      *string                  `json:"nextPage,omitempty"`
	Subscriptions []map[string]interface{} `json:"subscriptions,omitempty"`
	Success       *bool                    `json:"success,omitempty"`
}
