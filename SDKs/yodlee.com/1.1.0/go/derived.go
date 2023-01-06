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

type Derived struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDerived(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Derived {
	return &Derived{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetHoldingSummary - Get Holding Summary
// The get holding summary service is used to get the summary of asset classifications for the user.<br>By default, accounts with status as ACTIVE and TO BE CLOSED will be considered.<br>If the include parameter value is passed as details then a summary with holdings and account information is returned.<br>
func (s *Derived) GetHoldingSummary(ctx context.Context, request operations.GetHoldingSummaryRequest) (*operations.GetHoldingSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/derived/holdingSummary"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetHoldingSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.DerivedHoldingSummaryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DerivedHoldingSummaryResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetNetworth - Get Networth Summary
// The get networth service is used to get the networth for the user.<br>If the include parameter value is passed as details then networth with historical balances is returned. <br>
func (s *Derived) GetNetworth(ctx context.Context, request operations.GetNetworthRequest) (*operations.GetNetworthResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/derived/networth"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworthResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.DerivedNetworthResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DerivedNetworthResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetTransactionSummary - Get Transaction Summary
// The transaction summary service provides the summary values of transactions for the given date range by category type, high-level categories, or system-defined categories.<br><br>Yodlee has the transaction data stored for a day, month, year and week per category as per the availability of user's data. If the include parameter value is passed as details, then summary details will be returned depending on the interval passed-monthly is the default.<br><br><b>Notes:</b><ol> <li> Details can be requested for only one system-defined category<li>Passing categoryType is mandatory except when the groupBy value is CATEGORY_TYPE<li>Dates will not be respected for monthly, yearly, and weekly details<li>When monthly details are requested, only the fromDate and toDate month will be respected<li>When yearly details are requested, only the fromDate and toDate year will be respected<li>For weekly data points, details will be provided for every Sunday date available within the fromDate and toDate<li>This service supports the localization feature and accepts locale as a header parameter</li></ol>
func (s *Derived) GetTransactionSummary(ctx context.Context, request operations.GetTransactionSummaryRequest) (*operations.GetTransactionSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/derived/transactionSummary"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTransactionSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.DerivedTransactionSummaryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DerivedTransactionSummaryResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
