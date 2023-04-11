import { SpeakeasyBase } from "../../../internal/utils";
import { FileDTO } from "./filedto";
export declare class InputFilesDTO extends SpeakeasyBase {
    logFiles?: FileDTO[];
    referenceFiles?: FileDTO[];
    terminology?: FileDTO[];
    tm?: FileDTO[];
    workFiles?: FileDTO[];
}
