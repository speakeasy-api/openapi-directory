package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRandomWordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludePartOfSpeech")
    public String excludePartOfSpeech;
    public GetRandomWordsQueryParams withExcludePartOfSpeech(String excludePartOfSpeech) {
        this.excludePartOfSpeech = excludePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hasDictionaryDef")
    public String hasDictionaryDef;
    public GetRandomWordsQueryParams withHasDictionaryDef(String hasDictionaryDef) {
        this.hasDictionaryDef = hasDictionaryDef;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePartOfSpeech")
    public String includePartOfSpeech;
    public GetRandomWordsQueryParams withIncludePartOfSpeech(String includePartOfSpeech) {
        this.includePartOfSpeech = includePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetRandomWordsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxCorpusCount")
    public Integer maxCorpusCount;
    public GetRandomWordsQueryParams withMaxCorpusCount(Integer maxCorpusCount) {
        this.maxCorpusCount = maxCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDictionaryCount")
    public Integer maxDictionaryCount;
    public GetRandomWordsQueryParams withMaxDictionaryCount(Integer maxDictionaryCount) {
        this.maxDictionaryCount = maxDictionaryCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxLength")
    public Integer maxLength;
    public GetRandomWordsQueryParams withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minCorpusCount")
    public Integer minCorpusCount;
    public GetRandomWordsQueryParams withMinCorpusCount(Integer minCorpusCount) {
        this.minCorpusCount = minCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDictionaryCount")
    public Integer minDictionaryCount;
    public GetRandomWordsQueryParams withMinDictionaryCount(Integer minDictionaryCount) {
        this.minDictionaryCount = minDictionaryCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minLength")
    public Integer minLength;
    public GetRandomWordsQueryParams withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetRandomWordsSortByEnum sortBy;
    public GetRandomWordsQueryParams withSortBy(GetRandomWordsSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public GetRandomWordsSortOrderEnum sortOrder;
    public GetRandomWordsQueryParams withSortOrder(GetRandomWordsSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}