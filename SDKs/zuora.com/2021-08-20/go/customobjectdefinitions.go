package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type CustomObjectDefinitions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomObjectDefinitions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CustomObjectDefinitions {
	return &CustomObjectDefinitions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteCustomObjectDefinitionByType - Delete a custom object definition
// Deletes the custom object definition for the provided type.
//
// **Note:** A custom object definition can only be deleted if no record of this custom object type exists.
func (s *CustomObjectDefinitions) DeleteCustomObjectDefinitionByType(ctx context.Context, request operations.DeleteCustomObjectDefinitionByTypeRequest) (*operations.DeleteCustomObjectDefinitionByTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/objects/definitions/default/{object}", request.PathParams)

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

	res := &operations.DeleteCustomObjectDefinitionByTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.DeleteCustomObjectDefinitionByType200ApplicationJSONURIString = &out
		}
	}

	return res, nil
}

// GetAllCustomObjectDefinitionsInNamespace - List custom object definitions
// Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://www.zuora.com/developer/api-reference/#operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.
func (s *CustomObjectDefinitions) GetAllCustomObjectDefinitionsInNamespace(ctx context.Context, request operations.GetAllCustomObjectDefinitionsInNamespaceRequest) (*operations.GetAllCustomObjectDefinitionsInNamespaceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/objects/definitions/default"

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

	res := &operations.GetAllCustomObjectDefinitionsInNamespaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetAllCustomObjectDefinitionsInNamespaceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETAllCustomObjectDefinitionsInNamespaceResponse = out
		}
	}

	return res, nil
}

// GetCustomObjectDefinitionByType - Retrieve a custom object definition
// Retrieves the custom object definition by type for the given tenant.
func (s *CustomObjectDefinitions) GetCustomObjectDefinitionByType(ctx context.Context, request operations.GetCustomObjectDefinitionByTypeRequest) (*operations.GetCustomObjectDefinitionByTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/objects/definitions/default/{object}", request.PathParams)

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

	res := &operations.GetCustomObjectDefinitionByTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CustomObjectDefinition
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomObjectDefinition = out
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

// PostCustomObjectDefinitions - Create custom object definitions
// You can post custom object definitions with the request body schema described below.
//
// This operation also allows you to use the [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) response schema as its request schema. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can make a [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) call in your old tenant and then use its response directly as the request of this operation in the new tenant to import all the custom objects from the old tenant.
//
// The `label` field is the UI label of the custom object. The `object` field contains the API Name of the custom object.
//
// ## Limitations
//
// This custom object definition has the following limitations:
//
// * The maximum number of characters for the Custom Object API Name (`object`) is 64.
// * The maximum number of characters for the Custom Object Label (`label`) is	64.
// * The maximum number of characters for the Custom Object Description 250.
// * The maximum number of custom fields in an custom object	is 50.
// * The maximum number of characters for the custom field API name is	64.
// * The maximum number of characters for the custom field label (`label`) is	64.
// * The maximum number of characters for the custom field Description	is 250.
// * The maximum number of picklist options is 250.
// * The default maximum number of characters for the Text field is 512. You can configure the max length up to 4,096 characters when creating or updating the custom object definition via API.
func (s *CustomObjectDefinitions) PostCustomObjectDefinitions(ctx context.Context, request operations.PostCustomObjectDefinitionsRequest) (*operations.PostCustomObjectDefinitionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/objects/definitions/default"

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

	res := &operations.PostCustomObjectDefinitionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetAllCustomObjectDefinitionsInNamespaceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETAllCustomObjectDefinitionsInNamespaceResponse = out
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
	}

	return res, nil
}

// PostUpdateCustomObjectDefinition - Update a custom object definition
// Updates a custom object definition by posting migration resource to initiate the migration of definitions.
//
// ## Limitations
//
// Updating custom field definition has the following limitations:
//
// * You can only have one action per update request.
// * You cannot delete fields from custom objects that contain records.
// * You can only add required fields to custom objects with no records.
// * You can change optional fields to required only on the custom objects with no records.
func (s *CustomObjectDefinitions) PostUpdateCustomObjectDefinition(ctx context.Context, request operations.PostUpdateCustomObjectDefinitionRequest) (*operations.PostUpdateCustomObjectDefinitionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/objects/migrations"

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

	res := &operations.PostUpdateCustomObjectDefinitionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.MigrationUpdateCustomObjectDefinitionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MigrationUpdateCustomObjectDefinitionsResponse = out
		}
	}

	return res, nil
}
