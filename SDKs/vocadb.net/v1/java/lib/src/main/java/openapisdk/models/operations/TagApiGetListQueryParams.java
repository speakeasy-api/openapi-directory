package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowChildren")
    public Boolean allowChildren;
    public TagApiGetListQueryParams withAllowChildren(Boolean allowChildren) {
        this.allowChildren = allowChildren;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryName")
    public String categoryName;
    public TagApiGetListQueryParams withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public TagApiGetListFieldsEnum fields;
    public TagApiGetListQueryParams withFields(TagApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public TagApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public TagApiGetListLangEnum lang;
    public TagApiGetListQueryParams withLang(TagApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public TagApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public TagApiGetListNameMatchModeEnum nameMatchMode;
    public TagApiGetListQueryParams withNameMatchMode(TagApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preferAccurateMatches")
    public Boolean preferAccurateMatches;
    public TagApiGetListQueryParams withPreferAccurateMatches(Boolean preferAccurateMatches) {
        this.preferAccurateMatches = preferAccurateMatches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public TagApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public TagApiGetListSortEnum sort;
    public TagApiGetListQueryParams withSort(TagApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public TagApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target")
    public TagApiGetListTargetEnum target;
    public TagApiGetListQueryParams withTarget(TagApiGetListTargetEnum target) {
        this.target = target;
        return this;
    }
}