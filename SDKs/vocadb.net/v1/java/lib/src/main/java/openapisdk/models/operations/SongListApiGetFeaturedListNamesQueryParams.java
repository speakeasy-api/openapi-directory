package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiGetFeaturedListNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featuredCategory")
    public SongListApiGetFeaturedListNamesFeaturedCategoryEnum featuredCategory;
    public SongListApiGetFeaturedListNamesQueryParams withFeaturedCategory(SongListApiGetFeaturedListNamesFeaturedCategoryEnum featuredCategory) {
        this.featuredCategory = featuredCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public SongListApiGetFeaturedListNamesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public SongListApiGetFeaturedListNamesNameMatchModeEnum nameMatchMode;
    public SongListApiGetFeaturedListNamesQueryParams withNameMatchMode(SongListApiGetFeaturedListNamesNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SongListApiGetFeaturedListNamesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}