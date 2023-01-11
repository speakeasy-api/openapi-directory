package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSequenceSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSequenceSetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}