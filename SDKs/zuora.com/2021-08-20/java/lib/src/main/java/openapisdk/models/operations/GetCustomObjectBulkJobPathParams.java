package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomObjectBulkJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCustomObjectBulkJobPathParams withId(String id) {
        this.id = id;
        return this;
    }
}