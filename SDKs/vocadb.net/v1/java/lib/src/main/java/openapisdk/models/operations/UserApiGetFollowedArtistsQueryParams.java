package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetFollowedArtistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistType")
    public UserApiGetFollowedArtistsArtistTypeEnum artistType;
    public UserApiGetFollowedArtistsQueryParams withArtistType(UserApiGetFollowedArtistsArtistTypeEnum artistType) {
        this.artistType = artistType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetFollowedArtistsFieldsEnum fields;
    public UserApiGetFollowedArtistsQueryParams withFields(UserApiGetFollowedArtistsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetFollowedArtistsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public UserApiGetFollowedArtistsLangEnum lang;
    public UserApiGetFollowedArtistsQueryParams withLang(UserApiGetFollowedArtistsLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetFollowedArtistsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public UserApiGetFollowedArtistsNameMatchModeEnum nameMatchMode;
    public UserApiGetFollowedArtistsQueryParams withNameMatchMode(UserApiGetFollowedArtistsNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public UserApiGetFollowedArtistsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public UserApiGetFollowedArtistsSortEnum sort;
    public UserApiGetFollowedArtistsQueryParams withSort(UserApiGetFollowedArtistsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetFollowedArtistsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public UserApiGetFollowedArtistsQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
}