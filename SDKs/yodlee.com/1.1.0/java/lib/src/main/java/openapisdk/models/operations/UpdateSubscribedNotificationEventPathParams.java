package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedNotificationEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventName")
    public UpdateSubscribedNotificationEventEventNameEnum eventName;
    public UpdateSubscribedNotificationEventPathParams withEventName(UpdateSubscribedNotificationEventEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}