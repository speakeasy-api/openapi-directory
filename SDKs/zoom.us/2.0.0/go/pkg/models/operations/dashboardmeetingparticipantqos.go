package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardMeetingParticipantQosPathParams struct {
	MeetingID     string `pathParam:"style=simple,explode=false,name=meetingId"`
	ParticipantID string `pathParam:"style=simple,explode=false,name=participantId"`
}

type DashboardMeetingParticipantQosTypeEnum string

const (
	DashboardMeetingParticipantQOSTypeEnumPast    DashboardMeetingParticipantQosTypeEnum = "past"
	DashboardMeetingParticipantQOSTypeEnumPastOne DashboardMeetingParticipantQosTypeEnum = "pastOne"
	DashboardMeetingParticipantQOSTypeEnumLive    DashboardMeetingParticipantQosTypeEnum = "live"
)

type DashboardMeetingParticipantQosQueryParams struct {
	Type *DashboardMeetingParticipantQosTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingParticipantQosSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc
// QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc
// QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosQosObject
// Quality of Service object.
type DashboardMeetingParticipantQosParticipantQosUserQosQosObject struct {
	AvgLoss    *string `json:"avg_loss,omitempty"`
	Bitrate    *string `json:"bitrate,omitempty"`
	FrameRate  *string `json:"frame_rate,omitempty"`
	Jitter     *string `json:"jitter,omitempty"`
	Latency    *string `json:"latency,omitempty"`
	MaxLoss    *string `json:"max_loss,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc
// QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc
// QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosQosObject1
// Quality of Service object.
type DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardMeetingParticipantQosParticipantQosUserQosCPUUsage struct {
	SystemMaxCPUUsage *string `json:"system_max_cpu_usage,omitempty"`
	ZoomAvgCPUUsage   *string `json:"zoom_avg_cpu_usage,omitempty"`
	ZoomMaxCPUUsage   *string `json:"zoom_max_cpu_usage,omitempty"`
	ZoomMinCPUUsage   *string `json:"zoom_min_cpu_usage,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc
// QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
type DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc
// QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardMeetingParticipantQosParticipantQosUserQos struct {
	AsDeviceFromCrc    *DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc    `json:"as_device_from_crc,omitempty"`
	AsDeviceToCrc      *DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc      `json:"as_device_to_crc,omitempty"`
	AsInput            *DashboardMeetingParticipantQosParticipantQosUserQosQosObject          `json:"as_input,omitempty"`
	AsOutput           *DashboardMeetingParticipantQosParticipantQosUserQosQosObject          `json:"as_output,omitempty"`
	AudioDeviceFromCrc *DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc `json:"audio_device_from_crc,omitempty"`
	AudioDeviceToCrc   *DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc   `json:"audio_device_to_crc,omitempty"`
	AudioInput         *DashboardMeetingParticipantQosParticipantQosUserQosQosObject1         `json:"audio_input,omitempty"`
	AudioOutput        *DashboardMeetingParticipantQosParticipantQosUserQosQosObject1         `json:"audio_output,omitempty"`
	CPUUsage           *DashboardMeetingParticipantQosParticipantQosUserQosCPUUsage           `json:"cpu_usage,omitempty"`
	DateTime           *time.Time                                                             `json:"date_time,omitempty"`
	VideoDeviceFromCrc *DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc `json:"video_device_from_crc,omitempty"`
	VideoDeviceToCrc   *DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc   `json:"video_device_to_crc,omitempty"`
	VideoInput         *DashboardMeetingParticipantQosParticipantQosUserQosQosObject          `json:"video_input,omitempty"`
	VideoOutput        *DashboardMeetingParticipantQosParticipantQosUserQosQosObject          `json:"video_output,omitempty"`
}

// DashboardMeetingParticipantQosParticipantQos
// Participant QOS.
type DashboardMeetingParticipantQosParticipantQos struct {
	Device     *string                                               `json:"device,omitempty"`
	Domain     *string                                               `json:"domain,omitempty"`
	HarddiskID *string                                               `json:"harddisk_id,omitempty"`
	IPAddress  *string                                               `json:"ip_address,omitempty"`
	JoinTime   *time.Time                                            `json:"join_time,omitempty"`
	LeaveTime  *time.Time                                            `json:"leave_time,omitempty"`
	Location   *string                                               `json:"location,omitempty"`
	MacAddr    *string                                               `json:"mac_addr,omitempty"`
	PcName     *string                                               `json:"pc_name,omitempty"`
	UserID     *string                                               `json:"user_id,omitempty"`
	UserName   *string                                               `json:"user_name,omitempty"`
	UserQos    []DashboardMeetingParticipantQosParticipantQosUserQos `json:"user_qos,omitempty"`
	Version    *string                                               `json:"version,omitempty"`
}

type DashboardMeetingParticipantQosRequest struct {
	PathParams  DashboardMeetingParticipantQosPathParams
	QueryParams DashboardMeetingParticipantQosQueryParams
	Security    DashboardMeetingParticipantQosSecurity
}

type DashboardMeetingParticipantQosResponse struct {
	Body           []byte
	ContentType    string
	ParticipantQOS *DashboardMeetingParticipantQosParticipantQos
	StatusCode     int64
}
