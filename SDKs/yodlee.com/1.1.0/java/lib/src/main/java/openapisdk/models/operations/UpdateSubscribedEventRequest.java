package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedEventRequest {
    public UpdateSubscribedEventPathParams pathParams;
    public UpdateSubscribedEventRequest withPathParams(UpdateSubscribedEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCobrandNotificationEventRequest request;
    public UpdateSubscribedEventRequest withRequest(openapisdk.models.shared.UpdateCobrandNotificationEventRequest request) {
        this.request = request;
        return this;
    }
}