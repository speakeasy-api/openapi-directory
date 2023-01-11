package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionNotificationEventRequest {
    public CreateSubscriptionNotificationEventPathParams pathParams;
    public CreateSubscriptionNotificationEventRequest withPathParams(CreateSubscriptionNotificationEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateConfigsNotificationEventRequest request;
    public CreateSubscriptionNotificationEventRequest withRequest(openapisdk.models.shared.CreateConfigsNotificationEventRequest request) {
        this.request = request;
        return this;
    }
}