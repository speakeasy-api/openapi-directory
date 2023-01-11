package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUcsSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateUcsSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}