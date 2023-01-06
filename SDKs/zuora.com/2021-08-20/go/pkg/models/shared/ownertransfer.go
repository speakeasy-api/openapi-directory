package shared

// OwnerTransfer
// Information about an order action of type `OwnerTransfer`.
//
// **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
type OwnerTransfer struct {
	DestinationAccountNumber        *string `json:"destinationAccountNumber,omitempty"`
	DestinationInvoiceAccountNumber *string `json:"destinationInvoiceAccountNumber,omitempty"`
}
