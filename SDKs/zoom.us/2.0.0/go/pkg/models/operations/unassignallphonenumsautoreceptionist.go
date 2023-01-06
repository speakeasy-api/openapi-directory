package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignAllPhoneNumsAutoReceptionistPathParams struct {
	AutoReceptionistID string `pathParam:"style=simple,explode=false,name=autoReceptionistId"`
}

type UnassignAllPhoneNumsAutoReceptionistSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignAllPhoneNumsAutoReceptionistRequest struct {
	PathParams UnassignAllPhoneNumsAutoReceptionistPathParams
	Security   UnassignAllPhoneNumsAutoReceptionistSecurity
}

type UnassignAllPhoneNumsAutoReceptionistResponse struct {
	Body                                                      []byte
	ContentType                                               string
	StatusCode                                                int64
	UnassignAllPhoneNumsAutoReceptionist204ApplicationJSONAny *interface{}
}
