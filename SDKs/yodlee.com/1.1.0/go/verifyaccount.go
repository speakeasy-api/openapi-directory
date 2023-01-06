package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type VerifyAccount struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVerifyAccount(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *VerifyAccount {
	return &VerifyAccount{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// InitiateAccountVerification - Verify Accounts Using Transactions
// The verify account service is used to verify the account's ownership by  matching the transaction details with the accounts aggregated for the user.<br><ul><li>If a match is identified, the service returns details of all the accounts along with the matched transaction's details.<li>If no transaction match is found, an empty response will be returned.<li>A maximum of 5 transactionCriteria can be passed in a request.<li>The baseType, date, and amount parameters should mandatorily be passed.<li>The optional dateVariance parameter cannot be more than 7 days. For example, +7, -4, or +/-2.<li>Pass the container or accountId parameters for better performance.<li>This service supports the localization feature and accepts locale as a header parameter.</li></ul>
func (s *VerifyAccount) InitiateAccountVerification(ctx context.Context, request operations.InitiateAccountVerificationRequest) (*operations.InitiateAccountVerificationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/verifyAccount/{providerAccountId}", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.InitiateAccountVerificationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.VerifyAccountResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.VerifyAccountResponse = out
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
