package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UserForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UserForApiContract withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public UserForApiContractGroupIdEnum groupId;
    public UserForApiContract withGroupId(UserForApiContractGroupIdEnum groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UserForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("knownLanguages")
    public UserKnownLanguageContract[] knownLanguages;
    public UserForApiContract withKnownLanguages(UserKnownLanguageContract[] knownLanguages) {
        this.knownLanguages = knownLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public UserForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("memberSince")
    public OffsetDateTime memberSince;
    public UserForApiContract withMemberSince(OffsetDateTime memberSince) {
        this.memberSince = memberSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldUsernames")
    public OldUsernameContract[] oldUsernames;
    public UserForApiContract withOldUsernames(OldUsernameContract[] oldUsernames) {
        this.oldUsernames = oldUsernames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedArtist")
    public Boolean verifiedArtist;
    public UserForApiContract withVerifiedArtist(Boolean verifiedArtist) {
        this.verifiedArtist = verifiedArtist;
        return this;
    }
}