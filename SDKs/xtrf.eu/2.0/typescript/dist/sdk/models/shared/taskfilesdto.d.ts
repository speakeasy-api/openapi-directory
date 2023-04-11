import { SpeakeasyBase } from "../../../internal/utils";
import { FileDTO } from "./filedto";
import { InputFilesDTO } from "./inputfilesdto";
import { JobDto1 } from "./jobdto1";
/**
 * Success
 */
export declare class TaskFilesDTO extends SpeakeasyBase {
    bundles?: Record<string, FileDTO[]>;
    inputFiles?: InputFilesDTO;
    jobs?: JobDto1[];
    outputFiles?: FileDTO[];
}
