package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public AlbumApiGetNamesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public AlbumApiGetNamesNameMatchModeEnum nameMatchMode;
    public AlbumApiGetNamesQueryParams withNameMatchMode(AlbumApiGetNamesNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public AlbumApiGetNamesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}