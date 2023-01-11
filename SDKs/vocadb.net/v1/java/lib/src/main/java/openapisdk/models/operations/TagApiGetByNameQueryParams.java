package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetByNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public TagApiGetByNameFieldsEnum fields;
    public TagApiGetByNameQueryParams withFields(TagApiGetByNameFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public TagApiGetByNameLangEnum lang;
    public TagApiGetByNameQueryParams withLang(TagApiGetByNameLangEnum lang) {
        this.lang = lang;
        return this;
    }
}