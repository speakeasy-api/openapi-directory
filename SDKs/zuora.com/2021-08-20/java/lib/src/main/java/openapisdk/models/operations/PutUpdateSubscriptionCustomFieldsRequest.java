package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateSubscriptionCustomFieldsRequest {
    public PutUpdateSubscriptionCustomFieldsPathParams pathParams;
    public PutUpdateSubscriptionCustomFieldsRequest withPathParams(PutUpdateSubscriptionCustomFieldsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateSubscriptionCustomFieldsHeaders headers;
    public PutUpdateSubscriptionCustomFieldsRequest withHeaders(PutUpdateSubscriptionCustomFieldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSubscriptionPatchRequestType request;
    public PutUpdateSubscriptionCustomFieldsRequest withRequest(openapisdk.models.shared.PutSubscriptionPatchRequestType request) {
        this.request = request;
        return this;
    }
}