package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReverseDictionaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludePartOfSpeech")
    public String excludePartOfSpeech;
    public ReverseDictionaryQueryParams withExcludePartOfSpeech(String excludePartOfSpeech) {
        this.excludePartOfSpeech = excludePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeSourceDictionaries")
    public ReverseDictionaryExcludeSourceDictionariesEnum excludeSourceDictionaries;
    public ReverseDictionaryQueryParams withExcludeSourceDictionaries(ReverseDictionaryExcludeSourceDictionariesEnum excludeSourceDictionaries) {
        this.excludeSourceDictionaries = excludeSourceDictionaries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expandTerms")
    public String expandTerms;
    public ReverseDictionaryQueryParams withExpandTerms(String expandTerms) {
        this.expandTerms = expandTerms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=findSenseForWord")
    public String findSenseForWord;
    public ReverseDictionaryQueryParams withFindSenseForWord(String findSenseForWord) {
        this.findSenseForWord = findSenseForWord;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePartOfSpeech")
    public String includePartOfSpeech;
    public ReverseDictionaryQueryParams withIncludePartOfSpeech(String includePartOfSpeech) {
        this.includePartOfSpeech = includePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeSourceDictionaries")
    public ReverseDictionaryIncludeSourceDictionariesEnum includeSourceDictionaries;
    public ReverseDictionaryQueryParams withIncludeSourceDictionaries(ReverseDictionaryIncludeSourceDictionariesEnum includeSourceDictionaries) {
        this.includeSourceDictionaries = includeSourceDictionaries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTags")
    public ReverseDictionaryIncludeTagsEnum includeTags;
    public ReverseDictionaryQueryParams withIncludeTags(ReverseDictionaryIncludeTagsEnum includeTags) {
        this.includeTags = includeTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public ReverseDictionaryQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxCorpusCount")
    public Integer maxCorpusCount;
    public ReverseDictionaryQueryParams withMaxCorpusCount(Integer maxCorpusCount) {
        this.maxCorpusCount = maxCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxLength")
    public Integer maxLength;
    public ReverseDictionaryQueryParams withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minCorpusCount")
    public Integer minCorpusCount;
    public ReverseDictionaryQueryParams withMinCorpusCount(Integer minCorpusCount) {
        this.minCorpusCount = minCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minLength")
    public Integer minLength;
    public ReverseDictionaryQueryParams withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public ReverseDictionaryQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public String skip;
    public ReverseDictionaryQueryParams withSkip(String skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public ReverseDictionarySortByEnum sortBy;
    public ReverseDictionaryQueryParams withSortBy(ReverseDictionarySortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public ReverseDictionarySortOrderEnum sortOrder;
    public ReverseDictionaryQueryParams withSortOrder(ReverseDictionarySortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}