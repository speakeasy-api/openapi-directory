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

type JournalRuns struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewJournalRuns(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *JournalRuns {
	return &JournalRuns{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteJournalRun - Delete a journal run
// This reference describes how to delete a journal run using the REST API.
//
//	You can only delete journal runs that have already been canceled.
//
//	You must have the "Delete Cancelled Journal Run" Zuora Finance user permission enabled to delete journal runs.
func (s *JournalRuns) DeleteJournalRun(ctx context.Context, request operations.DeleteJournalRunRequest) (*operations.DeleteJournalRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/journal-runs/{jr-number}", request.PathParams)

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

	res := &operations.DeleteJournalRunResponse{
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

// GetJournalRun - Retrieve a journal run
// This REST API reference describes how to get information about a journal run. Request and response field descriptions and sample code are provided.
func (s *JournalRuns) GetJournalRun(ctx context.Context, request operations.GetJournalRunRequest) (*operations.GetJournalRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/journal-runs/{jr-number}", request.PathParams)

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

	res := &operations.GetJournalRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetJournalRunType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETJournalRunType = out
		}
	}

	return res, nil
}

// PostJournalRun - Create a journal run
// This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.
func (s *JournalRuns) PostJournalRun(ctx context.Context, request operations.PostJournalRunRequest) (*operations.PostJournalRunResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/journal-runs"

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

	res := &operations.PostJournalRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostJournalRunResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTJournalRunResponseType = out
		}
	}

	return res, nil
}

// PutJournalRun - Cancel a journal run
// This reference describes how to cancel a journal run using the REST API.
//
// The summary journal entries in the journal run are canceled asynchronously. See the "Example" section below for details.
//
// You must have the "Cancel Journal Run" Zuora Finance user permission enabled to cancel journal runs.
//
// ## Notes
// When you cancel a journal run, the summary journal entries associated with that journal run are canceled asynchronously. A response of `{ "success": true }` means only that the specified journal run has a status of "Pending", "Error", or "Completed" and therefore can be canceled, but does not mean that the whole journal run was successfully canceled.
//
// For example, let's say you want to cancel journal run JR-00000075. The journal run status is "Completed" and it contains ten journal entries. One of the journal entries has its Transferred to Accounting status set to "Yes", meaning that the entry cannot be canceled. The workflow might go as follows:
// 1. You make an API call to cancel the journal run.
// 2. The journal run status is "Completed", so you receive a response of `{ "success": true }`.
// 3. Zuora begins asynchronously canceling journal entries associated with the journal run. The journal entry whose Transferred to Accounting status is "Yes" fails to be canceled. The cancelation process continues, and the other journal entries are successfully canceled.
// 4. The journal run status remains as "Completed". The status does not change to "Canceled" because the journal run still contains a journey entry that is not canceled.
func (s *JournalRuns) PutJournalRun(ctx context.Context, request operations.PutJournalRunRequest) (*operations.PutJournalRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/journal-runs/{jr-number}/cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutJournalRunResponse{
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
