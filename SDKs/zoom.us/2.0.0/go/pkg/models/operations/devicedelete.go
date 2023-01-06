package operations

type DeviceDeletePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type DeviceDeleteRequest struct {
	PathParams DeviceDeletePathParams
}

type DeviceDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
