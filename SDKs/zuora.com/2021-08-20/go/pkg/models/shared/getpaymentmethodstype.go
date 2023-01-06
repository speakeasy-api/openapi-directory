package shared

type GetPaymentMethodsType struct {
	CreditCards []GetPaymentMethodType `json:"creditCards,omitempty"`
	NextPage    *string                `json:"nextPage,omitempty"`
	Success     *bool                  `json:"success,omitempty"`
}
