package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJuniperSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteJuniperSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}