package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type CommonAreaPhones struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommonAreaPhones(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CommonAreaPhones {
	return &CommonAreaPhones{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddCommonAreaPhone - Add a common area phone
// A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [add a common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones#h_2d0da347-c35a-4993-9771-e21aaa568deb).<br><br>
// **Prerequisites:**<br>
// * Pro or a higher account with Zoom Phone license.
// * Account owner or admin permissions.
// * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
// **Scope:** `phone:write:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *CommonAreaPhones) AddCommonAreaPhone(ctx context.Context, request operations.AddCommonAreaPhoneRequest) (*operations.AddCommonAreaPhoneResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/common_area_phones"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddCommonAreaPhoneResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddCommonAreaPhone201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddCommonAreaPhone201ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 409:
	}

	return res, nil
}

// DeleteCommonAreaPhone - Delete a common area phone
// A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to remove the [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) from Zoom Phone System in an account.<br><br>**Prerequisites:**<br>
// * Pro or a higher account with Zoom Phone license.
// * Account owner or admin permissions.
// * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
// **Scopes:** `phone:write:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *CommonAreaPhones) DeleteCommonAreaPhone(ctx context.Context, request operations.DeleteCommonAreaPhoneRequest) (*operations.DeleteCommonAreaPhoneResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/common_area_phones/{commonAreaPhoneId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteCommonAreaPhoneResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteCommonAreaPhone204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetACommonAreaPhone - Get common area phone details
// A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to get details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br>For the `commonAreaPhoneId`, use the unique identifier or the Mac address of the common area phone. The Mac address can be hyphenated (00-04-f2-5e-ec-3c) or not hyphenated (0004f25eec3c).<br><br>**Prerequisites:**<br>
// * Pro or a higher account with Zoom Phone license.
// * Account owner or admin permissions.
// * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
// **Scopes:** `phone:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *CommonAreaPhones) GetACommonAreaPhone(ctx context.Context, request operations.GetACommonAreaPhoneRequest) (*operations.GetACommonAreaPhoneResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/common_area_phones/{commonAreaPhoneId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetACommonAreaPhoneResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetACommonAreaPhone200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetACommonAreaPhone200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ListCommonAreaPhones - List common area phones
// A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [list all common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
// * Pro or a higher account with Zoom Phone license.
// * Account owner or admin permissions.
// * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br><br>
// **Scope:** `phone:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
func (s *CommonAreaPhones) ListCommonAreaPhones(ctx context.Context, request operations.ListCommonAreaPhonesRequest) (*operations.ListCommonAreaPhonesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/common_area_phones"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListCommonAreaPhonesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListCommonAreaPhones200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCommonAreaPhones200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// UpdateCommonAreaPhone - Update common area phone
// A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to update details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
// * Pro or a higher account with Zoom Phone license.
// * Account owner or admin permissions.
// * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
// **Scopes:** `phone:write:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *CommonAreaPhones) UpdateCommonAreaPhone(ctx context.Context, request operations.UpdateCommonAreaPhoneRequest) (*operations.UpdateCommonAreaPhoneResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/common_area_phones/{commonAreaPhoneId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateCommonAreaPhoneResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateCommonAreaPhone204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
