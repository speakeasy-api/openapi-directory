package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableJuniperSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableJuniperSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}