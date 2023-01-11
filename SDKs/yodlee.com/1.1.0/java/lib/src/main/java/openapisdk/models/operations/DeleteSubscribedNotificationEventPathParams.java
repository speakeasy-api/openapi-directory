package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscribedNotificationEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventName")
    public DeleteSubscribedNotificationEventEventNameEnum eventName;
    public DeleteSubscribedNotificationEventPathParams withEventName(DeleteSubscribedNotificationEventEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}