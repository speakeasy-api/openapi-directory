package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRecordingRegistrantsPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRecordingRegistrantsStatusEnum string

const (
	MeetingRecordingRegistrantsStatusEnumPending  MeetingRecordingRegistrantsStatusEnum = "pending"
	MeetingRecordingRegistrantsStatusEnumApproved MeetingRecordingRegistrantsStatusEnum = "approved"
	MeetingRecordingRegistrantsStatusEnumDenied   MeetingRecordingRegistrantsStatusEnum = "denied"
)

type MeetingRecordingRegistrantsQueryParams struct {
	NextPageToken *string                                `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64                                 `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64                                 `queryParam:"style=form,explode=true,name=page_size"`
	Status        *MeetingRecordingRegistrantsStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type MeetingRecordingRegistrantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions
// Custom Question.
type MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingRecordingRegistrantsRecordingRegistrationListRegistrants
// Registrant base object.
type MeetingRecordingRegistrantsRecordingRegistrationListRegistrants struct {
	Address               *string                                                                          `json:"address,omitempty"`
	City                  *string                                                                          `json:"city,omitempty"`
	Comments              *string                                                                          `json:"comments,omitempty"`
	Country               *string                                                                          `json:"country,omitempty"`
	CustomQuestions       []MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                                           `json:"email"`
	FirstName             string                                                                           `json:"first_name"`
	ID                    *string                                                                          `json:"id,omitempty"`
	Industry              *string                                                                          `json:"industry,omitempty"`
	JobTitle              *string                                                                          `json:"job_title,omitempty"`
	LastName              *string                                                                          `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                                          `json:"no_of_employees,omitempty"`
	Org                   *string                                                                          `json:"org,omitempty"`
	Phone                 *string                                                                          `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                                          `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                                          `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                                          `json:"state,omitempty"`
	Zip                   *string                                                                          `json:"zip,omitempty"`
}

// MeetingRecordingRegistrantsRecordingRegistrationList
// Pagination Object.
type MeetingRecordingRegistrantsRecordingRegistrationList struct {
	NextPageToken *string                                                           `json:"next_page_token,omitempty"`
	PageCount     *int64                                                            `json:"page_count,omitempty"`
	PageNumber    *int64                                                            `json:"page_number,omitempty"`
	PageSize      *int64                                                            `json:"page_size,omitempty"`
	Registrants   []MeetingRecordingRegistrantsRecordingRegistrationListRegistrants `json:"registrants,omitempty"`
	TotalRecords  *int64                                                            `json:"total_records,omitempty"`
}

type MeetingRecordingRegistrantsRequest struct {
	PathParams  MeetingRecordingRegistrantsPathParams
	QueryParams MeetingRecordingRegistrantsQueryParams
	Security    MeetingRecordingRegistrantsSecurity
}

type MeetingRecordingRegistrantsResponse struct {
	Body                      []byte
	ContentType               string
	RecordingRegistrationList *MeetingRecordingRegistrantsRecordingRegistrationList
	StatusCode                int64
}
