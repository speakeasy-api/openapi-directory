package operations

import (
	"openapi/pkg/models/shared"
)

type ListCallingPlansSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListCallingPlans200ApplicationJSONCallingPlans struct {
	Assigned   *int64  `json:"assigned,omitempty"`
	Available  *int64  `json:"available,omitempty"`
	Name       *string `json:"name,omitempty"`
	Subscribed *int64  `json:"subscribed,omitempty"`
	Type       *int64  `json:"type,omitempty"`
}

type ListCallingPlans200ApplicationJSON struct {
	CallingPlans []ListCallingPlans200ApplicationJSONCallingPlans `json:"calling_plans,omitempty"`
}

type ListCallingPlansRequest struct {
	Security ListCallingPlansSecurity
}

type ListCallingPlansResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	ListCallingPlans200ApplicationJSONObject *ListCallingPlans200ApplicationJSON
}
