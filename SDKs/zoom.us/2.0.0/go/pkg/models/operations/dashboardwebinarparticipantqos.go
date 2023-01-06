package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardWebinarParticipantQosPathParams struct {
	ParticipantID string `pathParam:"style=simple,explode=false,name=participantId"`
	WebinarID     string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type DashboardWebinarParticipantQosTypeEnum string

const (
	DashboardWebinarParticipantQOSTypeEnumPast DashboardWebinarParticipantQosTypeEnum = "past"
	DashboardWebinarParticipantQOSTypeEnumLive DashboardWebinarParticipantQosTypeEnum = "live"
)

type DashboardWebinarParticipantQosQueryParams struct {
	Type *DashboardWebinarParticipantQosTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarParticipantQosSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc
// QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc
// QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosQosObject
// Quality of Service object.
type DashboardWebinarParticipantQosParticipantQosUserQosQosObject struct {
	FrameRate  *string `json:"frame_rate,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc
// QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc
// QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosQosObject1
// Quality of Service object.
type DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardWebinarParticipantQosParticipantQosUserQosCPUUsage struct {
	SystemMaxCPUUsage *string `json:"system_max_cpu_usage,omitempty"`
	ZoomAvgCPUUsage   *string `json:"zoom_avg_cpu_usage,omitempty"`
	ZoomMaxCPUUsage   *string `json:"zoom_max_cpu_usage,omitempty"`
	ZoomMinCPUUsage   *string `json:"zoom_min_cpu_usage,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc
// QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
type DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc
// QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardWebinarParticipantQosParticipantQosUserQos struct {
	AsDeviceFromCrc    *DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc    `json:"as_device_from_crc,omitempty"`
	AsDeviceToCrc      *DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc      `json:"as_device_to_crc,omitempty"`
	AsInput            *DashboardWebinarParticipantQosParticipantQosUserQosQosObject          `json:"as_input,omitempty"`
	AsOutput           *DashboardWebinarParticipantQosParticipantQosUserQosQosObject          `json:"as_output,omitempty"`
	AudioDeviceFromCrc *DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc `json:"audio_device_from_crc,omitempty"`
	AudioDeviceToCrc   *DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc   `json:"audio_device_to_crc,omitempty"`
	AudioInput         *DashboardWebinarParticipantQosParticipantQosUserQosQosObject1         `json:"audio_input,omitempty"`
	AudioOutput        *DashboardWebinarParticipantQosParticipantQosUserQosQosObject1         `json:"audio_output,omitempty"`
	CPUUsage           *DashboardWebinarParticipantQosParticipantQosUserQosCPUUsage           `json:"cpu_usage,omitempty"`
	DateTime           *time.Time                                                             `json:"date_time,omitempty"`
	VideoDeviceFromCrc *DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc `json:"video_device_from_crc,omitempty"`
	VideoDeviceToCrc   *DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc   `json:"video_device_to_crc,omitempty"`
	VideoInput         *DashboardWebinarParticipantQosParticipantQosUserQosQosObject          `json:"video_input,omitempty"`
	VideoOutput        *DashboardWebinarParticipantQosParticipantQosUserQosQosObject          `json:"video_output,omitempty"`
}

// DashboardWebinarParticipantQosParticipantQos
// Participant QOS.
type DashboardWebinarParticipantQosParticipantQos struct {
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
	UserQos    []DashboardWebinarParticipantQosParticipantQosUserQos `json:"user_qos,omitempty"`
	Version    *string                                               `json:"version,omitempty"`
}

type DashboardWebinarParticipantQosRequest struct {
	PathParams  DashboardWebinarParticipantQosPathParams
	QueryParams DashboardWebinarParticipantQosQueryParams
	Security    DashboardWebinarParticipantQosSecurity
}

type DashboardWebinarParticipantQosResponse struct {
	Body           []byte
	ContentType    string
	ParticipantQOS *DashboardWebinarParticipantQosParticipantQos
	StatusCode     int64
}
