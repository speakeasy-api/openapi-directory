package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedNotificationEventRequest {
    public UpdateSubscribedNotificationEventPathParams pathParams;
    public UpdateSubscribedNotificationEventRequest withPathParams(UpdateSubscribedNotificationEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateConfigsNotificationEventRequest request;
    public UpdateSubscribedNotificationEventRequest withRequest(openapisdk.models.shared.UpdateConfigsNotificationEventRequest request) {
        this.request = request;
        return this;
    }
}