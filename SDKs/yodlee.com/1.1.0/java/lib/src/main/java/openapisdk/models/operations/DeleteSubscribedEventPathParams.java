package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscribedEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventName")
    public DeleteSubscribedEventEventNameEnum eventName;
    public DeleteSubscribedEventPathParams withEventName(DeleteSubscribedEventEventNameEnum eventName) {
        this.eventName = eventName;
        return this;
    }
}