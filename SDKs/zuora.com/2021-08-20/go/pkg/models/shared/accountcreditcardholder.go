package shared

// AccountCreditCardHolder
// Information about the cardholder of a credit card payment method associated with an account. If you do not provide information about the cardholder, Zuora uses the account's bill-to contact.
type AccountCreditCardHolder struct {
	AddressLine1   *string `json:"addressLine1,omitempty"`
	AddressLine2   *string `json:"addressLine2,omitempty"`
	CardHolderName *string `json:"cardHolderName,omitempty"`
	City           *string `json:"city,omitempty"`
	Country        *string `json:"country,omitempty"`
	Email          *string `json:"email,omitempty"`
	Phone          *string `json:"phone,omitempty"`
	State          *string `json:"state,omitempty"`
	ZipCode        *string `json:"zipCode,omitempty"`
}
