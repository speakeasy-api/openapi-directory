package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type PaymentRuns struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPaymentRuns(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PaymentRuns {
	return &PaymentRuns{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeletePaymentRun - Delete a payment run
// Deletes a payment run. Only payment runs with the Canceled or Error status can be deleted.
func (s *PaymentRuns) DeletePaymentRun(ctx context.Context, request operations.DeletePaymentRunRequest) (*operations.DeletePaymentRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-runs/{paymentRunId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeletePaymentRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommonResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonResponseType = out
		}
	}

	return res, nil
}

// GetPaymentRun - Retrieve a payment run
// Retrives the information about a specific payment run.
func (s *PaymentRuns) GetPaymentRun(ctx context.Context, request operations.GetPaymentRunRequest) (*operations.GetPaymentRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-runs/{paymentRunId}", request.PathParams)

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

	res := &operations.GetPaymentRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetPaymentRunType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentRunType = out
		}
	}

	return res, nil
}

// GetPaymentRunData - Retrieve payment run data
// Retrieves payment run data and the processing result with details, if the `data` field was specified in the Create payment run operation.
func (s *PaymentRuns) GetPaymentRunData(ctx context.Context, request operations.GetPaymentRunDataRequest) (*operations.GetPaymentRunDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-runs/{paymentRunId}/data", request.PathParams)

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

	res := &operations.GetPaymentRunDataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetPaymentRunDataArrayResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentRunDataArrayResponse = out
		}
	}

	return res, nil
}

// GetPaymentRunSummary - Retrieve a payment run summary
// Retrives the summary of a payment run.
func (s *PaymentRuns) GetPaymentRunSummary(ctx context.Context, request operations.GetPaymentRunSummaryRequest) (*operations.GetPaymentRunSummaryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-runs/{paymentRunId}/summary", request.PathParams)

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

	res := &operations.GetPaymentRunSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetPaymentRunSummaryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentRunSummaryResponse = out
		}
	}

	return res, nil
}

// GetPaymentRuns - List payment runs
// Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.
//
// ### Filtering
//
// You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
//
// If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
//
// Examples:
//
// - /v1/payment-runs?status=Processed
//
// - /v1/payment-runs?targetDate=2017-10-10&status=Pending
//
// - /v1/payment-runs?status=Completed&sort=+updatedDate
func (s *PaymentRuns) GetPaymentRuns(ctx context.Context, request operations.GetPaymentRunsRequest) (*operations.GetPaymentRunsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/payment-runs"

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

	res := &operations.GetPaymentRunsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetPaymentRunCollectionType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentRunCollectionType = out
		}
	}

	return res, nil
}

// PostPaymentRun - Create a payment run
// Creates a payment run. You can create a payment run to be executed immediately after it is created, or a scheduled payment run to be executed in future.
//
// To filter the payments to be collected for a payment run, you can use either of the following methods but not both:
//
//   - Use the `accountId`, `batch`, `billCycleDay`, `currency`, `paymentGatewayId`, and `billingRunId` fields to define the billing documents to be collected.
//   - Use the `data` field to specify the records of accounts and billing documents to be collected, in a more flexible manner.
//
// If no filter criteria are specified in the request body, the payment run collects payments for all accounts.
func (s *PaymentRuns) PostPaymentRun(ctx context.Context, request operations.PostPaymentRunRequest) (*operations.PostPaymentRunResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/payment-runs"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.PostPaymentRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetPaymentRunType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentRunType = out
		}
	}

	return res, nil
}

// PutPaymentRun - Update a payment run
// Updates the information about an unexecuted payment run. Only pending payment runs can be updated.
//
// If none of the **accountId**, **batch**, **billCycleDay**, **currency**, **paymentGatewayId**, and **billingRunId** fields is specified in the request body, the corresponding payment run collects payments for all accounts.
func (s *PaymentRuns) PutPaymentRun(ctx context.Context, request operations.PutPaymentRunRequest) (*operations.PutPaymentRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-runs/{paymentRunId}", request.PathParams)

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

	res := &operations.PutPaymentRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetPaymentRunType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentRunType = out
		}
	}

	return res, nil
}
