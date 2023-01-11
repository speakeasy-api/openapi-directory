package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatastorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDatastorePathParams withId(String id) {
        this.id = id;
        return this;
    }
}