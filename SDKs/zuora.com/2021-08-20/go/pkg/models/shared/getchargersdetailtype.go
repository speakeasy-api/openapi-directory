package shared

type GetChargeRsDetailType struct {
	AccountID                        *string                      `json:"accountId,omitempty"`
	Amount                           *string                      `json:"amount,omitempty"`
	Currency                         *string                      `json:"currency,omitempty"`
	Notes                            *string                      `json:"notes,omitempty"`
	Number                           *string                      `json:"number,omitempty"`
	RecognitionRuleName              *string                      `json:"recognitionRuleName,omitempty"`
	RecognizedRevenue                *string                      `json:"recognizedRevenue,omitempty"`
	RevenueItems                     []GetRevenueItemTypeResponse `json:"revenueItems,omitempty"`
	SubscriptionChargeID             *string                      `json:"subscriptionChargeId,omitempty"`
	SubscriptionID                   *string                      `json:"subscriptionId,omitempty"`
	Success                          *bool                        `json:"success,omitempty"`
	UndistributedUnrecognizedRevenue *string                      `json:"undistributedUnrecognizedRevenue,omitempty"`
	UnrecognizedRevenue              *string                      `json:"unrecognizedRevenue,omitempty"`
}
