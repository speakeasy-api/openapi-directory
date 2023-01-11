package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableJuniperSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableJuniperSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}