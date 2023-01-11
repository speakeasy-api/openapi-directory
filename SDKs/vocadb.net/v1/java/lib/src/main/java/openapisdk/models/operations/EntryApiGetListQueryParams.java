package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EntryApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public EntryApiGetListQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryTypes")
    public EntryApiGetListEntryTypesEnum entryTypes;
    public EntryApiGetListQueryParams withEntryTypes(EntryApiGetListEntryTypesEnum entryTypes) {
        this.entryTypes = entryTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public EntryApiGetListFieldsEnum fields;
    public EntryApiGetListQueryParams withFields(EntryApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public EntryApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public EntryApiGetListLangEnum lang;
    public EntryApiGetListQueryParams withLang(EntryApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public EntryApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public EntryApiGetListNameMatchModeEnum nameMatchMode;
    public EntryApiGetListQueryParams withNameMatchMode(EntryApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public EntryApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public EntryApiGetListSortEnum sort;
    public EntryApiGetListQueryParams withSort(EntryApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public EntryApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public EntryApiGetListStatusEnum status;
    public EntryApiGetListQueryParams withStatus(EntryApiGetListStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public EntryApiGetListQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String[] tagName;
    public EntryApiGetListQueryParams withTagName(String[] tagName) {
        this.tagName = tagName;
        return this;
    }
}