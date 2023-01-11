package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutUnitOfMeasurePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectPutUnitOfMeasurePathParams withId(String id) {
        this.id = id;
        return this;
    }
}