package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscribedEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventName")
    public GetSubscribedEventsEventNameEnum eventName;
    public GetSubscribedEventsQueryParams withEventName(GetSubscribedEventsEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}