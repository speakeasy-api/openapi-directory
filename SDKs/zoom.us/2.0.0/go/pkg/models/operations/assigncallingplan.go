package operations

import (
	"openapi/pkg/models/shared"
)

type AssignCallingPlanPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type AssignCallingPlanApplicationJSONCallingPlans struct {
	Type *string `json:"type,omitempty"`
}

type AssignCallingPlanApplicationJSON struct {
	CallingPlans []AssignCallingPlanApplicationJSONCallingPlans `json:"calling_plans,omitempty"`
}

type AssignCallingPlanMultipartFormDataCallingPlans struct {
	Type *string `json:"type,omitempty"`
}

type AssignCallingPlanMultipartFormData1 struct {
	CallingPlans []AssignCallingPlanMultipartFormDataCallingPlans `multipartForm:"name=calling_plans,json"`
}

type AssignCallingPlanRequests struct {
	Object  *AssignCallingPlanApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AssignCallingPlanMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AssignCallingPlanSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AssignCallingPlanRequest struct {
	PathParams AssignCallingPlanPathParams
	Request    *AssignCallingPlanRequests
	Security   AssignCallingPlanSecurity
}

type AssignCallingPlanResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	AssignCallingPlan200ApplicationJSONAny *interface{}
}
