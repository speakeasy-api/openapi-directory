package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOrderLineItemsRequest {
    public PostOrderLineItemsHeaders headers;
    public PostOrderLineItemsRequest withHeaders(PostOrderLineItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostOrderLineItemsRequestType request;
    public PostOrderLineItemsRequest withRequest(openapisdk.models.shared.PostOrderLineItemsRequestType request) {
        this.request = request;
        return this;
    }
}