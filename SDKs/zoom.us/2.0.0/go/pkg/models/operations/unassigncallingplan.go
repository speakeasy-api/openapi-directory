package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignCallingPlanPathParams struct {
	Type   string `pathParam:"style=simple,explode=false,name=type"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UnassignCallingPlanSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignCallingPlanRequest struct {
	PathParams UnassignCallingPlanPathParams
	Security   UnassignCallingPlanSecurity
}

type UnassignCallingPlanResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	UnassignCallingPlan204ApplicationJSONAny *interface{}
}
