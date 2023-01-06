package operations

import (
	"openapi/pkg/models/shared"
)

type SetUpAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// SetUpAccountApplicationJSONEmergencyAddress
// Specify emergency address for the account.
type SetUpAccountApplicationJSONEmergencyAddress struct {
	AddressLine1 string  `json:"address_line1"`
	AddressLine2 *string `json:"address_line2,omitempty"`
	City         *string `json:"city,omitempty"`
	Country      string  `json:"country"`
	StateCode    *string `json:"state_code,omitempty"`
	Zip          *string `json:"zip,omitempty"`
}

type SetUpAccountApplicationJSON struct {
	EmergencyAddress SetUpAccountApplicationJSONEmergencyAddress `json:"emergency_address"`
	ExtensionNumber  string                                      `json:"extension_number"`
}

// SetUpAccountMultipartFormDataEmergencyAddress
// Specify emergency address for the account.
type SetUpAccountMultipartFormDataEmergencyAddress struct {
	AddressLine1 string  `json:"address_line1"`
	AddressLine2 *string `json:"address_line2,omitempty"`
	City         *string `json:"city,omitempty"`
	Country      string  `json:"country"`
	StateCode    *string `json:"state_code,omitempty"`
	Zip          *string `json:"zip,omitempty"`
}

type SetUpAccountMultipartFormData struct {
	EmergencyAddress SetUpAccountMultipartFormDataEmergencyAddress `multipartForm:"name=emergency_address,json"`
	ExtensionNumber  string                                        `multipartForm:"name=extension_number"`
}

type SetUpAccountRequests struct {
	Object  *SetUpAccountApplicationJSON   `request:"mediaType=application/json"`
	Object1 *SetUpAccountMultipartFormData `request:"mediaType=multipart/form-data"`
}

type SetUpAccountSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type SetUpAccountRequest struct {
	PathParams SetUpAccountPathParams
	Request    *SetUpAccountRequests
	Security   SetUpAccountSecurity
}

type SetUpAccountResponse struct {
	ContentType string
	StatusCode  int64
}
