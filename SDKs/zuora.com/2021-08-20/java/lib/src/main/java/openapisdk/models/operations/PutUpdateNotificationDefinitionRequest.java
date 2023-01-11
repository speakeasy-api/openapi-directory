package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateNotificationDefinitionRequest {
    public PutUpdateNotificationDefinitionPathParams pathParams;
    public PutUpdateNotificationDefinitionRequest withPathParams(PutUpdateNotificationDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateNotificationDefinitionHeaders headers;
    public PutUpdateNotificationDefinitionRequest withHeaders(PutUpdateNotificationDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPublicNotificationDefinitionRequest request;
    public PutUpdateNotificationDefinitionRequest withRequest(openapisdk.models.shared.PutPublicNotificationDefinitionRequest request) {
        this.request = request;
        return this;
    }
}