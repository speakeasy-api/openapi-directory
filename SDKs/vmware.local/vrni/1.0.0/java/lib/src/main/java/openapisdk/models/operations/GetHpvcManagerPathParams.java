package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHpvcManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetHpvcManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}