package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingLiveStreamStatusUpdatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingLiveStreamStatusUpdateApplicationJSONActionEnum string

const (
	MeetingLiveStreamStatusUpdateApplicationJSONActionEnumStart MeetingLiveStreamStatusUpdateApplicationJSONActionEnum = "start"
	MeetingLiveStreamStatusUpdateApplicationJSONActionEnumStop  MeetingLiveStreamStatusUpdateApplicationJSONActionEnum = "stop"
)

// MeetingLiveStreamStatusUpdateApplicationJSONSettings
// Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
type MeetingLiveStreamStatusUpdateApplicationJSONSettings struct {
	ActiveSpeakerName *bool   `json:"active_speaker_name,omitempty"`
	DisplayName       *string `json:"display_name,omitempty"`
}

// MeetingLiveStreamStatusUpdateApplicationJSON
// Meeting live stream status.
type MeetingLiveStreamStatusUpdateApplicationJSON struct {
	Action   *MeetingLiveStreamStatusUpdateApplicationJSONActionEnum `json:"action,omitempty"`
	Settings *MeetingLiveStreamStatusUpdateApplicationJSONSettings   `json:"settings,omitempty"`
}

type MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum string

const (
	MeetingLiveStreamStatusUpdateMultipartFormDataActionEnumStart MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum = "start"
	MeetingLiveStreamStatusUpdateMultipartFormDataActionEnumStop  MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum = "stop"
)

// MeetingLiveStreamStatusUpdateMultipartFormDataSettings
// Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
type MeetingLiveStreamStatusUpdateMultipartFormDataSettings struct {
	ActiveSpeakerName *bool   `json:"active_speaker_name,omitempty"`
	DisplayName       *string `json:"display_name,omitempty"`
}

// MeetingLiveStreamStatusUpdateMultipartFormData
// Meeting live stream status.
type MeetingLiveStreamStatusUpdateMultipartFormData struct {
	Action   *MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum `multipartForm:"name=action"`
	Settings *MeetingLiveStreamStatusUpdateMultipartFormDataSettings   `multipartForm:"name=settings,json"`
}

type MeetingLiveStreamStatusUpdateRequests struct {
	Object  *MeetingLiveStreamStatusUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *MeetingLiveStreamStatusUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type MeetingLiveStreamStatusUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingLiveStreamStatusUpdateRequest struct {
	PathParams MeetingLiveStreamStatusUpdatePathParams
	Request    MeetingLiveStreamStatusUpdateRequests
	Security   MeetingLiveStreamStatusUpdateSecurity
}

type MeetingLiveStreamStatusUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
