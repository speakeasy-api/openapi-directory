package shared

// OrderContactRetrieveOrderLineItem
// A new account created as the sold-to contact of the Order Line Item (OLI).
type OrderContactRetrieveOrderLineItem struct {
	Address1   *string `json:"address1,omitempty"`
	Address2   *string `json:"address2,omitempty"`
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	County     *string `json:"county,omitempty"`
	FirstName  *string `json:"firstName,omitempty"`
	LastName   *string `json:"lastName,omitempty"`
	PostalCode *string `json:"postalCode,omitempty"`
	State      *string `json:"state,omitempty"`
}
