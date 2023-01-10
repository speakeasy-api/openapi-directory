package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportTelephoneTypeEnum string

const (
	ReportTelephoneTypeEnumOne   ReportTelephoneTypeEnum = "1"
	ReportTelephoneTypeEnumThree ReportTelephoneTypeEnum = "3"
)

type ReportTelephoneQueryParams struct {
	From          time.Time                `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                  `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64                   `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64                   `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time                `queryParam:"style=form,explode=true,name=to"`
	Type          *ReportTelephoneTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ReportTelephoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum string

const (
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumTollFree         ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "toll-free"
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumCallOut          ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "call-out"
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumCallIn           ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "call-in"
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumUsTollNumber     ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "US toll-number"
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumGlobalTollNumber ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "global toll-number"
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumPremium          ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "premium"
	ReportTelephone200ApplicationJSONTelephonyUsageTypeEnumPremiumCallIn    ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum = "premium call-in"
)

type ReportTelephone200ApplicationJSONTelephonyUsage struct {
	CallInNumber   *string                                                  `json:"call_in_number,omitempty"`
	CountryName    *string                                                  `json:"country_name,omitempty"`
	Dept           *string                                                  `json:"dept,omitempty"`
	Duration       *int64                                                   `json:"duration,omitempty"`
	EndTime        *time.Time                                               `json:"end_time,omitempty"`
	HostEmail      *string                                                  `json:"host_email,omitempty"`
	HostID         *string                                                  `json:"host_id,omitempty"`
	HostName       *string                                                  `json:"host_name,omitempty"`
	MeetingID      *int64                                                   `json:"meeting_id,omitempty"`
	MeetingType    *string                                                  `json:"meeting_type,omitempty"`
	PhoneNumber    *string                                                  `json:"phone_number,omitempty"`
	Rate           *float64                                                 `json:"rate,omitempty"`
	SignaledNumber *string                                                  `json:"signaled_number,omitempty"`
	StartTime      *time.Time                                               `json:"start_time,omitempty"`
	Total          *float64                                                 `json:"total,omitempty"`
	Type           *ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum `json:"type,omitempty"`
	UUID           *string                                                  `json:"uuid,omitempty"`
}

type ReportTelephone200ApplicationJSON struct {
	From           *time.Time                                        `json:"from,omitempty"`
	NextPageToken  *int64                                            `json:"next_page_token,omitempty"`
	PageCount      *int64                                            `json:"page_count,omitempty"`
	PageSize       *int64                                            `json:"page_size,omitempty"`
	TelephonyUsage []ReportTelephone200ApplicationJSONTelephonyUsage `json:"telephony_usage,omitempty"`
	To             *time.Time                                        `json:"to,omitempty"`
	TotalRecords   *int64                                            `json:"total_records,omitempty"`
}

type ReportTelephoneRequest struct {
	QueryParams ReportTelephoneQueryParams
	Security    ReportTelephoneSecurity
}

type ReportTelephoneResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	ReportTelephone200ApplicationJSONObject *ReportTelephone200ApplicationJSON
}
