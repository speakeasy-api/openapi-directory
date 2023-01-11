package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiPostReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Integer tagId;
    public TagApiPostReportPathParams withTagId(Integer tagId) {
        this.tagId = tagId;
        return this;
    }
}