package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetAlbumsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ReleaseEventApiGetAlbumsFieldsEnum fields;
    public ReleaseEventApiGetAlbumsQueryParams withFields(ReleaseEventApiGetAlbumsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ReleaseEventApiGetAlbumsLangEnum lang;
    public ReleaseEventApiGetAlbumsQueryParams withLang(ReleaseEventApiGetAlbumsLangEnum lang) {
        this.lang = lang;
        return this;
    }
}