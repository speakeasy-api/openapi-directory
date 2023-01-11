package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advancedFilters")
    public Object[] advancedFilters;
    public ArtistApiGetListQueryParams withAdvancedFilters(Object[] advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowBaseVoicebanks")
    public Boolean allowBaseVoicebanks;
    public ArtistApiGetListQueryParams withAllowBaseVoicebanks(Boolean allowBaseVoicebanks) {
        this.allowBaseVoicebanks = allowBaseVoicebanks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistTypes")
    public String artistTypes;
    public ArtistApiGetListQueryParams withArtistTypes(String artistTypes) {
        this.artistTypes = artistTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public ArtistApiGetListQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ArtistApiGetListFieldsEnum fields;
    public ArtistApiGetListQueryParams withFields(ArtistApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=followedByUserId")
    public Integer followedByUserId;
    public ArtistApiGetListQueryParams withFollowedByUserId(Integer followedByUserId) {
        this.followedByUserId = followedByUserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public ArtistApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ArtistApiGetListLangEnum lang;
    public ArtistApiGetListQueryParams withLang(ArtistApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public ArtistApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public ArtistApiGetListNameMatchModeEnum nameMatchMode;
    public ArtistApiGetListQueryParams withNameMatchMode(ArtistApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preferAccurateMatches")
    public Boolean preferAccurateMatches;
    public ArtistApiGetListQueryParams withPreferAccurateMatches(Boolean preferAccurateMatches) {
        this.preferAccurateMatches = preferAccurateMatches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public ArtistApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ArtistApiGetListSortEnum sort;
    public ArtistApiGetListQueryParams withSort(ArtistApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public ArtistApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ArtistApiGetListStatusEnum status;
    public ArtistApiGetListQueryParams withStatus(ArtistApiGetListStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public ArtistApiGetListQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String[] tagName;
    public ArtistApiGetListQueryParams withTagName(String[] tagName) {
        this.tagName = tagName;
        return this;
    }
}