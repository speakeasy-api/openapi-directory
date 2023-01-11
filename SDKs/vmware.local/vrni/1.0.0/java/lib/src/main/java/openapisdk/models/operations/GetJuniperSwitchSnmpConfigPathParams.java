package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJuniperSwitchSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetJuniperSwitchSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}