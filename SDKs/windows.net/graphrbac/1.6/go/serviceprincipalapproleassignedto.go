package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ServicePrincipalAppRoleAssignedTo struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewServicePrincipalAppRoleAssignedTo(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ServicePrincipalAppRoleAssignedTo {
	return &ServicePrincipalAppRoleAssignedTo{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ServicePrincipalsListAppRoleAssignedTo - Principals (users, groups, and service principals) that are assigned to this service principal.
func (s *ServicePrincipalAppRoleAssignedTo) ServicePrincipalsListAppRoleAssignedTo(ctx context.Context, request operations.ServicePrincipalsListAppRoleAssignedToRequest) (*operations.ServicePrincipalsListAppRoleAssignedToResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo", request.PathParams)

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

	res := &operations.ServicePrincipalsListAppRoleAssignedToResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppRoleAssignmentListResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppRoleAssignmentListResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.AppRoleAssignmentListResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppRoleAssignmentListResult = out
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
