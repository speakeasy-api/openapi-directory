package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCommonAreaPhonePathParams struct {
	CommonAreaPhoneID string `pathParam:"style=simple,explode=false,name=commonAreaPhoneId"`
}

type UpdateCommonAreaPhoneApplicationJSON struct {
	DisplayName     *string `json:"display_name,omitempty"`
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	MacAddress      *string `json:"mac_address,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

type UpdateCommonAreaPhoneMultipartFormData struct {
	DisplayName     *string `multipartForm:"name=display_name"`
	ExtensionNumber *int64  `multipartForm:"name=extension_number"`
	MacAddress      *string `multipartForm:"name=mac_address"`
	SiteID          *string `multipartForm:"name=site_id"`
}

type UpdateCommonAreaPhoneRequests struct {
	Object  *UpdateCommonAreaPhoneApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateCommonAreaPhoneMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateCommonAreaPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateCommonAreaPhoneRequest struct {
	PathParams UpdateCommonAreaPhonePathParams
	Request    *UpdateCommonAreaPhoneRequests
	Security   UpdateCommonAreaPhoneSecurity
}

type UpdateCommonAreaPhoneResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	UpdateCommonAreaPhone204ApplicationJSONAny *interface{}
}
