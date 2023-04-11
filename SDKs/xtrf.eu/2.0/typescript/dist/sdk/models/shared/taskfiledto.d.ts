import { SpeakeasyBase } from "../../../internal/utils";
/**
 * file category
 */
export declare enum TaskFileDTOCategoryEnum {
    Workfile = "WORKFILE",
    Tm = "TM",
    Dictionary = "DICTIONARY",
    Ref = "REF",
    LogFile = "LOG_FILE"
}
/**
 * describes files; remember that either url, content or token should be filled
 */
export declare class TaskFileDTO extends SpeakeasyBase {
    /**
     * file category
     */
    category?: TaskFileDTOCategoryEnum;
    content?: string;
    name?: string;
    token?: string;
    url?: string;
}
