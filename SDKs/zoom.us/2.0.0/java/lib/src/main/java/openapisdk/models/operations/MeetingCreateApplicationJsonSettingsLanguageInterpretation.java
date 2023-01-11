package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingCreateApplicationJsonSettingsLanguageInterpretation
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings. 
 * 
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
public class MeetingCreateApplicationJsonSettingsLanguageInterpretation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public MeetingCreateApplicationJsonSettingsLanguageInterpretation withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreters")
    public MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters[] interpreters;
    public MeetingCreateApplicationJsonSettingsLanguageInterpretation withInterpreters(MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters[] interpreters) {
        this.interpreters = interpreters;
        return this;
    }
}