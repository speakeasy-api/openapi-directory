package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeleteNotificationDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteDeleteNotificationDefinitionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}