package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuggestVideoCategoryRequest {
    public SuggestVideoCategoryPathParams pathParams;
    public SuggestVideoCategoryRequest withPathParams(SuggestVideoCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.category+json")
    public SuggestVideoCategoryRequestBody request;
    public SuggestVideoCategoryRequest withRequest(SuggestVideoCategoryRequestBody request) {
        this.request = request;
        return this;
    }
    public SuggestVideoCategorySecurity security;
    public SuggestVideoCategoryRequest withSecurity(SuggestVideoCategorySecurity security) {
        this.security = security;
        return this;
    }
}