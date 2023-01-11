package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetTopTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryName")
    public String categoryName;
    public TagApiGetTopTagsQueryParams withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryType")
    public TagApiGetTopTagsEntryTypeEnum entryType;
    public TagApiGetTopTagsQueryParams withEntryType(TagApiGetTopTagsEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public TagApiGetTopTagsLangEnum lang;
    public TagApiGetTopTagsQueryParams withLang(TagApiGetTopTagsLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public TagApiGetTopTagsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
}