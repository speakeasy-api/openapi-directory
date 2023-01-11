package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetUnitOfMeasurePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetUnitOfMeasurePathParams withId(String id) {
        this.id = id;
        return this;
    }
}