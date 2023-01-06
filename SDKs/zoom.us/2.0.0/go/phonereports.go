package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type PhoneReports struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPhoneReports(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PhoneReports {
	return &PhoneReports{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetPsOperationLogs - Get operation logs report
// The **Phone System operation logs report** allows account owners and admins to view monthly Zoom phone related admin operation details.
//
// Use this API to retrieve the **Phone System Operation Logs Report**. Account owners and admins can also access this information by logging into their Zoom accounts and navigating to [Phone System Operation Logs](https://zoom.us/pbx/page/report/operations#/report/operation-logs).<br><br> **Scopes:** `phone:read:admin`, `phone:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
// <br> **Prerequisites:** <br>
// * Account must be enrollled in Pro or a higher plan
// * Account must be enrolled in a [Zoom Phone](https://zoom.us/pricing/zoom-phone) plan
func (s *PhoneReports) GetPsOperationLogs(ctx context.Context, request operations.GetPsOperationLogsRequest) (*operations.GetPsOperationLogsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/reports/operationlogs"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPsOperationLogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetPsOperationLogs200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetPSOperationLogs200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
