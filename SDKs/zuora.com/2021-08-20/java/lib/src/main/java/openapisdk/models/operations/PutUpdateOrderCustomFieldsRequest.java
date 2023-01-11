package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateOrderCustomFieldsRequest {
    public PutUpdateOrderCustomFieldsPathParams pathParams;
    public PutUpdateOrderCustomFieldsRequest withPathParams(PutUpdateOrderCustomFieldsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateOrderCustomFieldsHeaders headers;
    public PutUpdateOrderCustomFieldsRequest withHeaders(PutUpdateOrderCustomFieldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutOrderPatchRequestType request;
    public PutUpdateOrderCustomFieldsRequest withRequest(openapisdk.models.shared.PutOrderPatchRequestType request) {
        this.request = request;
        return this;
    }
}