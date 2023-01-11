package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUcsManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteUcsManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}