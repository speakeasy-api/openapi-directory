package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBrocadeSwitchSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBrocadeSwitchSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}