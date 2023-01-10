package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardCrcQueryParams struct {
	From time.Time `queryParam:"style=form,explode=true,name=from"`
	To   time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardCrcSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardCrc200ApplicationJSONCrcPortsUsageCrcPortsHourUsage struct {
	Hour       *string `json:"hour,omitempty"`
	MaxUsage   *int64  `json:"max_usage,omitempty"`
	TotalUsage *int64  `json:"total_usage,omitempty"`
}

type DashboardCrc200ApplicationJSONCrcPortsUsage struct {
	CrcPortsHourUsage []DashboardCrc200ApplicationJSONCrcPortsUsageCrcPortsHourUsage `json:"crc_ports_hour_usage,omitempty"`
	DateTime          *time.Time                                                     `json:"date_time,omitempty"`
}

type DashboardCrc200ApplicationJSON struct {
	CrcPortsUsage []DashboardCrc200ApplicationJSONCrcPortsUsage `json:"crc_ports_usage,omitempty"`
	From          *time.Time                                    `json:"from,omitempty"`
	To            *time.Time                                    `json:"to,omitempty"`
}

type DashboardCrcRequest struct {
	QueryParams DashboardCrcQueryParams
	Security    DashboardCrcSecurity
}

type DashboardCrcResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	DashboardCRC200ApplicationJSONObject *DashboardCrc200ApplicationJSON
}
