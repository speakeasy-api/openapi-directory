package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHyphenationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetHyphenationQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceDictionary")
    public GetHyphenationSourceDictionaryEnum sourceDictionary;
    public GetHyphenationQueryParams withSourceDictionary(GetHyphenationSourceDictionaryEnum sourceDictionary) {
        this.sourceDictionary = sourceDictionary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetHyphenationUseCanonicalEnum useCanonical;
    public GetHyphenationQueryParams withUseCanonical(GetHyphenationUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}