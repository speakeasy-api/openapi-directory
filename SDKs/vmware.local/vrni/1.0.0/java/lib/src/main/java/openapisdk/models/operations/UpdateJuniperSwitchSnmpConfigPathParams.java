package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJuniperSwitchSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateJuniperSwitchSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}