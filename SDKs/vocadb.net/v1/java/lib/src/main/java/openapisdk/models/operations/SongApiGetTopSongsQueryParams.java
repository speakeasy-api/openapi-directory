package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetTopSongsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=durationHours")
    public Integer durationHours;
    public SongApiGetTopSongsQueryParams withDurationHours(Integer durationHours) {
        this.durationHours = durationHours;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public SongApiGetTopSongsFieldsEnum fields;
    public SongApiGetTopSongsQueryParams withFields(SongApiGetTopSongsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterBy")
    public SongApiGetTopSongsFilterByEnum filterBy;
    public SongApiGetTopSongsQueryParams withFilterBy(SongApiGetTopSongsFilterByEnum filterBy) {
        this.filterBy = filterBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languagePreference")
    public SongApiGetTopSongsLanguagePreferenceEnum languagePreference;
    public SongApiGetTopSongsQueryParams withLanguagePreference(SongApiGetTopSongsLanguagePreferenceEnum languagePreference) {
        this.languagePreference = languagePreference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public SongApiGetTopSongsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public SongApiGetTopSongsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vocalist")
    public SongApiGetTopSongsVocalistEnum vocalist;
    public SongApiGetTopSongsQueryParams withVocalist(SongApiGetTopSongsVocalistEnum vocalist) {
        this.vocalist = vocalist;
        return this;
    }
}