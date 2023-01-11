package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public TagApiGetByIdFieldsEnum fields;
    public TagApiGetByIdQueryParams withFields(TagApiGetByIdFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public TagApiGetByIdLangEnum lang;
    public TagApiGetByIdQueryParams withLang(TagApiGetByIdLangEnum lang) {
        this.lang = lang;
        return this;
    }
}