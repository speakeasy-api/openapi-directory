package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCiscoSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteCiscoSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}