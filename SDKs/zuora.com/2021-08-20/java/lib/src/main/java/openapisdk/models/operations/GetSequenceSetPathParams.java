package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSequenceSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSequenceSetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}