package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignAPhoneNumCallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type UnassignAPhoneNumCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignAPhoneNumCallQueueRequest struct {
	PathParams UnassignAPhoneNumCallQueuePathParams
	Security   UnassignAPhoneNumCallQueueSecurity
}

type UnassignAPhoneNumCallQueueResponse struct {
	Body                                               []byte
	ContentType                                        string
	StatusCode                                         int64
	UnassignAPhoneNumCallQueue204ApplicationJSONObject map[string]interface{}
}
