package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type OAuth2PermissionGrantList struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOAuth2PermissionGrantList(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *OAuth2PermissionGrantList {
	return &OAuth2PermissionGrantList{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// OAuth2PermissionGrantList - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
func (s *OAuth2PermissionGrantList) OAuth2PermissionGrantList(ctx context.Context, request operations.OAuth2PermissionGrantListRequest) (*operations.OAuth2PermissionGrantListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{tenantID}/oauth2PermissionGrants", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OAuth2PermissionGrantListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OAuth2PermissionGrantListResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OAuth2PermissionGrantListResult = out
		}
	}

	return res, nil
}
