package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetChildTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Integer tagId;
    public TagApiGetChildTagsPathParams withTagId(Integer tagId) {
        this.tagId = tagId;
        return this;
    }
}