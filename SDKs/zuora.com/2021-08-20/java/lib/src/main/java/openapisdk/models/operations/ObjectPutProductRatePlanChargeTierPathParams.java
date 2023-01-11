package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutProductRatePlanChargeTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectPutProductRatePlanChargeTierPathParams withId(String id) {
        this.id = id;
        return this;
    }
}