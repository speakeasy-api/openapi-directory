package shared

// ProcessingOptionsElectronicPaymentOptions
// Container for the electronic payment options.
type ProcessingOptionsElectronicPaymentOptions struct {
	PaymentMethodID *string `json:"paymentMethodId,omitempty"`
}

// ProcessingOptions
// Invoice or Payment.
type ProcessingOptions struct {
	ApplicationOrder         []string                                   `json:"applicationOrder,omitempty"`
	ApplyCredit              *bool                                      `json:"applyCredit,omitempty"`
	ApplyCreditBalance       *bool                                      `json:"applyCreditBalance,omitempty"`
	BillingOptions           *BillingOptions                            `json:"billingOptions,omitempty"`
	CollectPayment           *bool                                      `json:"collectPayment,omitempty"`
	ElectronicPaymentOptions *ProcessingOptionsElectronicPaymentOptions `json:"electronicPaymentOptions,omitempty"`
	RunBilling               *bool                                      `json:"runBilling,omitempty"`
}
