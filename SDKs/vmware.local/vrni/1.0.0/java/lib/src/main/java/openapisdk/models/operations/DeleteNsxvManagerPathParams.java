package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNsxvManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteNsxvManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}