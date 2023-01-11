package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetNotificationDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGetNotificationDefinitionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}