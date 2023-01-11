package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetByPvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetByPvFieldsEnum fields;
    public SongApiGetByPvQueryParams withFields(SongApiGetByPvFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongApiGetByPvLangEnum lang;
    public SongApiGetByPvQueryParams withLang(SongApiGetByPvLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pvId")
    public String pvId;
    public SongApiGetByPvQueryParams withPvId(String pvId) {
        this.pvId = pvId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pvService")
    public SongApiGetByPvPvServiceEnum pvService;
    public SongApiGetByPvQueryParams withPvService(SongApiGetByPvPvServiceEnum pvService) {
        this.pvService = pvService;
        return this;
    }
}