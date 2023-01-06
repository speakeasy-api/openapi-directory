package operations

type AccountPlanBaseUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AccountPlanBaseUpdateApplicationJSON
// Account base plan object.
type AccountPlanBaseUpdateApplicationJSON struct {
	Hosts int64  `json:"hosts"`
	Type  string `json:"type"`
}

// AccountPlanBaseUpdateMultipartFormData
// Account base plan object.
type AccountPlanBaseUpdateMultipartFormData struct {
	Hosts int64  `multipartForm:"name=hosts"`
	Type  string `multipartForm:"name=type"`
}

type AccountPlanBaseUpdateRequests struct {
	Object  *AccountPlanBaseUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountPlanBaseUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountPlanBaseUpdateRequest struct {
	PathParams AccountPlanBaseUpdatePathParams
	Request    AccountPlanBaseUpdateRequests
}

type AccountPlanBaseUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
