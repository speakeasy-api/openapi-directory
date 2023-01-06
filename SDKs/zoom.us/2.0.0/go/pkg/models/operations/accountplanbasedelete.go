package operations

type AccountPlanBaseDeletePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountPlanBaseDeleteApplicationJSON struct {
	Action  string  `json:"action"`
	Comment *string `json:"comment,omitempty"`
	Reason  *int64  `json:"reason,omitempty"`
}

type AccountPlanBaseDeleteMultipartFormData struct {
	Action  string  `multipartForm:"name=action"`
	Comment *string `multipartForm:"name=comment"`
	Reason  *int64  `multipartForm:"name=reason"`
}

type AccountPlanBaseDeleteRequests struct {
	Object  *AccountPlanBaseDeleteApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountPlanBaseDeleteMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountPlanBaseDeleteRequest struct {
	PathParams AccountPlanBaseDeletePathParams
	Request    *AccountPlanBaseDeleteRequests
}

type AccountPlanBaseDeleteResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	AccountPlanBaseDelete204ApplicationJSONObject map[string]interface{}
}
