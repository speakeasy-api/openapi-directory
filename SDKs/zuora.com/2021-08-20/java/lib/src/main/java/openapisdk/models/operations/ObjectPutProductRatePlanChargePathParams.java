package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutProductRatePlanChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectPutProductRatePlanChargePathParams withId(String id) {
        this.id = id;
        return this;
    }
}