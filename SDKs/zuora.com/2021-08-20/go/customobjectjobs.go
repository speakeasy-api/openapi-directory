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

type CustomObjectJobs struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomObjectJobs(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CustomObjectJobs {
	return &CustomObjectJobs{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAllCustomObjectBulkJobs - List all custom object bulk jobs
// Lists all custom object bulk jobs submitted by your tenant.
func (s *CustomObjectJobs) GetAllCustomObjectBulkJobs(ctx context.Context, request operations.GetAllCustomObjectBulkJobsRequest) (*operations.GetAllCustomObjectBulkJobsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/objects/jobs"

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

	res := &operations.GetAllCustomObjectBulkJobsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CustomObjectBulkJobResponseCollection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomObjectBulkJobResponseCollection = out
		}
	}

	return res, nil
}

// GetCustomObjectBulkJob - Retrieve a custom object bulk job
// Retrieves the custom object bulk job details by job ID.
//
// Only the users that have the "View Custom Objects" permission can retrieve custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
func (s *CustomObjectJobs) GetCustomObjectBulkJob(ctx context.Context, request operations.GetCustomObjectBulkJobRequest) (*operations.GetCustomObjectBulkJobResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/objects/jobs/{id}", request.PathParams)

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

	res := &operations.GetCustomObjectBulkJobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CustomObjectBulkJobResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomObjectBulkJobResponse = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	}

	return res, nil
}

// GetCustomObjectBulkJobErrors - List all errors for a custom object bulk job
// Lists all errors for a custom object bulk job.
func (s *CustomObjectJobs) GetCustomObjectBulkJobErrors(ctx context.Context, request operations.GetCustomObjectBulkJobErrorsRequest) (*operations.GetCustomObjectBulkJobErrorsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/objects/jobs/{id}/errors", request.PathParams)

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

	res := &operations.GetCustomObjectBulkJobErrorsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CustomObjectBulkJobErrorResponseCollection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomObjectBulkJobErrorResponseCollection = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	}

	return res, nil
}

// PostCustomObjectBulkJob - Submit a custom object bulk job
// Submits a bulk job request for a bulk operation on the specified custom object records. A succcessful call returns a newly created bulk job. The job ID can be used to poll the job status or upload the CSV file if it is a `create` job.
//
// ## Limits
// This custom object bulk jobs have the following limits:
// * The concurrent bulk job limit per tenant is 5. Bulk jobs in `open`, `pending`, or `in_progress` status are counted towards the concurrent bulk job limit.
// * The bulk job execuation order is not guaranteed, which means the bulk job that you submit ealier may be executed later.
// * Only the users that have the "Delete Custom Objects" permission can create a `delete` bulk job. Only the users that have the "Edit Custom Objects" permission can create a `create` bulk job. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
func (s *CustomObjectJobs) PostCustomObjectBulkJob(ctx context.Context, request operations.PostCustomObjectBulkJobRequest) (*operations.PostCustomObjectBulkJobResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/objects/jobs"

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

	res := &operations.PostCustomObjectBulkJobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CustomObjectBulkJobResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomObjectBulkJobResponse = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	}

	return res, nil
}

// PostUploadFileForCustomObjectBulkJob - Upload a file for a custom object bulk job
// Uploads a file to a create custom object bulk job. Only one file is allowed per job. The job must be in `pending` status when you upload the file to it. The job will start creating records once the upload is finished.
//
// Only the users that have the "Edit Custom Objects" permission can upload files to custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
func (s *CustomObjectJobs) PostUploadFileForCustomObjectBulkJob(ctx context.Context, request operations.PostUploadFileForCustomObjectBulkJobRequest) (*operations.PostUploadFileForCustomObjectBulkJobResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/objects/jobs/{id}/files", request.PathParams)

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

	res := &operations.PostUploadFileForCustomObjectBulkJobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CustomObjectBulkJobResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomObjectBulkJobResponse = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonErrorResponse = out
		}
	}

	return res, nil
}
