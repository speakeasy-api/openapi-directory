package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventName")
    public CreateSubscriptionEventEventNameEnum eventName;
    public CreateSubscriptionEventPathParams withEventName(CreateSubscriptionEventEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}