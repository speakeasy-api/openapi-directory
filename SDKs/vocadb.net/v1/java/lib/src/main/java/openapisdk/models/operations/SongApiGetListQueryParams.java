package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advancedFilters")
    public Object[] advancedFilters;
    public SongApiGetListQueryParams withAdvancedFilters(Object[] advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=afterDate")
    public OffsetDateTime afterDate;
    public SongApiGetListQueryParams withAfterDate(OffsetDateTime afterDate) {
        this.afterDate = afterDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistId")
    public Integer[] artistId;
    public SongApiGetListQueryParams withArtistId(Integer[] artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistParticipationStatus")
    public SongApiGetListArtistParticipationStatusEnum artistParticipationStatus;
    public SongApiGetListQueryParams withArtistParticipationStatus(SongApiGetListArtistParticipationStatusEnum artistParticipationStatus) {
        this.artistParticipationStatus = artistParticipationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beforeDate")
    public OffsetDateTime beforeDate;
    public SongApiGetListQueryParams withBeforeDate(OffsetDateTime beforeDate) {
        this.beforeDate = beforeDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public SongApiGetListQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childVoicebanks")
    public Boolean childVoicebanks;
    public SongApiGetListQueryParams withChildVoicebanks(Boolean childVoicebanks) {
        this.childVoicebanks = childVoicebanks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetListFieldsEnum fields;
    public SongApiGetListQueryParams withFields(SongApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public SongApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeMembers")
    public Boolean includeMembers;
    public SongApiGetListQueryParams withIncludeMembers(Boolean includeMembers) {
        this.includeMembers = includeMembers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongApiGetListLangEnum lang;
    public SongApiGetListQueryParams withLang(SongApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public SongApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minScore")
    public Integer minScore;
    public SongApiGetListQueryParams withMinScore(Integer minScore) {
        this.minScore = minScore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public SongApiGetListNameMatchModeEnum nameMatchMode;
    public SongApiGetListQueryParams withNameMatchMode(SongApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyWithPvs")
    public Boolean onlyWithPvs;
    public SongApiGetListQueryParams withOnlyWithPvs(Boolean onlyWithPvs) {
        this.onlyWithPvs = onlyWithPvs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parentSongId")
    public Integer parentSongId;
    public SongApiGetListQueryParams withParentSongId(Integer parentSongId) {
        this.parentSongId = parentSongId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preferAccurateMatches")
    public Boolean preferAccurateMatches;
    public SongApiGetListQueryParams withPreferAccurateMatches(Boolean preferAccurateMatches) {
        this.preferAccurateMatches = preferAccurateMatches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pvServices")
    public SongApiGetListPvServicesEnum pvServices;
    public SongApiGetListQueryParams withPvServices(SongApiGetListPvServicesEnum pvServices) {
        this.pvServices = pvServices;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SongApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=releaseEventId")
    public Integer releaseEventId;
    public SongApiGetListQueryParams withReleaseEventId(Integer releaseEventId) {
        this.releaseEventId = releaseEventId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Integer since;
    public SongApiGetListQueryParams withSince(Integer since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=songTypes")
    public String songTypes;
    public SongApiGetListQueryParams withSongTypes(String songTypes) {
        this.songTypes = songTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SongApiGetListSortEnum sort;
    public SongApiGetListQueryParams withSort(SongApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public SongApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public SongApiGetListStatusEnum status;
    public SongApiGetListQueryParams withStatus(SongApiGetListStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public SongApiGetListQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String[] tagName;
    public SongApiGetListQueryParams withTagName(String[] tagName) {
        this.tagName = tagName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unifyTypesAndTags")
    public Boolean unifyTypesAndTags;
    public SongApiGetListQueryParams withUnifyTypesAndTags(Boolean unifyTypesAndTags) {
        this.unifyTypesAndTags = unifyTypesAndTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userCollectionId")
    public Integer userCollectionId;
    public SongApiGetListQueryParams withUserCollectionId(Integer userCollectionId) {
        this.userCollectionId = userCollectionId;
        return this;
    }
}