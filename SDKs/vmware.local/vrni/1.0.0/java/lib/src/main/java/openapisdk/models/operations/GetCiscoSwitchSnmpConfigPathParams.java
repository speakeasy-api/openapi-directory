package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCiscoSwitchSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCiscoSwitchSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}