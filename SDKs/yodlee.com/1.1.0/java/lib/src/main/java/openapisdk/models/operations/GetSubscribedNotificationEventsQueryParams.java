package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscribedNotificationEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventName")
    public GetSubscribedNotificationEventsEventNameEnum eventName;
    public GetSubscribedNotificationEventsQueryParams withEventName(GetSubscribedNotificationEventsEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}