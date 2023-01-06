package operations

import (
	"openapi/pkg/models/shared"
)

type AddCommonAreaPhoneRequestBody struct {
	Description     *string `json:"description,omitempty"`
	DisplayName     string  `json:"display_name"`
	ExtensionNumber int64   `json:"extension_number"`
	MacAddress      string  `json:"mac_address"`
	Model           *string `json:"model,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
	TimeZone        *string `json:"time_zone,omitempty"`
	Type            string  `json:"type"`
}

type AddCommonAreaPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddCommonAreaPhone201ApplicationJSON struct {
	DisplayName *string `json:"display_name,omitempty"`
	ID          *string `json:"id,omitempty"`
}

type AddCommonAreaPhoneRequest struct {
	Request  *AddCommonAreaPhoneRequestBody `request:"mediaType=application/json"`
	Security AddCommonAreaPhoneSecurity
}

type AddCommonAreaPhoneResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	AddCommonAreaPhone201ApplicationJSONObject *AddCommonAreaPhone201ApplicationJSON
}
