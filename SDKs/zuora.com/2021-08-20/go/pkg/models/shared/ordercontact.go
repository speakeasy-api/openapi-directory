package shared

// OrderContact
// Use this field to create a new account as the sold-to contact of the Order Line Item (OLI).
//
// You can either use this field to create a new account or use the `soldTo` field to assign an existing account as the sold-to contact of the OLI.
//
// If neither this field nor the `soldTo` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
type OrderContact struct {
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
