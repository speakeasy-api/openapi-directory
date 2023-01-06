package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobStatusAndResponsePathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetJobStatusAndResponseHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetJobStatusAndResponse200ApplicationJSONStatusEnum string

const (
	GETJobStatusAndResponse200ApplicationJSONStatusEnumProcessing GetJobStatusAndResponse200ApplicationJSONStatusEnum = "Processing"
	GETJobStatusAndResponse200ApplicationJSONStatusEnumFailed     GetJobStatusAndResponse200ApplicationJSONStatusEnum = "Failed"
	GETJobStatusAndResponse200ApplicationJSONStatusEnumCompleted  GetJobStatusAndResponse200ApplicationJSONStatusEnum = "Completed"
)

type GetJobStatusAndResponse200ApplicationJSON struct {
	Errors  *string                                              `json:"errors,omitempty"`
	Result  *shared.JobResult                                    `json:"result,omitempty"`
	Status  *GetJobStatusAndResponse200ApplicationJSONStatusEnum `json:"status,omitempty"`
	Success *bool                                                `json:"success,omitempty"`
}

type GetJobStatusAndResponseRequest struct {
	PathParams GetJobStatusAndResponsePathParams
	Headers    GetJobStatusAndResponseHeaders
}

type GetJobStatusAndResponseResponse struct {
	ContentType                                     string
	GETJobStatusAndResponse200ApplicationJSONObject *GetJobStatusAndResponse200ApplicationJSON
	Headers                                         map[string][]string
	StatusCode                                      int64
}
