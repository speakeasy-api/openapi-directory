package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRecordingRegistrantCreatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

// MeetingRecordingRegistrantCreateApplicationJSONCustomQuestions
// Custom Question.
type MeetingRecordingRegistrantCreateApplicationJSONCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingRecordingRegistrantCreateApplicationJSON
// Registrant base object.
type MeetingRecordingRegistrantCreateApplicationJSON struct {
	Address               *string                                                          `json:"address,omitempty"`
	City                  *string                                                          `json:"city,omitempty"`
	Comments              *string                                                          `json:"comments,omitempty"`
	Country               *string                                                          `json:"country,omitempty"`
	CustomQuestions       []MeetingRecordingRegistrantCreateApplicationJSONCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                           `json:"email"`
	FirstName             string                                                           `json:"first_name"`
	Industry              *string                                                          `json:"industry,omitempty"`
	JobTitle              *string                                                          `json:"job_title,omitempty"`
	LastName              *string                                                          `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                          `json:"no_of_employees,omitempty"`
	Org                   *string                                                          `json:"org,omitempty"`
	Phone                 *string                                                          `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                          `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                          `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                          `json:"state,omitempty"`
	Zip                   *string                                                          `json:"zip,omitempty"`
}

// MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions
// Custom Question.
type MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingRecordingRegistrantCreateMultipartFormData1
// Registrant base object.
type MeetingRecordingRegistrantCreateMultipartFormData1 struct {
	Address               *string                                                            `multipartForm:"name=address"`
	City                  *string                                                            `multipartForm:"name=city"`
	Comments              *string                                                            `multipartForm:"name=comments"`
	Country               *string                                                            `multipartForm:"name=country"`
	CustomQuestions       []MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions `multipartForm:"name=custom_questions,json"`
	Email                 string                                                             `multipartForm:"name=email"`
	FirstName             string                                                             `multipartForm:"name=first_name"`
	Industry              *string                                                            `multipartForm:"name=industry"`
	JobTitle              *string                                                            `multipartForm:"name=job_title"`
	LastName              *string                                                            `multipartForm:"name=last_name"`
	NoOfEmployees         *string                                                            `multipartForm:"name=no_of_employees"`
	Org                   *string                                                            `multipartForm:"name=org"`
	Phone                 *string                                                            `multipartForm:"name=phone"`
	PurchasingTimeFrame   *string                                                            `multipartForm:"name=purchasing_time_frame"`
	RoleInPurchaseProcess *string                                                            `multipartForm:"name=role_in_purchase_process"`
	State                 *string                                                            `multipartForm:"name=state"`
	Zip                   *string                                                            `multipartForm:"name=zip"`
}

type MeetingRecordingRegistrantCreateRequests struct {
	Object  *MeetingRecordingRegistrantCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *MeetingRecordingRegistrantCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type MeetingRecordingRegistrantCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingRecordingRegistrantCreate201ApplicationJSON struct {
	ID           *int64  `json:"id,omitempty"`
	RegistrantID *string `json:"registrant_id,omitempty"`
	ShareURL     *string `json:"share_url,omitempty"`
	Topic        *string `json:"topic,omitempty"`
}

type MeetingRecordingRegistrantCreateRequest struct {
	PathParams MeetingRecordingRegistrantCreatePathParams
	Request    MeetingRecordingRegistrantCreateRequests
	Security   MeetingRecordingRegistrantCreateSecurity
}

type MeetingRecordingRegistrantCreateResponse struct {
	Body                                                     []byte
	ContentType                                              string
	StatusCode                                               int64
	MeetingRecordingRegistrantCreate201ApplicationJSONObject *MeetingRecordingRegistrantCreate201ApplicationJSON
}
