package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetHighlightedSongsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetHighlightedSongsFieldsEnum fields;
    public SongApiGetHighlightedSongsQueryParams withFields(SongApiGetHighlightedSongsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languagePreference")
    public SongApiGetHighlightedSongsLanguagePreferenceEnum languagePreference;
    public SongApiGetHighlightedSongsQueryParams withLanguagePreference(SongApiGetHighlightedSongsLanguagePreferenceEnum languagePreference) {
        this.languagePreference = languagePreference;
        return this;
    }
}