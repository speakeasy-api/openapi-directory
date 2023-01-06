package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarRegistrantCreatePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarRegistrantCreateQueryParams struct {
	OccurrenceIds *string `queryParam:"style=form,explode=true,name=occurrence_ids"`
}

// WebinarRegistrantCreateApplicationJSONCustomQuestions
// Custom Question.
type WebinarRegistrantCreateApplicationJSONCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarRegistrantCreateApplicationJSON
// Registrant base object.
type WebinarRegistrantCreateApplicationJSON struct {
	Address               *string                                                 `json:"address,omitempty"`
	City                  *string                                                 `json:"city,omitempty"`
	Comments              *string                                                 `json:"comments,omitempty"`
	Country               *string                                                 `json:"country,omitempty"`
	CustomQuestions       []WebinarRegistrantCreateApplicationJSONCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                  `json:"email"`
	FirstName             string                                                  `json:"first_name"`
	Industry              *string                                                 `json:"industry,omitempty"`
	JobTitle              *string                                                 `json:"job_title,omitempty"`
	LastName              *string                                                 `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                 `json:"no_of_employees,omitempty"`
	Org                   *string                                                 `json:"org,omitempty"`
	Phone                 *string                                                 `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                 `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                 `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                 `json:"state,omitempty"`
	Zip                   *string                                                 `json:"zip,omitempty"`
}

// WebinarRegistrantCreateMultipartFormDataCustomQuestions
// Custom Question.
type WebinarRegistrantCreateMultipartFormDataCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarRegistrantCreateMultipartFormData1
// Registrant base object.
type WebinarRegistrantCreateMultipartFormData1 struct {
	Address               *string                                                   `multipartForm:"name=address"`
	City                  *string                                                   `multipartForm:"name=city"`
	Comments              *string                                                   `multipartForm:"name=comments"`
	Country               *string                                                   `multipartForm:"name=country"`
	CustomQuestions       []WebinarRegistrantCreateMultipartFormDataCustomQuestions `multipartForm:"name=custom_questions,json"`
	Email                 string                                                    `multipartForm:"name=email"`
	FirstName             string                                                    `multipartForm:"name=first_name"`
	Industry              *string                                                   `multipartForm:"name=industry"`
	JobTitle              *string                                                   `multipartForm:"name=job_title"`
	LastName              *string                                                   `multipartForm:"name=last_name"`
	NoOfEmployees         *string                                                   `multipartForm:"name=no_of_employees"`
	Org                   *string                                                   `multipartForm:"name=org"`
	Phone                 *string                                                   `multipartForm:"name=phone"`
	PurchasingTimeFrame   *string                                                   `multipartForm:"name=purchasing_time_frame"`
	RoleInPurchaseProcess *string                                                   `multipartForm:"name=role_in_purchase_process"`
	State                 *string                                                   `multipartForm:"name=state"`
	Zip                   *string                                                   `multipartForm:"name=zip"`
}

type WebinarRegistrantCreateRequests struct {
	Object  *WebinarRegistrantCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *WebinarRegistrantCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type WebinarRegistrantCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarRegistrantCreate201ApplicationJSON struct {
	ID           *string    `json:"id,omitempty"`
	JoinURL      *string    `json:"join_url,omitempty"`
	RegistrantID *string    `json:"registrant_id,omitempty"`
	StartTime    *time.Time `json:"start_time,omitempty"`
	Topic        *string    `json:"topic,omitempty"`
}

type WebinarRegistrantCreateRequest struct {
	PathParams  WebinarRegistrantCreatePathParams
	QueryParams WebinarRegistrantCreateQueryParams
	Request     WebinarRegistrantCreateRequests
	Security    WebinarRegistrantCreateSecurity
}

type WebinarRegistrantCreateResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	WebinarRegistrantCreate201ApplicationJSONObject *WebinarRegistrantCreate201ApplicationJSON
}
