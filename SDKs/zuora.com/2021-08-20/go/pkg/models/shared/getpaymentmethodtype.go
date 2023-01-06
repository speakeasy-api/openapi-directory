package shared

// GetPaymentMethodTypeCardHolderInfo
// Container for the name and billing address for the card holder.
type GetPaymentMethodTypeCardHolderInfo struct {
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

type GetPaymentMethodType struct {
	CardHolderInfo       *GetPaymentMethodTypeCardHolderInfo `json:"cardHolderInfo,omitempty"`
	CardNumber           *string                             `json:"cardNumber,omitempty"`
	CardType             *string                             `json:"cardType,omitempty"`
	DefaultPaymentMethod *bool                               `json:"defaultPaymentMethod,omitempty"`
	ExpirationMonth      *int64                              `json:"expirationMonth,omitempty"`
	ExpirationYear       *int64                              `json:"expirationYear,omitempty"`
	ID                   *string                             `json:"id,omitempty"`
}
