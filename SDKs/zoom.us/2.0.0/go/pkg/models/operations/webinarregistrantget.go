package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarRegistrantGetPathParams struct {
	RegistrantID string `pathParam:"style=simple,explode=false,name=registrantId"`
	WebinarID    int64  `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarRegistrantGetQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type WebinarRegistrantGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// WebinarRegistrantGetWebianrRegistrantCustomQuestions
// Custom Question.
type WebinarRegistrantGetWebianrRegistrantCustomQuestions struct {
	Title *string `json:"title,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarRegistrantGetWebianrRegistrant
// Registrant base object.
type WebinarRegistrantGetWebianrRegistrant struct {
	Address               *string                                                `json:"address,omitempty"`
	City                  *string                                                `json:"city,omitempty"`
	Comments              *string                                                `json:"comments,omitempty"`
	Country               *string                                                `json:"country,omitempty"`
	CreateTime            *time.Time                                             `json:"create_time,omitempty"`
	CustomQuestions       []WebinarRegistrantGetWebianrRegistrantCustomQuestions `json:"custom_questions,omitempty"`
	Email                 string                                                 `json:"email"`
	FirstName             string                                                 `json:"first_name"`
	ID                    *string                                                `json:"id,omitempty"`
	Industry              *string                                                `json:"industry,omitempty"`
	JobTitle              *string                                                `json:"job_title,omitempty"`
	JoinURL               *string                                                `json:"join_url,omitempty"`
	LastName              *string                                                `json:"last_name,omitempty"`
	NoOfEmployees         *string                                                `json:"no_of_employees,omitempty"`
	Org                   *string                                                `json:"org,omitempty"`
	Phone                 *string                                                `json:"phone,omitempty"`
	PurchasingTimeFrame   *string                                                `json:"purchasing_time_frame,omitempty"`
	RoleInPurchaseProcess *string                                                `json:"role_in_purchase_process,omitempty"`
	State                 *string                                                `json:"state,omitempty"`
	Status                *string                                                `json:"status,omitempty"`
	Zip                   *string                                                `json:"zip,omitempty"`
}

type WebinarRegistrantGetRequest struct {
	PathParams  WebinarRegistrantGetPathParams
	QueryParams WebinarRegistrantGetQueryParams
	Security    WebinarRegistrantGetSecurity
}

type WebinarRegistrantGetResponse struct {
	Body              []byte
	ContentType       string
	StatusCode        int64
	WebianrRegistrant *WebinarRegistrantGetWebianrRegistrant
}
