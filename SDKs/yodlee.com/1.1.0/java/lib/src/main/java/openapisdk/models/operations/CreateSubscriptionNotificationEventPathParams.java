package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionNotificationEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventName")
    public CreateSubscriptionNotificationEventEventNameEnum eventName;
    public CreateSubscriptionNotificationEventPathParams withEventName(CreateSubscriptionNotificationEventEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}