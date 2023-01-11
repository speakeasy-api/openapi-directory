package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHpvcManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteHpvcManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}