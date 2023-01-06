package operations

type AccountBillingUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AccountBillingUpdateApplicationJSON
// Billing Contact object.
type AccountBillingUpdateApplicationJSON struct {
	Address     *string `json:"address,omitempty"`
	Apt         *string `json:"apt,omitempty"`
	City        *string `json:"city,omitempty"`
	Country     *string `json:"country,omitempty"`
	Email       *string `json:"email,omitempty"`
	FirstName   *string `json:"first_name,omitempty"`
	LastName    *string `json:"last_name,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	State       *string `json:"state,omitempty"`
	Zip         *string `json:"zip,omitempty"`
}

// AccountBillingUpdateMultipartFormData
// Billing Contact object.
type AccountBillingUpdateMultipartFormData struct {
	Address     *string `multipartForm:"name=address"`
	Apt         *string `multipartForm:"name=apt"`
	City        *string `multipartForm:"name=city"`
	Country     *string `multipartForm:"name=country"`
	Email       *string `multipartForm:"name=email"`
	FirstName   *string `multipartForm:"name=first_name"`
	LastName    *string `multipartForm:"name=last_name"`
	PhoneNumber *string `multipartForm:"name=phone_number"`
	State       *string `multipartForm:"name=state"`
	Zip         *string `multipartForm:"name=zip"`
}

type AccountBillingUpdateRequests struct {
	Object  *AccountBillingUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountBillingUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountBillingUpdateRequest struct {
	PathParams AccountBillingUpdatePathParams
	Request    AccountBillingUpdateRequests
}

type AccountBillingUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
