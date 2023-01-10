package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardMeetingParticipantsQosPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type DashboardMeetingParticipantsQosTypeEnum string

const (
	DashboardMeetingParticipantsQOSTypeEnumPast    DashboardMeetingParticipantsQosTypeEnum = "past"
	DashboardMeetingParticipantsQOSTypeEnumPastOne DashboardMeetingParticipantsQosTypeEnum = "pastOne"
	DashboardMeetingParticipantsQOSTypeEnumLive    DashboardMeetingParticipantsQosTypeEnum = "live"
)

type DashboardMeetingParticipantsQosQueryParams struct {
	NextPageToken *string                                  `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                   `queryParam:"style=form,explode=true,name=page_size"`
	Type          *DashboardMeetingParticipantsQosTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingParticipantsQosSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc
// QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc
// QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject
// Quality of Service object.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject struct {
	AvgLoss    *string `json:"avg_loss,omitempty"`
	Bitrate    *string `json:"bitrate,omitempty"`
	FrameRate  *string `json:"frame_rate,omitempty"`
	Jitter     *string `json:"jitter,omitempty"`
	Latency    *string `json:"latency,omitempty"`
	MaxLoss    *string `json:"max_loss,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
// QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc
// QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
// Quality of Service object.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCPUUsage struct {
	SystemMaxCPUUsage *string `json:"system_max_cpu_usage,omitempty"`
	ZoomAvgCPUUsage   *string `json:"zoom_avg_cpu_usage,omitempty"`
	ZoomMaxCPUUsage   *string `json:"zoom_max_cpu_usage,omitempty"`
	ZoomMinCPUUsage   *string `json:"zoom_min_cpu_usage,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
// QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc
// QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos struct {
	AsDeviceFromCrc    *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc    `json:"as_device_from_crc,omitempty"`
	AsDeviceToCrc      *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc      `json:"as_device_to_crc,omitempty"`
	AsInput            *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"as_input,omitempty"`
	AsOutput           *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"as_output,omitempty"`
	AudioDeviceFromCrc *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc `json:"audio_device_from_crc,omitempty"`
	AudioDeviceToCrc   *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc   `json:"audio_device_to_crc,omitempty"`
	AudioInput         *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1         `json:"audio_input,omitempty"`
	AudioOutput        *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1         `json:"audio_output,omitempty"`
	CPUUsage           *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCPUUsage           `json:"cpu_usage,omitempty"`
	DateTime           *time.Time                                                                                `json:"date_time,omitempty"`
	VideoDeviceFromCrc *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc `json:"video_device_from_crc,omitempty"`
	VideoDeviceToCrc   *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc   `json:"video_device_to_crc,omitempty"`
	VideoInput         *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"video_input,omitempty"`
	VideoOutput        *DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"video_output,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosListParticipantQos
// Participant QOS.
type DashboardMeetingParticipantsQosParticipantQosListParticipantQos struct {
	Device     *string                                                                  `json:"device,omitempty"`
	Domain     *string                                                                  `json:"domain,omitempty"`
	HarddiskID *string                                                                  `json:"harddisk_id,omitempty"`
	IPAddress  *string                                                                  `json:"ip_address,omitempty"`
	JoinTime   *time.Time                                                               `json:"join_time,omitempty"`
	LeaveTime  *time.Time                                                               `json:"leave_time,omitempty"`
	Location   *string                                                                  `json:"location,omitempty"`
	MacAddr    *string                                                                  `json:"mac_addr,omitempty"`
	PcName     *string                                                                  `json:"pc_name,omitempty"`
	UserID     *string                                                                  `json:"user_id,omitempty"`
	UserName   *string                                                                  `json:"user_name,omitempty"`
	UserQos    []DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos `json:"user_qos,omitempty"`
	Version    *string                                                                  `json:"version,omitempty"`
}

// DashboardMeetingParticipantsQosParticipantQosList
// Pagination object.
type DashboardMeetingParticipantsQosParticipantQosList struct {
	NextPageToken *string                                                           `json:"next_page_token,omitempty"`
	PageCount     *int64                                                            `json:"page_count,omitempty"`
	PageSize      *int64                                                            `json:"page_size,omitempty"`
	Participants  []DashboardMeetingParticipantsQosParticipantQosListParticipantQos `json:"participants,omitempty"`
	TotalRecords  *int64                                                            `json:"total_records,omitempty"`
}

type DashboardMeetingParticipantsQosRequest struct {
	PathParams  DashboardMeetingParticipantsQosPathParams
	QueryParams DashboardMeetingParticipantsQosQueryParams
	Security    DashboardMeetingParticipantsQosSecurity
}

type DashboardMeetingParticipantsQosResponse struct {
	Body               []byte
	ContentType        string
	ParticipantQOSList *DashboardMeetingParticipantsQosParticipantQosList
	StatusCode         int64
}
