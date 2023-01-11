package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSequenceSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSequenceSetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}