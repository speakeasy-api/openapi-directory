package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUcsSnmpConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetUcsSnmpConfigPathParams withId(String id) {
        this.id = id;
        return this;
    }
}