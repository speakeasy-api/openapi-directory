package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateNotificationDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutUpdateNotificationDefinitionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}