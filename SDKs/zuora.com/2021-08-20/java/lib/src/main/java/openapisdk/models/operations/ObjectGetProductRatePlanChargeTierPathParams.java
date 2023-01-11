package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetProductRatePlanChargeTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetProductRatePlanChargeTierPathParams withId(String id) {
        this.id = id;
        return this;
    }
}