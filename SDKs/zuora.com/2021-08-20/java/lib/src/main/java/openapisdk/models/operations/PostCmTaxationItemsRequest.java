package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCmTaxationItemsRequest {
    public PostCmTaxationItemsPathParams pathParams;
    public PostCmTaxationItemsRequest withPathParams(PostCmTaxationItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCmTaxationItemsHeaders headers;
    public PostCmTaxationItemsRequest withHeaders(PostCmTaxationItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostTaxationItemListForCmType request;
    public PostCmTaxationItemsRequest withRequest(openapisdk.models.shared.PostTaxationItemListForCmType request) {
        this.request = request;
        return this;
    }
}