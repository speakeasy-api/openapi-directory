package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEntitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteEntitiesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}