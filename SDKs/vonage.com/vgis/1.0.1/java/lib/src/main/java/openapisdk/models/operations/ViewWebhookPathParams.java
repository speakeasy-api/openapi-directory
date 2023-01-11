package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ViewWebhookPathParams withId(String id) {
        this.id = id;
        return this;
    }
}