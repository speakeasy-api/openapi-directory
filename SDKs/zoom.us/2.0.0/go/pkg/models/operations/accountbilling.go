package operations

type AccountBillingPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AccountBilling200ApplicationJSON
// Billing Contact object.
type AccountBilling200ApplicationJSON struct {
	Address     string  `json:"address"`
	Apt         *string `json:"apt,omitempty"`
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Email       string  `json:"email"`
	FirstName   string  `json:"first_name"`
	LastName    string  `json:"last_name"`
	PhoneNumber string  `json:"phone_number"`
	State       string  `json:"state"`
	Zip         string  `json:"zip"`
}

type AccountBillingRequest struct {
	PathParams AccountBillingPathParams
}

type AccountBillingResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	AccountBilling200ApplicationJSONObject *AccountBilling200ApplicationJSON
}
