// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

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

// files - To change the description use /examples/TagsDescriptions.json
type files struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newFiles(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *files {
	return &files{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// UploadFile - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.
// When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.
// Uploading a file will result in a file token, which can be used to reference this file in other API calls.
//
//	Each file must be uploaded separately.
//	Keep in mind that file token has limited validity (ie. 10 minutes).
//	Therefore files must be uploaded just before issuing API call which reference them.
func (s *files) UploadFile(ctx context.Context, request shared.FileToUploadDto) (*operations.UploadFileResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/files"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "multipart")
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

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UploadFileResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	default:
	}

	return res, nil
}
