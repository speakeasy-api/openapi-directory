package shared

// AmendRequestAmendOptions
// Use the `AmendOptions` container to specify billing options, such as invoice generation and when to process payments.
type AmendRequestAmendOptions struct {
	ApplicationOrder         []string                  `json:"ApplicationOrder,omitempty"`
	ApplyCredit              *bool                     `json:"ApplyCredit,omitempty"`
	ApplyCreditBalance       *bool                     `json:"ApplyCreditBalance,omitempty"`
	ElectronicPaymentOptions *ElectronicPaymentOptions `json:"ElectronicPaymentOptions,omitempty"`
	ExternalPaymentOptions   *ExternalPaymentOptions   `json:"ExternalPaymentOptions,omitempty"`
	GenerateInvoice          *bool                     `json:"GenerateInvoice,omitempty"`
	InvoiceProcessingOptions *InvoiceProcessingOptions `json:"InvoiceProcessingOptions,omitempty"`
	ProcessPayments          *bool                     `json:"ProcessPayments,omitempty"`
}

// AmendRequestPreviewOptions
// Use the `PreviewOptions` container to preview an amendment before committing its changes to a subscription.
// You can use a preview to provide a quote of the new charges to a customer before the customer commits to the amended subscription.
// For example, make an Amend call with an Amendment object that removes an existing rate plan,
// another Amendment object that adds a new rate plan, and turn on the preview options.
type AmendRequestPreviewOptions struct {
	EnablePreviewMode                *bool   `json:"EnablePreviewMode,omitempty"`
	IncludeExistingDraftInvoiceItems *bool   `json:"IncludeExistingDraftInvoiceItems,omitempty"`
	NumberOfPeriods                  *int32  `json:"NumberOfPeriods,omitempty"`
	PreviewThroughTermEnd            *bool   `json:"PreviewThroughTermEnd,omitempty"`
	PreviewType                      *string `json:"PreviewType,omitempty"`
}

type AmendRequest struct {
	AmendOptions   *AmendRequestAmendOptions   `json:"AmendOptions,omitempty"`
	Amendments     []Amendment                 `json:"Amendments"`
	PreviewOptions *AmendRequestPreviewOptions `json:"PreviewOptions,omitempty"`
}
