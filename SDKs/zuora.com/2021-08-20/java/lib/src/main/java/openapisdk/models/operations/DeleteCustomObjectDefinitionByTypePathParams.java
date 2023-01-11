package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomObjectDefinitionByTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public DeleteCustomObjectDefinitionByTypePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}