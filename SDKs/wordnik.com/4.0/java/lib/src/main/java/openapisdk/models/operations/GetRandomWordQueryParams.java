package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRandomWordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludePartOfSpeech")
    public String excludePartOfSpeech;
    public GetRandomWordQueryParams withExcludePartOfSpeech(String excludePartOfSpeech) {
        this.excludePartOfSpeech = excludePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hasDictionaryDef")
    public String hasDictionaryDef;
    public GetRandomWordQueryParams withHasDictionaryDef(String hasDictionaryDef) {
        this.hasDictionaryDef = hasDictionaryDef;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePartOfSpeech")
    public String includePartOfSpeech;
    public GetRandomWordQueryParams withIncludePartOfSpeech(String includePartOfSpeech) {
        this.includePartOfSpeech = includePartOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxCorpusCount")
    public Integer maxCorpusCount;
    public GetRandomWordQueryParams withMaxCorpusCount(Integer maxCorpusCount) {
        this.maxCorpusCount = maxCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDictionaryCount")
    public Integer maxDictionaryCount;
    public GetRandomWordQueryParams withMaxDictionaryCount(Integer maxDictionaryCount) {
        this.maxDictionaryCount = maxDictionaryCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxLength")
    public Integer maxLength;
    public GetRandomWordQueryParams withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minCorpusCount")
    public Integer minCorpusCount;
    public GetRandomWordQueryParams withMinCorpusCount(Integer minCorpusCount) {
        this.minCorpusCount = minCorpusCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDictionaryCount")
    public Integer minDictionaryCount;
    public GetRandomWordQueryParams withMinDictionaryCount(Integer minDictionaryCount) {
        this.minDictionaryCount = minDictionaryCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minLength")
    public Integer minLength;
    public GetRandomWordQueryParams withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
}