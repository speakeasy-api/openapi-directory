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

type Catalog struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCatalog(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Catalog {
	return &Catalog{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCatalog - List all products
// Retrieves the entire product catalog, including all products, features, and their corresponding product rate plans, charges. Products are returned in reverse chronological order on the `UpdatedDate` field.
//
// With product rate plans and rate plan charges, the REST API has a maximum array size.
//
// For a use case of this operation, see [Retrieve the product catalog](https://www.zuora.com/developer/api-guides/#Retrieve-the-product-catalog).
func (s *Catalog) GetCatalog(ctx context.Context, request operations.GetCatalogRequest) (*operations.GetCatalogResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/catalog/products"

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

	res := &operations.GetCatalogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetCatalogType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETCatalogType = out
		}
	}

	return res, nil
}

// GetProduct - Retrieve a product
// Retrieves detailed information about a specific product, including information about its product rate plans and charges.
func (s *Catalog) GetProduct(ctx context.Context, request operations.GetProductRequest) (*operations.GetProductResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/catalog/product/{product-id}", request.PathParams)

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

	res := &operations.GetProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETProductType = out
		}
	}

	return res, nil
}

// PostCatalog - Multi-entity: Share a product with an entity
// **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Shares a product with a target entity. Zuora synchronizes the shared products to the target entity after sharing. For more information about product sharing, see [Products Sharing Across Entities](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities).
//
// Note that:
//
// - You must finish all the [prerequisites](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities/Share_Products) before sharing products with other entities.
//
// - Only source entity administrators have permission to share products with other entities. You must make the call as a source entity administrator.
//
// - Currently, you can only share a product with one entity at a time. An error occurs if you try to share a product to more than one entity.
func (s *Catalog) PostCatalog(ctx context.Context, request operations.PostCatalogRequest) (*operations.PostCatalogResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/catalog/products/{product-id}/share", request.PathParams)

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

	res := &operations.PostCatalogResponse{
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
