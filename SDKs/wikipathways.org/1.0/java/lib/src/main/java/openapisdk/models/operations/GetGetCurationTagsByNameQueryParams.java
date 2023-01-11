package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCurationTagsByNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetCurationTagsByNameFormatEnum format;
    public GetGetCurationTagsByNameQueryParams withFormat(GetGetCurationTagsByNameFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String tagName;
    public GetGetCurationTagsByNameQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}