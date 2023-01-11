package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomObjectBulkJobErrorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCustomObjectBulkJobErrorsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}