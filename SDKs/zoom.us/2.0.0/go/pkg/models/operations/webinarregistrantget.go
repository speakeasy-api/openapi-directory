package operations

import (
	"openapi/pkg/models/shared"
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

// WebinarRegistrantGetWebianrRegistrant
// Registrant base object.
type WebinarRegistrantGetWebianrRegistrant struct {
	ID *string `json:"id,omitempty"`
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
