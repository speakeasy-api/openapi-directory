package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type RecordingsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type RecordingsListQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	Mc            *string    `queryParam:"style=form,explode=true,name=mc"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            *time.Time `queryParam:"style=form,explode=true,name=to"`
	Trash         *bool      `queryParam:"style=form,explode=true,name=trash"`
	TrashType     *string    `queryParam:"style=form,explode=true,name=trash_type"`
}

type RecordingsListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// RecordingsListRecordingList
// DateTime Object.
type RecordingsListRecordingList struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
}

type RecordingsListRequest struct {
	PathParams  RecordingsListPathParams
	QueryParams RecordingsListQueryParams
	Security    RecordingsListSecurity
}

type RecordingsListResponse struct {
	Body          []byte
	ContentType   string
	RecordingList *RecordingsListRecordingList
	StatusCode    int64
}
