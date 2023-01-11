package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableHpvcManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableHpvcManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}