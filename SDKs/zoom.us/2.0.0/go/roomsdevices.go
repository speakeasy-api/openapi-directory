package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type RoomsDevices struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRoomsDevices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *RoomsDevices {
	return &RoomsDevices{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ChangeZoomRoomsAppVersion - Change Zoom Rooms' app version
// [Upgrade](https://support.zoom.us/hc/en-us/articles/204675449-Upgrade-or-Downgrade-Zoom-Rooms-Software#h_1751c48a-644e-4a60-b96a-31ec77c616e6) or [downgrade](https://support.zoom.us/hc/en-us/articles/204675449-Upgrade-or-Downgrade-Zoom-Rooms-Software#h_d97349d6-9253-484c-af80-350475026524) the version of Zoom Rooms App installed in your Mac or Windows device.
//
// **Prerequisites:**<br>
// * Pro or a higher account with Zoom Rooms.
// * Zoom Rooms software must be installed either on a Mac or a Windows device. This API does not support other devices.
func (s *RoomsDevices) ChangeZoomRoomsAppVersion(ctx context.Context, request operations.ChangeZoomRoomsAppVersionRequest) (*operations.ChangeZoomRoomsAppVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/rooms/{roomId}/devices/{deviceId}/app_version", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ChangeZoomRoomsAppVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ChangeZoomRoomsAppVersion204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
