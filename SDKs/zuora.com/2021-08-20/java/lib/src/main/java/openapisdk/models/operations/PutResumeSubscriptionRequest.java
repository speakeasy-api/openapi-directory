package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResumeSubscriptionRequest {
    public PutResumeSubscriptionPathParams pathParams;
    public PutResumeSubscriptionRequest withPathParams(PutResumeSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutResumeSubscriptionHeaders headers;
    public PutResumeSubscriptionRequest withHeaders(PutResumeSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSubscriptionResumeType request;
    public PutResumeSubscriptionRequest withRequest(openapisdk.models.shared.PutSubscriptionResumeType request) {
        this.request = request;
        return this;
    }
}