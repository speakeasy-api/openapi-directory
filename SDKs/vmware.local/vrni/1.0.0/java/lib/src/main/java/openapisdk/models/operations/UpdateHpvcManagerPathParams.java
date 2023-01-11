package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHpvcManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateHpvcManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}