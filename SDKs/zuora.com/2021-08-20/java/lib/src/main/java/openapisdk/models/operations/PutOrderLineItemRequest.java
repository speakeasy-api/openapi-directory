package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrderLineItemRequest {
    public PutOrderLineItemPathParams pathParams;
    public PutOrderLineItemRequest withPathParams(PutOrderLineItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutOrderLineItemHeaders headers;
    public PutOrderLineItemRequest withHeaders(PutOrderLineItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderLineItemCommon request;
    public PutOrderLineItemRequest withRequest(openapisdk.models.shared.OrderLineItemCommon request) {
        this.request = request;
        return this;
    }
}