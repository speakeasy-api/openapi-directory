package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarRegistrantsPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarRegistrantsStatusEnum string

const (
	WebinarRegistrantsStatusEnumPending  WebinarRegistrantsStatusEnum = "pending"
	WebinarRegistrantsStatusEnumApproved WebinarRegistrantsStatusEnum = "approved"
	WebinarRegistrantsStatusEnumDenied   WebinarRegistrantsStatusEnum = "denied"
)

type WebinarRegistrantsQueryParams struct {
	NextPageToken    *string                       `queryParam:"style=form,explode=true,name=next_page_token"`
	OccurrenceID     *string                       `queryParam:"style=form,explode=true,name=occurrence_id"`
	PageNumber       *int64                        `queryParam:"style=form,explode=true,name=page_number"`
	PageSize         *int64                        `queryParam:"style=form,explode=true,name=page_size"`
	Status           *WebinarRegistrantsStatusEnum `queryParam:"style=form,explode=true,name=status"`
	TrackingSourceID *string                       `queryParam:"style=form,explode=true,name=tracking_source_id"`
}

type WebinarRegistrantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// WebinarRegistrantsRegistrationListRegistrantsCustomQuestions
// Custom Question.
type WebinarRegistrantsRegistrationListRegistrantsCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarRegistrantsRegistrationListRegistrants
// Registrant base object.
type WebinarRegistrantsRegistrationListRegistrants struct {
	Address               *string                                                        `json:"address,omitempty"`
	City                  *string                                                        `json:"city,omitempty"`
	Comments              *string                                                        `json:"comments,omitempty"`
	Country               *string                                                        `json:"country,omitempty"`
	CreateTime            *time.Time                                                     `json:"create_time,omitempty"`
	CustomQuestions       []WebinarRegistrantsRegistrationListRegistrantsCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                         `json:"email"`
	FirstName             string                                                         `json:"first_name"`
	ID                    *string                                                        `json:"id,omitempty"`
	Industry              *string                                                        `json:"industry,omitempty"`
	JobTitle              *string                                                        `json:"job_title,omitempty"`
	JoinURL               *string                                                        `json:"join_url,omitempty"`
	LastName              *string                                                        `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                        `json:"no_of_employees,omitempty"`
	Org                   *string                                                        `json:"org,omitempty"`
	Phone                 *string                                                        `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                        `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                        `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                        `json:"state,omitempty"`
	Status                *string                                                        `json:"status,omitempty"`
	Zip                   *string                                                        `json:"zip,omitempty"`
}

// WebinarRegistrantsRegistrationList
// Pagination Object.
type WebinarRegistrantsRegistrationList struct {
	NextPageToken *string                                         `json:"next_page_token,omitempty"`
	PageCount     *int64                                          `json:"page_count,omitempty"`
	PageNumber    *int64                                          `json:"page_number,omitempty"`
	PageSize      *int64                                          `json:"page_size,omitempty"`
	Registrants   []WebinarRegistrantsRegistrationListRegistrants `json:"registrants,omitempty"`
	TotalRecords  *int64                                          `json:"total_records,omitempty"`
}

type WebinarRegistrantsRequest struct {
	PathParams  WebinarRegistrantsPathParams
	QueryParams WebinarRegistrantsQueryParams
	Security    WebinarRegistrantsSecurity
}

type WebinarRegistrantsResponse struct {
	Body             []byte
	ContentType      string
	RegistrationList *WebinarRegistrantsRegistrationList
	StatusCode       int64
}
