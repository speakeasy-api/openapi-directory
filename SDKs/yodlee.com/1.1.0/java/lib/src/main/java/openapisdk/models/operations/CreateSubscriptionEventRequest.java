package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionEventRequest {
    public CreateSubscriptionEventPathParams pathParams;
    public CreateSubscriptionEventRequest withPathParams(CreateSubscriptionEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCobrandNotificationEventRequest request;
    public CreateSubscriptionEventRequest withRequest(openapisdk.models.shared.CreateCobrandNotificationEventRequest request) {
        this.request = request;
        return this;
    }
}