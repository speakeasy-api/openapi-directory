package operations

import (
	"openapi/pkg/models/shared"
)

type GetASitePathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=siteId"`
}

type GetASiteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// GetASite200ApplicationJSONCountry
// Site country
type GetASite200ApplicationJSONCountry struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

// GetASite200ApplicationJSONMainAutoReceptionist
// [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
type GetASite200ApplicationJSONMainAutoReceptionist struct {
	ExtensionID     *string `json:"extension_id,omitempty"`
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
}

// GetASite200ApplicationJSONShortExtension
// Short extension of the phone site.
type GetASite200ApplicationJSONShortExtension struct {
	Length *int64 `json:"length,omitempty"`
}

type GetASite200ApplicationJSON struct {
	Country              *GetASite200ApplicationJSONCountry              `json:"country,omitempty"`
	ID                   *string                                         `json:"id,omitempty"`
	MainAutoReceptionist *GetASite200ApplicationJSONMainAutoReceptionist `json:"main_auto_receptionist,omitempty"`
	Name                 *string                                         `json:"name,omitempty"`
	ShortExtension       *GetASite200ApplicationJSONShortExtension       `json:"short_extension,omitempty"`
	SiteCode             *int64                                          `json:"site_code,omitempty"`
}

type GetASiteRequest struct {
	PathParams GetASitePathParams
	Security   GetASiteSecurity
}

type GetASiteResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	GetASite200ApplicationJSONObject *GetASite200ApplicationJSON
}
