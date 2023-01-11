package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectDeleteProductRatePlanChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectDeleteProductRatePlanChargePathParams withId(String id) {
        this.id = id;
        return this;
    }
}