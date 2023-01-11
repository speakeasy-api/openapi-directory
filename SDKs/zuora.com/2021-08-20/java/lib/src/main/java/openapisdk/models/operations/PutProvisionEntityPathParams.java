package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProvisionEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutProvisionEntityPathParams withId(String id) {
        this.id = id;
        return this;
    }
}