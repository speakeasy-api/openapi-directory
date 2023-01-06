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

type EntityConnections struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEntityConnections(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EntityConnections {
	return &EntityConnections{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetEntityConnections - Multi-entity: List connections
// **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Retrieves information about certain connections for a specified entity. You can specify the entity to retrieve in the `Zuora-Entity-Ids` request header.
//
// You can retrieve:
//   - Inbound connections
//   - Outbound connections
//   - Both inbound and outbound connections
//
// ## User Access Permission
// You can make the call as any entity user.
func (s *EntityConnections) GetEntityConnections(ctx context.Context, request operations.GetEntityConnectionsRequest) (*operations.GetEntityConnectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/entity-connections"

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

	res := &operations.GetEntityConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetEntityConnectionsResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETEntityConnectionsResponseType = out
		}
	}

	return res, nil
}

// PostEntityConnections - Multi-entity: Initiate a connection request
// **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Initiates a connection request from a source entity to a target entity.
//
// ## User Access Permission
// You must make the call as a source entity administrator. Also, this administrator must have permission to access to the target entity.
func (s *EntityConnections) PostEntityConnections(ctx context.Context, request operations.PostEntityConnectionsRequest) (*operations.PostEntityConnectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/entity-connections"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.PostEntityConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostEntityConnectionsResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTEntityConnectionsResponseType = out
		}
	}

	return res, nil
}

// PutEntityConnectionsAccept - Multi-entity: Accept a connection request
// **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Accepts a connection request.
//
// ## User Access Permission
// You must make the call as an entity administrator to accept a connection request.
func (s *EntityConnections) PutEntityConnectionsAccept(ctx context.Context, request operations.PutEntityConnectionsAcceptRequest) (*operations.PutEntityConnectionsAcceptResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/entity-connections/{connection-id}/accept", request.PathParams)

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

	res := &operations.PutEntityConnectionsAcceptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutEntityConnectionsAcceptResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTEntityConnectionsAcceptResponseType = out
		}
	}

	return res, nil
}

// PutEntityConnectionsDeny - Multi-entity: Deny a connection request
// **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Denies a connection request.
//
// ## User Access Permission
// You must make the call as an entity administrator to deny a connection request.
func (s *EntityConnections) PutEntityConnectionsDeny(ctx context.Context, request operations.PutEntityConnectionsDenyRequest) (*operations.PutEntityConnectionsDenyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/entity-connections/{connection-id}/deny", request.PathParams)

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

	res := &operations.PutEntityConnectionsDenyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutEntityConnectionsDenyResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTEntityConnectionsDenyResponseType = out
		}
	}

	return res, nil
}

// PutEntityConnectionsDisconnect - Multi-entity: Disconnect a connection
// **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Disconnects an established connection. If you have shared objects from a global entity to a target entity, disconnecting the connection will break the mapping relationship between these entities and cannot be recovered later.
//
// ## User Access Permission
// You must make the call as an administrator of the target entity or source entity.
func (s *EntityConnections) PutEntityConnectionsDisconnect(ctx context.Context, request operations.PutEntityConnectionsDisconnectRequest) (*operations.PutEntityConnectionsDisconnectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/entity-connections/{connection-id}/disconnect", request.PathParams)

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

	res := &operations.PutEntityConnectionsDisconnectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutEntityConnectionsDisconnectResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTEntityConnectionsDisconnectResponseType = out
		}
	}

	return res, nil
}
