package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRegistrantCreatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRegistrantCreateQueryParams struct {
	OccurrenceIds *string `queryParam:"style=form,explode=true,name=occurrence_ids"`
}

// MeetingRegistrantCreateApplicationJSONCustomQuestions
// Custom Question.
type MeetingRegistrantCreateApplicationJSONCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingRegistrantCreateApplicationJSON
// Registrant base object.
type MeetingRegistrantCreateApplicationJSON struct {
	Address               *string                                                 `json:"address,omitempty"`
	AutoApprove           *bool                                                   `json:"auto_approve,omitempty"`
	City                  *string                                                 `json:"city,omitempty"`
	Comments              *string                                                 `json:"comments,omitempty"`
	Country               *string                                                 `json:"country,omitempty"`
	CustomQuestions       []MeetingRegistrantCreateApplicationJSONCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                  `json:"email"`
	FirstName             string                                                  `json:"first_name"`
	Industry              *string                                                 `json:"industry,omitempty"`
	JobTitle              *string                                                 `json:"job_title,omitempty"`
	Language              *string                                                 `json:"language,omitempty"`
	LastName              *string                                                 `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                 `json:"no_of_employees,omitempty"`
	Org                   *string                                                 `json:"org,omitempty"`
	Phone                 *string                                                 `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                 `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                 `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                 `json:"state,omitempty"`
	Zip                   *string                                                 `json:"zip,omitempty"`
}

// MeetingRegistrantCreateMultipartFormDataCustomQuestions
// Custom Question.
type MeetingRegistrantCreateMultipartFormDataCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingRegistrantCreateMultipartFormData1
// Registrant base object.
type MeetingRegistrantCreateMultipartFormData1 struct {
	Address               *string                                                   `multipartForm:"name=address"`
	AutoApprove           *bool                                                     `multipartForm:"name=auto_approve"`
	City                  *string                                                   `multipartForm:"name=city"`
	Comments              *string                                                   `multipartForm:"name=comments"`
	Country               *string                                                   `multipartForm:"name=country"`
	CustomQuestions       []MeetingRegistrantCreateMultipartFormDataCustomQuestions `multipartForm:"name=custom_questions,json"`
	Email                 string                                                    `multipartForm:"name=email"`
	FirstName             string                                                    `multipartForm:"name=first_name"`
	Industry              *string                                                   `multipartForm:"name=industry"`
	JobTitle              *string                                                   `multipartForm:"name=job_title"`
	Language              *string                                                   `multipartForm:"name=language"`
	LastName              *string                                                   `multipartForm:"name=last_name"`
	NoOfEmployees         *string                                                   `multipartForm:"name=no_of_employees"`
	Org                   *string                                                   `multipartForm:"name=org"`
	Phone                 *string                                                   `multipartForm:"name=phone"`
	PurchasingTimeFrame   *string                                                   `multipartForm:"name=purchasing_time_frame"`
	RoleInPurchaseProcess *string                                                   `multipartForm:"name=role_in_purchase_process"`
	State                 *string                                                   `multipartForm:"name=state"`
	Zip                   *string                                                   `multipartForm:"name=zip"`
}

type MeetingRegistrantCreateRequests struct {
	Object  *MeetingRegistrantCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *MeetingRegistrantCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type MeetingRegistrantCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingRegistrantCreate201ApplicationJSON struct {
	ID           *int64  `json:"id,omitempty"`
	JoinURL      *string `json:"join_url,omitempty"`
	RegistrantID *string `json:"registrant_id,omitempty"`
	StartTime    *string `json:"start_time,omitempty"`
	Topic        *string `json:"topic,omitempty"`
}

type MeetingRegistrantCreateRequest struct {
	PathParams  MeetingRegistrantCreatePathParams
	QueryParams MeetingRegistrantCreateQueryParams
	Request     MeetingRegistrantCreateRequests
	Security    MeetingRegistrantCreateSecurity
}

type MeetingRegistrantCreateResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	MeetingRegistrantCreate201ApplicationJSONObject *MeetingRegistrantCreate201ApplicationJSON
}
