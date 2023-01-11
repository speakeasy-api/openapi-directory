package openapisdk.models.operations;


public enum UserApiPostRefreshEntryEditEntryTypeEnum {
    UNDEFINED("Undefined"),
    ALBUM("Album"),
    ARTIST("Artist"),
    DISCUSSION_TOPIC("DiscussionTopic"),
    PV("PV"),
    RELEASE_EVENT("ReleaseEvent"),
    RELEASE_EVENT_SERIES("ReleaseEventSeries"),
    SONG("Song"),
    SONG_LIST("SongList"),
    TAG("Tag"),
    USER("User"),
    VENUE("Venue");

    public final String value;

    private UserApiPostRefreshEntryEditEntryTypeEnum(String value) {
        this.value = value;
    }
}
