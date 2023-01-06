package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ChargeRevenueSummaries struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewChargeRevenueSummaries(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ChargeRevenueSummaries {
	return &ChargeRevenueSummaries{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCrsByCrsNumber - List all details of a charge revenue summary
// Retrieves the details of a charge revenue summary by specifying the charge revenue summary number. The response includes all revenue items associated with the charge revenue summary.
func (s *ChargeRevenueSummaries) GetCrsByCrsNumber(ctx context.Context, request operations.GetCrsByCrsNumberRequest) (*operations.GetCrsByCrsNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/charge-revenue-summaries/{crs-number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCrsByCrsNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetChargeRsDetailType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETChargeRSDetailType = out
		}
	}

	return res, nil
}

// GetCrsByChargeID - Retrieve a charge revenue summary by charge ID
// Retrieves the details of a charge revenue summary by specifying the subscription charge ID. This response retrieves all revenue items associated with a charge revenue summary.
func (s *ChargeRevenueSummaries) GetCrsByChargeID(ctx context.Context, request operations.GetCrsByChargeIDRequest) (*operations.GetCrsByChargeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/charge-revenue-summaries/subscription-charges/{charge-key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCrsByChargeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetChargeRsDetailType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETChargeRSDetailType = out
		}
	}

	return res, nil
}
