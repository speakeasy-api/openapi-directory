package operations

type AccountPlanAddonCreatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AccountPlanAddonCreateApplicationJSON1
// Account plan object.
type AccountPlanAddonCreateApplicationJSON1 struct {
	Hosts int64  `json:"hosts"`
	Type  string `json:"type"`
}

// AccountPlanAddonCreateApplicationJSON2PhonePlanPlanBase
// Additional phone base plans.
type AccountPlanAddonCreateApplicationJSON2PhonePlanPlanBase struct {
	CalloutCountries *string `json:"callout_countries,omitempty"`
	Type             *string `json:"type,omitempty"`
}

type AccountPlanAddonCreateApplicationJSON2PhonePlanPlanCalling struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type AccountPlanAddonCreateApplicationJSON2PhonePlanPlanNumber struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanAddonCreateApplicationJSON2PhonePlan
// Phone Plan Object
type AccountPlanAddonCreateApplicationJSON2PhonePlan struct {
	PlanBase    *AccountPlanAddonCreateApplicationJSON2PhonePlanPlanBase     `json:"plan_base,omitempty"`
	PlanCalling []AccountPlanAddonCreateApplicationJSON2PhonePlanPlanCalling `json:"plan_calling,omitempty"`
	PlanNumber  []AccountPlanAddonCreateApplicationJSON2PhonePlanPlanNumber  `json:"plan_number,omitempty"`
}

// AccountPlanAddonCreateApplicationJSON2
// Zoom Phone Plan Object
type AccountPlanAddonCreateApplicationJSON2 struct {
	PlanDetails AccountPlanAddonCreateApplicationJSON2PhonePlan `json:"plan_details"`
	Type        string                                          `json:"type"`
}

// AccountPlanAddonCreateMultipartFormData1
// Account plan object.
type AccountPlanAddonCreateMultipartFormData1 struct {
	Hosts int64  `multipartForm:"name=hosts"`
	Type  string `multipartForm:"name=type"`
}

// AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase
// Additional phone base plans.
type AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase struct {
	CalloutCountries *string `json:"callout_countries,omitempty"`
	Type             *string `json:"type,omitempty"`
}

type AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanAddonCreateMultipartFormData2PhonePlan
// Phone Plan Object
type AccountPlanAddonCreateMultipartFormData2PhonePlan struct {
	PlanBase    *AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase     `json:"plan_base,omitempty"`
	PlanCalling []AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling `json:"plan_calling,omitempty"`
	PlanNumber  []AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber  `json:"plan_number,omitempty"`
}

// AccountPlanAddonCreateMultipartFormData2
// Zoom Phone Plan Object
type AccountPlanAddonCreateMultipartFormData2 struct {
	PlanDetails AccountPlanAddonCreateMultipartFormData2PhonePlan `multipartForm:"name=plan_details,json"`
	Type        string                                            `multipartForm:"name=type"`
}

type AccountPlanAddonCreateRequests struct {
	OneOf  *interface{} `request:"mediaType=application/json"`
	OneOf1 *interface{} `request:"mediaType=multipart/form-data"`
}

type AccountPlanAddonCreateRequest struct {
	PathParams AccountPlanAddonCreatePathParams
	Request    AccountPlanAddonCreateRequests
}

type AccountPlanAddonCreateResponse struct {
	ContentType string
	StatusCode  int64
}
