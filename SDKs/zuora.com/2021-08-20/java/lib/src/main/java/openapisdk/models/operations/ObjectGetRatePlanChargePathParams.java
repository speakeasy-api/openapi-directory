package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetRatePlanChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetRatePlanChargePathParams withId(String id) {
        this.id = id;
        return this;
    }
}