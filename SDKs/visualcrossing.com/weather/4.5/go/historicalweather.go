package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type HistoricalWeather struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewHistoricalWeather(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *HistoricalWeather {
	return &HistoricalWeather{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetVisualCrossingWebServicesRestServicesWeatherdataHistory - Retrieves hourly or daily historical weather records.
// The weather history data is suitable for retrieving hourly or daily historical weather records.
func (s *HistoricalWeather) GetVisualCrossingWebServicesRestServicesWeatherdataHistory(ctx context.Context, request operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest) (*operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse, error) {
	baseURL := operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/VisualCrossingWebServices/rest/services/weatherdata/history"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
