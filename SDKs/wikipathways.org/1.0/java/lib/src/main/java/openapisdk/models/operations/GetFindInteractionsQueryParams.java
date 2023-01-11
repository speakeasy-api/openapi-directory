package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindInteractionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetFindInteractionsFormatEnum format;
    public GetFindInteractionsQueryParams withFormat(GetFindInteractionsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetFindInteractionsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}