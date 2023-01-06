package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PastWebinarsPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type PastWebinarsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PastWebinarsWebinarInstancesWebinars struct {
	StartTime *time.Time `json:"start_time,omitempty"`
	UUID      *string    `json:"uuid,omitempty"`
}

// PastWebinarsWebinarInstances
// List of webinars.
type PastWebinarsWebinarInstances struct {
	Webinars []PastWebinarsWebinarInstancesWebinars `json:"webinars,omitempty"`
}

type PastWebinarsRequest struct {
	PathParams PastWebinarsPathParams
	Security   PastWebinarsSecurity
}

type PastWebinarsResponse struct {
	Body             []byte
	ContentType      string
	StatusCode       int64
	WebinarInstances *PastWebinarsWebinarInstances
}
