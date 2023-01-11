package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableHpvcManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableHpvcManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}