package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingSettingUpdatePathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingSettingUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingSettingUpdateRecordingSettingsShareRecordingEnum string

const (
	RecordingSettingUpdateRecordingSettingsShareRecordingEnumPublicly   RecordingSettingUpdateRecordingSettingsShareRecordingEnum = "publicly"
	RecordingSettingUpdateRecordingSettingsShareRecordingEnumInternally RecordingSettingUpdateRecordingSettingsShareRecordingEnum = "internally"
	RecordingSettingUpdateRecordingSettingsShareRecordingEnumNone       RecordingSettingUpdateRecordingSettingsShareRecordingEnum = "none"
)

type RecordingSettingUpdateRecordingSettings struct {
	ApprovalType            *int64                                                     `json:"approval_type,omitempty"`
	AuthenticationDomains   *string                                                    `json:"authentication_domains,omitempty"`
	AuthenticationOption    *string                                                    `json:"authentication_option,omitempty"`
	OnDemand                *bool                                                      `json:"on_demand,omitempty"`
	Password                *string                                                    `json:"password,omitempty"`
	RecordingAuthentication *bool                                                      `json:"recording_authentication,omitempty"`
	SendEmailToHost         *bool                                                      `json:"send_email_to_host,omitempty"`
	ShareRecording          *RecordingSettingUpdateRecordingSettingsShareRecordingEnum `json:"share_recording,omitempty"`
	ShowSocialShareButtons  *bool                                                      `json:"show_social_share_buttons,omitempty"`
	Topic                   *string                                                    `json:"topic,omitempty"`
	ViewerDownload          *bool                                                      `json:"viewer_download,omitempty"`
}

type RecordingSettingUpdateRequest struct {
	PathParams RecordingSettingUpdatePathParams
	Security   RecordingSettingUpdateSecurity
}

type RecordingSettingUpdateResponse struct {
	Body              []byte
	ContentType       string
	RecordingSettings *RecordingSettingUpdateRecordingSettings
	StatusCode        int64
}
