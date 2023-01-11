package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetAlbumCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advancedFilters")
    public Object[] advancedFilters;
    public UserApiGetAlbumCollectionQueryParams withAdvancedFilters(Object[] advancedFilters) {
        this.advancedFilters = advancedFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=albumTypes")
    public UserApiGetAlbumCollectionAlbumTypesEnum albumTypes;
    public UserApiGetAlbumCollectionQueryParams withAlbumTypes(UserApiGetAlbumCollectionAlbumTypesEnum albumTypes) {
        this.albumTypes = albumTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artistId")
    public Integer artistId;
    public UserApiGetAlbumCollectionQueryParams withArtistId(Integer artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetAlbumCollectionFieldsEnum fields;
    public UserApiGetAlbumCollectionQueryParams withFields(UserApiGetAlbumCollectionFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetAlbumCollectionQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public UserApiGetAlbumCollectionLangEnum lang;
    public UserApiGetAlbumCollectionQueryParams withLang(UserApiGetAlbumCollectionLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetAlbumCollectionQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public UserApiGetAlbumCollectionNameMatchModeEnum nameMatchMode;
    public UserApiGetAlbumCollectionQueryParams withNameMatchMode(UserApiGetAlbumCollectionNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=purchaseStatuses")
    public UserApiGetAlbumCollectionPurchaseStatusesEnum purchaseStatuses;
    public UserApiGetAlbumCollectionQueryParams withPurchaseStatuses(UserApiGetAlbumCollectionPurchaseStatusesEnum purchaseStatuses) {
        this.purchaseStatuses = purchaseStatuses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public UserApiGetAlbumCollectionQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=releaseEventId")
    public Integer releaseEventId;
    public UserApiGetAlbumCollectionQueryParams withReleaseEventId(Integer releaseEventId) {
        this.releaseEventId = releaseEventId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public UserApiGetAlbumCollectionSortEnum sort;
    public UserApiGetAlbumCollectionQueryParams withSort(UserApiGetAlbumCollectionSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetAlbumCollectionQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public UserApiGetAlbumCollectionQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer tagId;
    public UserApiGetAlbumCollectionQueryParams withTagId(Integer tagId) {
        this.tagId = tagId;
        return this;
    }
}