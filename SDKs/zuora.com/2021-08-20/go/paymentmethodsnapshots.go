package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type PaymentMethodSnapshots struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPaymentMethodSnapshots(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PaymentMethodSnapshots {
	return &PaymentMethodSnapshots{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ObjectGetPaymentMethodSnapshot - CRUD: Retrieve a payment method snapshot
// This REST API reference describes how to retrieve a Payment Method Snapshot.
//
// A Payment Method Snapshot is a copy of the particular Payment Method used in a transaction. If the Payment Method is deleted, the Payment Method Snapshot continues to retain the data used in each of the past transactions.
//
// ## Notes
// The following Payment Method fields are not available in Payment Method Snapshots:
//
// * `Active`
// * `AchAddress1`
// * `AchAddress2`
// * `CreatedById`
// * `CreatedDate`
// * `UpdatedById`
// * `UpdatedDate`
//
// The Payment Method Snapshot field `PaymentMethodId` is not available in Payment Methods.
func (s *PaymentMethodSnapshots) ObjectGetPaymentMethodSnapshot(ctx context.Context, request operations.ObjectGetPaymentMethodSnapshotRequest) (*operations.ObjectGetPaymentMethodSnapshotResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/payment-method-snapshot/{id}", request.PathParams)

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

	res := &operations.ObjectGetPaymentMethodSnapshotResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyGetPaymentMethodSnapshot
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyGetPaymentMethodSnapshot = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyUnauthorizedResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyUnauthorizedResponse = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyNoDataResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyNoDataResponse = out
		}
	}

	return res, nil
}
