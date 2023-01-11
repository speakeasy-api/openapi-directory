package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectDeleteBillRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectDeleteBillRunPathParams withId(String id) {
        this.id = id;
        return this;
    }
}