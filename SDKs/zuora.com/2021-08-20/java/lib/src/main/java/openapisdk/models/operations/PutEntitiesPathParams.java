package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEntitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutEntitiesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}