package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJuniperSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetJuniperSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}