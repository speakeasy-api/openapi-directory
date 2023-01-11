package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetChildTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public TagApiGetChildTagsFieldsEnum fields;
    public TagApiGetChildTagsQueryParams withFields(TagApiGetChildTagsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public TagApiGetChildTagsLangEnum lang;
    public TagApiGetChildTagsQueryParams withLang(TagApiGetChildTagsLangEnum lang) {
        this.lang = lang;
        return this;
    }
}