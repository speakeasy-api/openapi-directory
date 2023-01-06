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

type MassUpdater struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMassUpdater(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MassUpdater {
	return &MassUpdater{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMassUpdater - List all results of a mass action
// Describes how to get information about the result of a mass action through the REST API.
func (s *MassUpdater) GetMassUpdater(ctx context.Context, request operations.GetMassUpdaterRequest) (*operations.GetMassUpdaterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/bulk/{bulk-key}", request.PathParams)

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

	res := &operations.GetMassUpdaterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetMassUpdateType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETMassUpdateType = out
		}
	}

	return res, nil
}

// PostMassUpdater - Perform a mass action
// Describes how to perform a mass action through the REST API.
//
// Using this API method, you send a multipart/form-data request containing a `.csv` file with data about the mass action you want to perform. Zuora returns a key and then asynchronously processes the mass action. You can use the key to get details about the result of the mass action.
//
// If you want to use this operation to perform the Mass Payment Upload (MPU) mass action, see [Mass Payment Upload](https://knowledgecenter.zuora.com/Billing/Finance/Mass_Updater/Mass_Payment_Upload) for more information.
func (s *MassUpdater) PostMassUpdater(ctx context.Context, request operations.PostMassUpdaterRequest) (*operations.PostMassUpdaterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/bulk"

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

	res := &operations.PostMassUpdaterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostMassUpdateResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTMassUpdateResponseType = out
		}
	}

	return res, nil
}

// PutMassUpdater - Stop a mass action
// Describes how to stop a mass action through the REST API. You can stop a mass action when its status is Pending or Processing. After you have stopped a mass action, you can get the mass action result to see details of the mass action.
//
// - If you stop a mass action when its status is Pending, no response file is generated because no records have been processed.
//
// - If you stop a mass action when its status is Processing, a response file is generated. You can check the response file to see which records have been processed and which have not. In the response file, the **Success** column has the value `Y` (successful) or `N` (failed) for processed records, and a blank value for unprocessed records.
//
// Records that have already been processed when a mass action is stopped are not rolled back.
func (s *MassUpdater) PutMassUpdater(ctx context.Context, request operations.PutMassUpdaterRequest) (*operations.PutMassUpdaterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/bulk/{bulk-key}/stop", request.PathParams)

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

	res := &operations.PutMassUpdaterResponse{
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
