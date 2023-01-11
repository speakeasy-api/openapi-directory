package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutRatePlanChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectPutRatePlanChargePathParams withId(String id) {
        this.id = id;
        return this;
    }
}