import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class ImportResultDTO extends SpeakeasyBase {
    currentSystemVersion?: string;
    importedReportsNames?: string[];
    invalidReportsNames?: string[];
    targetSystemVersion?: string;
}
