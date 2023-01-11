package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetProductRatePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetProductRatePlanPathParams withId(String id) {
        this.id = id;
        return this;
    }
}