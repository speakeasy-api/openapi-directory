package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DestroyWebhookPathParams withId(String id) {
        this.id = id;
        return this;
    }
}