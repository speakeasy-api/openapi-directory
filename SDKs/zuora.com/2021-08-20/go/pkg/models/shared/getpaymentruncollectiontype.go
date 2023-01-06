package shared

type GetPaymentRunCollectionType struct {
	NextPage    *string             `json:"nextPage,omitempty"`
	PaymentRuns []GetPaymentRunType `json:"paymentRuns,omitempty"`
	Success     *bool               `json:"success,omitempty"`
}
