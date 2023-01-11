package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookCreate request;
    public CreateWebhookRequest withRequest(openapisdk.models.shared.WebhookCreate request) {
        this.request = request;
        return this;
    }
}