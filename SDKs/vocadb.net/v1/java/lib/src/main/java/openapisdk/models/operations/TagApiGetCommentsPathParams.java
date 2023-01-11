package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Integer tagId;
    public TagApiGetCommentsPathParams withTagId(Integer tagId) {
        this.tagId = tagId;
        return this;
    }
}