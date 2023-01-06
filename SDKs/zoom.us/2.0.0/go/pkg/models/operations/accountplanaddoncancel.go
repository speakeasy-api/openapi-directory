package operations

import (
	"openapi/pkg/models/shared"
)

type AccountPlanAddonCancelPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountPlanAddonCancelApplicationJSONActionEnum string

const (
	AccountPlanAddonCancelApplicationJSONActionEnumCancel AccountPlanAddonCancelApplicationJSONActionEnum = "cancel"
)

// AccountPlanAddonCancelApplicationJSON
// Account plan object
type AccountPlanAddonCancelApplicationJSON struct {
	Action  *AccountPlanAddonCancelApplicationJSONActionEnum `json:"action,omitempty"`
	Comment *string                                          `json:"comment,omitempty"`
	Reason  *int64                                           `json:"reason,omitempty"`
	Type    *string                                          `json:"type,omitempty"`
}

type AccountPlanAddonCancelMultipartFormDataActionEnum string

const (
	AccountPlanAddonCancelMultipartFormDataActionEnumCancel AccountPlanAddonCancelMultipartFormDataActionEnum = "cancel"
)

// AccountPlanAddonCancelMultipartFormData
// Account plan object
type AccountPlanAddonCancelMultipartFormData struct {
	Action  *AccountPlanAddonCancelMultipartFormDataActionEnum `multipartForm:"name=action"`
	Comment *string                                            `multipartForm:"name=comment"`
	Reason  *int64                                             `multipartForm:"name=reason"`
	Type    *string                                            `multipartForm:"name=type"`
}

type AccountPlanAddonCancelRequests struct {
	Object  *AccountPlanAddonCancelApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountPlanAddonCancelMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountPlanAddonCancelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AccountPlanAddonCancelRequest struct {
	PathParams AccountPlanAddonCancelPathParams
	Request    *AccountPlanAddonCancelRequests
	Security   AccountPlanAddonCancelSecurity
}

type AccountPlanAddonCancelResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	AccountPlanAddonCancel204ApplicationJSONAny *interface{}
}
