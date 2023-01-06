package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarStatusPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarStatusRequests struct {
	Any  *interface{} `request:"mediaType=application/json"`
	Any1 *interface{} `request:"mediaType=multipart/form-data"`
}

type WebinarStatusSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarStatusRequest struct {
	PathParams WebinarStatusPathParams
	Request    WebinarStatusRequests
	Security   WebinarStatusSecurity
}

type WebinarStatusResponse struct {
	ContentType string
	StatusCode  int64
}
