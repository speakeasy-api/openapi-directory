package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDefinitionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeRelated")
    public String includeRelated;
    public GetDefinitionsQueryParams withIncludeRelated(String includeRelated) {
        this.includeRelated = includeRelated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTags")
    public GetDefinitionsIncludeTagsEnum includeTags;
    public GetDefinitionsQueryParams withIncludeTags(GetDefinitionsIncludeTagsEnum includeTags) {
        this.includeTags = includeTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetDefinitionsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partOfSpeech")
    public GetDefinitionsPartOfSpeechEnum partOfSpeech;
    public GetDefinitionsQueryParams withPartOfSpeech(GetDefinitionsPartOfSpeechEnum partOfSpeech) {
        this.partOfSpeech = partOfSpeech;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sourceDictionaries")
    public String[] sourceDictionaries;
    public GetDefinitionsQueryParams withSourceDictionaries(String[] sourceDictionaries) {
        this.sourceDictionaries = sourceDictionaries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetDefinitionsUseCanonicalEnum useCanonical;
    public GetDefinitionsQueryParams withUseCanonical(GetDefinitionsUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}