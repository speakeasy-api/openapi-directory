package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type RevenueItems struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRevenueItems(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *RevenueItems {
	return &RevenueItems{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRevenueItemsByChargeRevenueEventNumber - List revenue items by revenue event number
// This REST API reference describes how to get the details of each revenue item in a revenue event by specifying the revenue event number. Request and response field descriptions and sample code are provided.
func (s *RevenueItems) GetRevenueItemsByChargeRevenueEventNumber(ctx context.Context, request operations.GetRevenueItemsByChargeRevenueEventNumberRequest) (*operations.GetRevenueItemsByChargeRevenueEventNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/revenue-items/revenue-events/{event-number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRevenueItemsByChargeRevenueEventNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRevenueItemsType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRevenueItemsType = out
		}
	}

	return res, nil
}

// GetRevenueItemsByChargeRevenueSummaryNumber - List revenue items by charge revenue summary number
// This REST API reference describes how to get the details for each revenue item in a charge revenue summary by specifying the charge revenue summary number. Request and response field descriptions and sample code are provided.
func (s *RevenueItems) GetRevenueItemsByChargeRevenueSummaryNumber(ctx context.Context, request operations.GetRevenueItemsByChargeRevenueSummaryNumberRequest) (*operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/revenue-items/charge-revenue-summaries/{crs-number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRevenueItemsType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRevenueItemsType = out
		}
	}

	return res, nil
}

// GetRevenueItemsByRevenueSchedule - List all revenue items of a revenue schedule
// This REST API reference describes how to get the details for each revenue items in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
func (s *RevenueItems) GetRevenueItemsByRevenueSchedule(ctx context.Context, request operations.GetRevenueItemsByRevenueScheduleRequest) (*operations.GetRevenueItemsByRevenueScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/revenue-items/revenue-schedules/{rs-number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRevenueItemsByRevenueScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRsRevenueItemsType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRsRevenueItemsType = out
		}
	}

	return res, nil
}

// PutCustomFieldsonRevenueItemsByRevenueEvent - Update custom fields on revenue items by revenue event number
// This REST API reference describes how to update custom fields on revenue items by specifying the revenue event number. Request and response field descriptions and sample code are provided.
func (s *RevenueItems) PutCustomFieldsonRevenueItemsByRevenueEvent(ctx context.Context, request operations.PutCustomFieldsonRevenueItemsByRevenueEventRequest) (*operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/revenue-items/revenue-events/{event-number}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonResponseType = out
		}
	}

	return res, nil
}

// PutCustomFieldsonRevenueItemsByRevenueSchedule - Update custom fields on revenue items by revenue schedule number
// This REST API reference describes how to update custom fields on revenue Items by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
func (s *RevenueItems) PutCustomFieldsonRevenueItemsByRevenueSchedule(ctx context.Context, request operations.PutCustomFieldsonRevenueItemsByRevenueScheduleRequest) (*operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/revenue-items/revenue-schedules/{rs-number}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonResponseType = out
		}
	}

	return res, nil
}
