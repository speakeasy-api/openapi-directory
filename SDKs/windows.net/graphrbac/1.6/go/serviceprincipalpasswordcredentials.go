package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ServicePrincipalPasswordCredentials struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewServicePrincipalPasswordCredentials(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ServicePrincipalPasswordCredentials {
	return &ServicePrincipalPasswordCredentials{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ServicePrincipalsListPasswordCredentials - Gets the passwordCredentials associated with a service principal.
func (s *ServicePrincipalPasswordCredentials) ServicePrincipalsListPasswordCredentials(ctx context.Context, request operations.ServicePrincipalsListPasswordCredentialsRequest) (*operations.ServicePrincipalsListPasswordCredentialsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials", request.PathParams)

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

	res := &operations.ServicePrincipalsListPasswordCredentialsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PasswordCredentialListResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PasswordCredentialListResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.PasswordCredentialListResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PasswordCredentialListResult = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GraphError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GraphError = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.GraphError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GraphError = out
		}
	}

	return res, nil
}

// ServicePrincipalsUpdatePasswordCredentials - Updates the passwordCredentials associated with a service principal.
func (s *ServicePrincipalPasswordCredentials) ServicePrincipalsUpdatePasswordCredentials(ctx context.Context, request operations.ServicePrincipalsUpdatePasswordCredentialsRequest) (*operations.ServicePrincipalsUpdatePasswordCredentialsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicePrincipalsUpdatePasswordCredentialsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GraphError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GraphError = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.GraphError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GraphError = out
		}
	}

	return res, nil
}
