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

type QuotesDocument struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewQuotesDocument(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *QuotesDocument {
	return &QuotesDocument{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostQuotesDocument - Generate a quote document
// The `document` call generates a quote document and returns the generated document URL. You can directly access the generated quote file through the returned URL.
//
// The `document` call should be only used from Zuora Quotes.
//
// ## File Size Limitation
// The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora:
// `security:max-object-size>2047MB</security:max-object-size>`
//
// Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance.
//
// We can work with you to determine if large file optimization is an option for you.
func (s *QuotesDocument) PostQuotesDocument(ctx context.Context, request operations.PostQuotesDocumentRequest) (*operations.PostQuotesDocumentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/quotes/document"

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

	res := &operations.PostQuotesDocumentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostQuoteDocResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTQuoteDocResponseType = out
		}
	}

	return res, nil
}
