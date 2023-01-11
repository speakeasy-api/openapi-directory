package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest {
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams pathParams;
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest withPathParams(PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders headers;
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest withHeaders(PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSubscriptionPatchRequestType request;
    public PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest withRequest(openapisdk.models.shared.PutSubscriptionPatchRequestType request) {
        this.request = request;
        return this;
    }
}