package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advancedFilters")
    public Object[] advancedFilters;
    public AlbumApiGetListQueryParams withAdvancedFilters(Object[] advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistId")
    public Integer[] artistId;
    public AlbumApiGetListQueryParams withArtistId(Integer[] artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistParticipationStatus")
    public AlbumApiGetListArtistParticipationStatusEnum artistParticipationStatus;
    public AlbumApiGetListQueryParams withArtistParticipationStatus(AlbumApiGetListArtistParticipationStatusEnum artistParticipationStatus) {
        this.artistParticipationStatus = artistParticipationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=barcode")
    public String barcode;
    public AlbumApiGetListQueryParams withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public AlbumApiGetListQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childVoicebanks")
    public Boolean childVoicebanks;
    public AlbumApiGetListQueryParams withChildVoicebanks(Boolean childVoicebanks) {
        this.childVoicebanks = childVoicebanks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleted")
    public Boolean deleted;
    public AlbumApiGetListQueryParams withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=discTypes")
    public AlbumApiGetListDiscTypesEnum discTypes;
    public AlbumApiGetListQueryParams withDiscTypes(AlbumApiGetListDiscTypesEnum discTypes) {
        this.discTypes = discTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public AlbumApiGetListFieldsEnum fields;
    public AlbumApiGetListQueryParams withFields(AlbumApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public AlbumApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeMembers")
    public Boolean includeMembers;
    public AlbumApiGetListQueryParams withIncludeMembers(Boolean includeMembers) {
        this.includeMembers = includeMembers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public AlbumApiGetListLangEnum lang;
    public AlbumApiGetListQueryParams withLang(AlbumApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public AlbumApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public AlbumApiGetListNameMatchModeEnum nameMatchMode;
    public AlbumApiGetListQueryParams withNameMatchMode(AlbumApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preferAccurateMatches")
    public Boolean preferAccurateMatches;
    public AlbumApiGetListQueryParams withPreferAccurateMatches(Boolean preferAccurateMatches) {
        this.preferAccurateMatches = preferAccurateMatches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public AlbumApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=releaseDateAfter")
    public OffsetDateTime releaseDateAfter;
    public AlbumApiGetListQueryParams withReleaseDateAfter(OffsetDateTime releaseDateAfter) {
        this.releaseDateAfter = releaseDateAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=releaseDateBefore")
    public OffsetDateTime releaseDateBefore;
    public AlbumApiGetListQueryParams withReleaseDateBefore(OffsetDateTime releaseDateBefore) {
        this.releaseDateBefore = releaseDateBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public AlbumApiGetListSortEnum sort;
    public AlbumApiGetListQueryParams withSort(AlbumApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public AlbumApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public AlbumApiGetListStatusEnum status;
    public AlbumApiGetListQueryParams withStatus(AlbumApiGetListStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public AlbumApiGetListQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String[] tagName;
    public AlbumApiGetListQueryParams withTagName(String[] tagName) {
        this.tagName = tagName;
        return this;
    }
}