package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRegistrantsPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRegistrantsStatusEnum string

const (
	MeetingRegistrantsStatusEnumPending  MeetingRegistrantsStatusEnum = "pending"
	MeetingRegistrantsStatusEnumApproved MeetingRegistrantsStatusEnum = "approved"
	MeetingRegistrantsStatusEnumDenied   MeetingRegistrantsStatusEnum = "denied"
)

type MeetingRegistrantsQueryParams struct {
	NextPageToken *string                       `queryParam:"style=form,explode=true,name=next_page_token"`
	OccurrenceID  *string                       `queryParam:"style=form,explode=true,name=occurrence_id"`
	PageNumber    *int64                        `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64                        `queryParam:"style=form,explode=true,name=page_size"`
	Status        *MeetingRegistrantsStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type MeetingRegistrantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// MeetingRegistrantsRegistrationListRegistrantsCustomQuestions
// Custom Question.
type MeetingRegistrantsRegistrationListRegistrantsCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingRegistrantsRegistrationListRegistrants
// Registrant base object.
type MeetingRegistrantsRegistrationListRegistrants struct {
	Address               *string                                                        `json:"address,omitempty"`
	City                  *string                                                        `json:"city,omitempty"`
	Comments              *string                                                        `json:"comments,omitempty"`
	Country               *string                                                        `json:"country,omitempty"`
	CustomQuestions       []MeetingRegistrantsRegistrationListRegistrantsCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                         `json:"email"`
	FirstName             string                                                         `json:"first_name"`
	Industry              *string                                                        `json:"industry,omitempty"`
	JobTitle              *string                                                        `json:"job_title,omitempty"`
	LastName              *string                                                        `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                        `json:"no_of_employees,omitempty"`
	Org                   *string                                                        `json:"org,omitempty"`
	Phone                 *string                                                        `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                        `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                        `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                        `json:"state,omitempty"`
	Zip                   *string                                                        `json:"zip,omitempty"`
}

// MeetingRegistrantsRegistrationList
// Pagination Object.
type MeetingRegistrantsRegistrationList struct {
	Registrants []MeetingRegistrantsRegistrationListRegistrants `json:"registrants,omitempty"`
}

type MeetingRegistrantsRequest struct {
	PathParams  MeetingRegistrantsPathParams
	QueryParams MeetingRegistrantsQueryParams
	Security    MeetingRegistrantsSecurity
}

type MeetingRegistrantsResponse struct {
	Body             []byte
	ContentType      string
	RegistrationList *MeetingRegistrantsRegistrationList
	StatusCode       int64
}
