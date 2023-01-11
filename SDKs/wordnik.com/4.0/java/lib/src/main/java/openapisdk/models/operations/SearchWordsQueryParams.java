package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchWordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowRegex")
    public String allowRegex;
    public SearchWordsQueryParams withAllowRegex(String allowRegex) {
        this.allowRegex = allowRegex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=caseSensitive")
    public String caseSensitive;
    public SearchWordsQueryParams withCaseSensitive(String caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludePartOfSpeech")
    public String excludePartOfSpeech;
    public SearchWordsQueryParams withExcludePartOfSpeech(String excludePartOfSpeech) {
        this.excludePartOfSpeech = excludePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePartOfSpeech")
    public String includePartOfSpeech;
    public SearchWordsQueryParams withIncludePartOfSpeech(String includePartOfSpeech) {
        this.includePartOfSpeech = includePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public SearchWordsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxCorpusCount")
    public Integer maxCorpusCount;
    public SearchWordsQueryParams withMaxCorpusCount(Integer maxCorpusCount) {
        this.maxCorpusCount = maxCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDictionaryCount")
    public Integer maxDictionaryCount;
    public SearchWordsQueryParams withMaxDictionaryCount(Integer maxDictionaryCount) {
        this.maxDictionaryCount = maxDictionaryCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxLength")
    public Integer maxLength;
    public SearchWordsQueryParams withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minCorpusCount")
    public Integer minCorpusCount;
    public SearchWordsQueryParams withMinCorpusCount(Integer minCorpusCount) {
        this.minCorpusCount = minCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDictionaryCount")
    public Integer minDictionaryCount;
    public SearchWordsQueryParams withMinDictionaryCount(Integer minDictionaryCount) {
        this.minDictionaryCount = minDictionaryCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minLength")
    public Integer minLength;
    public SearchWordsQueryParams withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public SearchWordsQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
}