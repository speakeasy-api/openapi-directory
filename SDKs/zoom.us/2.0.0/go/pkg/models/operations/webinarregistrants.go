package operations

import (
	"openapi/pkg/models/shared"
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

// WebinarRegistrantsRegistrationListRegistrants
// Registrant base object.
type WebinarRegistrantsRegistrationListRegistrants struct {
	ID *string `json:"id,omitempty"`
}

// WebinarRegistrantsRegistrationList
// Pagination Object.
type WebinarRegistrantsRegistrationList struct {
	Registrants []WebinarRegistrantsRegistrationListRegistrants `json:"registrants,omitempty"`
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
