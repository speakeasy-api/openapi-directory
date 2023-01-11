package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetDerivedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetDerivedFieldsEnum fields;
    public SongApiGetDerivedQueryParams withFields(SongApiGetDerivedFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongApiGetDerivedLangEnum lang;
    public SongApiGetDerivedQueryParams withLang(SongApiGetDerivedLangEnum lang) {
        this.lang = lang;
        return this;
    }
}