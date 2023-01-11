package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiGetNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public ArtistApiGetNamesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public ArtistApiGetNamesNameMatchModeEnum nameMatchMode;
    public ArtistApiGetNamesQueryParams withNameMatchMode(ArtistApiGetNamesNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public ArtistApiGetNamesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}