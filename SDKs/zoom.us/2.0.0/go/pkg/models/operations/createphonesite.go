package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePhoneSiteApplicationJSONDefaultEmergencyAddress struct {
	AddressLine1 string  `json:"address_line1"`
	AddressLine2 *string `json:"address_line2,omitempty"`
	City         string  `json:"city"`
	Country      string  `json:"country"`
	StateCode    string  `json:"state_code"`
	Zip          string  `json:"zip"`
}

// CreatePhoneSiteApplicationJSONShortExtension
// Short extension of the phone site.
type CreatePhoneSiteApplicationJSONShortExtension struct {
	Length *int64 `json:"length,omitempty"`
}

type CreatePhoneSiteApplicationJSON struct {
	AutoReceptionistName    string                                                 `json:"auto_receptionist_name"`
	DefaultEmergencyAddress *CreatePhoneSiteApplicationJSONDefaultEmergencyAddress `json:"default_emergency_address,omitempty"`
	Name                    string                                                 `json:"name"`
	ShortExtension          *CreatePhoneSiteApplicationJSONShortExtension          `json:"short_extension,omitempty"`
	SiteCode                *int64                                                 `json:"site_code,omitempty"`
}

type CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress struct {
	AddressLine1 string  `json:"address_line1"`
	AddressLine2 *string `json:"address_line2,omitempty"`
	City         string  `json:"city"`
	Country      string  `json:"country"`
	StateCode    string  `json:"state_code"`
	Zip          string  `json:"zip"`
}

// CreatePhoneSiteMultipartFormDataShortExtension
// Short extension of the phone site.
type CreatePhoneSiteMultipartFormDataShortExtension struct {
	Length *int64 `json:"length,omitempty"`
}

type CreatePhoneSiteMultipartFormData struct {
	AutoReceptionistName    string                                                   `multipartForm:"name=auto_receptionist_name"`
	DefaultEmergencyAddress *CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress `multipartForm:"name=default_emergency_address,json"`
	Name                    string                                                   `multipartForm:"name=name"`
	ShortExtension          *CreatePhoneSiteMultipartFormDataShortExtension          `multipartForm:"name=short_extension,json"`
	SiteCode                *int64                                                   `multipartForm:"name=site_code"`
}

type CreatePhoneSiteRequests struct {
	Object  *CreatePhoneSiteApplicationJSON   `request:"mediaType=application/json"`
	Object1 *CreatePhoneSiteMultipartFormData `request:"mediaType=multipart/form-data"`
}

type CreatePhoneSiteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type CreatePhoneSite204ApplicationJSON struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type CreatePhoneSiteRequest struct {
	Request  *CreatePhoneSiteRequests
	Security CreatePhoneSiteSecurity
}

type CreatePhoneSiteResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	CreatePhoneSite204ApplicationJSONObject *CreatePhoneSite204ApplicationJSON
}
