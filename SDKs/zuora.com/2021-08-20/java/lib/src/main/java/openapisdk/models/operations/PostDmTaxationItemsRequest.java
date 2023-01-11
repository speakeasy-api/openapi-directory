package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDmTaxationItemsRequest {
    public PostDmTaxationItemsPathParams pathParams;
    public PostDmTaxationItemsRequest withPathParams(PostDmTaxationItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostDmTaxationItemsHeaders headers;
    public PostDmTaxationItemsRequest withHeaders(PostDmTaxationItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostTaxationItemListForDmType request;
    public PostDmTaxationItemsRequest withRequest(openapisdk.models.shared.PostTaxationItemListForDmType request) {
        this.request = request;
        return this;
    }
}