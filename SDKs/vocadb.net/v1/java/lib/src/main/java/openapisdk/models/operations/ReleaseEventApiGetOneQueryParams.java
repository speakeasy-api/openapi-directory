package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ReleaseEventApiGetOneFieldsEnum fields;
    public ReleaseEventApiGetOneQueryParams withFields(ReleaseEventApiGetOneFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ReleaseEventApiGetOneLangEnum lang;
    public ReleaseEventApiGetOneQueryParams withLang(ReleaseEventApiGetOneLangEnum lang) {
        this.lang = lang;
        return this;
    }
}