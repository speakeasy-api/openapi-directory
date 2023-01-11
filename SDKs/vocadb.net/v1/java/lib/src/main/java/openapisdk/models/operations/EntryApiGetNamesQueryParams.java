package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EntryApiGetNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public EntryApiGetNamesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public EntryApiGetNamesNameMatchModeEnum nameMatchMode;
    public EntryApiGetNamesQueryParams withNameMatchMode(EntryApiGetNamesNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public EntryApiGetNamesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}