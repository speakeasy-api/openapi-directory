package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarDeletePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarDeleteQueryParams struct {
	CancelWebinarReminder *string `queryParam:"style=form,explode=true,name=cancel_webinar_reminder"`
	OccurrenceID          *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type WebinarDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarDeleteRequest struct {
	PathParams  WebinarDeletePathParams
	QueryParams WebinarDeleteQueryParams
	Security    WebinarDeleteSecurity
}

type WebinarDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
