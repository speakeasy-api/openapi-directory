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

type BillingDocuments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBillingDocuments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BillingDocuments {
	return &BillingDocuments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetBillingDocumentFilesDeletionJob - Retrieve a job of hard deleting billing document files
// Retrieves information about an asynchronous job of permanently deleting all billing document PDF files for specific accounts.
//
// **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled.
func (s *BillingDocuments) GetBillingDocumentFilesDeletionJob(ctx context.Context, request operations.GetBillingDocumentFilesDeletionJobRequest) (*operations.GetBillingDocumentFilesDeletionJobResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounts/billing-documents/files/deletion-jobs/{jobId}", request.PathParams)

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

	res := &operations.GetBillingDocumentFilesDeletionJobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetBillingDocumentFilesDeletionJobResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETBillingDocumentFilesDeletionJobResponse = out
		}
	}

	return res, nil
}

// GetBillingDocuments - List billing documents for an account
// Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos.
//
// To retrieve information about credit memos and debit memos, you must have the Invoice Settlement feature enabled.
//
// You can use query parameters to restrict the data returned in the response.
//
// Examples:
// - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&sort=+documentDate
// - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&status=Posted
func (s *BillingDocuments) GetBillingDocuments(ctx context.Context, request operations.GetBillingDocumentsRequest) (*operations.GetBillingDocumentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/billing-documents"

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

	res := &operations.GetBillingDocumentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.BillingDocumentQueryResponseElementType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BillingDocumentQueryResponseElementType = out
		}
	}

	return res, nil
}

// PostBillingDocumentFilesDeletionJob - Create a job to hard delete billing document files
// Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts.
//
// After the deletion job is completed, all billing document PDF files are permanently deleted. To retrieve the status of a deletion job, call [Retrieve a job of hard deleting billing document files](https://www.zuora.com/developer/api-reference/#operation/GET_BillingDocumentFilesDeletionJob).
//
// **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled.
func (s *BillingDocuments) PostBillingDocumentFilesDeletionJob(ctx context.Context, request operations.PostBillingDocumentFilesDeletionJobRequest) (*operations.PostBillingDocumentFilesDeletionJobResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/accounts/billing-documents/files/deletion-jobs"

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

	res := &operations.PostBillingDocumentFilesDeletionJobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostBillingDocumentFilesDeletionJobResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTBillingDocumentFilesDeletionJobResponse = out
		}
	}

	return res, nil
}

// PostGenerateBillingDocuments - Generate billing documents by account ID
// Generates draft or posted billing documents for a specified account. You can also generate billing documents for specified subscriptions of a specified account. The billing documents contain invoices and credit memos. To generate credit memos, you must have the Invoice Settlement feature enabled.
//
// **Note**: You cannot generate billing documents for cancelled or suspended subscriptions.
func (s *BillingDocuments) PostGenerateBillingDocuments(ctx context.Context, request operations.PostGenerateBillingDocumentsRequest) (*operations.PostGenerateBillingDocumentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounts/{id}/billing-documents/generate", request.PathParams)

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

	res := &operations.PostGenerateBillingDocumentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GenerateBillingDocumentResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenerateBillingDocumentResponseType = out
		}
	}

	return res, nil
}
