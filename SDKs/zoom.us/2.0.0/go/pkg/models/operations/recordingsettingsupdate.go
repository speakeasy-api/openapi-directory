package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingSettingsUpdatePathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingSettingsUpdateRecordingSettingsShareRecordingEnum string

const (
	RecordingSettingsUpdateRecordingSettingsShareRecordingEnumPublicly   RecordingSettingsUpdateRecordingSettingsShareRecordingEnum = "publicly"
	RecordingSettingsUpdateRecordingSettingsShareRecordingEnumInternally RecordingSettingsUpdateRecordingSettingsShareRecordingEnum = "internally"
	RecordingSettingsUpdateRecordingSettingsShareRecordingEnumNone       RecordingSettingsUpdateRecordingSettingsShareRecordingEnum = "none"
)

type RecordingSettingsUpdateRecordingSettings struct {
	ApprovalType            *int64                                                      `json:"approval_type,omitempty" multipartForm:"name=approval_type"`
	AuthenticationDomains   *string                                                     `json:"authentication_domains,omitempty" multipartForm:"name=authentication_domains"`
	AuthenticationOption    *string                                                     `json:"authentication_option,omitempty" multipartForm:"name=authentication_option"`
	OnDemand                *bool                                                       `json:"on_demand,omitempty" multipartForm:"name=on_demand"`
	Password                *string                                                     `json:"password,omitempty" multipartForm:"name=password"`
	RecordingAuthentication *bool                                                       `json:"recording_authentication,omitempty" multipartForm:"name=recording_authentication"`
	SendEmailToHost         *bool                                                       `json:"send_email_to_host,omitempty" multipartForm:"name=send_email_to_host"`
	ShareRecording          *RecordingSettingsUpdateRecordingSettingsShareRecordingEnum `json:"share_recording,omitempty" multipartForm:"name=share_recording"`
	ShowSocialShareButtons  *bool                                                       `json:"show_social_share_buttons,omitempty" multipartForm:"name=show_social_share_buttons"`
	Topic                   *string                                                     `json:"topic,omitempty" multipartForm:"name=topic"`
	ViewerDownload          *bool                                                       `json:"viewer_download,omitempty" multipartForm:"name=viewer_download"`
}

type RecordingSettingsUpdateRequests struct {
	RecordingSettings  *RecordingSettingsUpdateRecordingSettings `request:"mediaType=application/json"`
	RecordingSettings1 *RecordingSettingsUpdateRecordingSettings `request:"mediaType=multipart/form-data"`
}

type RecordingSettingsUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingSettingsUpdateRequest struct {
	PathParams RecordingSettingsUpdatePathParams
	Request    RecordingSettingsUpdateRequests
	Security   RecordingSettingsUpdateSecurity
}

type RecordingSettingsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
