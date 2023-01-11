package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDellSwitchSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateDellSwitchSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}