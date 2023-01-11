package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindPathwaysByLiteratureQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetFindPathwaysByLiteratureFormatEnum format;
    public GetFindPathwaysByLiteratureQueryParams withFormat(GetFindPathwaysByLiteratureFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetFindPathwaysByLiteratureQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}