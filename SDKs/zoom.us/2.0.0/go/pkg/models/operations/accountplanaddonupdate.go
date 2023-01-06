package operations

type AccountPlanAddonUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AccountPlanAddonUpdateApplicationJSON
// Account plan object.
type AccountPlanAddonUpdateApplicationJSON struct {
	Hosts int64  `json:"hosts"`
	Type  string `json:"type"`
}

// AccountPlanAddonUpdateMultipartFormData
// Account plan object.
type AccountPlanAddonUpdateMultipartFormData struct {
	Hosts int64  `multipartForm:"name=hosts"`
	Type  string `multipartForm:"name=type"`
}

type AccountPlanAddonUpdateRequests struct {
	Object  *AccountPlanAddonUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountPlanAddonUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountPlanAddonUpdateRequest struct {
	PathParams AccountPlanAddonUpdatePathParams
	Request    AccountPlanAddonUpdateRequests
}

type AccountPlanAddonUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
