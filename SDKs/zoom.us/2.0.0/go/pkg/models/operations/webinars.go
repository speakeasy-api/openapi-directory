package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type WebinarsQueryParams struct {
	PageNumber *int64 `queryParam:"style=form,explode=true,name=page_number"`
	PageSize   *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type WebinarsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarsUserListWebinars struct {
	Agenda    *string    `json:"agenda,omitempty"`
	CreatedAt *time.Time `json:"created_at,omitempty"`
	Duration  *int64     `json:"duration,omitempty"`
	HostID    *string    `json:"host_id,omitempty"`
	ID        *int64     `json:"id,omitempty"`
	JoinURL   *string    `json:"join_url,omitempty"`
	StartTime *time.Time `json:"start_time,omitempty"`
	Timezone  *string    `json:"timezone,omitempty"`
	Topic     *string    `json:"topic,omitempty"`
	Type      *string    `json:"type,omitempty"`
	UUID      *string    `json:"uuid,omitempty"`
}

// WebinarsUserList
// Pagination Object.
type WebinarsUserList struct {
	Webinars []WebinarsUserListWebinars `json:"webinars,omitempty"`
}

type WebinarsRequest struct {
	PathParams  WebinarsPathParams
	QueryParams WebinarsQueryParams
	Security    WebinarsSecurity
}

type WebinarsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	UserList    *WebinarsUserList
}
