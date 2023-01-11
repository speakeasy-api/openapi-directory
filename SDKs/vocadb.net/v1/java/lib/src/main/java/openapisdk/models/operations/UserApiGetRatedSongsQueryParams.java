package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetRatedSongsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advancedFilters")
    public Object[] advancedFilters;
    public UserApiGetRatedSongsQueryParams withAdvancedFilters(Object[] advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistGrouping")
    public UserApiGetRatedSongsArtistGroupingEnum artistGrouping;
    public UserApiGetRatedSongsQueryParams withArtistGrouping(UserApiGetRatedSongsArtistGroupingEnum artistGrouping) {
        this.artistGrouping = artistGrouping;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistId")
    public Integer[] artistId;
    public UserApiGetRatedSongsQueryParams withArtistId(Integer[] artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childVoicebanks")
    public Boolean childVoicebanks;
    public UserApiGetRatedSongsQueryParams withChildVoicebanks(Boolean childVoicebanks) {
        this.childVoicebanks = childVoicebanks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetRatedSongsFieldsEnum fields;
    public UserApiGetRatedSongsQueryParams withFields(UserApiGetRatedSongsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetRatedSongsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupByRating")
    public Boolean groupByRating;
    public UserApiGetRatedSongsQueryParams withGroupByRating(Boolean groupByRating) {
        this.groupByRating = groupByRating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public UserApiGetRatedSongsLangEnum lang;
    public UserApiGetRatedSongsQueryParams withLang(UserApiGetRatedSongsLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetRatedSongsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public UserApiGetRatedSongsNameMatchModeEnum nameMatchMode;
    public UserApiGetRatedSongsQueryParams withNameMatchMode(UserApiGetRatedSongsNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pvServices")
    public UserApiGetRatedSongsPvServicesEnum pvServices;
    public UserApiGetRatedSongsQueryParams withPvServices(UserApiGetRatedSongsPvServicesEnum pvServices) {
        this.pvServices = pvServices;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public UserApiGetRatedSongsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public UserApiGetRatedSongsRatingEnum rating;
    public UserApiGetRatedSongsQueryParams withRating(UserApiGetRatedSongsRatingEnum rating) {
        this.rating = rating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=songListId")
    public Integer songListId;
    public UserApiGetRatedSongsQueryParams withSongListId(Integer songListId) {
        this.songListId = songListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public UserApiGetRatedSongsSortEnum sort;
    public UserApiGetRatedSongsQueryParams withSort(UserApiGetRatedSongsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetRatedSongsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public UserApiGetRatedSongsQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String tagName;
    public UserApiGetRatedSongsQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}