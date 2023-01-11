package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetByIdFieldsEnum fields;
    public SongApiGetByIdQueryParams withFields(SongApiGetByIdFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongApiGetByIdLangEnum lang;
    public SongApiGetByIdQueryParams withLang(SongApiGetByIdLangEnum lang) {
        this.lang = lang;
        return this;
    }
}