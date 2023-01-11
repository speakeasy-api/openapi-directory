package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiGetFeaturedListsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public SongListApiGetFeaturedListsQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featuredCategory")
    public SongListApiGetFeaturedListsFeaturedCategoryEnum featuredCategory;
    public SongListApiGetFeaturedListsQueryParams withFeaturedCategory(SongListApiGetFeaturedListsFeaturedCategoryEnum featuredCategory) {
        this.featuredCategory = featuredCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongListApiGetFeaturedListsFieldsEnum fields;
    public SongListApiGetFeaturedListsQueryParams withFields(SongListApiGetFeaturedListsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public SongListApiGetFeaturedListsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongListApiGetFeaturedListsLangEnum lang;
    public SongListApiGetFeaturedListsQueryParams withLang(SongListApiGetFeaturedListsLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public SongListApiGetFeaturedListsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public SongListApiGetFeaturedListsNameMatchModeEnum nameMatchMode;
    public SongListApiGetFeaturedListsQueryParams withNameMatchMode(SongListApiGetFeaturedListsNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SongListApiGetFeaturedListsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SongListApiGetFeaturedListsSortEnum sort;
    public SongListApiGetFeaturedListsQueryParams withSort(SongListApiGetFeaturedListsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public SongListApiGetFeaturedListsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public SongListApiGetFeaturedListsQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
}