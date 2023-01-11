package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomObjectDefinitionByTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetCustomObjectDefinitionByTypePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}