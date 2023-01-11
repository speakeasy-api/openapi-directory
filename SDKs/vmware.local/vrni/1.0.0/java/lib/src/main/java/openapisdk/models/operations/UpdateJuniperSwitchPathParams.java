package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJuniperSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateJuniperSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}