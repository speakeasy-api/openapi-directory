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

type BillingPreviewRun struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBillingPreviewRun(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BillingPreviewRun {
	return &BillingPreviewRun{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetBillingPreviewRun - Retrieve a billing preview run
// Retrieves a preview of future invoice items for multiple customer accounts through a billing preview run. If you have the Invoice Settlement feature enabled,  you can also retrieve a preview of future credit memo items. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
//
// A billing preview run asynchronously generates a downloadable CSV file containing a preview of invoice item data and credit memo item data for a batch of customer accounts.
func (s *BillingPreviewRun) GetBillingPreviewRun(ctx context.Context, request operations.GetBillingPreviewRunRequest) (*operations.GetBillingPreviewRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/billing-preview-runs/{billingPreviewRunId}", request.PathParams)

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

	res := &operations.GetBillingPreviewRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetBillingPreviewRunResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBillingPreviewRunResponse = out
		}
	}

	return res, nil
}

// PostBillingPreviewRun - Create a billing preview run
// Creates a billing preview run for multiple customer accounts.
//
// You can run up to 20 billing preview runs in batches concurrently. A single batch of customer accounts can only have one billing preview run at a time. So you can have up to 20 batches running at the same time. If you create a billing preview run for all customer batches, you cannot create another billing preview run until this preview run is completed.
func (s *BillingPreviewRun) PostBillingPreviewRun(ctx context.Context, request operations.PostBillingPreviewRunRequest) (*operations.PostBillingPreviewRunResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/billing-preview-runs"

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

	res := &operations.PostBillingPreviewRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *operations.PostBillingPreviewRun200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTBillingPreviewRun200ApplicationJSONObject = out
		}
	}

	return res, nil
}
