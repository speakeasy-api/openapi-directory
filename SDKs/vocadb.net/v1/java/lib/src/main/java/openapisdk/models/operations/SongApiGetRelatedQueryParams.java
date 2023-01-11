package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetRelatedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetRelatedFieldsEnum fields;
    public SongApiGetRelatedQueryParams withFields(SongApiGetRelatedFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongApiGetRelatedLangEnum lang;
    public SongApiGetRelatedQueryParams withLang(SongApiGetRelatedLangEnum lang) {
        this.lang = lang;
        return this;
    }
}