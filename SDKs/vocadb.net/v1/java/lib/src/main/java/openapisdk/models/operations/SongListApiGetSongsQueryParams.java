package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiGetSongsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advancedFilters")
    public Object[] advancedFilters;
    public SongListApiGetSongsQueryParams withAdvancedFilters(Object[] advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistId")
    public Integer[] artistId;
    public SongListApiGetSongsQueryParams withArtistId(Integer[] artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childVoicebanks")
    public Boolean childVoicebanks;
    public SongListApiGetSongsQueryParams withChildVoicebanks(Boolean childVoicebanks) {
        this.childVoicebanks = childVoicebanks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongListApiGetSongsFieldsEnum fields;
    public SongListApiGetSongsQueryParams withFields(SongListApiGetSongsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public SongListApiGetSongsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongListApiGetSongsLangEnum lang;
    public SongListApiGetSongsQueryParams withLang(SongListApiGetSongsLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public SongListApiGetSongsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public SongListApiGetSongsNameMatchModeEnum nameMatchMode;
    public SongListApiGetSongsQueryParams withNameMatchMode(SongListApiGetSongsNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pvServices")
    public SongListApiGetSongsPvServicesEnum pvServices;
    public SongListApiGetSongsQueryParams withPvServices(SongListApiGetSongsPvServicesEnum pvServices) {
        this.pvServices = pvServices;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SongListApiGetSongsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=songTypes")
    public String songTypes;
    public SongListApiGetSongsQueryParams withSongTypes(String songTypes) {
        this.songTypes = songTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SongListApiGetSongsSortEnum sort;
    public SongListApiGetSongsQueryParams withSort(SongListApiGetSongsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public SongListApiGetSongsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public SongListApiGetSongsQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
}