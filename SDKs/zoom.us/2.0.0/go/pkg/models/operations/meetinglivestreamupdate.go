package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingLiveStreamUpdatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

// MeetingLiveStreamUpdateApplicationJSON
// Meeting live stream.
type MeetingLiveStreamUpdateApplicationJSON struct {
	PageURL   *string `json:"page_url,omitempty"`
	StreamKey string  `json:"stream_key"`
	StreamURL string  `json:"stream_url"`
}

// MeetingLiveStreamUpdateMultipartFormData
// Meeting live stream.
type MeetingLiveStreamUpdateMultipartFormData struct {
	PageURL   *string `multipartForm:"name=page_url"`
	StreamKey string  `multipartForm:"name=stream_key"`
	StreamURL string  `multipartForm:"name=stream_url"`
}

type MeetingLiveStreamUpdateRequests struct {
	Object  *MeetingLiveStreamUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *MeetingLiveStreamUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type MeetingLiveStreamUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingLiveStreamUpdateRequest struct {
	PathParams MeetingLiveStreamUpdatePathParams
	Request    MeetingLiveStreamUpdateRequests
	Security   MeetingLiveStreamUpdateSecurity
}

type MeetingLiveStreamUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
