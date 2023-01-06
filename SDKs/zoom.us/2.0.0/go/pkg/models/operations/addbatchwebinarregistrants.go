package operations

import (
	"openapi/pkg/models/shared"
)

type AddBatchWebinarRegistrantsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type AddBatchWebinarRegistrantsApplicationJSONRegistrants struct {
	Email     string  `json:"email"`
	FirstName string  `json:"first_name"`
	LastName  *string `json:"last_name,omitempty"`
}

type AddBatchWebinarRegistrantsApplicationJSON struct {
	AutoApprove *bool                                                  `json:"auto_approve,omitempty"`
	Registrants []AddBatchWebinarRegistrantsApplicationJSONRegistrants `json:"registrants,omitempty"`
}

type AddBatchWebinarRegistrantsMultipartFormDataRegistrants struct {
	Email     string  `json:"email"`
	FirstName string  `json:"first_name"`
	LastName  *string `json:"last_name,omitempty"`
}

type AddBatchWebinarRegistrantsMultipartFormData1 struct {
	AutoApprove *bool                                                    `multipartForm:"name=auto_approve"`
	Registrants []AddBatchWebinarRegistrantsMultipartFormDataRegistrants `multipartForm:"name=registrants,json"`
}

type AddBatchWebinarRegistrantsRequests struct {
	Object  *AddBatchWebinarRegistrantsApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AddBatchWebinarRegistrantsMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AddBatchWebinarRegistrantsSecurity struct {
	OAuth  *shared.SchemeOAuth  `security:"scheme,type=oauth2"`
	Bearer *shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type AddBatchWebinarRegistrants200ApplicationJSONRegistrants struct {
	Email        *string `json:"email,omitempty"`
	JoinURL      *string `json:"join_url,omitempty"`
	RegistrantID *string `json:"registrant_id,omitempty"`
}

type AddBatchWebinarRegistrants200ApplicationJSON struct {
	Registrants []AddBatchWebinarRegistrants200ApplicationJSONRegistrants `json:"registrants,omitempty"`
}

type AddBatchWebinarRegistrantsRequest struct {
	PathParams AddBatchWebinarRegistrantsPathParams
	Request    *AddBatchWebinarRegistrantsRequests
	Security   AddBatchWebinarRegistrantsSecurity
}

type AddBatchWebinarRegistrantsResponse struct {
	Body                                               []byte
	ContentType                                        string
	StatusCode                                         int64
	AddBatchWebinarRegistrants200ApplicationJSONObject *AddBatchWebinarRegistrants200ApplicationJSON
}
