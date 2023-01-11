package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventName")
    public UpdateSubscribedEventEventNameEnum eventName;
    public UpdateSubscribedEventPathParams withEventName(UpdateSubscribedEventEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}