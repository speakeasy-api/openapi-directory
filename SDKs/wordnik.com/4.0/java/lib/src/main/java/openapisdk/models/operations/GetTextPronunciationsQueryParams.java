package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextPronunciationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetTextPronunciationsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceDictionary")
    public GetTextPronunciationsSourceDictionaryEnum sourceDictionary;
    public GetTextPronunciationsQueryParams withSourceDictionary(GetTextPronunciationsSourceDictionaryEnum sourceDictionary) {
        this.sourceDictionary = sourceDictionary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=typeFormat")
    public GetTextPronunciationsTypeFormatEnum typeFormat;
    public GetTextPronunciationsQueryParams withTypeFormat(GetTextPronunciationsTypeFormatEnum typeFormat) {
        this.typeFormat = typeFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetTextPronunciationsUseCanonicalEnum useCanonical;
    public GetTextPronunciationsQueryParams withUseCanonical(GetTextPronunciationsUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}