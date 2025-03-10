// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DiscussionAPIPostNewTopicFormPathParams struct {
	FolderID int `pathParam:"style=simple,explode=false,name=folderId"`
}

type DiscussionAPIPostNewTopicFormRequest struct {
	PathParams DiscussionAPIPostNewTopicFormPathParams
	Request    shared.DiscussionTopicContract `request:"mediaType=application/x-www-form-urlencoded"`
}

type DiscussionAPIPostNewTopicFormResponse struct {
	Body        []byte
	ContentType string
	// OK
	DiscussionTopicContract *shared.DiscussionTopicContract
	StatusCode              int
	RawResponse             *http.Response
}
