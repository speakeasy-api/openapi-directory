package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlanUsagePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetPlanUsageSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetPlanUsage200ApplicationJSONPlanBase struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
	Usage *int64  `json:"usage,omitempty"`
}

type GetPlanUsage200ApplicationJSONPlanLargeMeeting struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
	Usage *int64  `json:"usage,omitempty"`
}

// GetPlanUsage200ApplicationJSONPlanRecording
// Recording Plan
type GetPlanUsage200ApplicationJSONPlanRecording struct {
	FreeStorage       *string `json:"free_storage,omitempty"`
	FreeStorageUsage  *string `json:"free_storage_usage,omitempty"`
	PlanStorage       *string `json:"plan_storage,omitempty"`
	PlanStorageExceed *string `json:"plan_storage_exceed,omitempty"`
	PlanStorageUsage  *string `json:"plan_storage_usage,omitempty"`
	Type              *string `json:"type,omitempty"`
}

// GetPlanUsage200ApplicationJSONPlanUnited
// [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
type GetPlanUsage200ApplicationJSONPlanUnited struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Name  *string `json:"name,omitempty"`
	Type  *string `json:"type,omitempty"`
	Usage *int64  `json:"usage,omitempty"`
}

type GetPlanUsage200ApplicationJSONPlanWebinar struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
	Usage *int64  `json:"usage,omitempty"`
}

type GetPlanUsage200ApplicationJSONPlanZoomRooms struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
	Usage *int64  `json:"usage,omitempty"`
}

type GetPlanUsage200ApplicationJSON struct {
	PlanBase         []GetPlanUsage200ApplicationJSONPlanBase         `json:"plan_base,omitempty"`
	PlanLargeMeeting []GetPlanUsage200ApplicationJSONPlanLargeMeeting `json:"plan_large_meeting,omitempty"`
	PlanRecording    *GetPlanUsage200ApplicationJSONPlanRecording     `json:"plan_recording,omitempty"`
	PlanUnited       *GetPlanUsage200ApplicationJSONPlanUnited        `json:"plan_united,omitempty"`
	PlanWebinar      []GetPlanUsage200ApplicationJSONPlanWebinar      `json:"plan_webinar,omitempty"`
	PlanZoomRooms    []GetPlanUsage200ApplicationJSONPlanZoomRooms    `json:"plan_zoom_rooms,omitempty"`
}

type GetPlanUsageRequest struct {
	PathParams GetPlanUsagePathParams
	Security   GetPlanUsageSecurity
}

type GetPlanUsageResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	GetPlanUsage200ApplicationJSONObject *GetPlanUsage200ApplicationJSON
}
