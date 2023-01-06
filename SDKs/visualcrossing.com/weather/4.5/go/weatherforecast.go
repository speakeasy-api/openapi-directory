package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type WeatherForecast struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewWeatherForecast(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *WeatherForecast {
	return &WeatherForecast{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
// Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
func (s *WeatherForecast) GetVisualCrossingWebServicesRestServicesWeatherdataForecast(ctx context.Context, request operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest) (*operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse, error) {
	baseURL := operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast"

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

	res := &operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
