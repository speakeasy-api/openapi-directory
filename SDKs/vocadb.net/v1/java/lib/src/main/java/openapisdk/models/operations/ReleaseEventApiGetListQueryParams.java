package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=afterDate")
    public OffsetDateTime afterDate;
    public ReleaseEventApiGetListQueryParams withAfterDate(OffsetDateTime afterDate) {
        this.afterDate = afterDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistId")
    public Integer[] artistId;
    public ReleaseEventApiGetListQueryParams withArtistId(Integer[] artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beforeDate")
    public OffsetDateTime beforeDate;
    public ReleaseEventApiGetListQueryParams withBeforeDate(OffsetDateTime beforeDate) {
        this.beforeDate = beforeDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public ReleaseEventApiGetListCategoryEnum category;
    public ReleaseEventApiGetListQueryParams withCategory(ReleaseEventApiGetListCategoryEnum category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public ReleaseEventApiGetListQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childVoicebanks")
    public Boolean childVoicebanks;
    public ReleaseEventApiGetListQueryParams withChildVoicebanks(Boolean childVoicebanks) {
        this.childVoicebanks = childVoicebanks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ReleaseEventApiGetListFieldsEnum fields;
    public ReleaseEventApiGetListQueryParams withFields(ReleaseEventApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public ReleaseEventApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeMembers")
    public Boolean includeMembers;
    public ReleaseEventApiGetListQueryParams withIncludeMembers(Boolean includeMembers) {
        this.includeMembers = includeMembers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ReleaseEventApiGetListLangEnum lang;
    public ReleaseEventApiGetListQueryParams withLang(ReleaseEventApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public ReleaseEventApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public ReleaseEventApiGetListNameMatchModeEnum nameMatchMode;
    public ReleaseEventApiGetListQueryParams withNameMatchMode(ReleaseEventApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public ReleaseEventApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seriesId")
    public Integer seriesId;
    public ReleaseEventApiGetListQueryParams withSeriesId(Integer seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ReleaseEventApiGetListSortEnum sort;
    public ReleaseEventApiGetListQueryParams withSort(ReleaseEventApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public ReleaseEventApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ReleaseEventApiGetListStatusEnum status;
    public ReleaseEventApiGetListQueryParams withStatus(ReleaseEventApiGetListStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public ReleaseEventApiGetListQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userCollectionId")
    public Integer userCollectionId;
    public ReleaseEventApiGetListQueryParams withUserCollectionId(Integer userCollectionId) {
        this.userCollectionId = userCollectionId;
        return this;
    }
}