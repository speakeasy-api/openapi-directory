package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowAliases")
    public Boolean allowAliases;
    public TagApiGetNamesQueryParams withAllowAliases(Boolean allowAliases) {
        this.allowAliases = allowAliases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public TagApiGetNamesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public TagApiGetNamesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}