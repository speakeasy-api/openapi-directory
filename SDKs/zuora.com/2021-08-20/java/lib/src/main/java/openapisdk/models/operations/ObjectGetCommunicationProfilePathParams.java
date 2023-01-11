package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetCommunicationProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetCommunicationProfilePathParams withId(String id) {
        this.id = id;
        return this;
    }
}